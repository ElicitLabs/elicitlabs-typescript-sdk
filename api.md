# Modal

Types:

- <code><a href="./src/resources/modal.ts">ModalLearnResponse</a></code>
- <code><a href="./src/resources/modal.ts">ModalQueryResponse</a></code>

Methods:

- <code title="post /v1/modal/learn">client.modal.<a href="./src/resources/modal.ts">learn</a>({ ...params }) -> ModalLearnResponse</code>
- <code title="post /v1/modal/query">client.modal.<a href="./src/resources/modal.ts">query</a>({ ...params }) -> ModalQueryResponse</code>

# Users

Types:

- <code><a href="./src/resources/users.ts">UserCreateOrGetResponse</a></code>

Methods:

- <code title="post /v1/users">client.users.<a href="./src/resources/users.ts">createOrGet</a>({ ...params }) -> UserCreateOrGetResponse</code>

# Data

Types:

- <code><a href="./src/resources/data/data.ts">DataIngestResponse</a></code>

Methods:

- <code title="post /v1/data/ingest">client.data.<a href="./src/resources/data/data.ts">ingest</a>({ ...params }) -> DataIngestResponse</code>

## Job

Types:

- <code><a href="./src/resources/data/job.ts">JobRetrieveStatusResponse</a></code>

Methods:

- <code title="post /v1/data/job/status">client.data.job.<a href="./src/resources/data/job.ts">retrieveStatus</a>({ ...params }) -> JobRetrieveStatusResponse</code>

# Health

Types:

- <code><a href="./src/resources/health.ts">HealthCheckResponse</a></code>

Methods:

- <code title="get /health">client.health.<a href="./src/resources/health.ts">check</a>() -> unknown</code>

# Auth

## Keys

Types:

- <code><a href="./src/resources/auth/keys.ts">KeyCreateResponse</a></code>
- <code><a href="./src/resources/auth/keys.ts">KeyListResponse</a></code>
- <code><a href="./src/resources/auth/keys.ts">KeyRevokeResponse</a></code>

Methods:

- <code title="post /v1/auth/keys">client.auth.keys.<a href="./src/resources/auth/keys.ts">create</a>({ ...params }) -> KeyCreateResponse</code>
- <code title="get /v1/auth/keys">client.auth.keys.<a href="./src/resources/auth/keys.ts">list</a>() -> KeyListResponse</code>
- <code title="delete /v1/auth/keys/{api_key_id}">client.auth.keys.<a href="./src/resources/auth/keys.ts">revoke</a>(apiKeyID) -> KeyRevokeResponse</code>

# Personas

Types:

- <code><a href="./src/resources/personas.ts">PersonaCreateResponse</a></code>
- <code><a href="./src/resources/personas.ts">PersonaRetrieveResponse</a></code>
- <code><a href="./src/resources/personas.ts">PersonaListResponse</a></code>

Methods:

- <code title="post /v1/personas">client.personas.<a href="./src/resources/personas.ts">create</a>({ ...params }) -> PersonaCreateResponse</code>
- <code title="get /v1/personas/{persona_id}">client.personas.<a href="./src/resources/personas.ts">retrieve</a>(personaID) -> PersonaRetrieveResponse</code>
- <code title="get /v1/personas">client.personas.<a href="./src/resources/personas.ts">list</a>() -> PersonaListResponse</code>

# Inference

Types:

- <code><a href="./src/resources/inference.ts">InferenceGenerateCompletionResponse</a></code>
- <code><a href="./src/resources/inference.ts">InferenceGeneratePersonaChatResponse</a></code>

Methods:

- <code title="post /v1/inference/completion">client.inference.<a href="./src/resources/inference.ts">generateCompletion</a>({ ...params }) -> InferenceGenerateCompletionResponse</code>
- <code title="post /v1/inference/persona-chat">client.inference.<a href="./src/resources/inference.ts">generatePersonaChat</a>({ ...params }) -> InferenceGeneratePersonaChatResponse</code>
