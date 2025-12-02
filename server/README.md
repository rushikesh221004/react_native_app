# Find Donor Backend API

## Auth

- POST `/api/v1/auth/register`
  - Body: `{ fullName, email, mobileNo, location, bloodGroup, gender, password, confirmPassword }`
  - 201: `{ success: true, data: { id } }`
  - 400: `{ success: false, message }` invalid input
  - 409: `{ success: false, message }` email exists

- POST `/api/v1/auth/login`
  - Body: `{ email, password }`
  - 200: `{ success: true, data: { token } }`
  - 400/401: `{ success: false, message }`

- GET `/api/v1/auth/me` (protected)
  - Header: `Authorization: Bearer <token>`
  - 200: `{ success: true, data: { user } }`
  - 401/404: `{ success: false, message }`

## Profile

- GET `/api/v1/profile`
  - 200: `{ success: true, data: { donations, profileName, userId } }`

## Donors

- GET `/api/v1/donors`
  - 200: `{ success: true, data: DonorSummary[] }`

## Requests

- GET `/api/v1/requests`
  - 200: `{ success: true, data: BloodRequest[] }`

- POST `/api/v1/requests`
  - Body: `{ patientName, bloodType, age, diseaseName, location, contactNumber }`
  - 201: `{ success: true, data: BloodRequest }`
  - 400: `{ success: false, message }`

## Health

- GET `/health`
  - 200: `{ success: true, data: { status, uptime } }`

## Notes

- Responses use `{ success, data?, message? }` format.
- Validation errors return 400 with `message`.
- Replace in-memory storage with a database for production.

