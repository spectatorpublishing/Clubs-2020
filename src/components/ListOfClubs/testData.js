const pending = [
    {
        "clubName": "ADI",
        "email": "adi@columbia.edu",
        "dateApplied": "11/20/20",
        "moreInfo": {
                "description": "Founded in 1972, Multiracial Students Alliance (MSA) provides a space for students who identify as multiracial to gather, socialize, and discuss current personal and political issues that pertain to people with multiple racial and/or ethnic backgrounnds.",
                "highlights": "1. alsdkfjasdlfkj 2. asdl;fkasdflkjsfd 3. alkdasdlfkjasdflkj"
            }
        
    },
    {
        "clubName": "Multiracial Students Alliance",
        "email": "msa@columbia.edu",
        "dateApplied": "11/20/20",
        "moreInfo": {
            "description": "Founded in 1972, Multiracial Students Alliance (MSA) provides a space for students who identify as multiracial to gather, socialize, and discuss current personal and political issues that pertain to people with multiple racial and/or ethnic backgrounnds.",
            "highlights": "1. alsdkfjasdlfkj 2. asdl;fkasdflkjsfd 3. alkdasdlfkjasdflkj"
        }
    }, 
    {
        "clubName": "Multiracial Students Alliance",
        "email": "msa@columbia.edu",
        "dateApplied": "11/20/20",
        "moreInfo": {
            "description": "Founded in 1972, Multiracial Students Alliance (MSA) provides a space for students who identify as multiracial to gather, socialize, and discuss current personal and political issues that pertain to people with multiple racial and/or ethnic backgrounnds.",
            "highlights": "1. alsdkfjasdlfkj 2. asdl;fkasdflkjsfd 3. alkdasdlfkjasdflkj"
        }
    }   
];

const approved = [
    {
        "clubName": "ADI",
        "email": "adi@columbia.edu",
        "dateApproved": "11/20/20",
        "lastUpdate": "11/20/20",
        "moreInfo": {
                "description": "Founded in 1972, Multiracial Students Alliance (MSA) provides a space for students who identify as multiracial to gather, socialize, and discuss current personal and political issues that pertain to people with multiple racial and/or ethnic backgrounnds.",
                "highlights": "1. alsdkfjasdlfkj 2. asdl;fkasdflkjsfd 3. alkdasdlfkjasdflkj"
            }
        
    },
    {
        "clubName": "Multiracial Students Alliance",
        "email": "msa@columbia.edu",
        "dateApproved": "11/20/20",
        "lastUpdate": "11/20/20",
        "moreInfo": {
            "description": "Founded in 1972, Multiracial Students Alliance (MSA) provides a space for students who identify as multiracial to gather, socialize, and discuss current personal and political issues that pertain to people with multiple racial and/or ethnic backgrounnds.",
            "highlights": "1. alsdkfjasdlfkj 2. asdl;fkasdflkjsfd 3. alkdasdlfkjasdflkj"
        }
    }, 
    {
        "clubName": "Multiracial Students Alliance",
        "email": "msa@columbia.edu",
        "dateApproved": "11/20/20",
        "lastUpdate": "11/20/20",
        "moreInfo": {
            "description": "Founded in 1972, Multiracial Students Alliance (MSA) provides a space for students who identify as multiracial to gather, socialize, and discuss current personal and political issues that pertain to people with multiple racial and/or ethnic backgrounnds.",
            "highlights": "1. alsdkfjasdlfkj 2. asdl;fkasdflkjsfd 3. alkdasdlfkjasdflkj"
        }
    }   
];

const trash= [
    {
        "clubName": "ADI",
        "email": "adi@columbia.edu",
        "dateRemoved": "11/20/20",
        "reason": "invalid email",
        "moreInfo": {
                "description": "Founded in 1972, Multiracial Students Alliance (MSA) provides a space for students who identify as multiracial to gather, socialize, and discuss current personal and political issues that pertain to people with multiple racial and/or ethnic backgrounnds.",
                "highlights": "1. alsdkfjasdlfkj 2. asdl;fkasdflkjsfd 3. alkdasdlfkjasdflkj"
            }
        
    },
    {
        "clubName": "Multiracial Students Alliance",
        "email": "msa@columbia.edu",
        "dateRemoved": "11/20/20",
        "reason": "Offensive words in description",
        "moreInfo": {
            "description": "Founded in 1972, Multiracial Students Alliance (MSA) provides a space for students who identify as multiracial to gather, socialize, and discuss current personal and political issues that pertain to people with multiple racial and/or ethnic backgrounnds.",
            "highlights": "1. alsdkfjasdlfkj 2. asdl;fkasdflkjsfd 3. alkdasdlfkjasdflkj"
        }
    }, 
    {
        "clubName": "Multiracial Students Alliance",
        "email": "msa@columbia.edu",
        "dateRemoved": "11/20/20",
        "reason": "invalid email",
        "moreInfo": {
            "description": "Founded in 1972, Multiracial Students Alliance (MSA) provides a space for students who identify as multiracial to gather, socialize, and discuss current personal and political issues that pertain to people with multiple racial and/or ethnic backgrounnds.",
            "highlights": "1. alsdkfjasdlfkj 2. asdl;fkasdflkjsfd 3. alkdasdlfkjasdflkj"
        }
    }   
];


/* placeholder values for testing purposes */
export const column2attrName = {
    'Club name:': 'clubName',
    'Email:': 'email',
    'Date applied:': 'dateApplied',
    'Date approved:': 'dateApproved',
    'Date removed:': 'dateRemoved',
    'Last update:': 'lastUpdate',
    'Reason for Removal:': 'reason'
}

export default function fetch_clubs(page) {
    switch(page) {
        case 'pending':
            return pending
        case 'approved':
            return approved
        case 'trash':
            return trash
        default:
            return []
    }
}