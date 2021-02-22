# An api for shortening long URIs

This API is hosted on [Glitch](https://panoramic-clean-mahogany.glitch.me)

### Documentation

#### Shorterning URI with personalized new URI

To do this, send a POST request to the API via the "/slice" route. An example request is :

```
 {
 	"oldUri" : "https://github.com/friilancer",
 	 "newUriCode": "github",
 }
```

This will return a JSON object that looks like : 

```
{
    "timesVisited": 0,
    "_id": "6033b4930561620e8e0e2a0b",
    "oldUri": "https://github.com/friilancer",
    "newUriCode": "github",
    "__v": 0
}
```
Sending a GET request or going to the link ```https://panoramic-clean-mahogany.glitch.me/github``` should re-route you to ```https://github.com/friilancer```

#### Shorterning URI without personalized new URI

To do this, send a POST request to the API via the "/slice" route. An example request is :

```
 {
 	"oldUri" : "https://github.com/friilancer",
 }
```

This will return a JSON object that looks like : 

```
{
    "timesVisited": 0,
    "_id": "6033b4930561620e8e0e2a0b",
    "oldUri": "https://github.com/friilancer",
    "newUriCode": "cluiqibx",
    "__v": 0
}
```

The API auto generates a newUri for you. Sending a GET request or going to the link ```https://panoramic-clean-mahogany.glitch.me/cluiqibx``` should re-route you to ```https://github.com/friilancer```

#### Error messages

Trying to create a shortened customized URI with a text that has already been used will return an error that looks like : 

```
{
    "msg": "cluiqibz unavailable..Please modify name"
}

```
 