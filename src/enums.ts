
// ---- Collections ----- 

export enum CollectionsType {
    SmartCollections = "Smart Collections",
    SharedCollections = "Shared Collections",
    MyCollections = "My Collections",
}

export enum SystemCollections {
    Calendar = "Calendar",
    Calls = "Calls",
    Contacts = "Contacts",
    Email = "Email",
    Notes = "Notes",
    Organizer = "Organizer",
    ToDos = "ToDo's",
    Websites = "Websites",
    Trash = "Trash"
}

export enum MemberRoles {
    Editor = "Editor",
    Viewer = "Viewer",
    Pending = "Pending",
}

export enum CollectionColor {
    ac725e = "rgb(172, 114, 94)",
    d06b64 = "rgb(208, 107, 100)",
    f83a22 = "rgb(248, 58, 34)",
    fa573c = "rgb(250, 87, 60)",
    ff7537 = "rgb(255, 117, 55)",
    ffad46 = "rgb(255, 173, 70)",
    "42d692" = "rgb(66, 214, 146)",  // Quoted to allow numeric key
    "16a765" = "rgb(22, 167, 101)",  // Quoted to allow numeric key
    "7bd148" = "rgb(123, 209, 72)",  // Quoted to allow numeric key
    b3dc6c = "rgb(179, 220, 108)",
    fbe983 = "rgb(251, 233, 131)",
    fad165 = "rgb(250, 209, 101)",
    "92ffc0" = "rgb(146, 255, 192)",  // Quoted to allow numeric key
    "9fc6e7" = "rgb(159, 198, 231)",  // Quoted to allow numeric key
    "9a9cff" = "rgb(154, 156, 255)",  // Quoted to allow numeric key
    c2c2c2 = "rgb(194, 194, 194)",
    cabdbf = "rgb(202, 189, 191)",
    cca6ac = "rgb(204, 166, 172)",
    f691b2 = "rgb(246, 145, 178)",
    a47ae2 = "rgb(164, 122, 226)"
}

export enum DefaultPersonalCollection {
    GENERAL = "General",
    ARCHIVE = "Archive",
    HOME = "Home",
    PLAY = "Play",
    WORK = "Work"
}


// ----- Kanbans ----- 
export enum KanbanList {
    Members = "Members",
    Chat = "Chat",
    Notifications = "Notifications",
    Events = "Events",
    ToDos = "ToDo's",
    Notes = "Notes",
    Website = "Websites",
    Email = "Email",
    Contact = "Contacts"
}
