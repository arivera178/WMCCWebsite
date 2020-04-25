# Code optimization tasks
* Fix each page so that it passes code review (Pull all the styling out of each page and into proper style sheets)
    - pages to do:
        + 404
            * Done
        + baas
        + baasamerica
        + baasbusiness
        + baasfuture
        + baasleader
        + booking
        + calendar
        + committees
        + conferences
        + index
        + juniornews
        + officerduties
        + other
        + seniornews
        + social media
        + team
        + /officers html files

# Vue.js Conversion tasks
* Take nav styles+html and move them to single reusable Vue template
* make each page a loadable template for the SPA that the site will use with Vue+firebase
* dynamically spool vue content to admin reg links for user account creation

# Firebase Auth tasks
* manage user account creation
    - the actual page for user account creation
    - should have distinct pages for both admin and base users during reg.
* manage permission levels
    - admin (level the level to manage activating and deactivating registration abilities)
        + Ability to create reg. links for base users and admins
            * These links would be used to create new users when a person clicks on the link. link can be disabled in the admin portal so access is not forever, and set auto timers to have it deactivated.
                - links should be reactivatable if needed
        + ability to archive, purge, and remove user data
            * archive: this means that the admin can take a whole category of base user (i.e. each class of students (class of 2021, 2022, etc.)) and move their records to storage so they are not considered for current metrics, but the data is still usable
            * purge: remove a single user or group of users (completely remove them from the system including events the user is registered in)
            * Remove user data: ability to take public-facing info (like profile pics, bios, about me, etc.) and remove it, requiring that the user choose those fields again.
                - this would not allow admins to add data to users, only delete data that the user added themselves
        + Ability to create new classes for each year (class of 2021, 2022, etc.)
        + should be able to create events that base users can see and sign up for
            * This should include making collections for events (fbla regionals, nationals, state, etc.)
            * should include requirements for each event including team members needed (min and max, i.e. 3required with a max of 5)
            * should include the ability to make a bio or add a bio from the fbla description site
            * Should be able to add button to take user to the actual fbla page for the event
    - base level (the level for standard users including regular students and officers)
        + ability to set and change profile info (bio, picture, etc.)
        + ability to sign up for events
        + ability to register as team leader for events
        + ability for team leaders in events to invite other users with the user's unique student code (could be fbla provided code or a firebase generated one)
* Login checks to ensure the user has all their profile fields filled in
    - if a user is missing required user data when logging in, prompt user to fill in missing fields
        + this should also explain that data may have been removed by an admin for inappropriate or otherwise unsatisfactory content on the associated profile

# Firebase database tasks
* Store 2 primary user groups, admin and base
    - within the base level there should be a sub-classification for event team leaders and event team members (leader is also member) after they have picked teams
* Store specific data about requirements for every event for every fbla competition and BAAS (and anything else)
* database permissions so admins can write new events and reg. codes but base users can't
    - also, base should be able to sign up for events while admins shouldn't

# Firebase hosting tasks
* Move site over to the ccfbla.org domain name (consult Abe for access to domain)