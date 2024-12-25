# URL Ring

Are you a Geocities nostalgic?

Remember when we used to cross-links our personal pages? Mine was in Capecanaveral 9942, btw!

What happens when you put a ring of links on your desk?

![alt text](image.png)

Prod app: https://url-ring-907790253572.europe-west1.run.app/


## How to use

```
docker run -d -p 8080:8080 -v $(pwd)/ring-data.json:/app/ring-data.json -v $(pwd)/index.html:/app/index.html -v $(pwd)/iframe.html:/app/iframe.html -v $(pwd)/style.css:/app/style.css -v $(pwd)/script.js:/app/script.js palladius/2025-ring
```

No grzie cursor, intendevo:

```
<iframe src="http://your-domain.com/iframe"></iframe>
```
