# 1. Use the official Cypress image.
# It has Node.js and Chrome pre-installed!
FROM cypress/included:13.6.4

# 2. Set the working directory inside the container
WORKDIR /e2e

# 3. Copy package files first (for caching efficiency)
COPY package.json package-lock.json ./

# 4. Install dependencies
# We use 'ci' (clean install) which is faster and safer for CI/CD
RUN npm ci

# 5. Copy the rest of your project files
COPY . .

# 6. (Optional) default command to run when container starts
CMD ["npm", "run", "test:standard"]