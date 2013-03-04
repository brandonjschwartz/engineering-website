{{{
  "title" : "Application Security Automation",
  "authorName": "Mikhael and Jim",
  "authorLink": "",
  "authorImage": "",
  "tags" : [ "tech" ],
  "date" : "04-04-2013"
}}}

Web application security is a serious problem, and it's not going away.  Almost
every day we see articles on WSJ regarding breaches, including WSJ itself.



There are several high-level problems facing the business world:

1) Higher quality (more secure) products are more expensive

2) Lack of application security engineers

3) Accepting there is a problem that requires resources to be addressed



On a tactical level, common organizational issues with application security
include:

-   **It's ad-hoc**, performed on some web apps, some of the time

-   **Expertise varies**, widely between engineers that perform assessments

-   **No common workflow,** security issues not integrated with developer
    systems and processes

-   **Seeing is believing**, vulnerabilities discovered need to have a
    proof-of-concept; developers need to see the exploit and impact



To address these business and tactical issues we partnered with WhiteHat
Security.  WhiteHat is a SaaS security offering.  They have a team of expert
application security engineers that hammer on our applications every day, just
like BlackHats, with the exception that these security problems are discovered,
verified, and sent to us.  As G.I. Joe says, '*Now you know, and knowing is half
the battle.*' The other half is getting these issues to developers on a fix
roadmap.



**Jira Integration with WhiteHat Sentinel**

Changes and fixes needed from developers are described in JIRA issues or
'tickets'. Since our development groups already have a mature workflow for
prioritizing, delegating, and tracking issues in JIRA, WhiteHat's
vulnerabilities need to be translated in to this format.

Manually interpreting WhiteHat vulnerabilities and creating correlating new
tickets into JIRA tickets is untenable.  WhiteHat's vulnerability data is
extensive and having someone on staff do a daily manual copy-and-paste from one
ticketing system to another is tedious, inaccurate, and slow.  Fortunately
there's a solution to automate the whole lifecycle.

WhiteHat's service includes access to their JIRA plugin.  This plugin is
incorporated in to YP's JIRA, and connects it to WhiteHat Sentinel according to
rules that have been custom-tailored for YP's development teams.  Every hour,
the Jira plugin:



1.  Makes an encrypted and authenticated connection to WhiteHat's API

2.  Polls WhiteHat for 'open issues'

3.  Creates Jira tickets describing the issues and assigns them to the
    developers responsible for that project

4.  Reopens Jira tickets accidentally closed before WhiteHat confirmed they were
    fixed

5.  Polls for issues that WhiteHat has confirmed are fixed.

6.  Closes those tickets in Jira.



The result is a seamless reflection of problems found by WhiteHat into
developers' to-do lists in JIRA.  Issues are fully tracked and synchronized
throughout the full lifecycle of discovery, testing and proof of concept,
prioritization, correction, and verification.  Within moments of a new
vulnerability creeping up, it's already detected, prioritized to be fixed, and
tracked to completion.



-YP Information Security
