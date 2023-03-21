# OpenAI API

## Getting Started

Create `.env`

Add OpenAI API Key: https://platform.openai.com/account/api-keys

```bash
OPENAI_API_KEY=sk-keyhere
X_API_KEY=xApiKey
```

First, run the development server:

```bash
npm run dev
```

## Endpoints

### http://localhost:3000/api/chat

Given a chat conversation, the model will return a chat completion response.

```bash
curl --location 'http://localhost:3000/api/chat' \
--header 'x-api-key: xApiKey' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'message=Tell me about puerto rico'
```

### http://localhost:3000/api/completion

Given a prompt, the model will return one or more predicted completions, and can also return the probabilities of alternative tokens at each position.

```bash
curl --location 'http://localhost:3000/api/completion' \
--header 'x-api-key: xApiKey' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'message=say this is a test'
```

### http://localhost:3000/api/image/createImage

Creates an image given a prompt.

```bash
curl --location 'http://localhost:3000/api/createImage' \
--header 'x-api-key: xApiKey' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'message=image of cat in space'
```

### http://localhost:3000/api/edit

Given a prompt and an instruction, the model will return an edited version of the prompt.

```bash
curl --location 'http://localhost:3000/api/edit' \
--header 'x-api-key: xApiKey' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'message=What day of the wek is it?'
```

### http://localhost:3000/api/moderation

Given a input text, outputs if the model classifies it as violating OpenAI's content policy.

```bash
curl --location 'http://localhost:3000/api/moderation' \
--header 'x-api-key: xApiKey' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'message=I want to kill them.'
```