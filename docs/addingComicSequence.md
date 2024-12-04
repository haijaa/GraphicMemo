sequenceDiagram
actor User
participant UI as Frontend
participant Backend
participant DB as Database

    User->>UI: Opens "Add Comic" modal
    UI->>User: Shows modal form
    User->>UI: Fills in required fields
    User->>UI: Clicks "Add" button
    UI->>Backend: Sends comic data
    Backend->>DB: Saves comic data
    DB-->>Backend: Returns success
    Backend-->>UI: Comic added confirmation
    UI-->>User: Modal closes
