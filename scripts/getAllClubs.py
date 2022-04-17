''' This python script gets all clubs currently registered on LionClubs.

The script fetches all club profiles and club accounts from the LionClubs api
and creates/updates the following files:

    clubAccounts.json: list of all club accounts
    clubProfiles.json: list of all club profiles
    current_clubs.json: list of all club accounts with their corresponding club profile information
    current_clubs.csv: csv file with the following attributes:
        clubProfileId, clubName, verificationStatus, accountEmail, lastUpdateDate, creationDate

    The csv is used to update the clubs tracker sheet shared with Product Design
'''

import json
import requests
import csv
  
# fetch all club accounts from database
clubsAccountsURL = "https://lionclubs.info/api/clubAccounts/getAll"
r = requests.get(url = clubsAccountsURL)
  
club_accounts_raw = r.json()

with open("clubAccounts.json", "w") as outfile:
        json.dump(club_accounts_raw, outfile)


# fetch all club profiles from database
clubProfilesURL = "https://lionclubs.info/api/clubProfiles/"
r = requests.get(url = clubProfilesURL)
  
club_profiles = r.json()

with open("clubProfiles.json", "w") as outfile:
        json.dump(club_profiles, outfile)


# create JSON with current clubs data
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

for club in club_accounts:
    del club["__v"]
    del club["deniedReason"]
    del club["authorityLevel"]
    del club["firebaseId"]
    del club["_id"]

with open("current_clubs.json", "w") as outfile:
        json.dump(club_accounts, outfile)


# make csv file to upload to google sheets
data_file = open('current_clubs.csv', 'w', newline='')
csv_writer = csv.writer(data_file)

header = ["clubProfileId",
            "clubName",
            "verificationStatus",
            "accountEmail",
            "lastUpdateDate",
            "creationDate"]

csv_writer.writerow(header)

for club in club_accounts:
    values = []
    for category in header:
        if category in club:
            values.append(club[category])
        else:
            values.append("")
    csv_writer.writerow(values)
 
data_file.close()