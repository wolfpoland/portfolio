rm -rf node_modules
docker run -e E2E=true --rm --network host -v $(pwd):/work/ -w /work/ -it mcr.microsoft.com/playwright:v1.40.0-jammy /bin/bash
