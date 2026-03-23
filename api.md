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

- <code><a href="./src/resources/data/job.ts">JobCancelResponse</a></code>
- <code><a href="./src/resources/data/job.ts">JobRetrieveStatusResponse</a></code>

Methods:

- <code title="post /v1/data/job/cancel">client.data.job.<a href="./src/resources/data/job.ts">cancel</a>({ ...params }) -> JobCancelResponse</code>
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

- <code><a href="./src/resources/personas/personas.ts">PersonaCreateResponse</a></code>
- <code><a href="./src/resources/personas/personas.ts">PersonaRetrieveResponse</a></code>
- <code><a href="./src/resources/personas/personas.ts">PersonaListResponse</a></code>
- <code><a href="./src/resources/personas/personas.ts">PersonaListLinkedResponse</a></code>

Methods:

- <code title="post /v1/personas">client.personas.<a href="./src/resources/personas/personas.ts">create</a>({ ...params }) -> PersonaCreateResponse</code>
- <code title="get /v1/personas/{persona_id}">client.personas.<a href="./src/resources/personas/personas.ts">retrieve</a>(personaID) -> PersonaRetrieveResponse</code>
- <code title="get /v1/personas">client.personas.<a href="./src/resources/personas/personas.ts">list</a>() -> PersonaListResponse</code>
- <code title="get /v1/personas/linked/{user_id}">client.personas.<a href="./src/resources/personas/personas.ts">listLinked</a>(userID) -> PersonaListLinkedResponse</code>

## Link

Types:

- <code><a href="./src/resources/personas/link.ts">LinkCreateResponse</a></code>
- <code><a href="./src/resources/personas/link.ts">LinkDeleteResponse</a></code>

Methods:

- <code title="post /v1/personas/{persona_id}/link">client.personas.link.<a href="./src/resources/personas/link.ts">create</a>(personaID, { ...params }) -> LinkCreateResponse</code>
- <code title="delete /v1/personas/{persona_id}/link/{user_id}">client.personas.link.<a href="./src/resources/personas/link.ts">delete</a>(userID, { ...params }) -> LinkDeleteResponse</code>

# Projects

Types:

- <code><a href="./src/resources/projects.ts">ProjectCreateResponse</a></code>
- <code><a href="./src/resources/projects.ts">ProjectRetrieveResponse</a></code>
- <code><a href="./src/resources/projects.ts">ProjectListResponse</a></code>
- <code><a href="./src/resources/projects.ts">ProjectDeleteResponse</a></code>
- <code><a href="./src/resources/projects.ts">ProjectCloneResponse</a></code>

Methods:

- <code title="post /v1/projects">client.projects.<a href="./src/resources/projects.ts">create</a>({ ...params }) -> ProjectCreateResponse</code>
- <code title="get /v1/projects/{project_id}">client.projects.<a href="./src/resources/projects.ts">retrieve</a>(projectID, { ...params }) -> ProjectRetrieveResponse</code>
- <code title="get /v1/projects">client.projects.<a href="./src/resources/projects.ts">list</a>({ ...params }) -> ProjectListResponse</code>
- <code title="delete /v1/projects/{project_id}">client.projects.<a href="./src/resources/projects.ts">delete</a>(projectID, { ...params }) -> ProjectDeleteResponse</code>
- <code title="post /v1/projects/clone">client.projects.<a href="./src/resources/projects.ts">clone</a>({ ...params }) -> ProjectCloneResponse</code>

# Chat

Types:

- <code><a href="./src/resources/chat.ts">ChatCreateCompletionResponse</a></code>

Methods:

- <code title="post /v1/chat/completions">client.chat.<a href="./src/resources/chat.ts">createCompletion</a>({ ...params }) -> ChatCreateCompletionResponse</code>

# Text

Types:

- <code><a href="./src/resources/text.ts">TextGenerateResponse</a></code>

Methods:

- <code title="post /v1/text/generations">client.text.<a href="./src/resources/text.ts">generate</a>({ ...params }) -> TextGenerateResponse</code>

# Images

Types:

- <code><a href="./src/resources/images.ts">ImageGenerateResponse</a></code>

Methods:

- <code title="post /v1/images/generations">client.images.<a href="./src/resources/images.ts">generate</a>({ ...params }) -> ImageGenerateResponse</code>

# Audio

Types:

- <code><a href="./src/resources/audio.ts">AudioGenerateResponse</a></code>

Methods:

- <code title="post /v1/audio/generations">client.audio.<a href="./src/resources/audio.ts">generate</a>({ ...params }) -> AudioGenerateResponse</code>

# Video

Types:

- <code><a href="./src/resources/video.ts">VideoGenerateResponse</a></code>

Methods:

- <code title="post /v1/video/generations">client.video.<a href="./src/resources/video.ts">generate</a>({ ...params }) -> VideoGenerateResponse</code>
