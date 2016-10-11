/// <reference path="../base.d.ts" />
module $REST {
    /**
     * Draft Visibility Types
     */
    enum DraftVisibilityType {
        /** Enumeration whose values specify that the minimum permission is approver. */
        Approver = 2,

        /** Enumeration whose values specify that the minimum permission is author. */
        Author = 1,

        /** Enumeration whose values specify that the minimum permission is reader. */ 
        Reader = 0 
    }

    /**
     * Event Receiver Types
     */
    enum EventReceiverType {
        /** Event that occurs before an item has been added. */
        ItemAdding = 1,

        /** Event that occurs before an item is updated. */
        ItemUpdating = 2,

        /** Event that occurs before an item is deleted. */
        ItemDeleting = 3,

        /** Event that occurs before an item has been checked in. */
        ItemCheckingIn = 4,

        /** Event that occurs before an item is checked out. */
        ItemCheckingOut = 5,

        /** Event that occurs before an item is unchecked out. */
        ItemUncheckingOut = 6,

        /** Event that occurs before an attachment has been added to an item. */
        ItemAttachmentAdding = 7,

        /** Event that occurs before an attachment has been removed from the item. */
        ItemAttachmentDeleting = 8,

        /** Event that occurs before a file is moved. */
        ItemFileMoving = 9,

        /** Event that occurs before a document version is deleted. */
        ItemVersionDeleting = 11,

        /** Event that occurs before a field is added to a list. */
        FieldAdding = 101,

        /** Event that occurs before a field is updated. */
        FieldUpdating = 102,

        /** Event that occurs before a field is removed from a list. */
        FieldDeleting = 103,

        /** Event that occurs before a list is created. */
        ListAdding = 104,

        /** Event that occurs before a list is deleted. */
        ListDeleting = 105,

        /** Event that occurs before a site collection is deleted. */
        SiteDeleting = 201,

        /** Event that occurs before a site is deleted. */
        WebDeleting = 202,

        /** Event that occurs before a site URL has been changed. */
        WebMoving = 203,

        /** Event that occurs before a new site is created. */
        WebAdding = 204,

        /** Event that occurs before a security group is added. */
        GroupAdding = 301,

        /** Event that occurs before a security group is updated. */
        GroupUpdating = 302,

        /** Event that occurs before a security group is deleted. */
        GroupDeleting = 303,

        /** Event that occurs before a user is added to a security group. */
        GroupUserAdding = 304,

        /** Event that occurs before a user is deleted from a security group. */
        GroupUserDeleting = 305,

        /** Event that occurs before a role definition is added. */
        RoleDefinitionAdding = 306,

        /** Event that occurs before a role definition is updated. */
        RoleDefinitionUpdating = 307,

        /** Event that occurs before a role definition is deleted. */
        RoleDefinitionDeleting = 308,

        /** Event that occurs before a role assignment is added. */
        RoleAssignmentAdding = 309,

        /** Event that occurs before a role assignment is deleted. */
        RoleAssignmentDeleting = 310,

        /** Event that occurs before an inheritance is broken. */
        InheritanceBreaking = 311,

        /** Event that occurs before an inheritance is restored. */
        InheritanceResetting = 312,

        /** Event that occurs before a workflow starts running. */
        WorkflowStarting = 501,

        /** Event that occurs after an item has been added. */
        ItemAdded = 10001,

        /** Event that occurs after an item has been updated. */
        ItemUpdated = 10002,

        /** Event that occurs after an item has been deleted. */
        ItemDeleted = 10003,

        /** Event that occurs after an item has been checked in. */
        ItemCheckedIn = 10004,

        /** Event that occurs after an item has been checked out. */
        ItemCheckedOut = 10005,

        /** Event that occurs after an item has been unchecked out. */
        ItemUncheckedOut = 10006,

        /** Event that occurs after an attachment has been added to the item. */
        ItemAttachmentAdded = 10007,

        /** Event that occurs after an attachment has been removed from the item. */
        ItemAttachmentDeleted = 10008,

        /** Event that occurs after a file has been moved. */
        ItemFileMoved = 10009,

        /** Event that occurs after a file is transformed from one type to another. */
        ItemFileConverted = 10010,

        /** Event that occurs after a document version is deleted. */
        ItemVersionDeleted = 10011,

        /** Event that occurs after a field has been added. */
        FieldAdded = 10101,

        /** Event that occurs after a field has been updated. */
        FieldUpdated = 10102,

        /** Event that occurs after a field has been removed. */
        FieldDeleted = 10103,

        /** Event that occurs after a list has been created. */
        ListAdded = 10104,

        /** Event that occurs after a list has been deleted. */
        ListDeleted = 10105,

        /** Event that occurs after a site collection has been deleted. */
        SiteDeleted = 10201,

        /** Event that occurs after a site has been deleted. */
        WebDeleted = 10202,

        /** Event that occurs after a site URL has been changed. */
        WebMoved = 10203,

        /** Event that occurs after a new site has been created, but before that new site is provisioned. */
        WebProvisioned = 10204,

        /** Event that occurs happens after a security group is added. */
        GroupAdded = 10301,

        /** Event that occurs after a security group is updated. */
        GroupUpdated = 10302,

        /** Event that occurs after a security group is deleted. */
        GroupDeleted = 10303,

        /** Event that occurs after a user is added to a security group. */
        GroupUserAdded = 10304,

        /** Event that occurs after a user is deleted from a security group. */
        GroupUserDeleted = 10305,

        /** Event that occurs after a role definition is added. */
        RoleDefinitionAdded = 10306,

        /** Event that occurs after a role definition is updated. */
        RoleDefinitionUpdated = 10307,

        /** Event that occurs after a role definition is deleted. */
        RoleDefinitionDeleted = 10308,

        /** Event that occurs after a role assignment is added. */
        RoleAssignmentAdded = 10309,

        /** Event that occurs after a role definition is deleted. */
        RoleAssignmentDeleted = 10310,

        /** Event that occurs after an inheritance is broken. */
        InheritanceBroken = 10311,

        /** Event that occurs after an inheritance is restored. */
        InheritanceReset = 10312,

        /** Event that occurs after a workflow has started running. */
        WorkflowStarted = 10501,

        /** Event that occurs after a workflow has been postponed. */
        WorkflowPostponed = 10502,

        /** Event that occurs after a workflow has completed running. */
        WorkflowCompleted = 10503,

        /** Event that occurs when an instance of an external content type has been added. */
        EntityInstanceAdded = 10601,

        /** Event that occurs when an instance of an external content type has been updated. */
        EntityInstanceUpdated = 10602,

        /** Event that occurs when an instance of an external content type has been deleted. */
        EntityInstanceDeleted = 10603,

        /** Event that occurs after an app is installed. */
        AppInstalled = 10701,

        /** Event that occurs after an app is upgraded. */
        AppUpgraded = 10702,

        /** Event that occurs before an app is uninstalled. */
        AppUninstalling = 10703,

        /** Event that occurs after a list receives an e-mail message. */
        EmailReceived = 20000,

        /** Identifies workflow event receivers, and is therefore not a true event type. */
        ContextEvent = 32766,
    }

    /**
     * Field Types
     */
    enum FieldType {
        /** Specifies that the field indicates whether a meeting in a calendar list is an all-day event. */
        AllDayEvent = 29,

        /** Specifies that the field indicates whether the list item has attachments. */
        Attachments = 19,

        /** Specifies that the field contains a Boolean value. */
        Boolean = 8,

        /** Specifies that the field is a calculated field. */ 
        Calculated = 17,

        /** Specifies that the field contains a single value from a set of specified values. */ 
        Choice = 6,

        /** Specifies that the field is a computed field. */ 
        Computed = 12,

        /** Specifies that the field contains a content type identifier as a value. */ 
        ContentTypeId = 25,

        /** Specifies that the field contains a monotonically increasing integer. */ 
        Counter = 5,

        /** Specifies that the field contains a link between projects in a Meeting Workspace site. */ 
        CrossProjectLink = 22,

        /** Specifies that the field contains a currency value. */ 
        Currency = 10,

        /** Specifies that the field contains a date and time value or a date-only value. */ 
        DateTime = 4,

        /** Specifies that the type of the field was set to an invalid value. */ 
        Error = 24,

        /** Specifies that the field contains the leaf name of a document as a value. */ 
        File = 18,

        /** Specifies that the field contains geographical location values. */ 
        Geolocation = 31,

        /** Specifies that the field contains rating scale values for a survey list. */
        GridChoice = 16,

        /** Specifies that the field contains a GUID value. */ 
        Guid = 14,

        /** Specifies that the field contains an integer value. */ 
        Integer = 1,

        /** Must not be used. */ 
        Invalid = 0,

        /** Specifies that the field is a lookup field. */ 
        Lookup = 7,

        /** Must not be used. */ 
        MaxItems = 31,

        /** Specifies that the field indicates moderation status. */ 
        ModStat = 23,
        /** Specifies that the field contains one or more values from a set of specified values. */ 

        MultiChoice = 15,
        /** Specifies that the field contains multiple lines of text. */ 
        Note = 3,

        /** Specifies that the field contains a floating-point number value. */ 
        Number = 9,

        /** Specifies that the field separates questions in a survey list onto multiple pages. */
        PageSeparator = 26,

        /** Specifies that the field indicates whether a meeting in a calendar list recurs. */
        Recurrence = 21,

        /** Specifies that the field contains a single line of text. */ 
        Text = 2,

        /** Specifies that the field indicates the position of a discussion item in a threaded view of a discussion board. */ 
        ThreadIndex = 27,

        /** Specifies that the field indicates the thread for a discussion item in a threaded view of a discussion board. */
        Threading = 13,

        /** Specifies that the field contains a URI and an optional description of the URI. */ 
        URL = 11,

        /** Specifies that the field contains one or more users and groups as values. */ 
        User = 20,

        /** Specifies that the field contains the most recent event in a workflow instance. */ 
        WorkflowEventType = 30,

        /** Specifies that the field indicates the status of a workflow instance on a list item. */
        WorkflowStatus = 28
     }

     /**
      * List Template Types
      */
    enum ListTemplateType {
        /** Access Request List */
        AccessRequest = 160,

        /** Administrator Tasks */
        AdminTasks = 1200,

        /** Agenda (Meeting) */
        Agenda = 201,

        /** App Data Catalog */
        AppDataCatalog = 125,

        /** Announcements */
        Announcements = 104,

        /** Call Track */
        CallTrack = 404,

        /** Categories (Blog) */
        Categories = 303,

        /** Circulation */
        Circulation = 405,

        /** Comments (Blog) */
        Comments = 302,

        /** Contacts */
        Contacts = 105,

        /** Custom grid for a list */
        CustomGrid = 120,

        /** Data connection library for sharing information about external data connections */
        DataConnectionLibrary = 130,

        /** Data sources for a site */
        DataSources = 110,

        /** Decisions (Meeting) */
        Decision = 204,

        /** Design Catalog */
        DesignCatalog = 124,

        /** Draft Apps library in Developer Site */
        DeveloperSiteDraftApps = 1230,

        /** Discussion board */
        DiscussionBoard = 108,

        /** Document library */
        DocumentLibrary = 101,

        /** Calendar */
        Events = 106,

        /** External */
        ExternalList = 600,

        /** Facility */
        Facility = 402,

        /** Project Tasks */
        GanttTasks = 150,

        /** Custom list */
        GenericList = 100,

        /** Health Reports */
        HealthReports = 1221,

        /** Health Rules */
        HealthRules = 1220,

        /** Help Library */
        HelpLibrary = 151,

        /** Holidays */
        Holidays = 421,

        /** Workspace Pages (Meeting) */
        HomePageLibrary = 212,

        /** IME (Input Method Editor) Dictionary */
        IMEDic = 499,

        /** Issue tracking */
        IssueTracking = 1100,

        /** Links */
        Links = 103,

        /** List Template gallery */
        ListTemplateCatalog = 114,

        /** Master Page gallery */
        MasterPageCatalog = 116,

        /** Maintenance Logs Library */
        MaintenanceLogs = 175,

        /** Objectives (Meeting) */
        MeetingObjective = 207,

        /** Meeting Series (Meeting) */
        Meetings = 200,

        /** Attendees (Meeting) */
        MeetingUser = 202,

        /** My Site Document Library */
        MySiteDocumentLibrary = 700,

        /** Posts (Blog) */
        Posts = 301,

        /** No Code Public Workflow */
        NoCodePublic = 122,

        /** No Code Workflows */
        NoCodeWorkflows = 117,

        /** Picture library */
        PictureLibrary = 109,

        /** Solutions */
        SolutionCatalog = 121,

        /** Survey */
        Survey = 102,

        /** Tasks */
        Tasks = 107,

        /** Tasks with Timeline and Hierarchy */
        TasksWithTimelineAndHierarchy = 171,

        /** Text Box (Meeting) */
        TextBox = 210,

        /** Themes */
        ThemeCatalog = 123,

        /** Things To Bring (Meeting) */
        ThingsToBring = 211,

        /** Timecard */
        Timecard = 420,

        /** User Information */
        UserInformation = 112,

        /** Wiki Page Library */
        WebPageLibrary = 119,

        /** Web Part gallery */
        WebPartCatalog = 113,

        /** Site template gallery */
        WebTemplateCatalog = 111,

        /** Whereabouts */
        Whereabouts = 403,

        /** Workflow History */
        WorkflowHistory = 140,

        /** Custom Workflow Process */
        WorkflowProcess = 118,

        /** XML Form library */
        XMLForm = 115
    }

    /**
     * View Types
     */
    enum ViewType {
        /** Enumeration whose values specify a calendar list view type. */
        Calendar = 524288,

        /** Enumeration whose values specify a chart list view type. */ 
        Chart = 131072,

        /** Enumeration whose values specify a Gantt chart list view type. */ 
        Gantt = 67108864,
        
        /** Enumeration whose values specify a datasheet list view type. */
        Grid = 2048,
        
        /** Enumeration whose values specify an HTML list view type. */
        Html = 1,
        
        /** Enumeration whose values specify a list view type that displays recurring events. */
        Recurrence = 8193,
    }
}