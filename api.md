# Modal

Types:

- <code><a href="./src/resources/modal.ts">ModalLearnResponse</a></code>
- <code><a href="./src/resources/modal.ts">ModalQueryResponse</a></code>
- <code><a href="./src/resources/modal.ts">ModalQueryMultimodalityResponse</a></code>

Methods:

- <code title="post /v1/modal/learn">client.modal.<a href="./src/resources/modal.ts">learn</a>({ ...params }) -> ModalLearnResponse</code>
- <code title="post /v1/modal/query">client.modal.<a href="./src/resources/modal.ts">query</a>({ ...params }) -> ModalQueryResponse</code>
- <code title="post /v1/modal/multimodal-query">client.modal.<a href="./src/resources/modal.ts">queryMultimodality</a>({ ...params }) -> ModalQueryMultimodalityResponse</code>

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
- <code><a href="./src/resources/inference.ts">InferenceGenerateMultimodalityCompletionResponse</a></code>
- <code><a href="./src/resources/inference.ts">InferenceGeneratePersonaChatResponse</a></code>

Methods:

- <code title="post /v1/inference/completion">client.inference.<a href="./src/resources/inference.ts">generateCompletion</a>({ ...params }) -> InferenceGenerateCompletionResponse</code>
- <code title="post /v1/inference/multimodality-completion">client.inference.<a href="./src/resources/inference.ts">generateMultimodalityCompletion</a>({ ...params }) -> InferenceGenerateMultimodalityCompletionResponse</code>
- <code title="post /v1/inference/persona-chat">client.inference.<a href="./src/resources/inference.ts">generatePersonaChat</a>({ ...params }) -> InferenceGeneratePersonaChatResponse</code>

# Demo

Types:

- <code><a href="./src/resources/demo/demo.ts">DemoCreateUserResponse</a></code>
- <code><a href="./src/resources/demo/demo.ts">DemoGenerateResetLinkResponse</a></code>
- <code><a href="./src/resources/demo/demo.ts">DemoRequestPasswordResetResponse</a></code>
- <code><a href="./src/resources/demo/demo.ts">DemoResetPasswordResponse</a></code>
- <code><a href="./src/resources/demo/demo.ts">DemoRetrieveCurrentUserResponse</a></code>
- <code><a href="./src/resources/demo/demo.ts">DemoSignInResponse</a></code>
- <code><a href="./src/resources/demo/demo.ts">DemoSubmitEarlyAccessRequestResponse</a></code>

Methods:

- <code title="post /v1/demo/signup">client.demo.<a href="./src/resources/demo/demo.ts">createUser</a>({ ...params }) -> DemoCreateUserResponse</code>
- <code title="post /v1/demo/get-reset-link">client.demo.<a href="./src/resources/demo/demo.ts">generateResetLink</a>({ ...params }) -> DemoGenerateResetLinkResponse</code>
- <code title="post /v1/demo/forgot-password">client.demo.<a href="./src/resources/demo/demo.ts">requestPasswordReset</a>({ ...params }) -> DemoRequestPasswordResetResponse</code>
- <code title="post /v1/demo/reset-password">client.demo.<a href="./src/resources/demo/demo.ts">resetPassword</a>({ ...params }) -> DemoResetPasswordResponse</code>
- <code title="get /v1/demo/me">client.demo.<a href="./src/resources/demo/demo.ts">retrieveCurrentUser</a>() -> DemoRetrieveCurrentUserResponse</code>
- <code title="post /v1/demo/signin">client.demo.<a href="./src/resources/demo/demo.ts">signIn</a>({ ...params }) -> DemoSignInResponse</code>
- <code title="post /v1/demo/early-access">client.demo.<a href="./src/resources/demo/demo.ts">submitEarlyAccessRequest</a>({ ...params }) -> DemoSubmitEarlyAccessRequestResponse</code>

## Auth

Types:

- <code><a href="./src/resources/demo/auth.ts">AuthAuthenticateWithGoogleResponse</a></code>

Methods:

- <code title="post /v1/demo/auth/google">client.demo.auth.<a href="./src/resources/demo/auth.ts">authenticateWithGoogle</a>({ ...params }) -> AuthAuthenticateWithGoogleResponse</code>

## Org

Types:

- <code><a href="./src/resources/demo/org.ts">OrgListOrganizationMembersResponse</a></code>

Methods:

- <code title="post /v1/demo/org/users">client.demo.org.<a href="./src/resources/demo/org.ts">listOrganizationMembers</a>({ ...params }) -> OrgListOrganizationMembersResponse</code>
