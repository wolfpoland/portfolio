rm -rf node_modules
docker run --rm --network host -v $(pwd):/work/ -w /work/ -it mcr.microsoft.com/playwright:v1.39.0-jammy /bin/bash

```