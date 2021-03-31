import requests

url = "mysql://admin:BraveAdmin!@brave-together-hackathon.cjndulutprva.us-east-1.rds.amazonaws.com/main/user"
myobj = {"first name": "", "last name": "", "email": "", "password": "", "cell-phone": ""}

x = requests.post(url, data=myobj)
print(x.text)
