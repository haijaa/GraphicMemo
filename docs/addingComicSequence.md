sequenceDiagram
actor User
participant Frontend
participant Backend
participant Database

    User->>Frontend: Opens "Add Comic" modal
    Frontend->>User: Shows modal form
    User->>Frontend: Fills in required fields
    User->>Frontend: Clicks "Add" button
    Frontend->>Backend: Sends comic data
    Backend->>Database: Saves comic data
    Database-->>Backend: Returns success
    Backend-->>Frontend: Comic added confirmation
    Frontend-->>User: Modal closes
