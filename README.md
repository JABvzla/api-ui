# API Generator
_(Proof of concept)_

Make api dynamically just creating models.

## How this work?

The project run on port `1337`.

#### Creating models

Post schemas on `http://localhost:1337/models`.

Examples creating User and Post models:

`POST http://localhost:1337/models`
``` JSON
{
    "name": "User",
    "attributes": {
        "attributes": {
            "name": {
                "type": "string",
                "required": true
            },
            "posts": {
                "collection": "Post",
                "via": "author"
            }
        }
    }
}
```


`POST http://localhost:1337/models`
``` JSON
{
    "name": "Post",
    "attributes": {
        "attributes": {
            "title": {
                "type": "string",
                "required": true
            },
            "author": {
                "model": "User"
            }
        }
    }
}
```

#### Its all! your api work with routes `/user` and `post`.