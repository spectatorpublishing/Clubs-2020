// const dev_api_account = 'http://localhost:8080/api/clubAccounts'
// const dev_api_profile = 'http://localhost:8080/api/clubProfiles'
const dev_api_account = '/api/clubAccounts'
const dev_api_profile = '/api/clubProfiles'

/* encodes an object into application/x-www-form-urlencoded form */
function encodeFormData(details) {
    var formBody = [];
    for (var property in details) {
        var encodedKey = encodeURIComponent(property);
        var encodedValue = encodeURIComponent(details[property]);
        formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");

    return formBody;
}

function compareDate(a, b) {
    let date_1 = new Date(a), date_2 = new Date(b);
    return date_1.valueOf() - date_2.valueOf();
}

function compareName(a, b) {
    return a < b ? -1 : 1;
}

/* extracts info from a clubAccount object to use for rendering club applciation */
function extractAccountInfo(entry) {
    return {
        accountId: entry._id,
        id: entry.clubProfileId,
        clubName: '',
        email: entry.accountEmail,
        dateApplied: new Date(entry.creationDate).toLocaleDateString(),
        dateApproved: new Date(entry.lastUpdateDate).toLocaleDateString(),
        dateRemoved: new Date(entry.lastUpdateDate).toLocaleDateString(),
        lastUpdate: new Date(entry.lastUpdateDate).toLocaleDateString(),
        reason: entry.deniedReason,
        moreInfo: {
            description: '',
            highlights: '',
        }
    }
}

/* add clubProfile info to @base */
function addProfileInfo(base, profile) {
    base.clubName = profile.name;
    base.moreInfo.description = profile.longDescription;

    let highlights = [];

    if (profile && profile.highlights){
        profile.highlights.forEach((hl, idx) => highlights[idx] = `${idx + 1}. ${hl}`);
    }
    base.moreInfo.highlights = highlights.join('\n');
}

function fetchAccounts(type) {
    /* fetch all accounts */
    
    // return fetch(`http://localhost:8080/api/clubAccounts/getAll`)
    return fetch(`${dev_api_account}/getAll`)
        .then(res => res.json())
        .then(res => {
            /*
             * filters out all account of type that doesn't have a profile,
             * then extract useful info and rename the attributes
             */
            let list = res[type].filter(account => account.clubProfileId);

            /*
             * sort applications:
             * pending requests: by date applied
             * else: alphabetical order by club name
             */
            if (type === 'pending')
                list.sort(compareDate);
            else
                list.sort(compareName);

            return list.map(extractAccountInfo);
        })
}

function fetchSingleProfile(id) {
    return fetch(`${dev_api_profile}/${id}`)
        .then(res => res.json())
}

function fetchProfiles(id_list) {
    return Promise.all(id_list.map((id) => fetchSingleProfile(id)))
}

export function joinAccountProfile(type) {
    var list = [];

    return fetchAccounts(type)
        .then(res => list = res)
        .then(res => {
            let id_list = [];
            res.forEach((account) => id_list.push(account.id));

            return fetchProfiles(id_list)
        })
        .then(profile_list => {
            profile_list.forEach((prof, idx) => {
                addProfileInfo(list[idx], prof)
            });
            return list;
        })
}

export function setAccountStatus(id, status, reason) {
    var payload = { 'status': status }

    if (status === 'denied')
        payload.deniedReason = reason;

    return fetch(`${dev_api_account}/update/${id}`, {
        'method': 'PUT',
        'headers': {
            'content-type': 'application/x-www-form-urlencoded'
        },
        'body': encodeFormData(payload)
    })
        .then(res => res.json())
}