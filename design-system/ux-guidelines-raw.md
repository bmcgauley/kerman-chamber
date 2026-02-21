## UI Pro Max Stack Guidelines
**Stack:** nextjs | **Query:** civic nonprofit authority trust
**Source:** stacks/nextjs.csv | **Found:** 3 results

### Result 1
- **Category:** API
- **Guideline:** Validate request body
- **Description:** Validate input before processing
- **Do:** Zod or similar for validation
- **Don't:** Trust client input
- **Code Good:** const body = schema.parse(await req.json())
- **Code Bad:** const body = await req.json()
- **Severity:** High
- **Docs URL:** 

### Result 2
- **Category:** Security
- **Guideline:** Sanitize user input
- **Description:** Never trust user input
- **Do:** Escape sanitize validate all input
- **Don't:** Direct interpolation of user data
- **Code Good:** DOMPurify.sanitize(userInput)
- **Code Bad:** dangerouslySetInnerHTML={{ __html: userInput }}
- **Severity:** High
- **Docs URL:** 

### Result 3
- **Category:** Security
- **Guideline:** Validate Server Action input
- **Description:** Server Actions are public endpoints
- **Do:** Validate and authorize in Server Action
- **Don't:** Trust Server Action input
- **Code Good:** Auth check + validation in action
- **Code Bad:** Direct database call without check
- **Severity:** High
- **Docs URL:** 

