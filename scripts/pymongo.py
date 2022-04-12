import json

f = open('clubProfiles.json')
club_profiles = json.load(f)

f = open('clubAccounts.json')
club_accounts_raw = json.load(f)

club_accounts = list()

for club in club_accounts_raw["accepted"]:
    club_accounts.append(club)

for club in club_accounts_raw["pending"]:
    club_accounts.append(club)

for club in club_accounts_raw["incomplete"]:
    club_accounts.append(club)

for account in club_accounts:
    for profile in club_profiles:
        if profile['_id'] == account["clubProfileId"]:
            account["clubName"] = profile["name"]
            print(account["clubName"])

with open("current_clubs.json", "w") as outfile:
        json.dump(club_accounts, outfile)

