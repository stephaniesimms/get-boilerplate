import requests

print('REQUEST ME')

URL = 'https://icanhazdadjoke.com/'


def query():
    header = {'Accept': 'text/plain'}
    resp = requests.get(URL, headers=header)
    print(resp.text)


def query2():
    header = {'Accept': 'application/json'}
    resp = requests.get(URL, headers=header)
    print(resp.json())


if __name__ == '__main__':
    print('query 1\n')
    query()
    print('\n\nquery 2\n')
    query2()
