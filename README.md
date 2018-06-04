## Mixpanel does not send requests

#### Description :octocat:
Mixpanel requests fail with `Mixpanel error: Bad HTTP status: 0`

#### Reproduction guide :beetle:
`git clone git@github.com:WASD-Team/mixpanel-issues.git`

`cd mixpanel-issues`

Change the `id` in `./src/config.js`

`yarn`

`yarn start`

Look the the browsers network panel

*Observed behaviour:* :broken_heart:
On our production site there are no mixpanel events being sent to the server.

*Expected behaviour:* :heart:
Mixpanel events are sent to the server and appear on the admin page

#### System Info :computer:
- OS: gnu/linux
- Browser: Firefox & Chrome
- Mixpanel version `2.22.4`

#### Backtrace :paw_prints:
```
Object { mixpanel: {…} } 
MIXPANEL REQUEST: 
Object { event: "mp_page_view", properties: {…} } 
MIXPANEL REQUEST: 
Object { event: "An event", properties: {…} } 
DEBUG: Object { event: "An event", properties: {…} } 
Mixpanel error: Bad HTTP status: 0
```
