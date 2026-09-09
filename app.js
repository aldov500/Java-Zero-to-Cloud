"use strict";

/* ============================================================
   COURSE CONTENT
   Rule for every line below: pseudocode only, never real code.
   Every concept carries: what you're learning, what to search
   for, a pseudocode blueprint, tips, and the common pitfall.
   ============================================================ */

const INTRO = {
  kicker: "Start here",
  title: "You are going to build this five times over",
  sub: "One application — a personal finance tracker — rebuilt at five increasing levels of engineering maturity, from a console program that writes a text file to a secured API running on the internet with an automated pipeline behind it.",
  sections: [
    {
      label: "The one rule",
      type: "callout",
      title: "You write every line of code",
      body: [
        "What this site leads with is <strong>pseudocode</strong> — a precise, language-neutral description of what to build and in what order — plus the exact things to go and search for. Not Java, not SQL, not a Dockerfile, not a workflow file.",
        "Pseudocode tells you the <em>what</em>. Finding the <em>how</em> is the entire point of the course. If you translate a blueprint into working Java yourself, you have learned the concept. If you paste in a solution you found, you have learned nothing and the module is not complete.",
        "Every blueprint does carry a <strong>⟨⟩ Show the Java</strong> button holding a working reference implementation. It stays closed until you click it, and the honest way to use it is <em>after</em> your own version runs — to compare, not to copy. Opening it first is the fastest way to finish this course having learned nothing."
      ]
    },
    {
      label: "How each concept is laid out",
      type: "anatomy",
      rows: [
        ["What you're learning", "learn", "The concept in plain words. This is the headline of every card, and it is the thing to type into a search engine before you write anything."],
        ["Go research this", "research", "Literal search queries and the canonical documentation to read. Do this part first, not when you get stuck."],
        ["Blueprint", "accent", "Pseudocode for the thing you are about to build. Structure, order, and decisions — no syntax."],
        ["Show the Java", "ok", "A working reference implementation, folded away behind a button on every blueprint. Open it after you have written your own, to compare — never before, to copy."],
        ["Tips", "tip", "Conventions, trade-offs, and what good looks like."],
        ["Common pitfall", "danger", "The specific mistake most people make here. Read it before you start, not after."]
      ]
    },
    {
      label: "GitHub is mandatory from day one",
      type: "callout-warn",
      title: "Every stage ends with a commit and a push",
      body: [
        "The repository is created in the first ten minutes of Module 1 and every module afterwards ends at a checkpoint that requires pushed code. Not at the end of the course — at the end of every module, and ideally many times inside each one.",
        "This is not bookkeeping. Module 4 automates a pipeline that runs on your commits, and Module 5 deploys straight from your repository. If the history is not there, the last two modules have nothing to work with."
      ]
    },
    {
      label: "How progress works",
      type: "cards",
      cards: [
        ["Modules unlock in order", "Module 1 is open. Each following module unlocks only when you tick every item on the previous module's checklist and mark it complete."],
        ["The checklist is yours to be honest about", "Nothing here can inspect your code. The checklist is a specification — tick an item when your application genuinely does that thing, not when you have read about it."],
        ["Your place is remembered", "Completed modules and ticked items are saved in this browser, so you can close the tab and come back. Clearing site data or using a private window starts you over."]
      ]
    },
    {
      label: "Before you start",
      type: "speclist",
      items: [
        "A JDK — version 17 or 21. Confirm it from a terminal, not from your IDE's settings screen.",
        "An IDE you are willing to learn the shortcuts for — IntelliJ IDEA Community or VS Code with the Java extensions.",
        "Git installed locally, and a GitHub account you are signed into.",
        "PostgreSQL installed locally — needed from Module 2 onward.",
        "An API client such as Postman or Insomnia — needed from Module 2 onward.",
        "Docker Desktop and a DigitalOcean account — needed for Module 5. Sign up when you get there, not now."
      ]
    }
  ]
};

const OUTRO = {
  kicker: "Course complete",
  title: "You built the whole chain",
  sub: "A console program became a layered, secured, tested, containerised API that deploys itself from a git push. That chain — not any single piece of it — is what backend engineering actually is.",
  sections: [
    {
      label: "What you can now claim, honestly",
      type: "speclist",
      items: [
        "You can model a domain in Java with classes, enums and collections, and persist it.",
        "You can build a layered REST API over a relational database with an ORM.",
        "You can secure an API with hashed credentials and token authentication, and scope every query to its owner.",
        "You can write tests and enforce them automatically on every push.",
        "You can containerise a JVM application and deploy it, with a managed database, to the internet.",
        "Every one of those lines is backed by code you wrote yourself and a commit history that proves it."
      ]
    },
    {
      label: "Where to go next",
      type: "cards",
      cards: [
        ["Versioned database migrations", "Schema generated by the ORM is a development convenience. Research Flyway or Liquibase and put your schema under version control like everything else."],
        ["Observability", "Research structured logging, health and metrics endpoints, and an uptime check. You cannot fix what you cannot see."],
        ["Refresh tokens", "Your access tokens are short-lived by design. Research refresh token flows and token revocation to make that usable."],
        ["A front end", "The API is complete and documented. Point a small web or mobile client at it and watch every design decision you made get tested by a real consumer."]
      ]
    },
    {
      label: "Finish the repository",
      type: "callout",
      title: "The README is now the front door",
      body: [
        "Write it properly: what the project is, the architecture, how to run it locally, the environment variables it needs, the live URL, and the build badge. Anyone judging this project — including future you — reads that file first and the code second."
      ]
    }
  ]
};

/* ================= MODULE 1 ================= */
const M1 = {
  id:"m1", number:1,
  title:"The Core Java Console Foundation & Git",
  subtitle:"Objects, collections, files, and the version-control habit that carries the whole course.",
  mission:"Initialise a GitHub repository with a proper ignore file, then build the core object model — Transaction, Category, User, FinanceEngine — as a runnable console application that saves and reloads its data from a CSV file.",
  blueprint:[
    {type:"p",text:"Everything lives in one runnable program with three clear layers, even though nothing is a web application yet. Keep them separate: the layers survive into Module 2, the console does not."},
    {type:"list",caption:"The types you will create",items:[
      "<code>Transaction</code> — one money movement. The core of the whole course.",
      "<code>Category</code> — an enum of the fixed spending categories.",
      "<code>TransactionType</code> — an enum: income or expense.",
      "<code>User</code> — who owns the transactions. Barely used now; essential in Module 3.",
      "<code>FinanceEngine</code> — holds the transactions and answers every question about them. All business rules live here and nowhere else.",
      "<code>CsvStore</code> — reads and writes the data file. Only this type knows the file format.",
      "<code>App</code> — the console menu. As thin as you can make it."
    ]},
    {type:"table",caption:"Transaction — the fields and how to type them",head:["Field","Holds","Type guidance"],rows:[
      ["id","A unique identifier for this entry","Generated at creation, never edited afterwards"],
      ["amount","How much money moved. Always positive","A precision-safe decimal type — never a floating point type"],
      ["date","When it happened","A type from the modern date/time library, not the legacy date class"],
      ["description","A short human note","Text"],
      ["category","Which category it belongs to","The Category enum — not text"],
      ["type","Income or expense","The TransactionType enum — this is what makes the amount positive or negative in a calculation"],
      ["owner","Which user it belongs to","A User reference. Unused today, load-bearing in Module 3"]
    ]},
    {type:"table",caption:"The data file — fix this column order now and keep it",head:["Position","Column","Written as"],rows:[
      ["1","id","text"],
      ["2","amount","plain decimal, dot separator, no currency symbol"],
      ["3","date","ISO format — year-month-day, so it sorts as text"],
      ["4","description","text, escaped if it contains a comma or a quote"],
      ["5","category","the enum's name, exactly as declared"],
      ["6","type","the enum's name, exactly as declared"]
    ]}
  ],
  concepts:[
    {
      name:"Repository Setup & the Ignore File",
      learning:"How a project becomes version-controlled from its very first line, and why machine-generated build output must never enter the history.",
      searchFor:["git init vs git clone","what is a .gitignore file and how does it work","gitignore template for java maven gradle","git remote add origin explained","how to write a good commit message"],
      pseudocode:
`SET UP the repository — before writing any Java

  CREATE the project folder
  INITIALISE an empty git repository inside it

  CREATE the ignore file at the repository root
    IGNORE compiled class output
    IGNORE the build tool's output folder
    IGNORE IDE and editor settings folders
    IGNORE operating-system junk files
    IGNORE the data file the app writes at runtime

  CREATE an empty repository on GitHub (no README, no licence)
  LINK the local repository to that remote

  STAGE everything
  COMMIT with a message describing the initial skeleton
  PUSH to the main branch

  VERIFY on github.com that the file list is small and readable`,
      tips:[
        "Write the ignore file before the first commit. Removing a file from history afterwards is far more work than never adding it.",
        "GitHub publishes ready-made ignore templates per language — find the Java one and start from it rather than guessing.",
        "Commit messages are written for the person reading them in six months. That person is you, and they will not remember any of this."
      ],
      pitfall:"Committing the build output folder. If your first push is thousands of files, stop and fix the ignore file before you do anything else."
    },
    {
      name:"Variable Declaration & Choosing Types",
      learning:"Variable definition — how to name a piece of data, give it a type, and pick the right type for money, dates and text. Search this before you write a single line; every bug in the rest of this module traces back to a type chosen carelessly here.",
      searchFor:["java variable declaration syntax","java primitive types vs wrapper classes","why you should not use double for money in java","java BigDecimal tutorial for beginners","java LocalDate getting started"],
      pseudocode:
`FOR EACH piece of data the application stores
  DECIDE its type BEFORE writing the line
  DECLARE the variable with an explicit type and a descriptive name

THE FOUR DECISIONS THAT MATTER HERE

  money        -> a decimal type that never loses precision
                  (the obvious floating-point choice is the wrong one —
                   find out why before you argue with this)
  a date       -> a type from the modern date/time library
  free text    -> text
  a count      -> a whole-number type

NAMING
  a name states what the value IS
    "amount", "transactionDate", "categoryTotal"
  never a letter, never an abbreviation only you understand`,
      tips:[
        "Test the money question yourself: add ten cents to twenty cents using a floating point type and print the result. Then use the precision-safe type and print it again. The lesson lands harder than any explanation.",
        "Java's convention is camelCase for variables and PascalCase for types. Follow it — code that looks foreign to other Java developers is harder to get help with.",
        "If a value should never change after it is set, there is a keyword that enforces that. Find it and use it on your identifiers."
      ],
      pitfall:"Storing money in a floating point type because it is the first numeric type every tutorial shows. Your balances will drift by fractions of a cent and you will not notice until the totals stop matching."
    },
    {
      name:"Classes, Fields & Constructors",
      learning:"How to model a real-world thing as a class: fields are what it knows, and the constructor is how it comes into existence already valid.",
      searchFor:["java class and object explained for beginners","java constructor tutorial","java constructor overloading","what is a POJO in java","java toString method override"],
      pseudocode:
`CLASS Transaction

  FIELDS
    id, amount, date, description, category, type, owner

  CONSTRUCTOR taking amount, date, description, category, type, owner
    REJECT construction IF amount is missing or not greater than zero
    REJECT construction IF date is missing
    REJECT construction IF category or type is missing
    GENERATE the id here — the caller never supplies it
    ASSIGN every field
  END CONSTRUCTOR

  PROVIDE a readable text representation of the object
    so printing one to the console is useful

END CLASS

APPLY THE SAME SHAPE TO User
  fields: id, username, email
  constructor validates that the username is present and not blank`,
      tips:[
        "A constructor's job is to make it impossible to hold a half-built object. If validation fails, nothing is created — that is the point.",
        "Generate the id inside the constructor. Research the standard library's unique identifier type rather than counting integers yourself.",
        "Override the readable-text-representation method early. Every debugging session for the rest of Module 1 gets easier."
      ],
      pitfall:"Writing an empty constructor and then setting fields one by one from outside. You now have objects that are briefly invalid, and no single place that guarantees they are ever correct."
    },
    {
      name:"Encapsulation — Getters, Setters & Immutability",
      learning:"Why fields are private, what a getter and setter actually protect, and when the right answer is to provide neither.",
      searchFor:["java encapsulation private fields explained","java getters and setters why do we need them","java immutable object pattern","java final keyword on fields","tell dont ask principle"],
      pseudocode:
`CLASS Transaction
  EVERY field is private — no exceptions

  FOR EACH field
    EXPOSE a read accessor

  EXPOSE a write accessor ONLY IF the value legitimately
  changes during the object's life
    INSIDE that accessor, VALIDATE before assigning
    IF the new value is invalid -> reject it, do not store it

END CLASS

DECISION TABLE FOR THIS PROJECT
  id           -> read only. It is identity; identity does not change
  amount       -> read only. A wrong amount is a new transaction,
                  not an edited one
  description  -> read and write. Fixing a typo is legitimate
  category     -> read and write. Re-categorising is legitimate
  date, type   -> read only

RULE OF THUMB
  start with no write accessors at all
  add one only when you hit a real need for it`,
      tips:[
        "Your IDE will offer to generate a getter and setter for every field in one keystroke. Refuse it and decide field by field — that decision is the concept.",
        "A class with a getter and a setter for every field is a public field with extra typing. The encapsulation is cosmetic.",
        "Research immutability properly. Objects that cannot change are dramatically easier to reason about, and this model is a good candidate."
      ],
      pitfall:"Generating the full getter/setter pair for everything out of habit, then discovering in Module 3 that any caller can reassign a transaction's owner."
    },
    {
      name:"Enums — Modelling a Fixed Set of Values",
      learning:"How to represent a closed set of options as its own type instead of loose text, and let the compiler catch mistakes that text would let through.",
      searchFor:["java enum tutorial","java enum vs string constants","java enum with fields and constructor","java enum valueOf illegalargumentexception","java switch on enum"],
      pseudocode:
`ENUM Category
  VALUES  GROCERIES, RENT, TRANSPORT, UTILITIES,
          ENTERTAINMENT, HEALTH, SALARY, SAVINGS, OTHER
  OPTIONALLY each value also carries a human-readable label
    for display, while the VALUE stays the stable identifier
END ENUM

ENUM TransactionType
  VALUES  INCOME, EXPENSE
END ENUM

CONVERTING TEXT INTO AN ENUM
  (needed when reading user input and when loading the CSV)

  ATTEMPT to convert the text to a value
  IF the text matches no value
    DECIDE NOW, and apply the same decision everywhere:
      either  report it as bad input and reject the row
      or      fall back to OTHER and warn
    DO NOT let it crash the application`,
      tips:[
        "Enums let the compiler tell you when you have missed a case in a switch. That is a free test you get for writing the type properly.",
        "Display labels belong on the enum value, not scattered through printing code. Research enums that carry fields.",
        "Keep the value names stable — Module 1 writes them into the CSV and Module 2 writes them into a database column."
      ],
      pitfall:"Storing categories as free text. Two entries reading \"Groceries\" and \"groceries\" become two different categories, and your report silently splits in half."
    },
    {
      name:"Collections — Holding Many Transactions",
      learning:"How to choose a collection type and use a list to add, retrieve and remove items — and why you declare it by its interface.",
      searchFor:["java ArrayList tutorial","java List interface vs ArrayList difference","java collections framework overview","java generics diamond operator","java unmodifiable list Collections"],
      pseudocode:
`CLASS FinanceEngine

  FIELD transactions : a LIST of Transaction, private

  FUNCTION add(transaction)
    REJECT null
    APPEND to the list
  END

  FUNCTION all()
    RETURN a read-only view of the list
    -- NOT the list itself
  END

  FUNCTION findById(id)
    SEARCH the list for a matching id
    RETURN the match, or a clear "nothing found" answer
  END

  FUNCTION removeById(id)
    LOCATE the matching element
    IF found  -> remove it and RETURN true
    IF absent -> RETURN false
  END

END CLASS`,
      tips:[
        "Declare the field by the interface type and create it as the concrete type. Research why — it is one of the most common Java interview questions and the reasoning is genuinely useful.",
        "Returning a read-only view is a small amount of work that prevents an entire class of bug. Find the standard library helper that produces one.",
        "Read about the standard \"might not be there\" wrapper type for lookups that can legitimately find nothing. It is better than returning null."
      ],
      pitfall:"Returning the internal list straight from a getter. Every caller can now add and remove items behind the engine's back, and your validation is bypassed."
    },
    {
      name:"Loops & Iteration",
      learning:"How to walk a collection to filter, count and accumulate — the mechanical skill under every report the engine produces.",
      searchFor:["java enhanced for loop syntax","java for loop vs while loop when to use","java ConcurrentModificationException why it happens","java iterator remove safely","java stream api introduction"],
      pseudocode:
`FUNCTION filterByCategory(category)
  CREATE an empty result list
  FOR EACH transaction IN transactions
    IF transaction's category EQUALS the requested category
      APPEND it TO the result
  END FOR
  RETURN result
END

FUNCTION countByType(type)
  SET counter TO 0
  FOR EACH transaction IN transactions
    IF transaction's type EQUALS the requested type
      INCREMENT counter
  END FOR
  RETURN counter
END

FUNCTION removeAllInCategory(category)
  ITERATE with something that supports safe removal
  REMOVE each match AS YOU GO
  -- removing directly inside a plain for-each loop
  -- throws at runtime. Find out why.
END`,
      tips:[
        "Use the enhanced for loop whenever you do not need the index. Reach for the indexed loop only when you genuinely need the position.",
        "Java has a stream API that expresses all of these in one line each. Write the loops first so you understand what streams are doing, then rewrite one as an exercise.",
        "Extract the filtering condition into a well-named method when it grows past a line — the loop then reads like the sentence it represents."
      ],
      pitfall:"Removing items from a list while looping over it with a for-each. It compiles, runs, and then throws at runtime the moment there is more than one match."
    },
    {
      name:"The Finance Engine — Calculations",
      learning:"How to keep every business rule in one place, and how to do decimal arithmetic correctly so your totals are exact.",
      searchFor:["java BigDecimal add subtract multiply","BigDecimal setScale RoundingMode explained","BigDecimal equals vs compareTo difference","java Map and HashMap tutorial","java group and sum by key","single responsibility principle explained"],
      pseudocode:
`FUNCTION totalIncome()
  SET total TO decimal zero
  FOR EACH transaction WHERE type IS INCOME
    total = total PLUS amount        -- reassign; the operation
  END FOR                            -- returns a NEW value
  RETURN total
END

FUNCTION totalExpenses()
  same shape, WHERE type IS EXPENSE
END

FUNCTION balance()
  RETURN totalIncome() MINUS totalExpenses()
END

FUNCTION spendingByCategory()
  CREATE an empty map FROM Category TO decimal
  FOR EACH transaction WHERE type IS EXPENSE
    ADD its amount TO the running total stored under its category
    (if the category has no entry yet, start it at zero)
  END FOR
  RETURN the map
END

FUNCTION monthlyReport(year, month)
  SELECT transactions whose date falls inside that year and month
  RETURN income, expenses and balance FOR THAT SLICE ONLY
END

FUNCTION largestExpense()
  RETURN the expense with the highest amount,
  or a clear "none" answer if there are no expenses`,
      tips:[
        "Decimal arithmetic returns a new value rather than modifying the existing one. Forgetting to reassign gives you a total that stays at zero — expect to hit this once.",
        "Round only when displaying, never while accumulating. Research the rounding modes and pick one deliberately.",
        "Every number the console prints must come from a method here. The moment the menu does arithmetic, this module's structure has failed."
      ],
      pitfall:"Comparing decimal values with the standard equality method. It considers scale, so a value of 10.0 is \"not equal\" to 10.00. There is a separate comparison method — find it."
    },
    {
      name:"File I/O — Writing the CSV",
      learning:"How to persist objects to disk as text, and how to guarantee the file handle is closed even when something fails halfway through.",
      searchFor:["java write text file tutorial","java try-with-resources explained","java BufferedWriter vs FileWriter","csv escaping rules commas and quotes","java Path and Files class basics"],
      pseudocode:
`FUNCTION saveToCsv(path)

  OPEN a writer on the file INSIDE a construct that
  guarantees the file is closed when the block ends
  (Java has one specifically for this — find it)

    WRITE the header line naming every column, comma separated

    FOR EACH transaction
      BUILD one line in the fixed column order:
        id, amount, date, description, category, type
      CONVERT the date to ISO text
      CONVERT each enum to its NAME
      ESCAPE any field containing a comma or a quote
      WRITE the line
    END FOR

  THE BLOCK ENDS -> the file is flushed and closed automatically
END

FAILURE HANDLING
  IF the file cannot be written
    REPORT which file and why
    DO NOT pretend the save succeeded`,
      tips:[
        "The header line makes the file self-describing and gives your reader something to skip. Write it.",
        "Escaping is the part everyone skips. Add a description containing a comma and watch your own reader break — then fix the writer.",
        "For real crash safety, write to a temporary file and rename it over the original only once writing succeeded. Research atomic file replacement."
      ],
      pitfall:"Not closing the writer. Data sits in a buffer, the program exits, and the file is empty or truncated — with no error anywhere. Use the construct that closes for you."
    },
    {
      name:"File I/O — Reading & Parsing the CSV",
      learning:"How to read a file back and turn flat text into typed objects. This is the inverse of the previous concept and it is where the majority of your bugs will live.",
      searchFor:["java read file line by line","java String split limitations with csv","java parse LocalDate from string","java NumberFormatException how to handle","java Files.exists check before reading"],
      pseudocode:
`FUNCTION loadFromCsv(path)

  IF the file does not exist
    RETURN an empty list
    -- this is NORMAL on the very first run, not an error

  OPEN a reader INSIDE the auto-closing construct
    SKIP the header line
    SET lineNumber TO 1

    FOR EACH remaining line
      INCREMENT lineNumber
      IF the line is blank -> skip it

      SPLIT the line into fields
      IF the field count is wrong
        REPORT the line number and SKIP this row
        CONTINUE with the rest of the file

      CONVERT each field to its proper type
        text  -> decimal   (may fail)
        text  -> date      (may fail)
        text  -> enum      (may fail)
      IF any conversion fails
        REPORT the line number and SKIP this row

      BUILD a Transaction and APPEND it
    END FOR

  RETURN the list
END

ROUND-TRIP TEST — do this by hand
  SAVE, then LOAD, then COMPARE
  the count and the balance must be identical`,
      tips:[
        "One bad line should cost you one row, not the whole file. Decide that now and structure the loop around it.",
        "Open the CSV in a text editor, corrupt a line deliberately, and re-run. That is your test for this concept.",
        "Splitting on commas naively breaks the moment a description contains one. Either escape properly on write and un-escape on read, or forbid commas in descriptions — but choose consciously."
      ],
      pitfall:"Assuming the file exists. The very first run of a fresh clone has no data file, and an unguarded read crashes the application before the menu appears."
    },
    {
      name:"Exception Handling",
      learning:"Which failures to catch, which to let travel upward, and why an empty catch block is the most expensive line you can write.",
      searchFor:["java checked vs unchecked exceptions","java try catch finally tutorial","java custom exception class how to create","why empty catch blocks are bad","java exception stack trace how to read"],
      pseudocode:
`ATTEMPT the risky operation
  DO the work

ON FAILURE of kind "file or input/output problem"
  REPORT which file and what went wrong
  DECIDE: recover with a default, or stop cleanly

ON FAILURE of kind "bad data"
  REPORT which line or which input was bad
  CONTINUE with everything else

ALWAYS (whether it succeeded or not)
  RELEASE anything that must be released
  -- though the auto-closing construct already does this for files

DEFINE YOUR OWN failure types for domain rules, e.g.
  "transaction not found"
  "amount must be positive"
  -- these carry meaning that a generic failure type does not

THE RULES
  NEVER swallow a failure silently
  NEVER catch the most general failure type just to
    make the compiler stop complaining
  A caught failure must result in EITHER a recovery
    OR a message a human can act on`,
      tips:[
        "Catch what you can actually do something about. Everything else should travel up to somewhere that can.",
        "A good message says what failed, where, and what the user can do. \"Error\" says none of those.",
        "Learn to read a stack trace properly — top frame, then the first line that belongs to your own package. It is the single highest-value debugging skill in this module."
      ],
      pitfall:"A catch block that does nothing. The failure becomes invisible, the program continues in a wrong state, and you lose an evening finding a bug the computer already told you about and you told it to be quiet."
    },
    {
      name:"The Console Menu & the Commit Habit",
      learning:"How to wire the pieces into a runnable loop, and the git rhythm you will keep for the remaining four modules.",
      searchFor:["java Scanner user input tutorial","java Scanner nextInt nextLine problem","java switch statement syntax","git add commit push workflow explained","git status and git diff before committing"],
      pseudocode:
`START application
  LOAD transactions from the CSV into the engine

  LOOP forever
    DISPLAY the menu
      1  add a transaction
      2  list all transactions
      3  show balance and totals
      4  show spending by category
      5  monthly report
      6  delete a transaction by id
      0  save and exit

    READ the choice
    IF the input is not a valid choice
      SAY so and LOOP again

    SWITCH on the choice
      -> READ any extra input needed
      -> VALIDATE it here, at the edge
      -> CALL the matching engine function
      -> PRINT the result
    END SWITCH

    IF the choice was exit
      SAVE to the CSV
      BREAK the loop
  END LOOP
END

THE GIT RHYTHM — after every slice that works,
not at the end of the day
  REVIEW what changed
  STAGE it
  COMMIT with a message saying what and why
  PUSH`,
      tips:[
        "Keep the menu thin: read input, call the engine, print the answer. Nothing else.",
        "Reading a number and then reading a line with the same scanner has a well-known trap. Search for it before you spend an hour on it.",
        "Commit when something works, not when everything is finished. Six honest commits in this module beat one commit called \"module 1\"."
      ],
      pitfall:"Letting business logic creep into the menu. Module 2 deletes the console entirely and replaces it with a web layer — everything you put in the menu is work you will have to move."
    }
  ],
  checklist:[
    "A GitHub repository exists, with a Java-appropriate ignore file committed before any build output ever was.",
    "Transaction, Category, TransactionType, User and FinanceEngine exist as separate, single-purpose types.",
    "Every field is private, and read/write accessors exist only where I made a deliberate decision to allow them.",
    "Amounts use a precision-safe decimal type, and dates use the modern date/time library.",
    "FinanceEngine computes total income, total expenses, balance, spending per category and a monthly report — and no arithmetic happens anywhere else.",
    "Transactions are written to a .csv file with a header row and a fixed column order.",
    "The app loads the existing .csv on start, treats a missing file as normal, and survives a malformed line by skipping it with a message.",
    "Every risky operation sits inside exception handling that reports something a human can act on. There are no empty catch blocks.",
    "The console menu drives every feature and the application runs end to end without crashing.",
    "The work is pushed to the main branch across several meaningful commits — not one."
  ],
  checkpoint:{
    summary:"Push the working console application to the main branch on GitHub. This is the foundation everything else is built on, and the first entry in a history that Modules 4 and 5 depend on.",
    verify:[
      "Clone your own repository into a fresh folder and run it. It must start with no data file present.",
      "Add several transactions, exit, restart, and confirm the data came back and the balance is unchanged.",
      "Check the file list on github.com — no build output, no IDE folders, no data file.",
      "Read your own commit history. If you cannot tell what happened from the messages, that is the lesson for Module 2."
    ]
  }
};

/* ================= MODULE 2 ================= */
const M2 = {
  id:"m2", number:2,
  title:"Evolution to Spring Boot & Database",
  subtitle:"The same logic, lifted into a layered REST API backed by a real relational database.",
  mission:"Migrate the console application's logic into a Spring Boot REST API, replace the CSV file with PostgreSQL through an ORM, and prove every endpoint from an external API client.",
  blueprint:[
    {type:"p",text:"Nothing about the <em>rules</em> changes in this module. A balance is still income minus expenses. What changes is everything around the rules: HTTP replaces the console, a database replaces the file, and the code splits into layers with strict one-way dependencies."},
    {type:"list",caption:"The path of a single request",items:[
      "<strong>Web layer</strong> — accepts the HTTP request, checks its shape, returns a status code. Knows nothing about the database.",
      "<strong>Service layer</strong> — the business rules. This is your FinanceEngine, reborn. Knows nothing about HTTP.",
      "<strong>Data layer</strong> — the repository. Talks to the database. Knows nothing about either of the above.",
      "A layer may call the layer directly beneath it. Never upward, never skipping one."
    ]},
    {type:"table",caption:"The endpoints to build",head:["Method","Path","Purpose","Success status"],rows:[
      ["GET","/api/transactions","List all transactions","200"],
      ["GET","/api/transactions/{id}","Fetch one, or 404","200"],
      ["POST","/api/transactions","Create from the request body","201"],
      ["PUT","/api/transactions/{id}","Replace an existing one","200"],
      ["DELETE","/api/transactions/{id}","Remove one","204"],
      ["GET","/api/transactions/summary","Balance, total income, total expenses","200"],
      ["GET","/api/transactions/by-category","Spending grouped by category","200"],
      ["GET","/api/transactions?year=&month=","The monthly report, as filter parameters","200"]
    ]},
    {type:"table",caption:"The entities and how they relate",head:["Entity","Fields","Relationship"],rows:[
      ["Transaction","id, amount, date, description, category, type, user","Many transactions belong to one user"],
      ["User","id, username (unique), email, password placeholder","One user has many transactions"]
    ]}
  ],
  concepts:[
    {
      name:"Bootstrapping the Spring Boot Project",
      learning:"What a starter dependency actually is, how a Spring Boot application boots a web server you never wrote, and where the generated project sits inside the repository you already have.",
      searchFor:["spring initializr how to use","what is a spring boot starter dependency","maven vs gradle for beginners","spring boot project structure explained","what does spring boot auto-configuration do"],
      pseudocode:
`GENERATE the project from the Spring initialiser
  CHOOSE the build tool, the Java version, and jar packaging
  ADD the starters for:
    the web layer
    data persistence
    the PostgreSQL driver
    request validation

PLACE the generated project INSIDE your existing repository
  this is an EVOLUTION of the same project
  DO NOT start a new repository

CREATE the entry-point class in the ROOT package
  its only job is to start the application
  everything else must live in packages BENEATH it

RUN it
  EXPECT the log to report an embedded server on a port
  VISIT that port -- an error page is fine,
  it means the server is alive

COMMIT the generated skeleton on its own
  a reviewable diff separates "generated" from "written by me"`,
      tips:[
        "Component scanning starts at the entry-point class's package and looks downward. Put a class beside it or above it and the framework will never find it — this is the single most common first-day confusion.",
        "Keep the Module 1 console classes in the repository until the API demonstrably works. They are your reference implementation.",
        "Read the startup log once, properly. It tells you the port, the database it connected to, and the endpoints it mapped."
      ],
      pitfall:"Creating a brand new repository for the Spring version. Same repository, new chapter — the whole point is a history that shows the evolution."
    },
    {
      name:"Layered Architecture & Dependency Injection",
      learning:"Why the code splits into controller, service and repository layers, and how the framework supplies each layer with the one beneath it instead of you constructing them by hand.",
      searchFor:["spring boot layered architecture controller service repository","separation of concerns explained","spring dependency injection constructor vs field injection","what is a spring bean","why is field injection discouraged"],
      pseudocode:
`PACKAGE STRUCTURE beneath the root package
  model        the entities
  repository   the data-access interfaces
  service      the business rules
  controller   the web layer
  dto          the request and response shapes (Module 3)
  config       framework configuration

DEPENDENCY DIRECTION
  controller ---> service ---> repository ---> database
  and NEVER the other way

HOW A LAYER GETS ITS DEPENDENCY
  DECLARE the thing it needs as a constructor parameter
  MARK the class so the framework manages it
  THE FRAMEWORK supplies the instance at startup
  YOU never construct these by hand

WHY CONSTRUCTOR INJECTION
  the dependencies are visible in one place
  the object cannot exist half-wired
  it can be built manually in a test without the framework`,
      tips:[
        "If a controller method is more than a few lines, logic has leaked upward into the wrong layer. Move it down.",
        "There is a shortcut annotation that generates the constructor for you. Write the constructor by hand first so you know what the shortcut is hiding.",
        "The data layer must never mention HTTP, and the web layer must never contain a calculation. Those two sentences are the whole architecture."
      ],
      pitfall:"The fat controller — request parsing, business rules and database calls in one method. It works, and it is untestable, unreusable, and the reason Module 3 will be painful."
    },
    {
      name:"REST Controllers & Routing",
      learning:"How HTTP verbs and URL paths map onto methods, how values are pulled out of the path and the query string, and how to choose a status code that tells the truth.",
      searchFor:["spring rest controller annotation tutorial","spring GetMapping PostMapping PutMapping DeleteMapping","rest api resource naming conventions","http status codes 200 201 204 400 404 explained","spring path variable vs request param","spring ResponseEntity tutorial"],
      pseudocode:
`CONTROLLER for the "transactions" resource, mounted at /api/transactions

  ON GET "/"
    ASK the service for the collection
    RETURN it with status 200

  ON GET "/{id}"
    TAKE id FROM THE PATH
    ASK the service
    IF present -> 200 with the body
    IF absent  -> 404 with no body

  ON POST "/"
    TAKE the object FROM THE REQUEST BODY
    VALIDATE its shape
    ASK the service to create it
    RETURN 201, and the location of the new resource in a header

  ON PUT "/{id}"     -> replace; 200 or 404
  ON DELETE "/{id}"  -> remove;  204 or 404

  ON GET "/summary"
    RETURN the totals object with status 200

  ON GET "/" WITH optional year and month QUERY PARAMETERS
    IF both are supplied -> return that month only
    IF neither -> return everything

EVERY method
  DELEGATES to the service immediately
  ONLY translates the service's answer into HTTP`,
      tips:[
        "Nouns in the path, verbs in the HTTP method. A path containing \"getAll\" or \"deleteTransaction\" means the design has gone wrong.",
        "A 201 response should tell the client where the new resource lives. Research the Location header.",
        "Namespace everything under /api from the start. Retrofitting a prefix once clients exist is a breaking change."
      ],
      pitfall:"Returning 200 for everything, including failures. The client cannot distinguish success from a handled error without parsing the body, which defeats the purpose of status codes."
    },
    {
      name:"Entities & Object-Relational Mapping",
      learning:"How a Java class becomes a database table, a field becomes a column, and a reference becomes a foreign key — and what the ORM is doing on your behalf.",
      searchFor:["what is an ORM and why use one","jpa entity annotation tutorial","jpa GeneratedValue id strategies compared","jpa OneToMany ManyToOne relationship mapping","jpa enumerated string vs ordinal","hibernate ddl-auto values explained","jpa column precision and scale for decimals"],
      pseudocode:
`MARK Transaction as a persistent entity

  DECLARE id as the primary key, generated by the database
    (research the strategies -- they are not equivalent
     and PostgreSQL has a preferred one)

  MAP each field to a column
    amount      -> a decimal column with EXPLICIT precision and scale
    date        -> a date column
    description -> text, with a sensible maximum length
    category    -> store the enum BY NAME, never by position
    type        -> store the enum BY NAME, never by position

  DECLARE the relationship
    MANY transactions belong to ONE user
    the foreign key lives on this side

MARK User as a persistent entity
  id, username (UNIQUE), email, password field (real hashing: Module 3)
  DECLARE the inverse: ONE user has MANY transactions

SCHEMA STRATEGY
  WHILE DEVELOPING  -> let the framework generate the schema
  BEFORE PRODUCTION -> switch to versioned migrations
    (research Flyway or Liquibase -- not required to finish
     this course, but know that generation is not a real answer)

ALSO
  a persistent entity needs a no-argument constructor
  the framework requires it -- find out why before you delete it`,
      tips:[
        "Store enums by name. Storing them by position means inserting a new value into the middle of the enum silently rewrites the meaning of every historical row.",
        "Be explicit about decimal precision and scale, or the column is created with a default that quietly loses the exactness you fought for in Module 1.",
        "Turn on SQL logging and read the statements the ORM generates at least once. It stops being magic and starts being a tool."
      ],
      pitfall:"Persisting enums by ordinal position. It works perfectly right up until someone reorders the enum, and then every historical record means something different, with no error anywhere."
    },
    {
      name:"Repositories — Queries Without Writing SQL",
      learning:"What a repository abstraction gives you for free, how a method name is turned into a query, and when to write the query yourself instead.",
      searchFor:["spring data jpa repository interface tutorial","spring data jpa derived query method naming rules","spring data jpa Query annotation JPQL","CrudRepository vs JpaRepository difference","spring data jpa pagination Pageable"],
      pseudocode:
`DECLARE a repository INTERFACE for Transaction
  INHERIT the standard save / find / delete / count operations
  YOU WRITE NO IMPLEMENTATION -- the framework provides it

DECLARE finder methods by NAMING them after the question:
  find every transaction belonging to a given user
  find every transaction for a user between two dates
  find every transaction for a user with a given category
  find ONE transaction by its id AND its owner
    <- this one is the seed of Module 3's security. Add it now.

THE FRAMEWORK derives the query FROM THE METHOD NAME
  the naming convention is strict -- look it up, do not guess

IF a question is too complex to express as a name
  WRITE the query explicitly and attach it to the method

DECLARE a repository for User
  find one by username
  check whether a username already exists`,
      tips:[
        "Design every finder to take the owner as a parameter now. Module 3 requires it, and retrofitting means touching every method.",
        "Check the logged SQL for a derived method once, so you can see exactly what your method name produced.",
        "For anything that could grow unbounded, research pagination before the list gets long rather than after."
      ],
      pitfall:"Fetching every row and filtering in Java. It works with ten transactions and dies with a hundred thousand — and the fix is a rewrite of every service method."
    },
    {
      name:"Configuration & the Local Database",
      learning:"How to connect the application to a real PostgreSQL instance, and how to externalise configuration so no credential is ever written into a tracked file.",
      searchFor:["install postgresql locally","postgresql create database and user","spring boot datasource configuration properties","jdbc connection url format postgresql","spring boot profiles dev and prod","spring boot read environment variables in properties"],
      pseudocode:
`LOCALLY
  INSTALL PostgreSQL
  CREATE a database for this application
  CREATE a user with rights on it
  CONNECT with a database client FIRST
    -- prove the database works BEFORE blaming your Java

IN the application configuration file, DEFINE
  the connection url    -> host, port, database name
  the username          -> READ FROM AN ENVIRONMENT VARIABLE
  the password          -> READ FROM AN ENVIRONMENT VARIABLE
  the schema strategy   -> generate, while developing
  SQL logging           -> on, while developing

THE RULE
  NEVER write a real credential into a file that git tracks

  INSTEAD
    KEEP secrets in environment variables
    COMMIT an EXAMPLE configuration file listing every
      required variable with placeholder values
    ADD the real local configuration to the ignore file

RESEARCH profiles
  one configuration for local development
  another for production
  Module 5 depends on you having done this properly`,
      tips:[
        "Build the environment-variable habit now. Module 5 deploys onto a platform where that is the only way configuration arrives.",
        "When the application will not start, read the FIRST exception in the chain, not the last. The root cause is at the bottom.",
        "If you have ever pushed a real credential, rotate it. Deleting it from the current files does not remove it from the history."
      ],
      pitfall:"Committing a working password because it is \"only local\". It ends up in the public history, and the habit follows you to the credentials that matter."
    },
    {
      name:"Migrating the Engine & Verifying From Outside",
      learning:"How to port logic between layers without changing what it means, and how to prove an API works by calling it as a client rather than trusting that it compiles.",
      searchFor:["postman send post request with json body","postman collections and environments tutorial","spring boot request body validation annotations","curl post json example","how to test a rest api manually"],
      pseudocode:
`FOR EACH calculation in the old FinanceEngine
  MOVE it into the service layer, MEANING UNCHANGED
  REPLACE "loop over the in-memory list"
     WITH "ask the repository a question"
  KEEP the rule identical -- same inputs, same answers

THE REGRESSION TEST YOU ALREADY HAVE
  the balance the console app printed in Module 1
  and the balance this API returns
  MUST AGREE for the same data

VERIFY FROM OUTSIDE, in this order
  CREATE a transaction via POST      -> EXPECT 201
  LIST via GET                       -> EXPECT it present
  FETCH it by id                     -> EXPECT 200
  FETCH a made-up id                 -> EXPECT 404
  POST an invalid body
    (negative amount, missing date)  -> EXPECT 400, not 500
  GET the summary                    -> EXPECT the balance to match
                                        a calculation you did by hand
  DELETE it                          -> EXPECT 204
  FETCH it again                     -> EXPECT 404

SAVE these as a collection and COMMIT it to the repository
  you will re-run this exact set against production in Module 5`,
      tips:[
        "Saving the request collection into the repository costs ten minutes now and saves an hour in every later module.",
        "An invalid request should produce 400, not a 500 with a stack trace. If it does not yet, that is Module 3's global exception handling foreshadowing itself.",
        "Delete the CSV code only after the API is proven. Keeping a working fallback while you migrate is a professional habit, not a lack of confidence."
      ],
      pitfall:"Concluding it works because the application started. Started is not working — only a request from outside proves anything."
    }
  ],
  checklist:[
    "A Spring Boot project lives inside the same repository as the Module 1 console app, and the history shows the evolution.",
    "The code splits into controller, service, repository and model packages, with dependencies pointing one way only.",
    "Dependencies are supplied through constructors — not constructed by hand, not injected into fields.",
    "Transaction and User are mapped entities with an explicit relationship, and enums are stored by name.",
    "Decimal columns declare explicit precision and scale.",
    "Repository interfaces expose the finders the service needs, including at least one that filters by owner.",
    "The application connects to a local PostgreSQL database, with credentials supplied by environment variables and no secret in any tracked file.",
    "Every endpoint in the blueprint table exists and returns the status code listed there.",
    "An invalid request body produces 400 and a missing resource produces 404 — neither produces a 500.",
    "Every calculation from Module 1 now lives in the service layer and returns the same answers it did before.",
    "A saved API client collection covering the full create/read/update/delete journey is committed to the repository.",
    "The work is committed in meaningful steps and pushed to main."
  ],
  checkpoint:{
    summary:"Prove every endpoint from Postman or an equivalent client, commit the saved collection alongside the code, and push to GitHub.",
    verify:[
      "Stop the application, restart it, and confirm the data is still there — that is the database doing its job, not memory.",
      "Run the whole create → read → update → delete journey without touching your IDE.",
      "Confirm the summary endpoint's balance matches a total you calculated by hand.",
      "Clone the repository fresh, set the environment variables, and start it. If it needs anything undocumented, document it now."
    ]
  }
};

/* ================= MODULE 3 ================= */
const M3 = {
  id:"m3", number:3,
  title:"Security & Architecture Refinement",
  subtitle:"Identity, ownership, and a boundary between what you store and what you expose.",
  mission:"Secure the API so a user can only ever see and modify their own transactions, authenticate with tokens rather than sessions, separate the wire format from the database with DTOs, and handle every failure in one consistent place.",
  blueprint:[
    {type:"p",text:"This is the module where a hobby project becomes something you could defend in a code review. The mission is one sentence: <strong>it must be structurally impossible for one user to read another user's data</strong> — not merely inconvenient, and not dependent on the client behaving well."},
    {type:"table",caption:"The endpoints this module adds",head:["Method","Path","Purpose","Auth required"],rows:[
      ["POST","/api/auth/register","Create an account","No"],
      ["POST","/api/auth/login","Exchange credentials for a token","No"],
      ["GET","/api/auth/me","Return the current user's profile","Yes"],
      ["any","/api/transactions/**","Everything from Module 2","Yes — and scoped to the caller"]
    ]},
    {type:"table",caption:"The shapes on the wire — and what they must never contain",head:["Shape","Direction","Carries","Never carries"],rows:[
      ["RegisterRequest","In","username, email, password","id, roles"],
      ["LoginRequest","In","username, password","anything else"],
      ["AuthResponse","Out","token, expiry, username","the password, the hash"],
      ["TransactionRequest","In","amount, date, description, category, type","id, owner — the server decides both"],
      ["TransactionResponse","Out","id, amount, date, description, category, type","owner internals, database-only fields"],
      ["UserResponse","Out","id, username, email","the password hash, ever, under any circumstances"]
    ]},
    {type:"table",caption:"Status codes — decide these once, then apply them everywhere",head:["Situation","Code","Meaning"],rows:[
      ["No token, or an invalid one","401","I do not know who you are"],
      ["Valid token, forbidden action","403","I know who you are, and no"],
      ["Requesting someone else's record","404","Deliberate: as far as you are concerned, it does not exist"],
      ["Request body fails validation","400","Your request is malformed"],
      ["Username already taken","409","Conflicts with existing state"],
      ["Anything unhandled","500","Generic message out, full detail to the log only"]
    ]}
  ],
  concepts:[
    {
      name:"Authentication vs Authorization",
      learning:"Two genuinely different questions — \"who are you?\" and \"are you allowed to do this?\" — and why treating them as one is how data leaks.",
      searchFor:["authentication vs authorization difference","spring security architecture overview","spring security filter chain explained","stateless vs session based authentication","spring security 401 vs 403"],
      pseudocode:
`AUTHENTICATION  answers "who is making this request?"
                establishes an identity from credentials or a token

AUTHORIZATION   answers "may THIS identity do THIS thing
                to THIS specific object?"
                checks permission AND ownership

THE REQUEST PIPELINE

  INCOMING request
    IF the path is public (register, login, health)
      LET IT THROUGH untouched

    OTHERWISE
      EXTRACT the credential
      ESTABLISH the identity                 [authentication]
      IF no identity can be established -> 401

      REACH the controller, then the service
        CHECK the caller owns the target     [authorization]
        IF not -> a deliberate 404 or 403

CONFIGURE the security rules DENY-BY-DEFAULT
  everything requires authentication
  THEN open the specific public paths
  -- the opposite order leaves new endpoints open by accident`,
      tips:[
        "Authentication happens once per request, in a filter. Authorization happens per object, in the service, every time.",
        "Decide 403 versus 404 for someone else's data now and apply it everywhere. 404 hides whether the record exists at all, which is usually what you want.",
        "Deny-by-default means the endpoint you add in six months is secure before you have thought about it."
      ],
      pitfall:"Configuring permissive rules first and locking things down later. You will forget one path, and it will be a path that returns data."
    },
    {
      name:"Password Storage & Hashing",
      learning:"Why a password is never stored — only verified — and what a deliberately slow, salted hash buys you that a fast one does not.",
      searchFor:["password hashing vs encryption difference","what is bcrypt salt and work factor","spring security PasswordEncoder BCrypt configuration","owasp password storage cheat sheet","user enumeration vulnerability login"],
      pseudocode:
`ON REGISTRATION
  VALIDATE the request shape
  CHECK the username is not taken -> IF taken, 409
  HASH the password with a deliberately SLOW, SALTED algorithm
  STORE ONLY the hash
    never the password
    never anything reversible
  RETURN 201, with a response containing NO password field

ON LOGIN
  LOAD the user by username
  COMPARE the supplied password against the stored hash
    using the hashing library's OWN verification function
    -- never by hashing again and comparing text yourself

  IF the user does not exist  -> generic failure
  IF the password is wrong    -> THE SAME generic failure
    identical message, identical status, similar timing
    -- otherwise an attacker can discover which usernames exist

  ON SUCCESS -> issue a token (next concept)

NEVER
  log the incoming password
  return the hash in any response
  email a password back to anyone`,
      tips:[
        "The library generates and stores the salt inside the hash string for you. If you are managing salts by hand, you have the wrong tool.",
        "The work factor is a deliberate cost. Research what it means that verifying a password is supposed to take a noticeable fraction of a second.",
        "Register a user and look at the row in the database. Seeing a hash where you expected a password is the moment this concept lands."
      ],
      pitfall:"Using a fast general-purpose digest function. It is engineered for speed, which is precisely the property that makes it useless for passwords."
    },
    {
      name:"Issuing the Token",
      learning:"What a JSON Web Token actually is — segments, claims and a signature — what belongs inside one, and the critical fact that it is signed but not secret.",
      searchFor:["jwt structure header payload signature explained","jwt claims sub iat exp","jwt signing HS256 vs RS256","jwt vs session cookie tradeoffs","jjwt java library getting started","how to generate a secure random secret key"],
      pseudocode:
`ON SUCCESSFUL LOGIN

  BUILD a token containing
    subject    -> the user identifier
    issued-at  -> now
    expiry     -> a SHORT window: minutes to hours, never months
    any roles the application needs to check later

  SIGN it with a secret read from an ENVIRONMENT VARIABLE
    the secret must be long and randomly generated
    it must NEVER appear in a tracked file

  RETURN the token in the response body,
    with its expiry, so the client knows when to re-authenticate

THE FACT THAT SURPRISES EVERYONE
  a token is SIGNED, not ENCRYPTED
  anyone holding it can read every claim inside it
  the signature proves it was not ALTERED
  it does NOT make the contents private

  THEREFORE: PUT NOTHING SECRET INSIDE IT
    no password, no hash, no email, no personal data
    an identifier and an expiry are enough

DO THIS ONCE
  paste your own token into a public decoder
  READ your claims sitting there in plain text`,
      tips:[
        "Generate the signing secret with a proper random generator, not by typing letters. Research an appropriate length for the algorithm you chose.",
        "A long expiry is convenience today and an incident later — a stolen token is valid until it expires and you have no way to revoke it.",
        "Note what you are giving up versus sessions: no server-side state, and therefore no easy logout. Research refresh tokens to see how real systems solve it."
      ],
      pitfall:"Putting private data in the payload because it \"looks encrypted\". Those segments are base64, not ciphertext — any holder of the token can read all of it."
    },
    {
      name:"Validating the Token on Every Request",
      learning:"How a filter intercepts a request before it reaches any controller, and how an established identity gets attached to the request so the rest of the application can use it.",
      searchFor:["spring security OncePerRequestFilter custom jwt filter","spring SecurityContextHolder explained","spring security SecurityFilterChain configuration bean","jwt expired signature exception handling","spring security addFilterBefore UsernamePasswordAuthenticationFilter","spring security stateless session policy"],
      pseudocode:
`A FILTER that runs BEFORE every controller, once per request

  READ the authorization header
  IF absent, or not the expected scheme
    CONTINUE unauthenticated -- do not reject here;
    let the security rules decide whether that path allowed it

  OTHERWISE
    EXTRACT the token
    VERIFY THE SIGNATURE       -> IF invalid, reject
    VERIFY IT HAS NOT EXPIRED  -> IF expired, reject clearly
    LOAD the user named in the subject claim
    IF that user no longer exists -> reject
    ATTACH the established identity to the request context

  CONTINUE down the chain

SECURITY CONFIGURATION
  DECLARE the application STATELESS -- no server-side session
  PERMIT: register, login, health
  REQUIRE authentication for EVERYTHING else
  REGISTER this filter BEFORE the username/password filter
  DISABLE the form-login and CSRF defaults that assume
    a browser session (understand WHY before you disable them)

TEST ALL FOUR CASES DELIBERATELY
  no token         -> 401
  garbage token    -> 401
  expired token    -> 401, distinguishable in the log
  valid token      -> the request proceeds`,
      tips:[
        "Verifying that a token parses is not the same as verifying its signature. Confirm you are calling the verifying parse method, not the lenient one.",
        "Failure responses must not explain more than necessary. \"Invalid or expired token\" is enough for the client; the log gets the detail.",
        "Confirm the identity actually arrived: have a protected endpoint return the current username before you build anything on top of it."
      ],
      pitfall:"Reading the claims without validating the signature. An attacker then edits the subject claim to any username they like, and your API believes them completely."
    },
    {
      name:"Ownership — Scoping Every Query to the Caller",
      learning:"The actual mission of this module: making it structurally impossible for one user to reach another user's data, rather than merely unlikely.",
      searchFor:["insecure direct object reference IDOR explained","owasp broken access control","spring security get currently authenticated user","spring data jpa filter query by owner","multi tenancy data isolation basics"],
      pseudocode:
`IN EVERY service method that touches transactions

  TAKE the caller's identity FROM THE REQUEST CONTEXT
  NEVER take an owner id from the request body,
        the URL, or a query parameter
  -- that single rule is most of this module

READING A COLLECTION
  QUERY "transactions WHERE owner = caller"
  NOT   "all transactions, then filter in memory"

CREATING
  STAMP the new record with the caller as its owner
  IGNORE any owner the client tried to send

READING ONE / UPDATING / DELETING
  LOAD BY id AND owner IN A SINGLE QUERY
  IF nothing comes back -> not-found
    the response is IDENTICAL whether the record
    never existed or belongs to somebody else

THE PROOF -- actually run this
  REGISTER user A, create transactions as A, note an id
  REGISTER user B, log in as B
  REQUEST A's transaction id USING B's token
  THE CORRECT RESULT: the API behaves as though
  that record does not exist`,
      tips:[
        "Loading by id and then checking the owner in Java is one forgotten check away from a leak. Filtering inside the query cannot be forgotten.",
        "Run the two-user test after every change in this module. It is the only test that verifies the module's actual mission.",
        "This vulnerability class has a name — insecure direct object reference. Read about it; you will recognise it in other people's code for the rest of your career."
      ],
      pitfall:"Trusting a user id sent by the client. That is the entire vulnerability, in one line, and it is in an enormous amount of production code."
    },
    {
      name:"DTOs — Separating the Wire From the Database",
      learning:"Why the shape you store is not the shape you expose, what mapping between them costs, and the two distinct bugs it prevents.",
      searchFor:["what is a DTO and why use it","entity to dto mapping java manual vs mapstruct","java record class tutorial","spring boot bean validation NotNull Positive annotations","mass assignment over-posting vulnerability","jackson json serialization spring boot"],
      pseudocode:
`DEFINE SEPARATE SHAPES for in and out
  see the blueprint table above for exactly what each carries

VALIDATE the incoming shape AT THE BOUNDARY
  amount      must be present and strictly positive
  date        must be present, and not absurdly in the future
  category    must be one of the known values
  type        must be one of the known values
  description length-limited
  MARK the controller parameter as validated, so the framework
    rejects a bad body BEFORE your code runs

MAP
  request -> entity   on the way in
             the SERVER supplies id and owner
  entity  -> response on the way out
             drop everything the client has no business seeing

THE TWO BUGS THIS PREVENTS
  1  LEAKING OUT
     returning the entity exposes every field it has,
     including ones you add later without thinking
  2  OVER-POSTING IN
     accepting the entity lets a client set fields it
     should never control -- such as the owner`,
      tips:[
        "Java records are ideal for these shapes: immutable, declared in one line, and obviously data rather than behaviour.",
        "Validating at the boundary means every service method can assume clean input. That assumption simplifies everything beneath it.",
        "Write the mapping by hand first. Mapping libraries are worth adopting later, once you know exactly what they are doing for you."
      ],
      pitfall:"Returning entities straight from controllers because it works. It works until someone adds a field to the entity — and then it is leaking that field to every client, with no code change to review."
    },
    {
      name:"Global Exception Handling",
      learning:"How to turn every exception into a consistent, honest HTTP response in one place — and how to give the client what it needs without handing an attacker a map of your internals.",
      searchFor:["spring ControllerAdvice ExceptionHandler tutorial","rest api error response format best practice","problem details rfc 7807","spring handle MethodArgumentNotValidException field errors","spring boot hide stack trace from response","java custom runtime exception hierarchy"],
      pseudocode:
`DEFINE ONE error response shape, used by every failure
  timestamp, status, error, message, path
  OPTIONALLY a list of field-level validation errors

DEFINE your own domain failure types
  "transaction not found"
  "username already taken"
  "not permitted"
  -- these carry meaning the framework's generic types do not

DEFINE ONE global handler that catches across all controllers

  ON "not found"              -> 404, the shape
  ON validation failure       -> 400, the shape PLUS
                                 one entry per invalid field
  ON malformed JSON           -> 400
  ON authentication failure   -> 401
  ON permission denied        -> 403 (or 404, per your decision)
  ON "username taken"         -> 409
  ON ANYTHING ELSE            -> 500 with a GENERIC message,
                                 and the FULL detail written
                                 to the log, never to the response

THE RULE
  the CLIENT gets exactly what it needs to fix its request
  the LOG gets the stack trace
  never the other way round

TEST every branch on purpose -- one request each`,
      tips:[
        "One error shape means a client writes error parsing once. Inconsistent errors are one of the clearest signals of an unfinished API.",
        "There is a published standard for HTTP problem responses. Read it, then either follow it or knowingly choose not to.",
        "Include something that correlates a response to a log entry. When a user reports \"it said 500\", you want to find that exact request."
      ],
      pitfall:"Leaking stack traces, SQL, or class names in responses. It is a free reconnaissance report for anyone probing your API, and it is on by default in more frameworks than you would expect."
    }
  ],
  checklist:[
    "Registration hashes passwords with a deliberately slow, salted algorithm and stores only the hash.",
    "Login returns the same generic failure for an unknown username and for a wrong password.",
    "A successful login returns a signed token with a short expiry, and the signing secret comes from an environment variable.",
    "The token payload contains no private data — I have decoded my own token and confirmed it.",
    "A filter validates the signature and the expiry on every request and attaches the identity to the request context.",
    "The security configuration is deny-by-default, with only register, login and health left public.",
    "Requests with no token, a forged token, and an expired token all receive 401.",
    "Every transaction query filters by the authenticated owner inside the query itself — never in memory, never from a client-supplied id.",
    "I have registered two users and confirmed that each is unable to read, update or delete the other's data.",
    "Separate request and response shapes exist; no entity is accepted from or returned to a client.",
    "Incoming bodies are validated at the boundary, and invalid ones produce 400 with per-field detail.",
    "A single global handler produces one consistent error shape, and no response contains a stack trace.",
    "The work is committed and pushed, and no secret appears anywhere in the repository or its history."
  ],
  checkpoint:{
    summary:"Every transaction endpoint requires a valid token and returns only the caller's own data. Commit and push.",
    verify:[
      "Call any transaction endpoint with no Authorization header. It must return 401.",
      "Run the full two-user test: A cannot see, edit or delete anything belonging to B, in either direction.",
      "Send a body with a negative amount and a missing date. Expect 400 naming both fields — not a 500.",
      "Search the whole repository, including its history, for your signing secret and database password. Neither should be findable."
    ]
  }
};

/* ================= MODULE 4 ================= */
const M4 = {
  id:"m4", number:4,
  title:"GitHub Actions — Continuous Integration",
  subtitle:"A machine that checks your work on every push, and a test suite worth checking.",
  mission:"Automate the testing and build process so that broken code cannot quietly reach the main branch. Write real tests for the calculation engine, then make a pipeline run them on every push and pull request.",
  blueprint:[
    {type:"p",text:"Everything so far has been verified by you, on your machine, when you remembered to. This module replaces that with a clean machine that checks out your code, builds it from nothing, runs every test, and marks the commit pass or fail — every single time, whether you remember or not."},
    {type:"list",caption:"What you will add to the repository",items:[
      "A test source folder containing real tests for the calculation logic.",
      "A workflow file under <code>.github/workflows/</code>, ending in <code>.yml</code>.",
      "A branch protection rule on <code>main</code> that requires the build to pass before a merge.",
      "A status badge in the README, so the project's health is visible on its front page."
    ]},
    {type:"table",caption:"The pipeline stages, in order",head:["Stage","What happens","Goes red when"],rows:[
      ["Checkout","A clean runner fetches your repository at that commit","Almost never — if it fails, the workflow file is wrong"],
      ["Toolchain setup","The declared Java version is installed and dependencies are cached","The version you declared does not exist or does not match the build"],
      ["Build & test","The build tool compiles everything and runs every test","Compilation fails, or any test fails"],
      ["Package","The deployable archive is produced","Packaging configuration is broken"],
      ["Upload","The archive is stored as a downloadable artifact","The path you named does not match what was built"]
    ]}
  ],
  concepts:[
    {
      name:"What Continuous Integration Is, and Why",
      learning:"The idea that a machine — not you, and not your memory — verifies every change, and why that changes how a team can work.",
      searchFor:["what is continuous integration","continuous integration vs continuous delivery vs deployment","why is CI important for small projects","github actions vs jenkins vs gitlab ci","what is a build runner"],
      pseudocode:
`WITHOUT CI
  developer pushes
    -> nobody knows whether it builds
    -> nobody knows whether the tests still pass
    -> the break is discovered days later by someone else

WITH CI
  developer pushes
    -> a CLEAN machine checks out that exact commit
    -> installs the exact declared toolchain
    -> builds from scratch, with nothing cached from a laptop
    -> runs every test
    -> reports PASS or FAIL, attached to the commit

  IF it fails, the commit is VISIBLY broken and gets fixed NOW

WHY "A CLEAN MACHINE" IS THE WHOLE POINT
  it catches everything installed on your computer
  that you forgot to declare in the project
  -- a tool, an environment variable, a file you never committed`,
      tips:[
        "Set CI up while the project is small and the pipeline is thirty seconds long. Adding it to a large project is a much worse afternoon.",
        "A red badge on main is an emergency, not a to-do item. That norm is what makes CI worth anything.",
        "Continuous integration, delivery and deployment are three different things. Know which one you are building — this module is integration only."
      ],
      pitfall:"Treating a failing pipeline as background noise. A permanently red pipeline is exactly as useful as no pipeline, and it costs more."
    },
    {
      name:"Writing Your First Unit Test",
      learning:"What a unit test actually is, how to isolate the piece under test from everything around it, and the arrange–act–assert rhythm that every test follows.",
      searchFor:["junit 5 getting started tutorial","junit 5 Test annotation and assertions","arrange act assert pattern","unit test vs integration test difference","junit 5 test naming conventions","spring boot test dependency what is included"],
      pseudocode:
`TEST the calculation engine ONLY
  no database, no HTTP, no files, no framework
  -- this is what makes it a UNIT test, and what makes it fast

TEST "balance is income minus expenses"
  ARRANGE
    BUILD an engine holding a known set of transactions:
      two income entries and three expenses,
      with amounts you can add up in your head
  ACT
    CALL the balance calculation
  ASSERT
    the result EQUALS the number you worked out by hand

WRITE THESE FOUR AT MINIMUM
  "balance is income minus expenses"
  "balance of an empty engine is zero"
  "spending by category groups and sums correctly"
  "a monthly report excludes transactions outside that month"

IF a class is hard to test in isolation
  that is a DESIGN signal, not a testing problem
  -- it usually means a layer is doing two jobs`,
      tips:[
        "Name the test as a sentence describing behaviour, not after the method it calls. The failure report should read like a specification.",
        "The first test is by far the hardest. After it runs green, the rest are variations on a shape you already have.",
        "Your Module 2 layering pays off here: a service that takes its repository through the constructor can be handed a simple stand-in and tested without a database."
      ],
      pitfall:"A test that asserts nothing, or asserts that the code does whatever the code does. A test must be capable of failing, or it is a very slow comment."
    },
    {
      name:"Assertions, Edge Cases & Watching a Test Fail",
      learning:"How to choose the right assertion, which cases are actually worth testing, and why you should deliberately break your code once.",
      searchFor:["junit 5 assertions list assertEquals assertTrue","junit 5 assertThrows example","junit 5 parameterized test tutorial","what is a good test coverage percentage","edge case testing examples","how to assert on BigDecimal in tests"],
      pseudocode:
`FOR the calculation you trust least, ASSERT four cases

  THE NORMAL CASE     a realistic mix, a known answer
  THE EMPTY CASE      no transactions -> zero, not a crash
  THE BOUNDARY CASE   the first and last day of the month
                      both belong to that month
  THE FAILURE CASE    creating a transaction with a negative
                      amount RAISES an error
                      (assert on the error, not on a return value)

THEN, ONCE, FOR EVERY TEST YOU WRITE
  BREAK the production code on purpose
    change a plus to a minus
  RUN the test
  CONFIRM IT GOES RED
  RESTORE the code

  -- a test you have never seen fail is not yet a test,
     it is an assumption with a green tick next to it`,
      tips:[
        "Comparing decimals in an assertion has the same trap as Module 1 — equality considers scale. Use the comparison, or normalise the scale first.",
        "Assert on values, not on \"it did not throw\". A method that silently returns the wrong number passes that kind of test forever.",
        "Six tests over the logic where being wrong would cost you money beat sixty tests over getters and a high coverage percentage."
      ],
      pitfall:"Chasing a coverage number by testing trivial code. Coverage measures which lines ran, not whether anything was actually verified."
    },
    {
      name:"Anatomy of a Workflow File",
      learning:"How a CI workflow is structured — events, jobs, runners and steps — and the YAML rules that break almost everyone's first attempt.",
      searchFor:["yaml syntax basics indentation rules","github actions workflow syntax reference","github actions jobs steps and runners explained","github actions setup-java action","github actions cache maven gradle dependencies","yaml lint validator online"],
      pseudocode:
`THE FILE lives at  .github/workflows/  and ends in .yml
  the folder name and the extension are both mandatory

WORKFLOW
  NAME it something readable -- this is what appears in the UI

  TRIGGERS
    ON push to the main branch
    ON pull request targeting the main branch

  JOB "build"
    RUNS ON a fresh Linux runner

    STEPS, in order:
      1  CHECK OUT the repository
           use the official published action
      2  SET UP Java
           declare the SAME version your build declares
           declare the distribution
           ENABLE dependency caching, keyed on your build file
      3  RUN the build tool's full build-and-test command
           the SAME command you run locally -- no CI-only path
      4  UPLOAD the produced archive as an artifact
           name the path exactly as your build produces it

YAML RULES THAT WILL BITE YOU
  indentation is significant
  TABS ARE FORBIDDEN -- spaces only
  a colon inside an unquoted value breaks the parse`,
      tips:[
        "Nearly every first failure is whitespace. Paste the file into a YAML validator before you push it and save yourself three commits.",
        "The Java version in the workflow must match the one your build declares. A mismatch produces a confusing compilation error, not a clear message.",
        "Use the official published actions for checkout and toolchain setup, and pin them to a major version rather than tracking whatever is newest."
      ],
      pitfall:"A tab character, or the file in the wrong folder. The workflow then simply never runs, and there is no error to read — check that the Actions tab lists it at all before debugging anything else."
    },
    {
      name:"Triggers, Branch Protection & the Feedback Loop",
      learning:"How to choose when CI runs, and how to make its verdict binding rather than decorative.",
      searchFor:["github actions on push on pull_request triggers","github branch protection rules required status checks","github actions workflow status badge markdown","trunk based development vs feature branches","github pull request review process"],
      pseudocode:
`CHOOSE THE TRIGGERS
  ON push to main         -> main is always verified
  ON pull request to main -> problems are caught BEFORE merge
  (the second is the one that actually prevents breakage)

THEN MAKE THE VERDICT BINDING
  ENABLE branch protection on main
  REQUIRE the build check to pass before a merge is allowed
  -> broken code is now STRUCTURALLY unable to reach main
     the same shift as Module 3: from "unlikely" to "impossible"

ADOPT THE WORKFLOW, even working alone
  CREATE a branch for the change
  PUSH it and OPEN a pull request
  WATCH the check run against it
  MERGE only when it is green

ADD the status badge to the README
  -> the health of the project is visible on its front page

PROVE IT WORKS
  deliberately push a FAILING test on a branch
  CONFIRM the pull request refuses to merge
  fix it, and watch the block lift`,
      tips:[
        "Working on branches and opening pull requests to yourself feels like theatre for about a week, and then it feels like the only sane way to work.",
        "Keep the pipeline fast. A build that takes fifteen minutes is a build people start pushing around rather than waiting for.",
        "Protecting main is a repository setting, not something in the workflow file. Look for it in the repository's branch settings."
      ],
      pitfall:"A green pipeline nobody enforces. Without a required status check, it is a decoration that everyone learns to merge past."
    },
    {
      name:"Building the Deployable Artifact",
      learning:"What the build actually produces, why the same command must work on your machine and on the runner, and how this module hands its output directly to Module 5.",
      searchFor:["maven package vs install vs verify","gradle build task explained","spring boot executable jar structure","github actions upload-artifact action","reproducible builds why they matter","maven wrapper gradle wrapper purpose"],
      pseudocode:
`THE BUILD produces ONE self-contained archive
  your compiled classes
  every dependency
  an embedded web server
  -- runnable with a single command, no server to install

IN CI
  RUN THE SAME COMMAND you run locally
    no special CI-only build path, ever
  IF any test fails
    the archive is NOT produced and the job goes RED
  ON success
    UPLOAD the archive as a downloadable artifact

VERIFY BY HAND, ONCE
  DOWNLOAD the artifact CI produced
  RUN it on your own machine
  CONFIRM it starts and serves a request
  -- you have now proven CI produces something real

WHY THIS MATTERS FOR THE NEXT MODULE
  that archive is EXACTLY what Module 5 puts in a container
  the pipeline is already building your deployable`,
      tips:[
        "Commit the build wrapper if your build tool has one. It pins the build tool version so the runner and your laptop agree.",
        "Keep all build configuration in the repository, never in the CI provider's settings screen. Configuration that is not in git does not exist.",
        "If the build passes locally and fails on the runner, the runner is right — something is installed on your machine that the project never declared."
      ],
      pitfall:"A build that only works on your machine because of a locally installed tool or an environment variable set months ago. The clean runner is the honest judge, and this is exactly the failure it exists to catch."
    }
  ],
  checklist:[
    "A test source folder exists with at least four real unit tests over the calculation logic.",
    "The tests run without a database, without HTTP and without the framework starting.",
    "Each test asserts a specific expected value that I calculated by hand.",
    "Edge cases are covered: an empty engine, a month boundary, and an invalid transaction that must raise an error.",
    "I have broken the production code on purpose and watched every test go red, then restored it.",
    "A workflow file exists under .github/workflows/ and appears in the repository's Actions tab.",
    "The workflow triggers on push to main and on pull requests targeting main.",
    "The workflow checks out, sets up the same Java version the build declares, caches dependencies, and runs the full build-and-test command.",
    "The produced archive is uploaded as an artifact, and I have downloaded and run it successfully.",
    "Branch protection on main requires the build check to pass before merging.",
    "I have pushed a deliberately failing test on a branch and confirmed the pull request refused to merge.",
    "The status badge is in the README and shows green."
  ],
  checkpoint:{
    summary:"Push code and watch the GitHub Action build and test it successfully, producing the deployable archive.",
    verify:[
      "Open the Actions tab and read the log of a successful run from top to bottom, once.",
      "Download the artifact the run produced, run it locally, and confirm it serves a request.",
      "Open a pull request containing a failing test and confirm it is blocked from merging.",
      "Confirm the README badge is green and links to the workflow."
    ]
  }
};

/* ================= MODULE 5 ================= */
const M5 = {
  id:"m5", number:5,
  title:"Digital Ocean Deployment",
  subtitle:"Containers, managed infrastructure, and a push that becomes a running system.",
  mission:"Put the Spring Boot API and its PostgreSQL database on the internet, deployed straight from the GitHub repository, so a commit to main becomes a live change with no manual step.",
  blueprint:[
    {type:"p",text:"The finished chain reads: <strong>push → CI builds and tests → the platform builds an image → it starts → the health check passes → traffic switches to it.</strong> You will not log into a server at any point. If you find yourself wanting to, something in the configuration belongs in the repository instead."},
    {type:"table",caption:"Everything that must arrive as an environment variable",head:["Purpose","Secret?","Supplied by"],rows:[
      ["Database host, port and database name","No","The managed database's connection details"],
      ["Database username","Yes","The managed database"],
      ["Database password","Yes","The managed database — never typed into a file"],
      ["Token signing secret","Yes","Generated by you, stored only in the platform"],
      ["Active configuration profile","No","Set to your production profile"],
      ["The port to listen on","No","Assigned by the platform at runtime — read it, never hard-code it"]
    ]},
    {type:"list",caption:"What you will add to the repository",items:[
      "An image recipe file at the repository root, written as a multi-stage build.",
      "An ignore file for the image build, so local build output never gets copied in.",
      "A production configuration profile that reads every value from the environment.",
      "A health check endpoint the platform can poll.",
      "A README section listing every required environment variable, with no values."
    ]}
  ],
  concepts:[
    {
      name:"Why Containers Exist",
      learning:"What a container image is, how it differs from a virtual machine, and precisely which problem it solves between \"it builds in CI\" and \"it runs in production\".",
      searchFor:["what is a docker container vs virtual machine","docker image vs container difference","why use docker for java applications","what is a container registry","docker architecture overview"],
      pseudocode:
`THE PROBLEM
  your application needs a specific Java runtime
  the server has a different one, or none at all
  and every server is subtly different from every other

THE ANSWER
  ship the runtime WITH the application, as one unit

THE VOCABULARY
  IMAGE     a frozen, layered filesystem plus the command
            that starts the application. Immutable.
  CONTAINER a running instance of an image
  REGISTRY  where images are stored and pulled from

THE LIFECYCLE
  BUILD  an image from a recipe file
  RUN    it locally and confirm identical behaviour
  PUSH   it to a registry -- or let the platform build it
         from your repository, which is what you will do
  THE PLATFORM pulls and runs it

THE PROMISE
  if it runs in the container on your laptop,
  it runs in the same container in production
  -- because it is literally the same filesystem`,
      tips:[
        "A container is a packaged process sharing the host's kernel, not a whole computer. That is why it starts in a second rather than a minute.",
        "Images are built in cached layers, which is why the order of steps in the recipe determines your build times.",
        "Run your image locally before you deploy it. Debugging a container on your own machine is enormously easier than debugging one on a platform."
      ],
      pitfall:"Reasoning about a container as though it were a virtual machine — expecting it to keep files between restarts, or to have a running operating system you can log into and fix things on."
    },
    {
      name:"The Image Recipe — a Multi-Stage Build",
      learning:"How to write a build recipe, and why building and running belong in two separate stages that share nothing but the finished archive.",
      searchFor:["dockerfile instructions explained FROM COPY RUN CMD","docker multi stage build java example","docker layer caching best practices","eclipse-temurin jre vs jdk base image","dockerignore file purpose","docker run as non-root user"],
      pseudocode:
`THE RECIPE FILE sits at the repository root

STAGE 1 -- BUILD
  START FROM an image that already contains the JDK
    and your build tool
  COPY the build descriptor FIRST, and ALONE
  RESOLVE the dependencies
    <- this layer is now CACHED, and only re-runs when the
       descriptor itself changes. This is the single biggest
       build-speed win available to you.
  COPY the source code
  RUN the build to produce the archive

STAGE 2 -- RUN
  START FROM a SMALL image containing ONLY the JRE
  COPY ONLY the finished archive OUT of stage 1
  CREATE a non-root user and SWITCH to it
  DECLARE the port the application listens on
  DECLARE the command that starts the archive

THE RESULT
  the final image contains NO source code,
  NO build tool, NO JDK, and no dependency cache
  -- smaller, faster to pull, and far less to attack

ALSO CREATE an ignore file for the image build
  EXCLUDE local build output, the git folder, IDE folders
  -- otherwise your laptop's artefacts get copied in`,
      tips:[
        "Copying the build descriptor before the source is the whole trick. Get it the wrong way round and every one-line source change re-downloads every dependency.",
        "A JRE base image is a fraction of the size of a JDK one, and ships far less software that could be vulnerable.",
        "Build and run the image locally, pointing at your local database, before you go anywhere near the platform."
      ],
      pitfall:"One giant single stage that ships your source code and build toolchain to production. It is slower, several times larger, and hands anyone who gets in a complete copy of your code."
    },
    {
      name:"Configuration, Ports & Secrets in Production",
      learning:"How to make one image run in any environment by removing every environment-specific value from it — and why the port is the detail that breaks most first deployments.",
      searchFor:["twelve factor app config","spring boot externalized configuration order","spring boot server.port environment variable","docker environment variables at runtime","why not commit secrets to git","spring boot fail fast on missing property"],
      pseudocode:
`THE IMAGE must contain NO environment-specific value
  no host names, no passwords, no keys, no fixed port

EVERYTHING environment-specific ARRIVES AS AN
ENVIRONMENT VARIABLE at runtime
  the database url, username and password
  the token signing secret
  the active profile
  THE PORT -- the platform TELLS the application
             which port to bind to

IN the production configuration profile
  READ each value from the environment
  PROVIDE a default ONLY where the value is not a secret
  FAIL LOUDLY AT STARTUP if a required secret is missing
    -- far better than starting successfully and failing
       on the first real request

SWITCH the schema strategy away from "generate"
  generation is a development convenience
  production wants validation, or proper migrations

COMMIT an example configuration listing every required
variable, WITH NO VALUES
  -- this is the documentation that makes the project
     reproducible by anyone, including future you`,
      tips:[
        "The platform assigns the port. Hard-coding one is the most common reason a first deployment builds successfully and then fails its health check.",
        "Failing fast on a missing secret converts a mysterious runtime error into an obvious startup error. It is ten minutes of work and saves hours.",
        "If you ever committed a secret, rotate it. Deleting the line does not remove it from the history, and the history is what gets scanned."
      ],
      pitfall:"An image that only runs because of settings living on your own machine. If nobody else can start it from the documented variables alone, it is not deployable — it just happens to work where you are."
    },
    {
      name:"The Managed Database",
      learning:"How to provision a database you do not administer, and how connecting to it differs from connecting to localhost.",
      searchFor:["digitalocean managed database postgresql getting started","managed database vs self hosted tradeoffs","postgresql connection ssl require mode","database connection pool size tuning hikari","database trusted sources firewall rules","how to restore a database backup"],
      pseudocode:
`PROVISION a managed PostgreSQL instance
  CHOOSE THE SAME REGION you will deploy the app into
  CREATE a database and an application user for it

COLLECT the connection details the provider gives you
  host, port, database name, user, password
  and the SSL requirement

RESTRICT ACCESS -- do this before anything else
  ALLOW connections only from your application
  ADD your own address temporarily if you need to inspect it
  REMOVE it again afterwards

CONNECT
  PASS every detail in as environment variables
  ENABLE SSL -- a managed database will usually demand it,
    and the connection silently fails without it
  KEEP the connection pool SMALL
    managed plans cap total connections, and the default
    pool size is often larger than your whole allowance

BEFORE BLAMING YOUR CODE
  connect once with a database client from your own machine
  if that fails, the problem is access rules, not Java`,
      tips:[
        "Same region as the application, always. A cross-region database means every single query pays an internet round trip.",
        "The provider's connection string is a credential. Treat it exactly like a password — it contains one.",
        "Check what the plan includes for automated backups, and know how to restore one before you need to."
      ],
      pitfall:"Leaving the database reachable from any address. Scanners find open database ports within hours, and a weak password is all that stands between them and your data."
    },
    {
      name:"Deploying From the Repository",
      learning:"How to connect a platform to your repository so that a push to main becomes a running deployment, with no manual step in between.",
      searchFor:["digitalocean app platform deploy from github","digitalocean app platform dockerfile deployment","app platform environment variables encrypted secrets","health check endpoint for deployment","zero downtime deployment basics","how to read deployment logs"],
      pseudocode:
`CREATE an app on the platform
  AUTHORISE it to read your GitHub repository
  SELECT the repository and the main branch
  SELECT the build source: your image recipe file

CONFIGURE the app
  SET every environment variable the application requires
    MARK the secrets as encrypted, not as plain values
  ATTACH the managed database, referencing its details
  DECLARE the HTTP port the container listens on
  DECLARE a HEALTH CHECK PATH the platform can poll
    -- this is how the platform distinguishes
       "the process started" from "the application works"

ENABLE deploy-on-push from main

THE FULL CHAIN IS NOW
  push to main
    -> CI builds and runs every test
    -> the platform builds the image
    -> the platform starts the container
    -> the health check passes
    -> traffic switches to the new version

WHEN THE FIRST DEPLOY FAILS -- and it will
  READ THE BUILD LOG, line by line, from the top
  THEN read the RUNTIME log
  the answer is almost always sitting in one of them`,
      tips:[
        "Expect the first deploy to fail. The skill this concept is actually teaching is reading deployment logs calmly, and everyone learns it the same way.",
        "Deploy something small and early rather than perfecting locally first. The gap between local and deployed is exactly what you need to discover.",
        "A health check that only proves the process is alive is weak. Research an endpoint that also confirms the database connection works."
      ],
      pitfall:"Assuming a successful build means a successful deploy. The build stage and the run stage fail for completely different reasons, and their logs are in different places."
    },
    {
      name:"Verifying Production & What Comes Next",
      learning:"How to prove the live system works end to end from outside — including its security boundaries — and how to see the whole pipeline you built.",
      searchFor:["how to test a deployed rest api","spring boot actuator health endpoint","structured logging basics","database backup and restore strategy","custom domain and https certificate setup","api monitoring and uptime checks"],
      pseudocode:
`POINT the request collection you saved in Module 2
at the LIVE url

RUN THE FULL JOURNEY AGAINST PRODUCTION
  REGISTER a new user                   -> EXPECT success
  LOG IN                                -> EXPECT a token
  CREATE a transaction WITH the token   -> EXPECT 201
  LIST transactions                     -> EXPECT yours, only yours
  CALL any endpoint WITHOUT a token     -> EXPECT 401
  LOG IN as a SECOND user and TRY to
    read the first user's transaction   -> EXPECT not-found
  SEND an invalid body                  -> EXPECT 400, no stack trace

  -- the security tests matter MORE here than locally.
     This one is reachable from the entire internet.

THEN PROVE THE LOOP -- the point of the whole course
  MAKE a small, visible change
  COMMIT and PUSH to main
  WATCH  CI pass
         the platform rebuild
         the change appear at the live url
  WITHOUT having touched a server at any point

FINALLY
  WRITE DOWN what you would do next:
    versioned migrations, monitoring, backups,
    a custom domain, refresh tokens
  UPDATE the README: architecture, the live URL,
    every required variable, the build badge`,
      tips:[
        "That last step — a code change reaching production with no manual deployment — is the entire point of the course. Do it deliberately and watch every stage.",
        "Test the security boundaries in production too. Locally a leak is a bug; publicly it is an incident.",
        "The README is now the front door. Anyone evaluating this project reads it before they read a single line of your code."
      ],
      pitfall:"Declaring victory on a 200 from one endpoint. A deployment is verified when the whole journey works, including the responses that are supposed to be refusals."
    }
  ],
  checklist:[
    "A multi-stage image recipe exists at the repository root, and the final stage contains only a JRE and the archive.",
    "The build descriptor is copied and resolved before the source code, so dependency layers cache properly.",
    "The container runs as a non-root user.",
    "An image build ignore file prevents local build output and the git folder from being copied in.",
    "I have built and run the image locally and confirmed it serves requests.",
    "No host name, credential or fixed port appears anywhere inside the image.",
    "The application reads the port from the environment rather than hard-coding one.",
    "The application fails loudly at startup if a required secret is missing.",
    "A managed PostgreSQL database is provisioned in the same region, with access restricted to the application.",
    "SSL is enabled on the database connection and the connection pool size fits the plan's limit.",
    "The app is deployed on DigitalOcean App Platform from the GitHub repository, with secrets stored encrypted on the platform.",
    "A health check path is declared and passing.",
    "Deploy-on-push from main is enabled, and I have watched a push flow all the way to the live site.",
    "The full journey — register, login, create, list, unauthorised, cross-user — has been run against the live URL and behaves correctly.",
    "The README documents the architecture, the live URL, and every required environment variable."
  ],
  checkpoint:{
    summary:"Hit the live API URL successfully from Postman. Then push a change to main and watch it reach production on its own.",
    verify:[
      "Run your saved request collection against the production URL, start to finish.",
      "Confirm an unauthenticated request returns 401 and a cross-user request returns not-found — in production.",
      "Push a visible change to main and watch CI, the platform build, and the live change, without touching a server.",
      "Confirm no secret exists anywhere in the repository or its history — only in the platform's encrypted variables."
    ]
  }
};

const COURSE = { intro: INTRO, outro: OUTRO, modules: [M1, M2, M3, M4, M5] };

/* ============================================================
   ENGINE
   ============================================================ */

const STORAGE_KEY = "ztc-java-finance-tracker-v1";
const MODULE_IDS = COURSE.modules.map(function (m) { return m.id; });

let state = { completed: [], checked: {}, view: "intro" };

/* ---------- persistence (must survive being unavailable) ---------- */

function loadState() {
  let raw = null;
  try { raw = window.localStorage.getItem(STORAGE_KEY); } catch (e) { raw = null; }
  if (!raw) return;

  let saved;
  try { saved = JSON.parse(raw); } catch (e) { return; }
  if (!saved || typeof saved !== "object") return;

  if (Array.isArray(saved.completed)) {
    state.completed = saved.completed.filter(function (id) { return MODULE_IDS.indexOf(id) !== -1; });
  }
  if (saved.checked && typeof saved.checked === "object") {
    COURSE.modules.forEach(function (m) {
      const arr = saved.checked[m.id];
      if (Array.isArray(arr)) {
        state.checked[m.id] = m.checklist.map(function (_, i) { return arr[i] === true; });
      }
    });
  }
  if (typeof saved.view === "string") state.view = saved.view;
}

function saveState() {
  try { window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (e) { /* private mode: run without persistence */ }
}

function clearState() {
  try { window.localStorage.removeItem(STORAGE_KEY); } catch (e) { /* nothing to do */ }
}

/* ---------- helpers ---------- */

function esc(s) {
  return String(s)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

function pad2(n) { return n < 10 ? "0" + n : String(n); }

function isComplete(id) { return state.completed.indexOf(id) !== -1; }

function isUnlocked(index) {
  if (index === 0) return true;
  return isComplete(COURSE.modules[index - 1].id);
}

function outroUnlocked() {
  return COURSE.modules.every(function (m) { return isComplete(m.id); });
}

function checksFor(mod) {
  if (!state.checked[mod.id] || state.checked[mod.id].length !== mod.checklist.length) {
    state.checked[mod.id] = mod.checklist.map(function () { return false; });
  }
  return state.checked[mod.id];
}

function viewIsReachable(id) {
  if (id === "intro") return true;
  if (id === "outro") return outroUnlocked();
  const i = MODULE_IDS.indexOf(id);
  return i !== -1 && isUnlocked(i);
}

/* ---------- sidebar ---------- */

function renderSidebar() {
  const done = state.completed.length;
  const total = COURSE.modules.length;
  const pct = Math.round((done / total) * 100);

  document.getElementById("progText").textContent = done + " of " + total + " complete";
  document.getElementById("progPct").textContent = pct + "%";
  document.getElementById("progFill").style.width = pct + "%";

  let html = '<button class="nav-item' + (state.view === "intro" ? " is-active" : "") +
    '" data-nav="intro"><span class="nav-badge">i</span><span class="nav-text">' +
    '<span class="nav-name">Introduction</span>' +
    '<span class="nav-meta">How this course works</span></span></button>';

  html += '<div class="nav-heading">Modules</div>';

  COURSE.modules.forEach(function (m, i) {
    const unlocked = isUnlocked(i);
    const complete = isComplete(m.id);
    const cls = ["nav-item"];
    if (state.view === m.id) cls.push("is-active");
    if (!unlocked) cls.push("is-locked");
    if (complete) cls.push("is-done");

    const meta = !unlocked ? "Locked" : complete ? "Complete" : "In progress";
    const badge = !unlocked ? "\u{1F512}" : complete ? "✓" : String(m.number);

    html += '<button class="' + cls.join(" ") + '" data-nav="' + m.id + '"' +
      (unlocked ? "" : ' aria-disabled="true" tabindex="-1"') + '>' +
      '<span class="nav-badge">' + badge + '</span>' +
      '<span class="nav-text"><span class="nav-name">' + esc(m.title) + '</span>' +
      '<span class="nav-meta">Module ' + m.number + " · " + meta + '</span></span></button>';
  });

  if (outroUnlocked()) {
    html += '<div class="nav-heading">Finish</div>' +
      '<button class="nav-item is-done' + (state.view === "outro" ? " is-active" : "") +
      '" data-nav="outro"><span class="nav-badge">★</span><span class="nav-text">' +
      '<span class="nav-name">Course complete</span>' +
      '<span class="nav-meta">What you built, and what is next</span></span></button>';
  }

  document.getElementById("nav").innerHTML = html;
}


/* ============================================================
   REFERENCE IMPLEMENTATIONS
   Hidden behind a button on every concept. The blueprint is the
   assignment; this is the answer key. Keyed by concept name.
   ============================================================ */

const CODE_EXAMPLES = {

"Repository Setup & the Ignore File": { parts: [
  { file: "terminal", lang: "bash", code:
`mkdir finance-tracker && cd finance-tracker
git init

# ...write .gitignore FIRST (see below), and only then:
git add .
git commit -m "Initial project skeleton with Java gitignore"
git branch -M main
git remote add origin git@github.com:YOUR-USER/finance-tracker.git
git push -u origin main` },
  { file: ".gitignore", lang: "gitignore", code:
`# compiled output
*.class
target/
build/
out/

# build tool noise
.gradle/
!gradle/wrapper/gradle-wrapper.jar

# IDE
.idea/
*.iml
.vscode/
.settings/
.classpath
.project

# OS junk
.DS_Store
Thumbs.db

# runtime data the app writes
transactions.csv
*.log` }
]},

"Variable Declaration & Choosing Types": { parts: [
  { file: "WhyNotDouble.java", lang: "java", code:
`import java.math.BigDecimal;
import java.time.LocalDate;

public class WhyNotDouble {

    public static void main(String[] args) {
        // The wrong way -- run this and read the output.
        double a = 0.10;
        double b = 0.20;
        System.out.println(a + b);            // 0.30000000000000004

        // The right way. Note the String constructor: new BigDecimal(0.1)
        // would drag the binary rounding error straight back in.
        BigDecimal x = new BigDecimal("0.10");
        BigDecimal y = new BigDecimal("0.20");
        System.out.println(x.add(y));         // 0.30
    }

    // The four decisions, as declarations.
    private final BigDecimal amount           = new BigDecimal("42.50");
    private final LocalDate  transactionDate  = LocalDate.of(2026, 3, 14);
    private final String     description      = "Weekly shop";
    private final int        transactionCount = 0;

    // 'final' on a field means it is assigned exactly once -- in the
    // declaration or the constructor -- and never again.
}` }
]},

"Classes, Fields & Constructors": { parts: [
  { file: "model/Transaction.java", lang: "java", code:
`package com.financetracker.model;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.Objects;
import java.util.UUID;

public class Transaction {

    private final String id;
    private final BigDecimal amount;
    private final LocalDate date;
    private String description;
    private Category category;
    private final TransactionType type;
    private final User owner;

    public Transaction(BigDecimal amount,
                       LocalDate date,
                       String description,
                       Category category,
                       TransactionType type,
                       User owner) {

        if (amount == null || amount.compareTo(BigDecimal.ZERO) <= 0) {
            throw new IllegalArgumentException("Amount must be greater than zero");
        }
        Objects.requireNonNull(date,     "Date is required");
        Objects.requireNonNull(category, "Category is required");
        Objects.requireNonNull(type,     "Type is required");

        // Generated here. The caller never supplies an id.
        this.id          = UUID.randomUUID().toString();
        this.amount      = amount;
        this.date        = date;
        this.description = description == null ? "" : description.trim();
        this.category    = category;
        this.type        = type;
        this.owner       = owner;
    }

    @Override
    public String toString() {
        return String.format("%s | %s | %-10s | %-13s | %s",
                date, amount, type, category, description);
    }
}` },
  { file: "model/User.java", lang: "java", code:
`package com.financetracker.model;

import java.util.UUID;

public class User {

    private final String id;
    private final String username;
    private final String email;

    public User(String username, String email) {
        if (username == null || username.isBlank()) {
            throw new IllegalArgumentException("Username is required");
        }
        this.id       = UUID.randomUUID().toString();
        this.username = username.trim();
        this.email    = email;
    }

    public String getId()       { return id; }
    public String getUsername() { return username; }
    public String getEmail()    { return email; }

    @Override
    public String toString() { return username; }
}` }
]},

"Encapsulation — Getters, Setters & Immutability": { parts: [
  { file: "model/Transaction.java", lang: "java", code:
`package com.financetracker.model;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.Objects;

public class Transaction {

    // Every field private. No exceptions.
    private final String id;
    private final BigDecimal amount;
    private final LocalDate date;
    private String description;     // mutable: fixing a typo is legitimate
    private Category category;      // mutable: re-categorising is legitimate
    private final TransactionType type;
    private final User owner;

    // ... constructor exactly as in the previous concept ...

    /* ---- read accessors: one per field ---- */

    public String          getId()          { return id; }
    public BigDecimal      getAmount()      { return amount; }
    public LocalDate       getDate()        { return date; }
    public String          getDescription() { return description; }
    public Category        getCategory()    { return category; }
    public TransactionType getType()        { return type; }
    public User            getOwner()       { return owner; }

    /* ---- write accessors: only the two that earned one ---- */

    public void setDescription(String description) {
        if (description == null || description.isBlank()) {
            throw new IllegalArgumentException("Description cannot be blank");
        }
        this.description = description.trim();
    }

    public void setCategory(Category category) {
        this.category = Objects.requireNonNull(category, "Category is required");
    }

    // Deliberately absent: setId, setAmount, setDate, setType, setOwner.
    // A wrong amount is a new transaction, not an edited one -- and the
    // missing setOwner is what stops any caller reassigning ownership
    // once Module 3 arrives.
}` }
]},

"Enums — Modelling a Fixed Set of Values": { parts: [
  { file: "model/Category.java", lang: "java", code:
`package com.financetracker.model;

import java.util.Optional;

public enum Category {

    GROCERIES("Groceries"),
    RENT("Rent"),
    TRANSPORT("Transport"),
    UTILITIES("Utilities"),
    ENTERTAINMENT("Entertainment"),
    HEALTH("Health"),
    SALARY("Salary"),
    SAVINGS("Savings"),
    OTHER("Other");

    private final String label;          // display only -- the NAME is the identity

    Category(String label) { this.label = label; }

    public String getLabel() { return label; }

    /**
     * Safe conversion. valueOf() throws IllegalArgumentException on a miss,
     * which is exactly what we do not want while parsing a CSV line or
     * reading console input.
     */
    public static Optional<Category> from(String text) {
        if (text == null) return Optional.empty();
        try {
            return Optional.of(Category.valueOf(text.trim().toUpperCase()));
        } catch (IllegalArgumentException e) {
            return Optional.empty();
        }
    }
}` },
  { file: "model/TransactionType.java", lang: "java", code:
`package com.financetracker.model;

import java.util.Optional;

public enum TransactionType {

    INCOME, EXPENSE;

    public static Optional<TransactionType> from(String text) {
        if (text == null) return Optional.empty();
        try {
            return Optional.of(TransactionType.valueOf(text.trim().toUpperCase()));
        } catch (IllegalArgumentException e) {
            return Optional.empty();
        }
    }
}` },
  { file: "using them", lang: "java", code:
`// The decision, applied consistently: an unknown value rejects the row.
Category category = Category.from(fields[4])
        .orElseThrow(() -> new IllegalArgumentException(
                "Unknown category: " + fields[4]));

// And the free test you get for declaring a proper type -- the compiler
// checks exhaustiveness, so adding a value to the enum breaks this build
// until you handle it.
String sign = switch (transaction.getType()) {
    case INCOME  -> "+";
    case EXPENSE -> "-";
};` }
]},

"Collections — Holding Many Transactions": { parts: [
  { file: "engine/FinanceEngine.java", lang: "java", code:
`package com.financetracker.engine;

import com.financetracker.model.Transaction;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

public class FinanceEngine {

    // Declared as the interface, created as the implementation.
    private final List<Transaction> transactions = new ArrayList<>();

    public void add(Transaction transaction) {
        Objects.requireNonNull(transaction, "Transaction cannot be null");
        transactions.add(transaction);
    }

    /** A read-only view -- callers cannot add or remove behind our back. */
    public List<Transaction> all() {
        return Collections.unmodifiableList(transactions);
    }

    public Optional<Transaction> findById(String id) {
        for (Transaction t : transactions) {
            if (t.getId().equals(id)) {
                return Optional.of(t);
            }
        }
        return Optional.empty();          // better than returning null
    }

    public boolean removeById(String id) {
        return transactions.removeIf(t -> t.getId().equals(id));
    }

    public int size() { return transactions.size(); }
}` }
]},

"Loops & Iteration": { parts: [
  { file: "engine/FinanceEngine.java", lang: "java", code:
`package com.financetracker.engine;

import com.financetracker.model.Category;
import com.financetracker.model.Transaction;
import com.financetracker.model.TransactionType;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

public class FinanceEngine {

    private final List<Transaction> transactions = new ArrayList<>();

    public List<Transaction> filterByCategory(Category category) {
        List<Transaction> result = new ArrayList<>();
        for (Transaction t : transactions) {      // enhanced for: no index needed
            if (t.getCategory() == category) {    // enum constants compare with ==
                result.add(t);
            }
        }
        return result;
    }

    public int countByType(TransactionType type) {
        int counter = 0;
        for (Transaction t : transactions) {
            if (t.getType() == type) {
                counter++;
            }
        }
        return counter;
    }

    /**
     * Removing inside an enhanced for loop throws
     * ConcurrentModificationException the moment there is more than one
     * match. The iterator's own remove() is the safe way to do it by hand.
     */
    public int removeAllInCategory(Category category) {
        int removed = 0;
        Iterator<Transaction> it = transactions.iterator();
        while (it.hasNext()) {
            if (it.next().getCategory() == category) {
                it.remove();
                removed++;
            }
        }
        return removed;
    }
}` },
  { file: "the same three, as streams", lang: "java", code:
`// Write the loops first, so you know what this is doing. Then rewrite one.

List<Transaction> byCategory = transactions.stream()
        .filter(t -> t.getCategory() == category)
        .toList();

long count = transactions.stream()
        .filter(t -> t.getType() == type)
        .count();

transactions.removeIf(t -> t.getCategory() == category);` }
]},

"The Finance Engine — Calculations": { parts: [
  { file: "engine/FinanceEngine.java", lang: "java", code:
`package com.financetracker.engine;

import com.financetracker.model.Category;
import com.financetracker.model.Transaction;
import com.financetracker.model.TransactionType;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.*;

public class FinanceEngine {

    private final List<Transaction> transactions = new ArrayList<>();

    public BigDecimal totalIncome()   { return totalOf(transactions, TransactionType.INCOME); }
    public BigDecimal totalExpenses() { return totalOf(transactions, TransactionType.EXPENSE); }

    public BigDecimal balance() {
        return totalIncome().subtract(totalExpenses());
    }

    private static BigDecimal totalOf(List<Transaction> source, TransactionType type) {
        BigDecimal total = BigDecimal.ZERO;
        for (Transaction t : source) {
            if (t.getType() == type) {
                // BigDecimal is immutable: add() RETURNS the sum, it does not
                // modify 'total'. Forget the reassignment and every total
                // stays stubbornly at zero. Expect to hit this once.
                total = total.add(t.getAmount());
            }
        }
        return total;
    }

    public Map<Category, BigDecimal> spendingByCategory() {
        Map<Category, BigDecimal> totals = new EnumMap<>(Category.class);
        for (Transaction t : transactions) {
            if (t.getType() == TransactionType.EXPENSE) {
                // merge: start at the amount if absent, otherwise add to it.
                totals.merge(t.getCategory(), t.getAmount(), BigDecimal::add);
            }
        }
        return totals;
    }

    public MonthlyReport monthlyReport(int year, int month) {
        List<Transaction> slice = new ArrayList<>();
        for (Transaction t : transactions) {
            LocalDate d = t.getDate();
            if (d.getYear() == year && d.getMonthValue() == month) {
                slice.add(t);
            }
        }
        BigDecimal income   = totalOf(slice, TransactionType.INCOME);
        BigDecimal expenses = totalOf(slice, TransactionType.EXPENSE);
        return new MonthlyReport(year, month, income, expenses, income.subtract(expenses));
    }

    public Optional<Transaction> largestExpense() {
        return transactions.stream()
                .filter(t -> t.getType() == TransactionType.EXPENSE)
                // compareTo, NOT equals: equals() considers scale, so
                // 10.0 is "not equal" to 10.00.
                .max(Comparator.comparing(Transaction::getAmount));
    }
}` },
  { file: "engine/MonthlyReport.java", lang: "java", code:
`package com.financetracker.engine;

import java.math.BigDecimal;
import java.math.RoundingMode;

public record MonthlyReport(int year,
                            int month,
                            BigDecimal income,
                            BigDecimal expenses,
                            BigDecimal balance) {

    /** Round for DISPLAY only -- never while accumulating. */
    public String format() {
        return String.format("%d-%02d  income %s  expenses %s  balance %s",
                year, month,
                income.setScale(2, RoundingMode.HALF_UP),
                expenses.setScale(2, RoundingMode.HALF_UP),
                balance.setScale(2, RoundingMode.HALF_UP));
    }
}` }
]},

"File I/O — Writing the CSV": { parts: [
  { file: "storage/CsvStore.java", lang: "java", code:
`package com.financetracker.storage;

import com.financetracker.model.Transaction;

import java.io.BufferedWriter;
import java.io.IOException;
import java.nio.file.*;
import java.time.format.DateTimeFormatter;
import java.util.List;

public class CsvStore {

    private static final String HEADER = "id,amount,date,description,category,type";

    public void saveToCsv(Path path, List<Transaction> transactions) throws IOException {

        // Write to a temporary file and rename it over the original, so a
        // crash halfway through cannot destroy yesterday's data.
        Path temp = path.resolveSibling(path.getFileName() + ".tmp");

        // try-with-resources: the writer is flushed and closed when the
        // block ends -- whether it ended normally or by exception.
        try (BufferedWriter writer = Files.newBufferedWriter(temp)) {

            writer.write(HEADER);
            writer.newLine();

            for (Transaction t : transactions) {
                writer.write(String.join(",",
                        escape(t.getId()),
                        t.getAmount().toPlainString(),
                        t.getDate().format(DateTimeFormatter.ISO_LOCAL_DATE),
                        escape(t.getDescription()),
                        t.getCategory().name(),
                        t.getType().name()));
                writer.newLine();
            }
        }

        Files.move(temp, path,
                StandardCopyOption.REPLACE_EXISTING,
                StandardCopyOption.ATOMIC_MOVE);
    }

    /** RFC 4180: quote the field if it needs it, and double any inner quote. */
    private static String escape(String field) {
        if (field == null) return "";
        boolean needsQuoting = field.contains(",")
                || field.contains("\\"")
                || field.contains("\\n");
        if (!needsQuoting) return field;
        return "\\"" + field.replace("\\"", "\\"\\"") + "\\"";
    }
}` },
  { file: "the caller", lang: "java", code:
`try {
    store.saveToCsv(Path.of("transactions.csv"), engine.all());
    System.out.println("Saved " + engine.size() + " transactions.");
} catch (IOException e) {
    // Say which file and why. Never print "Saved" on a failure.
    System.err.println("Could not write transactions.csv: " + e.getMessage());
}` }
]},

"File I/O — Reading & Parsing the CSV": { parts: [
  { file: "storage/CsvStore.java", lang: "java", code:
`package com.financetracker.storage;

import com.financetracker.model.*;

import java.io.BufferedReader;
import java.io.IOException;
import java.math.BigDecimal;
import java.nio.file.*;
import java.time.LocalDate;
import java.time.format.DateTimeParseException;
import java.util.ArrayList;
import java.util.List;

public class CsvStore {

    public List<Transaction> loadFromCsv(Path path) throws IOException {

        List<Transaction> loaded = new ArrayList<>();

        // A missing file is NORMAL on a first run, not an error.
        if (!Files.exists(path)) {
            return loaded;
        }

        try (BufferedReader reader = Files.newBufferedReader(path)) {

            reader.readLine();                     // skip the header
            int lineNumber = 1;
            String line;

            while ((line = reader.readLine()) != null) {
                lineNumber++;
                if (line.isBlank()) continue;

                String[] f = splitCsv(line);

                if (f.length != 6) {
                    warn(lineNumber, "expected 6 fields, found " + f.length);
                    continue;                      // one bad line costs one row
                }

                try {
                    BigDecimal amount    = new BigDecimal(f[1]);
                    LocalDate  date      = LocalDate.parse(f[2]);
                    Category category    = Category.from(f[4]).orElseThrow(() ->
                            new IllegalArgumentException("unknown category '" + f[4] + "'"));
                    TransactionType type = TransactionType.from(f[5]).orElseThrow(() ->
                            new IllegalArgumentException("unknown type '" + f[5] + "'"));

                    loaded.add(new Transaction(amount, date, f[3], category, type, null));

                } catch (NumberFormatException e) {
                    warn(lineNumber, "amount is not a number: '" + f[1] + "'");
                } catch (DateTimeParseException e) {
                    warn(lineNumber, "date is not ISO yyyy-MM-dd: '" + f[2] + "'");
                } catch (IllegalArgumentException e) {
                    warn(lineNumber, e.getMessage());
                }
            }
        }
        return loaded;
    }

    private static void warn(int lineNumber, String reason) {
        System.err.println("Skipping line " + lineNumber + ": " + reason);
    }

    /** Un-escapes exactly what escape() produced. */
    private static String[] splitCsv(String line) {
        List<String> fields = new ArrayList<>();
        StringBuilder current = new StringBuilder();
        boolean inQuotes = false;

        for (int i = 0; i < line.length(); i++) {
            char c = line.charAt(i);
            if (inQuotes) {
                if (c == '"') {
                    if (i + 1 < line.length() && line.charAt(i + 1) == '"') {
                        current.append('"');
                        i++;                       // a doubled quote is one quote
                    } else {
                        inQuotes = false;
                    }
                } else {
                    current.append(c);
                }
            } else if (c == '"') {
                inQuotes = true;
            } else if (c == ',') {
                fields.add(current.toString());
                current.setLength(0);
            } else {
                current.append(c);
            }
        }
        fields.add(current.toString());
        return fields.toArray(new String[0]);
    }
}` },
  { file: "the round-trip test, by hand", lang: "java", code:
`store.saveToCsv(path, engine.all());

FinanceEngine reloaded = new FinanceEngine();
store.loadFromCsv(path).forEach(reloaded::add);

System.out.println(engine.size()    + " == " + reloaded.size());
System.out.println(engine.balance() + " == " + reloaded.balance());

// Both lines must agree. If they do not, the writer and the reader
// disagree about escaping -- and the writer is usually the guilty one.
// Now open the CSV, corrupt a line on purpose, and run it again.` }
]},

"Exception Handling": { parts: [
  { file: "exception/TransactionNotFoundException.java", lang: "java", code:
`package com.financetracker.exception;

/**
 * A domain failure type carries meaning that a generic one does not.
 * Unchecked, because a caller cannot recover from asking for an id that
 * is not there -- it can only report it.
 */
public class TransactionNotFoundException extends RuntimeException {

    private final String id;

    public TransactionNotFoundException(String id) {
        super("No transaction found with id " + id);
        this.id = id;
    }

    public String getId() { return id; }
}` },
  { file: "the three shapes, and the one to avoid", lang: "java", code:
`/* ---- 1. an I/O failure: recover with a default, and say so ---- */
List<Transaction> startingData;
try {
    startingData = store.loadFromCsv(dataFile);
} catch (IOException e) {
    System.err.println("Could not read " + dataFile.toAbsolutePath()
            + " (" + e.getMessage() + "). Starting with an empty ledger.");
    startingData = List.of();
}

/* ---- 2. bad data: report which one, then carry on ---- */
for (String line : lines) {
    try {
        engine.add(parse(line));
    } catch (IllegalArgumentException e) {
        System.err.println("Skipped: " + e.getMessage());   // loop continues
    }
}

/* ---- 3. a domain rule: throw something that means something ---- */
public Transaction requireById(String id) {
    return findById(id).orElseThrow(() -> new TransactionNotFoundException(id));
}

/* ---- what never to write ---- */
// try { risky(); } catch (Exception e) { }
//
// The failure becomes invisible, the program carries on in a wrong state,
// and you lose an evening finding a bug the computer already told you
// about and you told it to be quiet.` }
]},

"The Console Menu & the Commit Habit": { parts: [
  { file: "ConsoleApp.java", lang: "java", code:
`package com.financetracker;

import com.financetracker.engine.FinanceEngine;
import com.financetracker.model.*;
import com.financetracker.storage.CsvStore;

import java.io.IOException;
import java.math.BigDecimal;
import java.nio.file.Path;
import java.time.LocalDate;
import java.util.Arrays;
import java.util.Scanner;

public class ConsoleApp {

    private static final Path DATA = Path.of("transactions.csv");

    private final FinanceEngine engine  = new FinanceEngine();
    private final CsvStore      store   = new CsvStore();
    private final Scanner       scanner = new Scanner(System.in);

    public static void main(String[] args) { new ConsoleApp().run(); }

    private void run() {
        load();

        while (true) {
            printMenu();
            String choice = scanner.nextLine().trim();

            switch (choice) {
                case "1" -> addTransaction();
                case "2" -> engine.all().forEach(System.out::println);
                case "3" -> System.out.printf("Income %s | Expenses %s | Balance %s%n",
                                engine.totalIncome(), engine.totalExpenses(), engine.balance());
                case "4" -> engine.spendingByCategory().forEach((c, total) ->
                                System.out.printf("  %-14s %s%n", c.getLabel(), total));
                case "5" -> monthlyReport();
                case "6" -> deleteById();
                case "0" -> { save(); return; }
                default  -> System.out.println("Not a valid choice. Try again.");
            }
        }
    }

    private void printMenu() {
        System.out.println("""

            1  Add a transaction
            2  List all transactions
            3  Balance and totals
            4  Spending by category
            5  Monthly report
            6  Delete by id
            0  Save and exit""");
        System.out.print("> ");
    }

    private void addTransaction() {
        try {
            // Validation happens here, at the edge. The engine assumes clean input.
            System.out.print("Amount: ");
            BigDecimal amount = new BigDecimal(scanner.nextLine().trim());

            System.out.print("Date (yyyy-MM-dd, blank for today): ");
            String rawDate = scanner.nextLine().trim();
            LocalDate date = rawDate.isBlank() ? LocalDate.now() : LocalDate.parse(rawDate);

            System.out.print("Description: ");
            String description = scanner.nextLine();

            System.out.print("Category " + Arrays.toString(Category.values()) + ": ");
            Category category = Category.from(scanner.nextLine())
                    .orElseThrow(() -> new IllegalArgumentException("Unknown category"));

            System.out.print("Type [INCOME|EXPENSE]: ");
            TransactionType type = TransactionType.from(scanner.nextLine())
                    .orElseThrow(() -> new IllegalArgumentException("Unknown type"));

            engine.add(new Transaction(amount, date, description, category, type, null));
            System.out.println("Added.");

        } catch (RuntimeException e) {
            System.out.println("Not added: " + e.getMessage());
        }
    }

    private void monthlyReport() {
        System.out.print("Year and month (yyyy-MM): ");
        String[] ym = scanner.nextLine().trim().split("-");
        System.out.println(engine.monthlyReport(
                Integer.parseInt(ym[0]), Integer.parseInt(ym[1])).format());
    }

    private void deleteById() {
        System.out.print("Id: ");
        System.out.println(engine.removeById(scanner.nextLine().trim())
                ? "Deleted." : "No transaction with that id.");
    }

    private void load() {
        try {
            store.loadFromCsv(DATA).forEach(engine::add);
            System.out.println("Loaded " + engine.size() + " transactions.");
        } catch (IOException e) {
            System.err.println("Could not load: " + e.getMessage());
        }
    }

    private void save() {
        try {
            store.saveToCsv(DATA, engine.all());
            System.out.println("Saved. Goodbye.");
        } catch (IOException e) {
            System.err.println("SAVE FAILED -- changes are not on disk: " + e.getMessage());
        }
    }
}

// Note: only nextLine() is used anywhere, never nextInt(). Mixing them
// leaves the newline sitting in the buffer and the next nextLine()
// returns an empty string. That is the well-known Scanner trap.` },
  { file: "the git rhythm", lang: "bash", code:
`# After every slice that works -- not at the end of the day.

git status
git diff
git add src/main/java/com/financetracker/engine/FinanceEngine.java
git commit -m "Add spending-by-category grouping to the engine

Groups expenses by Category with EnumMap and merge(), so the console
can print a per-category breakdown without doing any arithmetic of
its own."
git push

# Six honest commits in this module beat one commit called "module 1".` }
]},

"Bootstrapping the Spring Boot Project": { parts: [
  { file: "pom.xml", lang: "xml", code:
`<project xmlns="http://maven.apache.org/POM/4.0.0">
    <modelVersion>4.0.0</modelVersion>

    <parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>3.4.1</version>
    </parent>

    <groupId>com.financetracker</groupId>
    <artifactId>finance-tracker</artifactId>
    <version>0.0.1-SNAPSHOT</version>
    <packaging>jar</packaging>

    <properties>
        <java.version>21</java.version>
    </properties>

    <dependencies>
        <!-- the web layer: REST controllers plus an embedded Tomcat -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>

        <!-- persistence: JPA, Hibernate, a connection pool -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-data-jpa</artifactId>
        </dependency>

        <!-- request validation: @NotNull, @Positive and friends -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-validation</artifactId>
        </dependency>

        <!-- the PostgreSQL driver: needed at run time, not to compile -->
        <dependency>
            <groupId>org.postgresql</groupId>
            <artifactId>postgresql</artifactId>
            <scope>runtime</scope>
        </dependency>

        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
            <scope>test</scope>
        </dependency>
    </dependencies>

    <build>
        <plugins>
            <plugin>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
            </plugin>
        </plugins>
    </build>
</project>` },
  { file: "FinanceTrackerApplication.java", lang: "java", code:
`package com.financetracker;          // <- the ROOT package

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * Component scanning starts at THIS class's package and looks downward.
 * Anything you write beside it or above it will never be found -- the
 * single most common first-day confusion.
 */
@SpringBootApplication
public class FinanceTrackerApplication {

    public static void main(String[] args) {
        SpringApplication.run(FinanceTrackerApplication.class, args);
    }
}` },
  { file: "expected startup log", lang: "text", code:
`  .   ____          _            __ _ _
 /\\\\ / ___'_ __ _ _(_)_ __  __ _ \\ \\ \\ \\
( ( )\\___ | '_ | '_| | '_ \\/ _\` | \\ \\ \\ \\

Starting FinanceTrackerApplication using Java 21
Tomcat initialized with port 8080 (http)      <- the embedded server
HikariPool-1 - Added connection ...           <- the database
Started FinanceTrackerApplication in 2.914 seconds

# Visit http://localhost:8080 -- a whitelabel error page is FINE.
# It means the server is alive and nothing is mapped at "/" yet.` }
]},

"Layered Architecture & Dependency Injection": { parts: [
  { file: "package layout", lang: "text", code:
`src/main/java/com/financetracker/
├── FinanceTrackerApplication.java   <- root; everything else BELOW it
├── model/         the entities
├── repository/    the data-access interfaces
├── service/       the business rules
├── controller/    the web layer
├── dto/           the request and response shapes (Module 3)
└── config/        framework configuration

    controller ---> service ---> repository ---> database
    and never the other way.` },
  { file: "service/TransactionService.java", lang: "java", code:
`package com.financetracker.service;

import com.financetracker.repository.TransactionRepository;
import org.springframework.stereotype.Service;

@Service                                  // marks it for the framework to manage
public class TransactionService {

    private final TransactionRepository repository;

    // Constructor injection. Written by hand, on purpose: this is what
    // @RequiredArgsConstructor would have generated for you.
    //
    // Since Spring 4.3 a single constructor needs no @Autowired.
    public TransactionService(TransactionRepository repository) {
        this.repository = repository;
    }

    // 'final' field + constructor parameter means:
    //   the dependencies are visible in one place
    //   the object cannot exist half-wired
    //   a test can build it with a stand-in and no framework at all
}` },
  { file: "controller/TransactionController.java", lang: "java", code:
`package com.financetracker.controller;

import com.financetracker.service.TransactionService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/transactions")
public class TransactionController {

    private final TransactionService service;

    public TransactionController(TransactionService service) {
        this.service = service;
    }

    // Every method below delegates immediately. If one grows past a few
    // lines, logic has leaked upward into the wrong layer -- move it down.
}` },
  { file: "what NOT to do", lang: "java", code:
`@RestController
public class FatController {

    // Field injection: invisible dependencies, impossible to construct in
    // a plain unit test, and the object can exist half-wired.
    @Autowired private TransactionRepository repository;

    @GetMapping("/api/summary")
    public Map<String, BigDecimal> summary() {
        // Business rules in the web layer. It works -- and it is
        // untestable, unreusable, and the reason Module 3 will hurt.
        BigDecimal income = BigDecimal.ZERO;
        for (Transaction t : repository.findAll()) {
            if (t.getType() == TransactionType.INCOME) {
                income = income.add(t.getAmount());
            }
        }
        return Map.of("income", income);
    }
}` }
]},

"REST Controllers & Routing": { parts: [
  { file: "controller/TransactionController.java", lang: "java", code:
`package com.financetracker.controller;

import com.financetracker.model.Transaction;
import com.financetracker.service.TransactionService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/api/transactions")
public class TransactionController {

    private final TransactionService service;

    public TransactionController(TransactionService service) {
        this.service = service;
    }

    /** GET /api/transactions          -> everything
     *  GET /api/transactions?year=&month= -> that month only */
    @GetMapping
    public List<Transaction> list(@RequestParam(required = false) Integer year,
                                  @RequestParam(required = false) Integer month) {
        if (year != null && month != null) {
            return service.findByMonth(year, month);
        }
        return service.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Transaction> getOne(@PathVariable Long id) {
        return service.findById(id)
                .map(ResponseEntity::ok)                       // 200 + body
                .orElseGet(() -> ResponseEntity.notFound().build());   // 404, no body
    }

    @PostMapping
    public ResponseEntity<Transaction> create(@Valid @RequestBody Transaction body) {
        Transaction saved = service.create(body);

        // 201 should tell the client where the new resource lives.
        URI location = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(saved.getId())
                .toUri();

        return ResponseEntity.created(location).body(saved);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Transaction> replace(@PathVariable Long id,
                                               @Valid @RequestBody Transaction body) {
        return service.replace(id, body)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)                     // 204
    public void delete(@PathVariable Long id) {
        service.delete(id);
    }

    @GetMapping("/summary")
    public SummaryResponse summary() {
        return service.summary();                              // 200 by default
    }
}

// Nouns in the path, verbs in the HTTP method. A path containing
// "getAll" or "deleteTransaction" means the design has gone wrong.` },
  { file: "the contract this produces", lang: "http", code:
`GET    /api/transactions            200  [ ... ]
GET    /api/transactions?year=2026&month=3
                                    200  [ ... ]
GET    /api/transactions/42         200  { ... }
GET    /api/transactions/999999     404  (no body)
POST   /api/transactions            201  Location: /api/transactions/43
POST   /api/transactions (bad body) 400
PUT    /api/transactions/42         200  or 404
DELETE /api/transactions/42         204  (no body)
GET    /api/transactions/summary    200  { "income": ..., "balance": ... }` }
]},

"Entities & Object-Relational Mapping": { parts: [
  { file: "model/Transaction.java", lang: "java", code:
`package com.financetracker.model;

import jakarta.persistence.*;

import java.math.BigDecimal;
import java.time.LocalDate;

@Entity
@Table(name = "transactions")
public class Transaction {

    @Id
    // IDENTITY maps to PostgreSQL's own generated-identity column.
    // The strategies are not equivalent -- read what SEQUENCE and AUTO do
    // before you pick one for a batch-heavy application.
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // Explicit precision and scale, or the column is created with a
    // default that quietly loses the exactness you fought for in Module 1.
    @Column(nullable = false, precision = 19, scale = 2)
    private BigDecimal amount;

    @Column(name = "transaction_date", nullable = false)
    private LocalDate date;

    @Column(length = 255)
    private String description;

    // BY NAME, never by position. ORDINAL stores 0,1,2 -- reorder the enum
    // later and every historical row silently changes meaning.
    @Enumerated(EnumType.STRING)
    @Column(nullable = false, length = 20)
    private Category category;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, length = 10)
    private TransactionType type;

    // MANY transactions belong to ONE user. The foreign key lives here.
    // LAZY so listing transactions does not drag a user row along each time.
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "user_id", nullable = false)
    private User owner;

    /**
     * Required by JPA. Hibernate instantiates the entity reflectively
     * before populating its fields, and it needs a no-argument way in.
     * 'protected' keeps it out of your own code's reach.
     */
    protected Transaction() { }

    public Transaction(BigDecimal amount, LocalDate date, String description,
                       Category category, TransactionType type, User owner) {
        this.amount = amount;
        this.date = date;
        this.description = description;
        this.category = category;
        this.type = type;
        this.owner = owner;
    }

    // getters, and setters only where Module 1 decided one was warranted
}` },
  { file: "model/User.java", lang: "java", code:
`package com.financetracker.model;

import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "users")          // "user" is a reserved word in PostgreSQL
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true, length = 50)
    private String username;

    @Column(length = 255)
    private String email;

    // Real hashing arrives in Module 3. The column exists now.
    @Column(name = "password_hash", nullable = false, length = 60)
    private String passwordHash;

    // The inverse side: ONE user has MANY transactions. mappedBy names the
    // field that owns the foreign key, so no join table is created.
    @OneToMany(mappedBy = "owner", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Transaction> transactions = new ArrayList<>();

    protected User() { }

    public User(String username, String email, String passwordHash) {
        this.username = username;
        this.email = email;
        this.passwordHash = passwordHash;
    }
}` }
]},

"Repositories — Queries Without Writing SQL": { parts: [
  { file: "repository/TransactionRepository.java", lang: "java", code:
`package com.financetracker.repository;

import com.financetracker.model.Category;
import com.financetracker.model.Transaction;
import com.financetracker.model.TransactionType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

/**
 * An interface. You write no implementation -- Spring Data generates one
 * at startup and registers it as a bean.
 */
public interface TransactionRepository extends JpaRepository<Transaction, Long> {

    // Derived queries: the method NAME is the query. The convention is
    // strict -- look it up rather than guessing at it.
    List<Transaction> findByOwnerId(Long ownerId);

    List<Transaction> findByOwnerIdAndDateBetween(Long ownerId,
                                                  LocalDate from,
                                                  LocalDate to);

    List<Transaction> findByOwnerIdAndCategory(Long ownerId, Category category);

    /**
     * The seed of Module 3's security. Loading by id AND owner in ONE
     * query is what makes an ownership check impossible to forget.
     */
    Optional<Transaction> findByIdAndOwnerId(Long id, Long ownerId);

    // Too complex to express as a name -- so write it. This sums in the
    // database instead of dragging every row into Java to add them up.
    @Query("""
           SELECT COALESCE(SUM(t.amount), 0)
           FROM Transaction t
           WHERE t.owner.id = :ownerId AND t.type = :type
           """)
    BigDecimal sumByOwnerAndType(@Param("ownerId") Long ownerId,
                                 @Param("type") TransactionType type);
}` },
  { file: "repository/UserRepository.java", lang: "java", code:
`package com.financetracker.repository;

import com.financetracker.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByUsername(String username);

    boolean existsByUsername(String username);
}` },
  { file: "what these generate", lang: "sql", code:
`-- findByOwnerIdAndDateBetween(7, '2026-03-01', '2026-03-31') becomes:

select t.* from transactions t
where t.user_id = ?
  and t.transaction_date between ? and ?

-- Turn on spring.jpa.show-sql once and read this for yourself. It stops
-- being magic and starts being a tool.
--
-- The alternative -- findAll() then filtering in Java -- works with ten
-- transactions and dies with a hundred thousand.` }
]},

"Configuration & the Local Database": { parts: [
  { file: "terminal — prove the database first", lang: "bash", code:
`# Prove the database works BEFORE you blame your Java.
psql -U postgres

CREATE DATABASE finance_tracker;
CREATE USER finance_app WITH ENCRYPTED PASSWORD 'a-local-dev-password';
GRANT ALL PRIVILEGES ON DATABASE finance_tracker TO finance_app;
\\c finance_tracker
GRANT ALL ON SCHEMA public TO finance_app;

# Now connect AS THE APP USER. If this fails, no amount of Java will help.
psql -U finance_app -d finance_tracker -h localhost` },
  { file: "src/main/resources/application.yml", lang: "yaml", code:
`spring:
  application:
    name: finance-tracker
  profiles:
    active: \${SPRING_PROFILES_ACTIVE:dev}

---
spring:
  config:
    activate:
      on-profile: dev

  datasource:
    url: jdbc:postgresql://localhost:5432/finance_tracker
    # No default for either. If the variable is missing, startup fails
    # loudly -- which is what you want.
    username: \${DB_USERNAME}
    password: \${DB_PASSWORD}

  jpa:
    hibernate:
      ddl-auto: update        # a DEVELOPMENT convenience, nothing more
    show-sql: true
    properties:
      hibernate:
        format_sql: true

---
spring:
  config:
    activate:
      on-profile: prod

  datasource:
    url: \${DATABASE_URL}
    username: \${DB_USERNAME}
    password: \${DB_PASSWORD}

  jpa:
    hibernate:
      ddl-auto: validate      # never "update" against production data
    show-sql: false` },
  { file: ".env.example  (committed)", lang: "bash", code:
`# Copy to .env, fill in real values, and never commit that copy.
# .env is in .gitignore.

DB_USERNAME=finance_app
DB_PASSWORD=
SPRING_PROFILES_ACTIVE=dev

# If you have ever pushed a real credential: rotate it. Deleting the line
# does not remove it from the history, and the history is what gets scanned.` },
  { file: "running it", lang: "bash", code:
`export DB_USERNAME=finance_app
export DB_PASSWORD='a-local-dev-password'
./mvnw spring-boot:run

# When it will not start, read the FIRST exception in the chain, not the
# last. Scroll to the bottom of the stack trace: "Caused by:" is where the
# root cause is.` }
]},

"Migrating the Engine & Verifying From Outside": { parts: [
  { file: "service/TransactionService.java", lang: "java", code:
`package com.financetracker.service;

import com.financetracker.model.*;
import com.financetracker.repository.TransactionRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.YearMonth;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
@Transactional(readOnly = true)
public class TransactionService {

    private final TransactionRepository repository;

    public TransactionService(TransactionRepository repository) {
        this.repository = repository;
    }

    /* The Module 1 rule, unchanged in meaning. What changed is where the
       data comes from: "loop over the in-memory list" became "ask the
       repository a question". Same inputs, same answers. */

    public BigDecimal totalIncome(Long ownerId) {
        return repository.sumByOwnerAndType(ownerId, TransactionType.INCOME);
    }

    public BigDecimal totalExpenses(Long ownerId) {
        return repository.sumByOwnerAndType(ownerId, TransactionType.EXPENSE);
    }

    public BigDecimal balance(Long ownerId) {
        return totalIncome(ownerId).subtract(totalExpenses(ownerId));
    }

    public Map<Category, BigDecimal> spendingByCategory(Long ownerId) {
        return repository.findByOwnerId(ownerId).stream()
                .filter(t -> t.getType() == TransactionType.EXPENSE)
                .collect(Collectors.groupingBy(
                        Transaction::getCategory,
                        Collectors.reducing(BigDecimal.ZERO,
                                            Transaction::getAmount,
                                            BigDecimal::add)));
    }

    public List<Transaction> findByMonth(Long ownerId, int year, int month) {
        YearMonth ym = YearMonth.of(year, month);
        LocalDate first = ym.atDay(1);
        LocalDate last  = ym.atEndOfMonth();      // both ends inclusive
        return repository.findByOwnerIdAndDateBetween(ownerId, first, last);
    }

    @Transactional
    public Transaction create(Transaction transaction) {
        return repository.save(transaction);
    }
}` },
  { file: "verify from outside — in this order", lang: "bash", code:
`BASE=http://localhost:8080/api/transactions

# 1. CREATE -> expect 201, and a Location header
curl -i -X POST $BASE \\
  -H 'Content-Type: application/json' \\
  -d '{"amount":"1200.00","date":"2026-03-01","description":"Salary",
       "category":"SALARY","type":"INCOME"}'

# 2. LIST -> expect it present
curl -s $BASE

# 3. FETCH BY ID -> expect 200
curl -i $BASE/1

# 4. FETCH A MADE-UP ID -> expect 404, NOT 500
curl -i $BASE/999999

# 5. INVALID BODY -> expect 400, NOT 500
curl -i -X POST $BASE -H 'Content-Type: application/json' \\
  -d '{"amount":"-5.00","category":"SALARY","type":"INCOME"}'

# 6. SUMMARY -> the balance must match a number you worked out by hand
curl -s $BASE/summary

# 7. DELETE -> expect 204
curl -i -X DELETE $BASE/1

# 8. FETCH IT AGAIN -> expect 404
curl -i $BASE/1

# Save these as a Postman/Bruno collection and COMMIT it. You re-run this
# exact set against production in Module 5.
# And note: "the application started" is not "the application works".
# Only a request from outside proves anything.` }
]},

"Authentication vs Authorization": { parts: [
  { file: "config/SecurityConfig.java", lang: "java", code:
`package com.financetracker.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        return http
            .csrf(csrf -> csrf.disable())
            .sessionManagement(s -> s.sessionCreationPolicy(SessionCreationPolicy.STATELESS))

            .authorizeHttpRequests(auth -> auth
                // Open the specific public paths...
                .requestMatchers("/api/auth/register", "/api/auth/login").permitAll()
                .requestMatchers("/actuator/health").permitAll()

                // ...and then deny everything else. This order matters:
                // anyRequest() LAST means the endpoint you add in six
                // months is secure before you have thought about it.
                .anyRequest().authenticated())

            .build();
    }
}` },
  { file: "the two questions, in the two places", lang: "java", code:
`/* AUTHENTICATION -- "who is making this request?"
   Once per request, in a filter, before any controller runs. */

String username = jwt.subjectOf(token);           // establishes identity
if (username == null) {
    // no identity could be established -> 401 Unauthorized
}

/* AUTHORIZATION -- "may THIS identity do THIS thing to THIS object?"
   Per object, in the service, every single time. */

public Transaction getOne(Long id, Long callerId) {
    return repository.findByIdAndOwnerId(id, callerId)      // permission AND ownership
            .orElseThrow(() -> new TransactionNotFoundException(id));
    // Deliberately 404, not 403: the response is identical whether the
    // record never existed or belongs to somebody else, so an attacker
    // cannot use it to discover which ids are real.
}` }
]},

"Password Storage & Hashing": { parts: [
  { file: "config/PasswordConfig.java", lang: "java", code:
`package com.financetracker.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
public class PasswordConfig {

    @Bean
    public PasswordEncoder passwordEncoder() {
        // 12 is the work factor -- a DELIBERATE cost. Each increment
        // doubles the time. Verifying a password is supposed to take a
        // noticeable fraction of a second; that is the entire point.
        //
        // BCrypt generates a random salt per password and stores it
        // INSIDE the hash string. If you are managing salts by hand,
        // you have the wrong tool.
        return new BCryptPasswordEncoder(12);
    }
}` },
  { file: "service/AuthService.java", lang: "java", code:
`package com.financetracker.service;

import com.financetracker.dto.*;
import com.financetracker.exception.UsernameTakenException;
import com.financetracker.model.User;
import com.financetracker.repository.UserRepository;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class AuthService {

    private final UserRepository users;
    private final PasswordEncoder encoder;
    private final JwtService jwt;

    public AuthService(UserRepository users, PasswordEncoder encoder, JwtService jwt) {
        this.users = users;
        this.encoder = encoder;
        this.jwt = jwt;
    }

    @Transactional
    public UserResponse register(RegisterRequest request) {

        if (users.existsByUsername(request.username())) {
            throw new UsernameTakenException(request.username());   // -> 409
        }

        // Store ONLY the hash. Never the password, never anything reversible.
        String hash = encoder.encode(request.password());

        User saved = users.save(new User(request.username(), request.email(), hash));

        // The response shape has no password field at all -- see the DTO concept.
        return new UserResponse(saved.getId(), saved.getUsername(), saved.getEmail());
    }

    public LoginResponse login(LoginRequest request) {

        // Identical failure for "no such user" and "wrong password":
        // same exception, same status, same message. Anything else lets
        // an attacker enumerate which usernames exist.
        User user = users.findByUsername(request.username())
                .orElseThrow(() -> new BadCredentialsException("Invalid username or password"));

        // The library's own verification. It reads the salt and work
        // factor back out of the stored hash. Never hash the input again
        // and compare the strings yourself.
        if (!encoder.matches(request.password(), user.getPasswordHash())) {
            throw new BadCredentialsException("Invalid username or password");
        }

        return jwt.issueFor(user);
    }
}

// Never: log the incoming password, return the hash in any response, or
// email a password back to anyone.` },
  { file: "what the stored row looks like", lang: "text", code:
`finance_tracker=> SELECT username, password_hash FROM users;

 username |                        password_hash
----------+--------------------------------------------------------------
 alice    | $2a$12$Ke7Zk9rQx1sVjB2mYhO8t.6Lx9wNfCqDpR3sT4uVwXyZaBcDeFgHi
            ^^^^ ^^                        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^
            algo cost   22-char salt        31-char hash

# Look at this row once. Seeing a hash where you expected a password is
# the moment the concept lands.
#
# And note what is NOT here: MD5 and SHA-256 are engineered for speed,
# which is precisely the property that makes them useless for passwords.` }
]},

"Issuing the Token": { parts: [
  { file: "service/JwtService.java", lang: "java", code:
`package com.financetracker.service;

import com.financetracker.dto.LoginResponse;
import com.financetracker.model.User;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import javax.crypto.SecretKey;
import java.nio.charset.StandardCharsets;
import java.time.Duration;
import java.time.Instant;
import java.util.Date;

@Service
public class JwtService {

    private final SecretKey key;
    private final Duration ttl;

    public JwtService(@Value("\${jwt.secret}") String secret,
                      @Value("\${jwt.ttl-minutes:60}") long ttlMinutes) {
        // No default for the secret: a missing JWT_SECRET must stop startup,
        // not silently fall back to something guessable.
        this.key = Keys.hmacShaKeyFor(secret.getBytes(StandardCharsets.UTF_8));
        this.ttl = Duration.ofMinutes(ttlMinutes);
    }

    public LoginResponse issueFor(User user) {

        Instant now = Instant.now();
        Instant expiry = now.plus(ttl);

        String token = Jwts.builder()
                .subject(user.getUsername())        // who
                .claim("uid", user.getId())         // handy, and not secret
                .issuedAt(Date.from(now))
                .expiration(Date.from(expiry))      // SHORT: minutes to hours
                .signWith(key)
                .compact();

        // Return the expiry too, so the client knows when to re-authenticate.
        return new LoginResponse(token, "Bearer", expiry);
    }
}

/* THE FACT THAT SURPRISES EVERYONE
   A JWT is SIGNED, not ENCRYPTED. Those three segments are base64, not
   ciphertext. Anyone holding the token can read every claim in it; the
   signature only proves the claims were not ALTERED.

   So: no password, no hash, no email, no personal data. A subject and an
   expiry are enough.

   Do this once -- paste your own token into jwt.io and read your claims
   sitting there in plain text. */` },
  { file: "generating the secret", lang: "bash", code:
`# Generate it. Do not type letters until it looks long enough.
# HS256 needs at least 256 bits; 512 is a fine default.

openssl rand -base64 64

export JWT_SECRET='<paste the output>'

# It goes in an environment variable and never in a tracked file.
# In .env.example, commit the NAME with no value:
#   JWT_SECRET=` },
  { file: "application.yml", lang: "yaml", code:
`jwt:
  secret: \${JWT_SECRET}      # no default -- fail loudly if it is missing
  ttl-minutes: 60

# A long expiry is convenience today and an incident later: a stolen token
# stays valid until it expires and there is no way to revoke it. That is
# the trade you accept for having no server-side session -- and it is also
# why real systems add refresh tokens.` }
]},

"Validating the Token on Every Request": { parts: [
  { file: "config/JwtAuthFilter.java", lang: "java", code:
`package com.financetracker.config;

import com.financetracker.repository.UserRepository;
import io.jsonwebtoken.*;
import io.jsonwebtoken.security.SignatureException;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.*;
import org.slf4j.*;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.util.List;

@Component
public class JwtAuthFilter extends OncePerRequestFilter {

    private static final Logger log = LoggerFactory.getLogger(JwtAuthFilter.class);

    private final JwtParser parser;
    private final UserRepository users;

    public JwtAuthFilter(JwtParser parser, UserRepository users) {
        this.parser = parser;
        this.users = users;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request,
                                    HttpServletResponse response,
                                    FilterChain chain)
            throws ServletException, IOException {

        String header = request.getHeader("Authorization");

        // Absent or not the expected scheme: carry on UNAUTHENTICATED.
        // Do not reject here -- let the security rules decide whether this
        // particular path allowed an anonymous caller.
        if (header == null || !header.startsWith("Bearer ")) {
            chain.doFilter(request, response);
            return;
        }

        String token = header.substring(7);

        try {
            // parseSignedClaims VERIFIES the signature and the expiry.
            // The lenient parse-without-verifying methods exist; using one
            // by accident is the pitfall this whole concept is about.
            Claims claims = parser.parseSignedClaims(token).getPayload();

            String username = claims.getSubject();

            // The user may have been deleted since the token was issued.
            users.findByUsername(username).ifPresent(user -> {
                var auth = new UsernamePasswordAuthenticationToken(
                        user, null, List.of());
                auth.setDetails(user.getId());
                SecurityContextHolder.getContext().setAuthentication(auth);
            });

        } catch (ExpiredJwtException e) {
            log.debug("Expired token for subject {}", e.getClaims().getSubject());
        } catch (SignatureException e) {
            log.warn("Token signature did not verify -- possible tampering");
        } catch (JwtException | IllegalArgumentException e) {
            log.debug("Unparseable token: {}", e.getMessage());
        }
        // On any failure the context stays empty, so the authorization
        // rules produce a 401. The client is told "invalid or expired
        // token"; the detail stays in the log.

        chain.doFilter(request, response);
    }
}` },
  { file: "config/SecurityConfig.java", lang: "java", code:
`package com.financetracker.config;

import io.jsonwebtoken.*;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.*;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import java.nio.charset.StandardCharsets;

@Configuration
public class SecurityConfig {

    @Bean
    public JwtParser jwtParser(@Value("\${jwt.secret}") String secret) {
        return Jwts.parser()
                .verifyWith(Keys.hmacShaKeyFor(secret.getBytes(StandardCharsets.UTF_8)))
                .build();
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http, JwtAuthFilter jwtFilter)
            throws Exception {
        return http
            // CSRF protects browser SESSIONS by rejecting cross-site form
            // posts. We have no session and no cookie, so there is nothing
            // for an attacker to ride -- understand that before disabling it.
            .csrf(csrf -> csrf.disable())
            .formLogin(form -> form.disable())
            .httpBasic(basic -> basic.disable())

            .sessionManagement(s -> s.sessionCreationPolicy(SessionCreationPolicy.STATELESS))

            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/api/auth/**", "/actuator/health").permitAll()
                .anyRequest().authenticated())        // deny by default

            .addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class)
            .build();
    }
}` },
  { file: "test all four cases deliberately", lang: "bash", code:
`BASE=http://localhost:8080/api/transactions

# 1. no token
curl -i $BASE                                       # expect 401

# 2. garbage token
curl -i $BASE -H 'Authorization: Bearer not-a-token'   # expect 401

# 3. expired token (set jwt.ttl-minutes: 0 and re-login to get one)
curl -i $BASE -H "Authorization: Bearer $EXPIRED"    # expect 401

# 4. valid token
TOKEN=$(curl -s -X POST http://localhost:8080/api/auth/login \\
  -H 'Content-Type: application/json' \\
  -d '{"username":"alice","password":"correct horse battery staple"}' \\
  | jq -r .token)

curl -i $BASE -H "Authorization: Bearer $TOKEN"     # expect 200

# Before building anything on top of this, confirm the identity actually
# arrived: have a protected endpoint return the current username.
curl -s http://localhost:8080/api/auth/me -H "Authorization: Bearer $TOKEN"` }
]},

"Ownership — Scoping Every Query to the Caller": { parts: [
  { file: "service/CurrentUser.java", lang: "java", code:
`package com.financetracker.service;

import com.financetracker.model.User;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;

@Component
public class CurrentUser {

    /**
     * The caller's identity comes from the REQUEST CONTEXT -- put there by
     * the JWT filter, derived from a signature you verified.
     *
     * It never comes from the request body, the URL, or a query parameter.
     * That single rule is most of this module.
     */
    public User require() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if (auth == null || !(auth.getPrincipal() instanceof User user)) {
            throw new IllegalStateException("No authenticated user in context");
        }
        return user;
    }

    public Long requireId() { return require().getId(); }
}` },
  { file: "service/TransactionService.java", lang: "java", code:
`package com.financetracker.service;

import com.financetracker.dto.TransactionRequest;
import com.financetracker.exception.TransactionNotFoundException;
import com.financetracker.model.Transaction;
import com.financetracker.model.User;
import com.financetracker.repository.TransactionRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional(readOnly = true)
public class TransactionService {

    private final TransactionRepository repository;
    private final CurrentUser currentUser;

    public TransactionService(TransactionRepository repository, CurrentUser currentUser) {
        this.repository = repository;
        this.currentUser = currentUser;
    }

    /* READING A COLLECTION -- filter in the QUERY, not in memory. */
    public List<Transaction> findAll() {
        return repository.findByOwnerId(currentUser.requireId());
    }

    /* CREATING -- stamp the caller as owner, ignore anything the client
       tried to send. This is why TransactionRequest has no owner field. */
    @Transactional
    public Transaction create(TransactionRequest request) {
        User caller = currentUser.require();
        return repository.save(new Transaction(
                request.amount(), request.date(), request.description(),
                request.category(), request.type(),
                caller));                      // <- the server decides, always
    }

    /* READING ONE -- id AND owner, in a SINGLE query. A check that lives
       inside the query cannot be forgotten; one that lives in Java can. */
    public Transaction getOne(Long id) {
        return repository.findByIdAndOwnerId(id, currentUser.requireId())
                .orElseThrow(() -> new TransactionNotFoundException(id));
    }

    @Transactional
    public Transaction update(Long id, TransactionRequest request) {
        Transaction existing = getOne(id);      // reuse -- same guarantee
        existing.setDescription(request.description());
        existing.setCategory(request.category());
        return existing;                        // dirty checking flushes it
    }

    @Transactional
    public void delete(Long id) {
        repository.delete(getOne(id));
    }
}

/* WHAT NOT TO WRITE -- the vulnerability in one line:

     Transaction t = repository.findById(id).orElseThrow();
     if (!t.getOwner().getId().equals(callerId)) { throw ...; }

   It is correct, until someone adds a sixth method and forgets the second
   line. This class of bug has a name: insecure direct object reference.
   You will recognise it in other people's code for the rest of your career. */` },
  { file: "the proof — actually run this", lang: "bash", code:
`# Register A, create a transaction, note the id.
curl -s -X POST localhost:8080/api/auth/register -H 'Content-Type: application/json' \\
  -d '{"username":"alice","email":"a@x.com","password":"alice-password-123"}'

A=$(curl -s -X POST localhost:8080/api/auth/login -H 'Content-Type: application/json' \\
  -d '{"username":"alice","password":"alice-password-123"}' | jq -r .token)

ID=$(curl -s -X POST localhost:8080/api/transactions -H "Authorization: Bearer $A" \\
  -H 'Content-Type: application/json' \\
  -d '{"amount":"50.00","date":"2026-03-04","description":"Shop",
       "category":"GROCERIES","type":"EXPENSE"}' | jq -r .id)

# Register B and log in as B.
curl -s -X POST localhost:8080/api/auth/register -H 'Content-Type: application/json' \\
  -d '{"username":"bob","email":"b@x.com","password":"bob-password-123"}'

B=$(curl -s -X POST localhost:8080/api/auth/login -H 'Content-Type: application/json' \\
  -d '{"username":"bob","password":"bob-password-123"}' | jq -r .token)

# Request A's transaction with B's token.
curl -i localhost:8080/api/transactions/$ID -H "Authorization: Bearer $B"

# THE CORRECT RESULT: 404. The API behaves as though that record does not
# exist. Run this after every change in this module -- it is the only test
# that verifies the module's actual mission.` }
]},

"DTOs — Separating the Wire From the Database": { parts: [
  { file: "dto/TransactionRequest.java", lang: "java", code:
`package com.financetracker.dto;

import com.financetracker.model.Category;
import com.financetracker.model.TransactionType;
import jakarta.validation.constraints.*;

import java.math.BigDecimal;
import java.time.LocalDate;

/**
 * A record: immutable, one line of declaration, and obviously data rather
 * than behaviour.
 *
 * Note what is NOT here -- id and owner. The server supplies both. Their
 * absence is what makes over-posting structurally impossible rather than
 * merely forbidden.
 */
public record TransactionRequest(

        @NotNull(message = "Amount is required")
        @Positive(message = "Amount must be greater than zero")
        BigDecimal amount,

        @NotNull(message = "Date is required")
        @PastOrPresent(message = "Date cannot be in the future")
        LocalDate date,

        @Size(max = 255, message = "Description cannot exceed 255 characters")
        String description,

        @NotNull(message = "Category is required")
        Category category,          // the enum type itself rejects unknown values

        @NotNull(message = "Type is required")
        TransactionType type
) { }` },
  { file: "dto/TransactionResponse.java", lang: "java", code:
`package com.financetracker.dto;

import com.financetracker.model.*;

import java.math.BigDecimal;
import java.time.LocalDate;

public record TransactionResponse(Long id,
                                  BigDecimal amount,
                                  LocalDate date,
                                  String description,
                                  Category category,
                                  TransactionType type,
                                  String ownerUsername) {

    /** Mapping written by hand. Adopt a mapping library later, once you
     *  know exactly what it would be doing for you. */
    public static TransactionResponse from(Transaction t) {
        return new TransactionResponse(
                t.getId(), t.getAmount(), t.getDate(), t.getDescription(),
                t.getCategory(), t.getType(),
                t.getOwner().getUsername());
        // Everything the client has no business seeing is simply not
        // listed -- including any field added to the entity next year.
    }
}` },
  { file: "controller/TransactionController.java", lang: "java", code:
`@RestController
@RequestMapping("/api/transactions")
public class TransactionController {

    private final TransactionService service;

    public TransactionController(TransactionService service) { this.service = service; }

    @GetMapping
    public List<TransactionResponse> list() {
        return service.findAll().stream()
                .map(TransactionResponse::from)
                .toList();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    // @Valid is what makes the framework reject a bad body BEFORE any of
    // your code runs. Without it every annotation above is decoration.
    public TransactionResponse create(@Valid @RequestBody TransactionRequest request) {
        return TransactionResponse.from(service.create(request));
    }
}

/* THE TWO BUGS THIS PREVENTS

   1  LEAKING OUT -- returning the entity exposes every field it has,
      including passwordHash on the User it drags along, and including
      whatever someone adds next year with no code change to review.

   2  OVER-POSTING IN -- accepting the entity lets a client send
      {"owner": {"id": 1}} and assign the record to somebody else.

   Validating at the boundary also means every service method beneath it
   can assume clean input. That assumption simplifies everything. */` }
]},

"Global Exception Handling": { parts: [
  { file: "exception/ErrorResponse.java", lang: "java", code:
`package com.financetracker.exception;

import com.fasterxml.jackson.annotation.JsonInclude;

import java.time.Instant;
import java.util.List;

/** ONE error shape, used by every failure. A client writes its error
 *  parsing once. Inconsistent errors are one of the clearest signals of
 *  an unfinished API. */
@JsonInclude(JsonInclude.Include.NON_NULL)
public record ErrorResponse(Instant timestamp,
                            int status,
                            String error,
                            String message,
                            String path,
                            String traceId,
                            List<FieldError> fieldErrors) {

    public record FieldError(String field, String message) { }
}` },
  { file: "exception/GlobalExceptionHandler.java", lang: "java", code:
`package com.financetracker.exception;

import jakarta.servlet.http.HttpServletRequest;
import org.slf4j.*;
import org.springframework.http.*;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;

import java.time.Instant;
import java.util.List;
import java.util.UUID;

@RestControllerAdvice          // applies across every controller
public class GlobalExceptionHandler {

    private static final Logger log = LoggerFactory.getLogger(GlobalExceptionHandler.class);

    @ExceptionHandler(TransactionNotFoundException.class)
    public ResponseEntity<ErrorResponse> notFound(TransactionNotFoundException e,
                                                  HttpServletRequest request) {
        return build(HttpStatus.NOT_FOUND, e.getMessage(), request, null);
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ErrorResponse> validation(MethodArgumentNotValidException e,
                                                    HttpServletRequest request) {
        // One entry per invalid field, so the client can highlight them.
        List<ErrorResponse.FieldError> fields = e.getBindingResult().getFieldErrors().stream()
                .map(f -> new ErrorResponse.FieldError(f.getField(), f.getDefaultMessage()))
                .toList();
        return build(HttpStatus.BAD_REQUEST, "Validation failed", request, fields);
    }

    @ExceptionHandler(HttpMessageNotReadableException.class)
    public ResponseEntity<ErrorResponse> malformed(HttpMessageNotReadableException e,
                                                   HttpServletRequest request) {
        // Note: e.getMessage() here contains Jackson internals. Do not
        // forward it -- say something plain instead.
        return build(HttpStatus.BAD_REQUEST, "Malformed JSON request body", request, null);
    }

    /**
     * Catches BadCredentialsException thrown by AuthService during login,
     * because that happens inside a controller.
     *
     * It does NOT catch a missing or invalid token: the filter chain
     * rejects those before any controller is reached, so no
     * @ControllerAdvice ever sees them. To give those the same error
     * shape you must register an AuthenticationEntryPoint (and an
     * AccessDeniedHandler) on the SecurityFilterChain. Hit a protected
     * endpoint with no token and compare the body -- the difference is
     * the lesson.
     */
    @ExceptionHandler(AuthenticationException.class)
    public ResponseEntity<ErrorResponse> unauthenticated(AuthenticationException e,
                                                         HttpServletRequest request) {
        return build(HttpStatus.UNAUTHORIZED, "Invalid or expired credentials", request, null);
    }

    @ExceptionHandler(AccessDeniedException.class)
    public ResponseEntity<ErrorResponse> forbidden(AccessDeniedException e,
                                                   HttpServletRequest request) {
        return build(HttpStatus.FORBIDDEN, "Not permitted", request, null);
    }

    @ExceptionHandler(UsernameTakenException.class)
    public ResponseEntity<ErrorResponse> conflict(UsernameTakenException e,
                                                  HttpServletRequest request) {
        return build(HttpStatus.CONFLICT, e.getMessage(), request, null);
    }

    /** The catch-all. THE rule of this concept lives in these five lines. */
    @ExceptionHandler(Exception.class)
    public ResponseEntity<ErrorResponse> unexpected(Exception e, HttpServletRequest request) {
        String traceId = UUID.randomUUID().toString().substring(0, 8);

        // The LOG gets the stack trace...
        log.error("Unhandled exception [traceId={}] on {} {}",
                traceId, request.getMethod(), request.getRequestURI(), e);

        // ...the CLIENT gets a generic message and a correlation id.
        // Never the other way round: a leaked stack trace is a free
        // reconnaissance report for anyone probing your API.
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(new ErrorResponse(Instant.now(), 500, "Internal Server Error",
                        "Something went wrong. Quote reference " + traceId + " if you report this.",
                        request.getRequestURI(), traceId, null));
    }

    private ResponseEntity<ErrorResponse> build(HttpStatus status, String message,
                                                HttpServletRequest request,
                                                List<ErrorResponse.FieldError> fields) {
        return ResponseEntity.status(status).body(new ErrorResponse(
                Instant.now(), status.value(), status.getReasonPhrase(),
                message, request.getRequestURI(), null, fields));
    }
}` },
  { file: "what the client actually receives", lang: "json", code:
`// POST /api/transactions with {"amount": "-5.00", "type": "EXPENSE"}
// 400 Bad Request

{
  "timestamp": "2026-03-14T10:22:31.884Z",
  "status": 400,
  "error": "Bad Request",
  "message": "Validation failed",
  "path": "/api/transactions",
  "fieldErrors": [
    { "field": "amount",   "message": "Amount must be greater than zero" },
    { "field": "date",     "message": "Date is required" },
    { "field": "category", "message": "Category is required" }
  ]
}

// Test every branch on purpose -- one request each. And read RFC 7807
// (Problem Details for HTTP APIs), then either follow it or knowingly
// choose not to.` }
]},

"What Continuous Integration Is, and Why": { parts: [
  { file: "the difference, concretely", lang: "text", code:
`WITHOUT CI
  git push
    -> nobody knows whether it builds
    -> nobody knows whether the tests still pass
    -> the break is found on Thursday by someone else,
       in a commit from Monday, by bisecting

WITH CI
  git push
    -> a CLEAN Ubuntu runner checks out THAT exact commit
    -> installs exactly the declared toolchain (Temurin 21)
    -> ./mvnw verify   from scratch, nothing cached from a laptop
    -> PASS or FAIL, attached to the commit, visible to everyone

WHY "A CLEAN MACHINE" IS THE WHOLE POINT
  It catches everything installed on your computer that the project
  never declared:
    - a JDK you installed in 2023 and forgot
    - an environment variable set in ~/.zshrc months ago
    - a file that exists locally and was never committed
    - a dependency your IDE downloaded but the pom does not name

THREE DIFFERENT THINGS -- know which one you are building
  Continuous Integration  every commit is built and tested   <- THIS module
  Continuous Delivery     every green build is RELEASABLE
  Continuous Deployment   every green build IS deployed      <- Module 5` }
]},

"Writing Your First Unit Test": { parts: [
  { file: "src/test/java/.../FinanceEngineTest.java", lang: "java", code:
`package com.financetracker.engine;

import com.financetracker.model.*;
import org.junit.jupiter.api.*;

import java.math.BigDecimal;
import java.time.LocalDate;

import static org.junit.jupiter.api.Assertions.*;

/**
 * A UNIT test: no database, no HTTP, no files, no Spring context.
 * That is what makes it a unit test, and what makes it run in
 * milliseconds instead of seconds.
 */
class FinanceEngineTest {

    private FinanceEngine engine;

    @BeforeEach
    void setUp() {
        engine = new FinanceEngine();
    }

    @Test
    @DisplayName("balance is total income minus total expenses")
    void balanceIsIncomeMinusExpenses() {
        // ARRANGE -- amounts chosen so the answer is obvious by hand
        engine.add(income("2000.00",  "2026-03-01"));
        engine.add(income( "500.00",  "2026-03-10"));   // income  = 2500.00
        engine.add(expense("800.00",  "2026-03-02"));
        engine.add(expense("120.50",  "2026-03-05"));
        engine.add(expense( "79.50",  "2026-03-09"));   // expense = 1000.00

        // ACT
        BigDecimal balance = engine.balance();

        // ASSERT -- 2500.00 - 1000.00 = 1500.00
        assertEquals(0, new BigDecimal("1500.00").compareTo(balance),
                "Expected 1500.00 but was " + balance);
    }

    @Test
    @DisplayName("balance of an empty engine is zero, not a crash")
    void emptyEngineBalancesToZero() {
        assertEquals(0, BigDecimal.ZERO.compareTo(engine.balance()));
    }

    @Test
    @DisplayName("spending by category groups and sums correctly")
    void spendingByCategoryGroupsAndSums() {
        engine.add(expense("40.00", "2026-03-01", Category.GROCERIES));
        engine.add(expense("35.50", "2026-03-08", Category.GROCERIES));
        engine.add(expense("900.00", "2026-03-01", Category.RENT));
        engine.add(income("2000.00", "2026-03-01"));      // must be ignored

        var totals = engine.spendingByCategory();

        assertEquals(2, totals.size(), "Income must not create a category");
        assertEquals(0, new BigDecimal("75.50").compareTo(totals.get(Category.GROCERIES)));
        assertEquals(0, new BigDecimal("900.00").compareTo(totals.get(Category.RENT)));
    }

    @Test
    @DisplayName("a monthly report excludes transactions outside that month")
    void monthlyReportExcludesOtherMonths() {
        engine.add(income("1000.00", "2026-02-28"));   // before
        engine.add(income("2000.00", "2026-03-15"));   // inside
        engine.add(income("3000.00", "2026-04-01"));   // after

        MonthlyReport march = engine.monthlyReport(2026, 3);

        assertEquals(0, new BigDecimal("2000.00").compareTo(march.income()));
    }

    /* ---- small builders keep the tests readable ---- */

    private static Transaction income(String amount, String date) {
        return new Transaction(new BigDecimal(amount), LocalDate.parse(date),
                "test", Category.SALARY, TransactionType.INCOME, null);
    }

    private static Transaction expense(String amount, String date) {
        return expense(amount, date, Category.OTHER);
    }

    private static Transaction expense(String amount, String date, Category category) {
        return new Transaction(new BigDecimal(amount), LocalDate.parse(date),
                "test", category, TransactionType.EXPENSE, null);
    }
}

// Names are sentences describing BEHAVIOUR, not the method being called.
// The failure report then reads like a specification.` },
  { file: "testing a service without a database", lang: "java", code:
`// Your Module 2 layering pays off here. Constructor injection means the
// service can be handed a stand-in and tested with no database at all.

@ExtendWith(MockitoExtension.class)
class TransactionServiceTest {

    @Mock  TransactionRepository repository;
    @Mock  CurrentUser currentUser;

    @InjectMocks TransactionService service;

    @Test
    @DisplayName("create stamps the caller as owner, ignoring the request")
    void createStampsTheCaller() {
        User alice = new User("alice", "a@x.com", "hash");
        when(currentUser.require()).thenReturn(alice);
        when(repository.save(any())).thenAnswer(i -> i.getArgument(0));

        var request = new TransactionRequest(new BigDecimal("50.00"),
                LocalDate.parse("2026-03-04"), "Shop",
                Category.GROCERIES, TransactionType.EXPENSE);

        Transaction saved = service.create(request);

        assertSame(alice, saved.getOwner());
    }
}

// If a class is HARD to test in isolation, that is a design signal, not a
// testing problem -- it usually means a layer is doing two jobs.` }
]},

"Assertions, Edge Cases & Watching a Test Fail": { parts: [
  { file: "the four cases", lang: "java", code:
`package com.financetracker.engine;

import org.junit.jupiter.api.*;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;

import java.math.BigDecimal;
import java.time.LocalDate;

import static org.junit.jupiter.api.Assertions.*;

class MonthlyReportEdgeCaseTest {

    private final FinanceEngine engine = new FinanceEngine();

    /* 1. THE NORMAL CASE -- a realistic mix, a known answer */
    @Test
    void marchReportSumsOnlyMarch() {
        engine.add(income("2000.00", "2026-03-01"));
        engine.add(expense("450.00", "2026-03-18"));

        MonthlyReport r = engine.monthlyReport(2026, 3);

        assertAll(
            () -> assertEquals(0, new BigDecimal("2000.00").compareTo(r.income())),
            () -> assertEquals(0, new BigDecimal( "450.00").compareTo(r.expenses())),
            () -> assertEquals(0, new BigDecimal("1550.00").compareTo(r.balance()))
        );
    }

    /* 2. THE EMPTY CASE -- zero, not a crash */
    @Test
    void emptyMonthReportsZeroRatherThanFailing() {
        MonthlyReport r = engine.monthlyReport(2026, 3);
        assertEquals(0, BigDecimal.ZERO.compareTo(r.balance()));
    }

    /* 3. THE BOUNDARY CASE -- first and last day both belong to the month */
    @ParameterizedTest(name = "{0} counts as March")
    @CsvSource({ "2026-03-01", "2026-03-15", "2026-03-31" })
    void firstAndLastDayOfMonthAreIncluded(String date) {
        engine.add(income("100.00", date));
        assertEquals(0, new BigDecimal("100.00")
                .compareTo(engine.monthlyReport(2026, 3).income()));
    }

    @ParameterizedTest(name = "{0} does NOT count as March")
    @CsvSource({ "2026-02-28", "2026-04-01" })
    void daysEitherSideAreExcluded(String date) {
        engine.add(income("100.00", date));
        assertEquals(0, BigDecimal.ZERO
                .compareTo(engine.monthlyReport(2026, 3).income()));
    }

    /* 4. THE FAILURE CASE -- assert on the ERROR, not on a return value */
    @Test
    void negativeAmountIsRejectedAtConstruction() {
        IllegalArgumentException thrown = assertThrows(
                IllegalArgumentException.class,
                () -> new Transaction(new BigDecimal("-5.00"), LocalDate.now(),
                        "bad", Category.OTHER, TransactionType.EXPENSE, null));

        assertTrue(thrown.getMessage().contains("greater than zero"));
    }
}

/* THE BigDecimal TRAP, again:

     assertEquals(new BigDecimal("1500.00"), balance)   // FAILS on 1500.0
     assertEquals(0, new BigDecimal("1500.00").compareTo(balance))   // correct

   equals() considers scale. compareTo() compares value. Same lesson as
   Module 1, now costing you a red test instead of a wrong balance. */` },
  { file: "watch every test fail, once", lang: "diff", code:
`  public BigDecimal balance() {
-     return totalIncome().subtract(totalExpenses());
+     return totalIncome().add(totalExpenses());
  }

# ./mvnw test
#
# [ERROR] FinanceEngineTest.balanceIsIncomeMinusExpenses:38
#         Expected 1500.00 but was 3500.00 ==> expected: <0> but was: <-1>
#
# GOOD. Now put the minus back.
#
# A test you have never seen fail is not yet a test -- it is an
# assumption with a green tick next to it.
#
# And note what a coverage number would have told you here: nothing.
# Coverage measures which lines RAN, not whether anything was verified.` }
]},

"Anatomy of a Workflow File": { parts: [
  { file: ".github/workflows/build.yml", lang: "yaml", code:
`# The folder name and the .yml extension are both mandatory. Put this
# anywhere else and the workflow simply never runs, with no error to read.

name: Build and Test

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:
    name: Build, test, package
    runs-on: ubuntu-latest

    steps:
      - name: Check out the repository
        uses: actions/checkout@v4

      - name: Set up Java
        uses: actions/setup-java@v4
        with:
          # MUST match <java.version> in the pom. A mismatch produces a
          # confusing compilation error, not a clear message.
          java-version: '21'
          distribution: 'temurin'
          cache: 'maven'          # keyed on pom.xml, handled for you

      - name: Build and test
        # The SAME command you run locally. No CI-only build path, ever.
        run: ./mvnw --batch-mode verify

      - name: Upload the jar
        uses: actions/upload-artifact@v4
        with:
          name: finance-tracker-jar
          path: target/*.jar
          retention-days: 7

# YAML RULES THAT WILL BITE YOU
#   indentation is significant
#   TABS ARE FORBIDDEN -- spaces only
#   a colon inside an unquoted value breaks the parse:
#     name: Build: the app      <- parse error
#     name: "Build: the app"    <- fine
#
# Nearly every first failure is whitespace. Paste the file into a YAML
# validator before you push and save yourself three commits.
#
# Before debugging anything else, check the Actions tab actually LISTS
# the workflow. If it does not, the file is in the wrong place.` }
]},

"Triggers, Branch Protection & the Feedback Loop": { parts: [
  { file: "the two triggers, and what each buys", lang: "yaml", code:
`on:
  # main is always verified -- catches anything that lands directly
  push:
    branches: [ main ]

  # problems are caught BEFORE merge. This is the one that actually
  # prevents breakage.
  pull_request:
    branches: [ main ]

# Optional: skip runs when only docs changed, to keep the loop fast.
# A build that takes fifteen minutes is a build people start pushing
# around rather than waiting for.
    paths-ignore:
      - '**.md'
      - 'docs/**'` },
  { file: "branch protection (a repository setting, not the workflow)", lang: "text", code:
`Settings -> Branches -> Add branch protection rule

  Branch name pattern:  main

  [x] Require a pull request before merging
      [x] Require approvals: 0        (working alone is fine)
  [x] Require status checks to pass before merging
      [x] Require branches to be up to date before merging
      Status checks:  Build, test, package     <- the JOB's name
  [x] Do not allow bypassing the above settings

Broken code is now STRUCTURALLY unable to reach main -- the same shift
as Module 3, from "unlikely" to "impossible".

Without a required status check, a green pipeline is a decoration that
everyone learns to merge past.` },
  { file: "the workflow you adopt", lang: "bash", code:
`git switch -c add-monthly-report
# ...work, commit...
git push -u origin add-monthly-report
gh pr create --fill

gh pr checks --watch      # watch it run against the branch
gh pr merge --squash      # only when green

# PROVE IT WORKS -- deliberately:
git switch -c prove-the-gate
# break an assertion on purpose, commit, push, open a PR
# CONFIRM the merge button is blocked
# fix it, push, and watch the block lift` },
  { file: "README.md", lang: "markdown", code:
`# Finance Tracker

[![Build and Test](https://github.com/YOUR-USER/finance-tracker/actions/workflows/build.yml/badge.svg)](https://github.com/YOUR-USER/finance-tracker/actions/workflows/build.yml)

The health of the project is now visible on its front page.

A red badge on main is an emergency, not a to-do item. That norm is what
makes CI worth anything -- a permanently red pipeline is exactly as
useful as no pipeline, and it costs more.` }
]},

"Building the Deployable Artifact": { parts: [
  { file: "what the build produces", lang: "bash", code:
`./mvnw clean verify

# target/finance-tracker-0.0.1-SNAPSHOT.jar
#
# ONE self-contained archive:
#   your compiled classes
#   every dependency, nested inside it
#   an embedded Tomcat
#
# Runnable with no server to install:
java -jar target/finance-tracker-0.0.1-SNAPSHOT.jar

# Look inside it once -- it stops being magic:
unzip -l target/finance-tracker-0.0.1-SNAPSHOT.jar | head -20
#   BOOT-INF/classes/    <- yours
#   BOOT-INF/lib/        <- every dependency
#   org/springframework/boot/loader/   <- the launcher that wires it up` },
  { file: "the wrapper — commit it", lang: "bash", code:
`# Generate it once, then commit the whole thing.
mvn wrapper:wrapper -Dmaven=3.9.9

git add mvnw mvnw.cmd .mvn/
git commit -m "Add Maven wrapper so CI and laptops agree on the version"

# ./mvnw downloads and uses the pinned Maven version. Without it, the
# runner uses whatever it happens to have, and "works on my machine"
# becomes a build-tool version difference you cannot see.
#
# Keep ALL build configuration in the repository, never in the CI
# provider's settings screen. Configuration that is not in git does not
# exist.` },
  { file: "verify by hand, once", lang: "bash", code:
`# Download exactly what CI produced -- not what you built locally.
gh run download --name finance-tracker-jar

export DB_USERNAME=finance_app DB_PASSWORD='...' JWT_SECRET='...'
java -jar finance-tracker-0.0.1-SNAPSHOT.jar

curl -i localhost:8080/actuator/health      # expect 200 {"status":"UP"}

# You have now proven CI produces something REAL.
#
# That archive is exactly what Module 5 puts in a container -- the
# pipeline is already building your deployable.
#
# If it passes locally and fails on the runner, THE RUNNER IS RIGHT.
# Something is installed on your machine that the project never declared,
# and the clean runner exists precisely to catch it.` }
]},

"Why Containers Exist": { parts: [
  { file: "the vocabulary, as commands", lang: "bash", code:
`# IMAGE -- a frozen, layered filesystem plus the command that starts the
# application. Immutable. Built from a recipe.
docker build -t finance-tracker:0.1 .
docker images
#   REPOSITORY        TAG   IMAGE ID       SIZE
#   finance-tracker   0.1   9f2c1a8b3d4e   198MB

# CONTAINER -- a running instance of an image.
docker run --rm -p 8080:8080 \\
  -e DB_USERNAME=finance_app \\
  -e DB_PASSWORD=secret \\
  -e JWT_SECRET=... \\
  finance-tracker:0.1

docker ps
#   CONTAINER ID   IMAGE                 STATUS         PORTS
#   3ab91c2f7e50   finance-tracker:0.1   Up 4 seconds   0.0.0.0:8080->8080/tcp

# REGISTRY -- where images are stored and pulled from.
docker push registry.digitalocean.com/my-registry/finance-tracker:0.1

# Inspect the layers. Each recipe instruction is one cached layer, which
# is why the ORDER of steps determines your build times.
docker history finance-tracker:0.1` },
  { file: "container vs virtual machine", lang: "text", code:
`VIRTUAL MACHINE                    CONTAINER
┌───────────────────────┐          ┌───────────────────────┐
│  your app             │          │  your app             │
│  libraries            │          │  libraries + JRE      │
│  A WHOLE GUEST OS     │          │  (no OS kernel)       │
│  ~1-4 GB, ~40s boot   │          │  ~200 MB, ~1s start   │
└───────────────────────┘          └───────────────────────┘
   hypervisor                         shares the HOST kernel
   host OS                            host OS

A container is a PACKAGED PROCESS sharing the host's kernel -- not a
whole computer. That is why it starts in a second rather than a minute.

THE MISTAKE THIS CAUSES
  Treating it like a VM: expecting files to survive a restart, or
  expecting to log in and fix things by hand. A container's filesystem
  is thrown away when it stops. Anything that must persist lives in the
  database. Anything you "fixed" by hand is gone on the next deploy.

THE PROMISE
  If it runs in the container on your laptop, it runs in the same
  container in production -- because it is literally the same filesystem.` }
]},

"The Image Recipe — a Multi-Stage Build": { parts: [
  { file: "Dockerfile", lang: "dockerfile", code:
`# ---------- STAGE 1: BUILD ----------
FROM maven:3.9-eclipse-temurin-21 AS build

WORKDIR /app

# Copy the build descriptor FIRST, and ALONE.
COPY pom.xml .
COPY .mvn/ .mvn/
COPY mvnw .

# This layer is now CACHED and only re-runs when pom.xml itself changes.
# The single biggest build-speed win available to you -- get the order
# the wrong way round and every one-line source change re-downloads
# every dependency.
RUN ./mvnw dependency:go-offline --batch-mode

# Only NOW copy the source, which changes on every commit.
COPY src/ src/

RUN ./mvnw clean package --batch-mode -DskipTests


# ---------- STAGE 2: RUN ----------
# A JRE, not a JDK: a fraction of the size, and far less software that
# could turn out to be vulnerable.
FROM eclipse-temurin:21-jre-alpine

WORKDIR /app

# A non-root user. If someone escapes the application, they land as
# nobody-in-particular rather than as root.
RUN addgroup -S spring && adduser -S spring -G spring

# Copy ONLY the finished archive out of stage 1. No source code, no
# Maven, no JDK, no dependency cache crosses this line.
COPY --from=build /app/target/*.jar app.jar

RUN chown spring:spring app.jar
USER spring

EXPOSE 8080

# exec form (JSON array): the JVM becomes PID 1 and receives SIGTERM
# directly, so the platform can shut it down cleanly. The shell form
# would swallow the signal.
ENTRYPOINT ["java", "-jar", "/app/app.jar"]` },
  { file: ".dockerignore", lang: "gitignore", code:
`# Without this, your laptop's build output is copied into the image --
# busting the cache on every build and bloating the context.

target/
build/
.git/
.gitignore
.idea/
*.iml
.vscode/
.env
*.md
Dockerfile
.dockerignore` },
  { file: "build and run it locally, before the platform", lang: "bash", code:
`docker build -t finance-tracker:local .

# Point at the database on your host. On Linux add --network=host, or
# use host.docker.internal on Mac/Windows.
docker run --rm -p 8080:8080 \\
  -e SPRING_PROFILES_ACTIVE=dev \\
  -e DATABASE_URL='jdbc:postgresql://host.docker.internal:5432/finance_tracker' \\
  -e DB_USERNAME=finance_app \\
  -e DB_PASSWORD='a-local-dev-password' \\
  -e JWT_SECRET="$JWT_SECRET" \\
  finance-tracker:local

curl -i localhost:8080/actuator/health

# Compare the two approaches:
#   single stage, JDK + source + Maven cache   ~780 MB
#   multi-stage, JRE + jar                     ~198 MB
#
# The single stage is slower to pull, several times larger, and hands
# anyone who gets in a complete copy of your source code.` }
]},

"Configuration, Ports & Secrets in Production": { parts: [
  { file: "src/main/resources/application-prod.yml", lang: "yaml", code:
`server:
  # THE detail that breaks most first deployments. The PLATFORM tells the
  # application which port to bind to. Hard-code one and the build
  # succeeds, the container starts, and the health check never passes.
  port: \${PORT:8080}

spring:
  datasource:
    url: \${DATABASE_URL}          # no default -- fail fast if absent
    username: \${DB_USERNAME}
    password: \${DB_PASSWORD}
    hikari:
      # Managed plans cap total connections, and the DEFAULT pool size is
      # often larger than your whole allowance.
      maximum-pool-size: \${DB_POOL_SIZE:5}

  jpa:
    hibernate:
      # Generation is a development convenience, not a real answer.
      # 'validate' fails startup if the schema does not match the
      # entities, which is what you want in production.
      ddl-auto: validate
    show-sql: false

jwt:
  secret: \${JWT_SECRET}           # no default, ever

management:
  endpoints:
    web:
      exposure:
        include: health
  endpoint:
    health:
      # A health check that only proves the process is alive is weak.
      # This one also reports the database connection.
      show-details: when-authorized
      probes:
        enabled: true

logging:
  level:
    root: INFO
    com.financetracker: INFO` },
  { file: "config/RequiredSecrets.java", lang: "java", code:
`package com.financetracker.config;

import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.*;
import org.springframework.stereotype.Component;

/**
 * Fail LOUDLY at startup rather than on the first real request.
 *
 * Spring already fails on a missing \${JWT_SECRET} with no default, but a
 * present-and-obviously-wrong value slips through. Ten minutes of work
 * that converts a mysterious runtime error into an obvious startup one.
 */
@Component
@Profile("prod")
public class RequiredSecrets {

    @Value("\${jwt.secret}")
    private String jwtSecret;

    @PostConstruct
    void verify() {
        if (jwtSecret == null || jwtSecret.length() < 32) {
            throw new IllegalStateException(
                    "JWT_SECRET is missing or too short. Generate one with: " +
                    "openssl rand -base64 64");
        }
    }
}` },
  { file: ".env.example  (committed, with no values)", lang: "bash", code:
`# Every variable this application requires, with NO values.
# This file is the documentation that makes the project reproducible by
# anyone -- including future you.

SPRING_PROFILES_ACTIVE=prod

DATABASE_URL=
DB_USERNAME=
DB_PASSWORD=
DB_POOL_SIZE=5

JWT_SECRET=
JWT_TTL_MINUTES=60

PORT=8080

# The image itself contains NONE of these values -- no host names, no
# passwords, no keys, no fixed port. That is what lets ONE image run in
# any environment.
#
# If an image only runs because of settings living on your own machine,
# it is not deployable -- it just happens to work where you are.` }
]},

"The Managed Database": { parts: [
  { file: "provisioning", lang: "text", code:
`DigitalOcean -> Databases -> Create Database Cluster

  Engine:   PostgreSQL 16
  Region:   SAME REGION as the app will run in
            (cross-region means every query pays an internet round trip)
  Plan:     the smallest one -- you can resize later

Then, in the cluster:
  Users & Databases -> create database  finance_tracker
                    -> create user      finance_app

Settings -> Trusted Sources -- DO THIS BEFORE ANYTHING ELSE
  Add: your App Platform app
  Add: your own IP, temporarily, only while you inspect it
  REMOVE your IP again afterwards

  Scanners find open database ports within hours. A weak password is
  then the only thing between them and your data.

Backups:  check what the plan includes, and practise a restore BEFORE
          you need one.` },
  { file: "the connection details", lang: "bash", code:
`# The provider hands you a connection string. It CONTAINS a password --
# treat the whole thing exactly like one.
#
#   postgresql://finance_app:PASSWORD@db-x.b.db.ondigitalocean.com:25060/finance_tracker?sslmode=require

# JDBC wants a slightly different shape. Note sslmode -- a managed
# database will usually demand SSL, and the connection fails silently
# without it.

export DATABASE_URL='jdbc:postgresql://db-x.b.db.ondigitalocean.com:25060/finance_tracker?sslmode=require'
export DB_USERNAME='finance_app'
export DB_PASSWORD='...'

# BEFORE BLAMING YOUR CODE: connect once with a client from your machine.
# If this fails, the problem is trusted sources, not Java.
psql "postgresql://finance_app:PASSWORD@db-x.b.db.ondigitalocean.com:25060/finance_tracker?sslmode=require"` },
  { file: "first migration into it", lang: "sql", code:
`-- ddl-auto: validate means the schema must already exist. Create it once
-- from the entities (run locally against the managed DB with 'update'),
-- or -- better -- adopt versioned migrations.

-- V1__initial_schema.sql   (Flyway)

CREATE TABLE users (
    id            BIGSERIAL PRIMARY KEY,
    username      VARCHAR(50)  NOT NULL UNIQUE,
    email         VARCHAR(255),
    password_hash VARCHAR(60)  NOT NULL
);

CREATE TABLE transactions (
    id               BIGSERIAL PRIMARY KEY,
    amount           NUMERIC(19,2) NOT NULL CHECK (amount > 0),
    transaction_date DATE          NOT NULL,
    description      VARCHAR(255),
    category         VARCHAR(20)   NOT NULL,
    type             VARCHAR(10)   NOT NULL,
    user_id          BIGINT        NOT NULL REFERENCES users(id) ON DELETE CASCADE
);

-- Every ownership query filters on user_id. Index it.
CREATE INDEX idx_transactions_user_date ON transactions (user_id, transaction_date);` }
]},

"Deploying From the Repository": { parts: [
  { file: ".do/app.yaml", lang: "yaml", code:
`# App Platform can be configured through the UI, but keeping it here means
# the deployment is in git -- reviewable, and reproducible.

name: finance-tracker
region: fra

services:
  - name: api
    dockerfile_path: Dockerfile

    github:
      repo: YOUR-USER/finance-tracker
      branch: main
      deploy_on_push: true          # push to main -> a deployment

    http_port: 8080                 # the port the container listens on

    health_check:
      # How the platform tells "the process started" from "the
      # application works". Actuator's health endpoint also reports the
      # database connection, which is what makes it worth polling.
      http_path: /actuator/health
      initial_delay_seconds: 40
      period_seconds: 10
      failure_threshold: 3

    instance_size_slug: basic-xxs
    instance_count: 1

    envs:
      - key: SPRING_PROFILES_ACTIVE
        value: prod

      # SECRET, not GENERAL -- encrypted at rest, never shown again.
      - key: JWT_SECRET
        value: \${JWT_SECRET}
        type: SECRET

      # Bound from the attached database rather than pasted in.
      - key: DATABASE_URL
        value: \${finance-db.JDBC_DATABASE_URL}
      - key: DB_USERNAME
        value: \${finance-db.USERNAME}
      - key: DB_PASSWORD
        value: \${finance-db.PASSWORD}
        type: SECRET

databases:
  - name: finance-db
    engine: PG
    production: true
    cluster_name: finance-tracker-db` },
  { file: "the full chain you have now built", lang: "text", code:
`git push origin main
      │
      ├─> GitHub Actions
      │     checkout -> setup-java 21 -> ./mvnw verify
      │     every test runs on a clean machine
      │     RED? stop here. main is protected.
      │
      ├─> App Platform detects the push
      │     docker build -f Dockerfile .
      │     stage 1: maven package
      │     stage 2: jar into a JRE image
      │
      ├─> starts the container
      │     PORT, DATABASE_URL, JWT_SECRET injected at runtime
      │
      ├─> polls /actuator/health
      │     UP? -> traffic switches to the new version
      │     DOWN after 3 tries? -> deployment fails, OLD VERSION KEEPS SERVING
      │
      └─> live

No server was touched at any point.` },
  { file: "when the first deploy fails — and it will", lang: "bash", code:
`# Read the BUILD log, line by line, from the top.
doctl apps logs <app-id> --type build

# THEN the RUNTIME log. These fail for completely different reasons and
# their logs are in different places -- a successful build says nothing
# about whether the container starts.
doctl apps logs <app-id> --type run --follow

# The three that catch nearly everyone:
#
#   "Web app failed health checks"
#       -> hard-coded server.port, or the app binds 8080 while
#          http_port says something else
#
#   "Connection refused" / "no pg_hba.conf entry"
#       -> the app is not in the database's trusted sources,
#          or sslmode=require is missing from the URL
#
#   "Schema-validation: missing table [transactions]"
#       -> ddl-auto: validate with an empty database. Run the
#          migration first.
#
# The skill this concept actually teaches is reading deployment logs
# calmly. Everyone learns it the same way. Deploy something small early
# rather than perfecting locally first -- the gap between local and
# deployed is exactly what you need to discover.` }
]},

"Verifying Production & What Comes Next": { parts: [
  { file: "the full journey, against production", lang: "bash", code:
`BASE=https://finance-tracker-xxxxx.ondigitalocean.app

# These security tests matter MORE here than locally. This one is
# reachable from the entire internet.

# 1. REGISTER
curl -s -X POST $BASE/api/auth/register -H 'Content-Type: application/json' \\
  -d '{"username":"alice","email":"a@x.com","password":"alice-password-123"}'
#    expect 201

# 2. LOG IN -> a token
A=$(curl -s -X POST $BASE/api/auth/login -H 'Content-Type: application/json' \\
  -d '{"username":"alice","password":"alice-password-123"}' | jq -r .token)

# 3. CREATE with the token
ID=$(curl -s -X POST $BASE/api/transactions -H "Authorization: Bearer $A" \\
  -H 'Content-Type: application/json' \\
  -d '{"amount":"1200.00","date":"2026-03-01","description":"Salary",
       "category":"SALARY","type":"INCOME"}' | jq -r .id)
#    expect 201

# 4. LIST -> yours, and only yours
curl -s $BASE/api/transactions -H "Authorization: Bearer $A"

# 5. NO TOKEN
curl -i $BASE/api/transactions
#    expect 401

# 6. A SECOND USER reading the first user's record
curl -s -X POST $BASE/api/auth/register -H 'Content-Type: application/json' \\
  -d '{"username":"bob","email":"b@x.com","password":"bob-password-123"}'
B=$(curl -s -X POST $BASE/api/auth/login -H 'Content-Type: application/json' \\
  -d '{"username":"bob","password":"bob-password-123"}' | jq -r .token)

curl -i $BASE/api/transactions/$ID -H "Authorization: Bearer $B"
#    expect 404 -- as though the record does not exist

# 7. INVALID BODY
curl -i -X POST $BASE/api/transactions -H "Authorization: Bearer $A" \\
  -H 'Content-Type: application/json' -d '{"amount":"-5.00"}'
#    expect 400, with NO stack trace in the body

# A deployment is verified when the whole journey works -- including the
# responses that are supposed to be refusals. A 200 from one endpoint
# proves nothing.` },
  { file: "then prove the loop — the point of the whole course", lang: "bash", code:
`# Make a small, VISIBLE change.
# e.g. add a "generatedAt" timestamp to the summary response.

git switch -c prove-the-loop
# ...edit...
git commit -am "Add generatedAt to the summary response"
git push -u origin prove-the-loop
gh pr create --fill
gh pr checks --watch          # CI runs
gh pr merge --squash          # merges to main

# Now watch, without touching a server at any point:
doctl apps list-deployments <app-id>     # the platform rebuilds
curl -s $BASE/api/transactions/summary   # the change is live

# That -- a code change reaching production with no manual deployment --
# is the entire point of the course. Do it deliberately and watch every
# stage happen.` },
  { file: "README.md — the front door", lang: "markdown", code:
`# Finance Tracker

[![Build and Test](https://github.com/YOUR-USER/finance-tracker/actions/workflows/build.yml/badge.svg)](https://github.com/YOUR-USER/finance-tracker/actions/workflows/build.yml)

A personal finance API: Spring Boot, PostgreSQL, JWT auth, containerised
and deployed to DigitalOcean App Platform on every push to main.

**Live:** https://finance-tracker-xxxxx.ondigitalocean.app

## Architecture

    controller -> service -> repository -> PostgreSQL
                     ^
                JwtAuthFilter establishes identity per request;
                every query is scoped to the caller.

## Running it

    cp .env.example .env      # then fill it in
    ./mvnw spring-boot:run

Required variables: \\\`DATABASE_URL\\\`, \\\`DB_USERNAME\\\`, \\\`DB_PASSWORD\\\`,
\\\`JWT_SECRET\\\`, \\\`SPRING_PROFILES_ACTIVE\\\`.

## What I would do next

- **Versioned migrations** (Flyway) instead of \\\`ddl-auto\\\` in any form
- **Refresh tokens**, so access tokens can be short without hurting users
- **Monitoring and uptime checks** -- right now nothing tells me it is down
- **Tested backup restores**, not just backups that exist
- **A custom domain** with an automatic certificate

The README is now the front door. Anyone evaluating this project reads
it before they read a single line of the code.` }
]}

};

/* ---------- shared content blocks ---------- */

function renderBlocks(blocks) {
  return blocks.map(function (b) {
    if (b.type === "p") return '<p style="color:var(--txt-dim)">' + b.text + "</p>";

    if (b.type === "list") {
      return (b.caption ? '<div class="section-label">' + esc(b.caption) + "</div>" : "") +
        '<ul class="speclist">' + b.items.map(function (x) { return "<li><span>" + x + "</span></li>"; }).join("") + "</ul>";
    }

    if (b.type === "table") {
      return '<div class="tbl-scroll"><table>' +
        (b.caption ? "<caption>" + esc(b.caption) + "</caption>" : "") +
        "<thead><tr>" + b.head.map(function (h) { return "<th>" + esc(h) + "</th>"; }).join("") + "</tr></thead>" +
        "<tbody>" + b.rows.map(function (r) {
          return "<tr>" + r.map(function (c) { return "<td>" + esc(c) + "</td>"; }).join("") + "</tr>";
        }).join("") + "</tbody></table></div>";
    }
    return "";
  }).join("");
}

/* ---------- the reference implementation, revealed on demand ---------- */

function exampleLabel(example) {
  const java = example.parts.some(function (p) { return p.lang === "java"; });
  return java ? "Show the Java" : "Show the code";
}

function revealButton(c, i) {
  const example = CODE_EXAMPLES[c.name];
  if (!example) return "";
  const label = exampleLabel(example);
  return '<button class="reveal-btn" data-ex="' + i + '" data-label="' + esc(label) + '"' +
    ' aria-expanded="false" aria-controls="ex-' + i + '">' + esc(label) + "</button>";
}

function renderExample(c, i) {
  const example = CODE_EXAMPLES[c.name];
  if (!example) return "";

  return '<div class="example" id="ex-' + i + '" hidden>' +

    '<div class="example-note">' +
      "<strong>One way to do it — not the only way, and not the point.</strong> " +
      "If you have not written your own version of the blueprint above yet, " +
      "close this and go and write it. Reading a solution feels like learning " +
      "and is not. Come back afterwards and compare." +
    "</div>" +

    example.parts.map(function (p) {
      return '<div class="example-part">' +
        '<div class="example-file">' +
          '<span class="example-lang">' + esc(p.lang) + "</span>" +
          "<span>" + esc(p.file) + "</span>" +
        "</div>" +
        '<pre class="code">' + esc(p.code) + "</pre>" +
      "</div>";
    }).join("") +

  "</div>";
}

function renderConcept(c, i) {
  const open = i === 0 ? " open" : "";
  return '<details class="concept"' + open + '>' +
    "<summary>" +
      '<div class="c-head">' +
        '<span class="c-num">' + pad2(i + 1) + "</span>" +
        '<span class="c-name">' + esc(c.name) + "</span>" +
        '<span class="c-chev">▶</span>' +
      "</div>" +
      '<div class="c-learn">' +
        '<div class="c-learn-label">◆ What you’re learning here</div>' +
        '<div class="c-learn-text">' + esc(c.learning) + "</div>" +
      "</div>" +
    "</summary>" +
    '<div class="c-body">' +

      '<div class="c-block research">' +
        '<div class="c-block-label">⌘ Go research this</div>' +
        '<div class="research-hint">Search these before you write any code for this concept — not after you get stuck.</div>' +
        '<ul class="qlist">' + c.searchFor.map(function (q) { return "<li><span>" + esc(q) + "</span></li>"; }).join("") + "</ul>" +
      "</div>" +

      '<div class="c-block"><div class="pseudo-wrap">' +
        '<div class="pseudo-bar"><span>Blueprint</span>' +
        '<span class="pseudo-warn">pseudocode — translate it, do not transcribe it</span>' +
        revealButton(c, i) + "</div>" +
        '<pre class="pseudo">' + esc(c.pseudocode) + "</pre>" +
        renderExample(c, i) +
      "</div></div>" +

      '<div class="c-block">' +
        '<div class="c-block-label lbl-tip">⚑ Tips</div>' +
        '<ul class="tips">' + c.tips.map(function (t) { return "<li><span>" + esc(t) + "</span></li>"; }).join("") + "</ul>" +
      "</div>" +

      '<div class="c-block pitfall">' +
        '<div class="c-block-label">⚠ Common pitfall</div>' +
        "<p>" + esc(c.pitfall) + "</p>" +
      "</div>" +

    "</div></details>";
}

/* ---------- views ---------- */

function renderIntroLike(data) {
  let html = '<div class="hero-kicker">' + esc(data.kicker) + "</div>" +
    '<h1 class="hero-title">' + esc(data.title) + "</h1>" +
    '<p class="hero-sub">' + esc(data.sub) + '</p><hr class="rule">';

  data.sections.forEach(function (s) {
    html += '<div class="section-label">' + esc(s.label) + "</div>";

    if (s.type === "callout" || s.type === "callout-warn") {
      html += '<div class="callout' + (s.type === "callout-warn" ? " warn" : "") + '">' +
        '<div class="callout-title">' + esc(s.title) + "</div>" +
        s.body.map(function (p) { return "<p>" + p + "</p>"; }).join("") + "</div>";

    } else if (s.type === "anatomy") {
      html += '<div class="card"><div class="anatomy">' +
        s.rows.map(function (r) {
          return '<div class="anatomy-row"><div class="anatomy-key k-' + r[1] + '">' + esc(r[0]) + "</div>" +
            '<div class="anatomy-val">' + esc(r[2]) + "</div></div>";
        }).join("") + "</div></div>";

    } else if (s.type === "cards") {
      html += '<div class="grid2">' + s.cards.map(function (c) {
        return '<div class="card"><h4>' + esc(c[0]) + "</h4><p style=\"color:var(--txt-dim);font-size:13.5px\">" + esc(c[1]) + "</p></div>";
      }).join("") + "</div>";

    } else if (s.type === "speclist") {
      html += '<ul class="speclist">' + s.items.map(function (x) { return "<li><span>" + esc(x) + "</span></li>"; }).join("") + "</ul>";
    }
  });

  if (data === COURSE.intro) {
    html += '<div style="margin-top:34px"><button class="btn" data-nav="' + COURSE.modules[0].id + '">Start Module 1 →</button></div>';
  }
  return html;
}

function renderModule(mod) {
  const complete = isComplete(mod.id);
  const checks = checksFor(mod);
  const idx = COURSE.modules.indexOf(mod);
  const next = COURSE.modules[idx + 1];

  let html = '<div class="hero-kicker">Module ' + mod.number + " of " + COURSE.modules.length + "</div>" +
    '<h1 class="hero-title">' + esc(mod.title) + "</h1>" +
    '<p class="hero-sub">' + esc(mod.subtitle) + "</p>" +

    '<div class="section-label">Mission</div>' +
    '<div class="callout"><div class="callout-title">What you are building</div><p>' + esc(mod.mission) + "</p></div>" +

    '<div class="section-label">Architecture blueprint</div>' + renderBlocks(mod.blueprint) +

    '<div class="section-label">Concepts — ' + mod.concepts.length + " to learn and build</div>" +
    '<div class="concept-tools">' +
      '<button class="tool-btn" id="expandAll">Expand all</button>' +
      '<button class="tool-btn" id="collapseAll">Collapse all</button>' +
    "</div>" +
    mod.concepts.map(renderConcept).join("") +

    '<div class="section-label">Checkpoint</div>' +
    '<div class="callout warn"><div class="callout-title">Before you mark this complete</div><p>' +
      esc(mod.checkpoint.summary) + "</p></div>" +
    '<ul class="speclist" style="margin-top:14px">' +
      mod.checkpoint.verify.map(function (v) { return "<li><span>" + esc(v) + "</span></li>"; }).join("") + "</ul>" +

    '<div class="section-label">Requirements checklist</div>' +
    '<p style="color:var(--txt-dim);font-size:13.5px;margin-bottom:14px">Nothing here can inspect your code. Tick an item when your application genuinely does that thing — not when you have read about it.</p>' +
    '<div class="checklist">';

  mod.checklist.forEach(function (item, i) {
    html += '<label class="check-row"><input type="checkbox" data-check="' + i + '"' +
      (checks[i] ? " checked" : "") + '><span>' + esc(item) + "</span></label>";
  });

  const doneCount = checks.filter(Boolean).length;
  const all = doneCount === mod.checklist.length;

  html += '<div class="check-foot">' +
    '<span class="check-count' + (all ? " is-full" : "") + '" id="checkCount">' +
      doneCount + " of " + mod.checklist.length + " requirements met</span>" +
    '<button class="btn" id="completeBtn"' + (all ? "" : " disabled") + ">" +
      (next ? "Mark Module " + mod.number + " Complete & Unlock Module " + next.number
            : "Mark Module " + mod.number + " Complete & Finish the Course") +
    "</button></div></div>";

  if (complete) {
    html += '<div class="done-banner"><div><strong>Module ' + mod.number + " complete.</strong> " +
      (next ? "Module " + next.number + " is unlocked." : "You have finished every module.") + "</div>" +
      '<button class="btn ghost" data-nav="' + (next ? next.id : "outro") + '">' +
      (next ? "Go to Module " + next.number + " →" : "See the wrap-up →") + "</button></div>";
  }

  return html;
}

/* ---------- view switching ---------- */

function renderView() {
  const view = document.getElementById("view");

  if (state.view === "intro") {
    view.innerHTML = renderIntroLike(COURSE.intro);
  } else if (state.view === "outro") {
    view.innerHTML = renderIntroLike(COURSE.outro);
  } else {
    const mod = COURSE.modules[MODULE_IDS.indexOf(state.view)];
    view.innerHTML = renderModule(mod);
    wireModule(mod);
  }
}

function navigate(id) {
  if (!viewIsReachable(id)) return;
  state.view = id;
  saveState();
  renderSidebar();
  renderView();

  const main = document.getElementById("main");
  main.scrollTop = 0;
  window.scrollTo(0, 0);
  main.focus({ preventScroll: true });
  closeDrawer();
}

/* ---------- per-module wiring ---------- */

function wireModule(mod) {
  const checks = checksFor(mod);
  const countEl = document.getElementById("checkCount");
  const btn = document.getElementById("completeBtn");

  function refresh() {
    const n = checks.filter(Boolean).length;
    const all = n === mod.checklist.length;
    countEl.textContent = n + " of " + mod.checklist.length + " requirements met";
    countEl.classList.toggle("is-full", all);
    btn.disabled = !all;
  }

  Array.prototype.forEach.call(document.querySelectorAll("[data-check]"), function (box) {
    box.addEventListener("change", function () {
      checks[Number(box.getAttribute("data-check"))] = box.checked;
      saveState();
      refresh();
    });
  });

  btn.addEventListener("click", function () {
    if (btn.disabled) return;
    if (!isComplete(mod.id)) state.completed.push(mod.id);
    saveState();
    const next = COURSE.modules[COURSE.modules.indexOf(mod) + 1];
    navigate(next ? next.id : "outro");
  });

  function setAll(open) {
    Array.prototype.forEach.call(document.querySelectorAll("details.concept"), function (d) { d.open = open; });
  }
  document.getElementById("expandAll").addEventListener("click", function () { setAll(true); });
  document.getElementById("collapseAll").addEventListener("click", function () { setAll(false); });
}

/* ---------- locked-module feedback ---------- */

let hintTimer = null;
function showLockHint(moduleIndex) {
  const existing = document.querySelector(".lock-hint");
  if (existing) existing.remove();
  if (hintTimer) clearTimeout(hintTimer);

  const prev = COURSE.modules[moduleIndex - 1];
  const hint = document.createElement("div");
  hint.className = "lock-hint";
  hint.setAttribute("role", "status");
  hint.textContent = "Finish Module " + prev.number + " first — tick every requirement, then mark it complete.";
  document.getElementById("nav").appendChild(hint);
  hintTimer = setTimeout(function () { hint.remove(); }, 4500);
}

/* ---------- mobile drawer ---------- */

function openDrawer() {
  document.getElementById("sidebar").classList.add("is-open");
  document.getElementById("scrim").classList.add("is-open");
  document.getElementById("menuBtn").setAttribute("aria-expanded", "true");
}
function closeDrawer() {
  document.getElementById("sidebar").classList.remove("is-open");
  document.getElementById("scrim").classList.remove("is-open");
  document.getElementById("menuBtn").setAttribute("aria-expanded", "false");
}

/* ---------- global listeners ---------- */

document.addEventListener("click", function (e) {
  if (!e.target.closest) return;

  const revealBtn = e.target.closest("[data-ex]");
  if (revealBtn) {
    const pane = document.getElementById("ex-" + revealBtn.getAttribute("data-ex"));
    if (pane) {
      const showing = pane.hidden;                 // it is about to be shown
      pane.hidden = !showing;
      revealBtn.setAttribute("aria-expanded", String(showing));
      revealBtn.textContent = showing ? "Hide the code" : revealBtn.dataset.label;
      revealBtn.classList.toggle("is-open", showing);
    }
    return;
  }

  const navBtn = e.target.closest("[data-nav]");
  if (navBtn) {
    const id = navBtn.getAttribute("data-nav");
    const i = MODULE_IDS.indexOf(id);
    if (i !== -1 && !isUnlocked(i)) { showLockHint(i); return; }
    navigate(id);
  }
});

document.getElementById("menuBtn").addEventListener("click", function () {
  const open = document.getElementById("sidebar").classList.contains("is-open");
  if (open) closeDrawer(); else openDrawer();
});
document.getElementById("scrim").addEventListener("click", closeDrawer);
document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeDrawer(); });

document.getElementById("resetBtn").addEventListener("click", function () {
  if (!window.confirm("Reset all progress?\n\nEvery completed module and every ticked requirement will be cleared, and you will start again at Module 1.")) return;
  clearState();
  state = { completed: [], checked: {}, view: "intro" };
  renderSidebar();
  renderView();
  closeDrawer();
});

/* ---------- boot ---------- */

loadState();
if (!viewIsReachable(state.view)) state.view = "intro";
renderSidebar();
renderView();
