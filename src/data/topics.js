// GitHub Copilot Daily Blog – Complete 42-Day Schedule
// Audience: "developer" | "tester" | "both"
// Difficulty: "Beginner" | "Intermediate" | "Advanced"

export const topics = [
  // ─────────────────── WEEK 1: Getting Started ───────────────────
  {
    id: 1, day: 1, week: 1,
    title: "What is GitHub Copilot?",
    subtitle: "Your AI Pair Programmer – Introduction & Overview",
    audience: "both",
    category: "basics",
    difficulty: "Beginner",
    duration: "10 min",
    summary: "Understand what GitHub Copilot is, how it works under the hood with large language models, and why it's transforming how developers and testers write code.",
    content: `GitHub Copilot is an AI-powered coding assistant developed by GitHub in collaboration with OpenAI. It uses large language models (LLMs) trained on billions of lines of public code to suggest whole lines, functions, tests, and documentation directly in your editor.\n\nCopilot is not just autocomplete — it understands context from comments, function names, existing code, and even natural language descriptions. It works across 30+ programming languages and integrates natively into VS Code, JetBrains IDEs, Visual Studio, Neovim, and the CLI.\n\nKey capabilities:\n• Inline code completions (ghost text)\n• Copilot Chat for conversational coding\n• Test generation\n• Documentation generation\n• Bug fixing and refactoring\n• Terminal command suggestions`,
    keyPoints: [
      "LLM-based AI trained on public GitHub repositories",
      "Supports 30+ languages including Python, JS, TypeScript, Java, C#, Go",
      "Available in VS Code, JetBrains, Visual Studio, Neovim, and CLI",
      "Two main modes: inline completions and Copilot Chat",
      "Requires a GitHub Copilot subscription (Individual, Business, or Enterprise)"
    ],
    links: [
      { text: "GitHub Copilot Official Docs", url: "https://docs.github.com/en/copilot" },
      { text: "About GitHub Copilot", url: "https://docs.github.com/en/copilot/about-github-copilot/what-is-github-copilot" },
      { text: "GitHub Blog: Copilot Tag", url: "https://github.blog/tag/github-copilot/" },
      { text: "GitHub Copilot Plans & Pricing", url: "https://github.com/features/copilot#pricing" }
    ],
    tags: ["introduction", "overview", "LLM", "AI", "basics"],
    codeExample: null
  },
  {
    id: 2, day: 2, week: 1,
    title: "Setting Up GitHub Copilot in VS Code",
    subtitle: "Install, Authenticate & Configure for the First Time",
    audience: "both",
    category: "basics",
    difficulty: "Beginner",
    duration: "15 min",
    summary: "Step-by-step guide to installing the GitHub Copilot extension in VS Code, authenticating with your GitHub account, and configuring basic settings.",
    content: `Getting Copilot up and running takes just a few minutes. Here's the complete setup process:\n\n**Step 1 – Prerequisites**\n• A GitHub account with Copilot access (trial or paid subscription)\n• VS Code version 1.80 or later\n\n**Step 2 – Install the Extension**\n• Open VS Code and go to Extensions (Ctrl+Shift+X)\n• Search for "GitHub Copilot" and install both:\n  - GitHub Copilot (inline suggestions)\n  - GitHub Copilot Chat (conversational AI)\n\n**Step 3 – Sign In**\n• You'll be prompted to sign in with your GitHub account\n• Click "Sign in to GitHub" and follow the OAuth flow in your browser\n\n**Step 4 – Verify Activation**\n• Look for the Copilot icon in the VS Code status bar (bottom right)\n• A checkmark means it's active and ready\n\n**Step 5 – Configure Settings**\n• Open Settings (Ctrl+,) and search "copilot"\n• Key settings: enable/disable inline suggestions, language-specific toggles`,
    keyPoints: [
      "Install both 'GitHub Copilot' and 'GitHub Copilot Chat' extensions",
      "Sign in via OAuth with your GitHub account",
      "Verify activation via the Copilot icon in the status bar",
      "Free tier available for verified students and OSS maintainers",
      "Configure per-language enable/disable in VS Code settings"
    ],
    links: [
      { text: "Setting Up Copilot in VS Code", url: "https://docs.github.com/en/copilot/managing-copilot/configure-personal-settings/installing-the-github-copilot-extension-in-your-environment" },
      { text: "GitHub Copilot on VS Code Marketplace", url: "https://marketplace.visualstudio.com/items?itemName=GitHub.copilot" },
      { text: "GitHub Copilot Chat on Marketplace", url: "https://marketplace.visualstudio.com/items?itemName=GitHub.copilot-chat" },
      { text: "Copilot Quickstart", url: "https://docs.github.com/en/copilot/quickstart" }
    ],
    tags: ["setup", "install", "VS Code", "authentication", "extension"],
    codeExample: null
  },
  {
    id: 3, day: 3, week: 1,
    title: "Your First Code Suggestion",
    subtitle: "Experiencing Inline Completions in Action",
    audience: "both",
    category: "basics",
    difficulty: "Beginner",
    duration: "12 min",
    summary: "Write your first Copilot-assisted code. Learn how to trigger suggestions, read ghost text, and understand what makes a good prompt for Copilot.",
    content: `Once Copilot is installed, simply start typing and it will offer suggestions as translucent "ghost text". Here's how to get great first results:\n\n**Triggering Suggestions**\n• Just start typing a function name or comment\n• Press Tab to accept a suggestion\n• Press Escape to dismiss\n• Press Alt+] (or Option+]) to cycle to the next suggestion\n• Press Alt+[ to go back to the previous suggestion\n\n**The Power of Comments**\nCopilot reads comments as intent. Try:\n\`\`\`javascript\n// Function to calculate the factorial of a number\nfunction factorial(n) {\n  // Copilot will complete this...\n}\n\`\`\`\n\n**What Makes a Good Prompt?**\n• Clear function/variable names\n• Descriptive comments above the code block\n• Type annotations (TypeScript, Python type hints)\n• Existing patterns in the file give context`,
    keyPoints: [
      "Tab accepts a suggestion; Escape dismisses it",
      "Alt+] / Alt+[ cycles through multiple suggestions",
      "Comments are the most powerful prompt signal",
      "Clear naming and types dramatically improve suggestion quality",
      "Open 'Copilot Completions Panel' to see all alternatives at once"
    ],
    links: [
      { text: "Getting Code Suggestions", url: "https://docs.github.com/en/copilot/using-github-copilot/getting-code-suggestions-in-your-ide-with-github-copilot" },
      { text: "Copilot Keyboard Shortcuts", url: "https://docs.github.com/en/copilot/managing-copilot/configure-personal-settings/configuring-github-copilot-in-your-environment" },
      { text: "Best Practices for Prompts", url: "https://docs.github.com/en/copilot/using-github-copilot/best-practices-for-using-github-copilot" }
    ],
    tags: ["inline completion", "ghost text", "Tab", "first suggestion"],
    codeExample: `// Calculate the sum of all even numbers in an array\nfunction sumEvenNumbers(arr) {\n  return arr.filter(n => n % 2 === 0).reduce((sum, n) => sum + n, 0);\n}`
  },
  {
    id: 4, day: 4, week: 1,
    title: "Understanding Ghost Text & Inline Completions",
    subtitle: "How Copilot Generates and Ranks Suggestions",
    audience: "both",
    category: "basics",
    difficulty: "Beginner",
    duration: "12 min",
    summary: "Dive deeper into how inline completions work — what context Copilot sees, how it ranks suggestions, and how to control when it triggers.",
    content: `**What is Ghost Text?**\nGhost text is Copilot's inline suggestion shown in a lighter color. It appears automatically after a brief pause while you type.\n\n**What Context Does Copilot Use?**\nCopilot sends a carefully crafted "prompt" to the AI model that includes:\n• The code before your cursor (prefix)\n• The code after your cursor (suffix)\n• Related open files (neighboring tabs)\n• The file's language and path\n\n**Multi-line Completions**\nCopilot can complete entire functions, classes, or blocks. It uses the surrounding context to generate coherent multi-line code.\n\n**Controlling Inline Suggestions**\n• Disable for a specific language: Settings → "Copilot: Enable" → toggle per language\n• Delay before showing: VS Code handles this automatically\n• View all suggestions: Ctrl+Enter opens the "GitHub Copilot: Open Completions Panel"\n\n**Accepting Partial Suggestions**\n• Accept one word at a time: Ctrl+Right Arrow (on Windows)\n• This is useful when a suggestion is mostly right but needs tweaking at the end`,
    keyPoints: [
      "Copilot sends prefix + suffix + neighboring files as context",
      "Ctrl+Enter opens the completions panel with up to 10 alternatives",
      "Ctrl+Right Arrow accepts a suggestion word by word",
      "Neighboring open files influence suggestion quality",
      "You can disable Copilot per-language without uninstalling"
    ],
    links: [
      { text: "How Copilot Generates Suggestions", url: "https://docs.github.com/en/copilot/about-github-copilot/copilot-in-context" },
      { text: "Configuring Inline Suggestions", url: "https://docs.github.com/en/copilot/managing-copilot/configure-personal-settings/configuring-github-copilot-in-your-environment" }
    ],
    tags: ["ghost text", "context", "prefix", "suffix", "completions panel"],
    codeExample: null
  },
  {
    id: 5, day: 5, week: 1,
    title: "GitHub Copilot Chat – Getting Started",
    subtitle: "Conversational AI for Coding Questions",
    audience: "both",
    category: "basics",
    difficulty: "Beginner",
    duration: "15 min",
    summary: "Learn to use Copilot Chat — the conversational interface for asking coding questions, explaining code, fixing bugs, and generating boilerplate.",
    content: `**Opening Copilot Chat**\n• Click the Copilot Chat icon in the Activity Bar (left sidebar)\n• Or use Ctrl+Alt+I (Windows) / Ctrl+Cmd+I (Mac)\n\n**Three Chat Surfaces**\n1. **Chat Panel** – Persistent conversation window; great for longer discussions\n2. **Inline Chat** – Ctrl+I while your cursor is in the editor; edits code in place\n3. **Quick Chat** – Ctrl+Shift+Alt+L; floating window for quick questions\n\n**What Can You Ask?**\n• "Explain this function to me"\n• "What does this error mean?"\n• "Write a REST API endpoint for user registration"\n• "How do I read a CSV file in Python?"\n• "Suggest a better name for this variable"\n\n**Conversation Context**\nCopilot Chat maintains conversation history within a session. You can reference earlier messages and build on previous answers.\n\n**Starting Fresh**\nClick the "+" icon in the Chat panel to start a new conversation and clear context.`,
    keyPoints: [
      "Three surfaces: Chat Panel, Inline Chat (Ctrl+I), and Quick Chat",
      "Ask questions in plain English — no special syntax required",
      "Chat maintains conversation history for follow-up questions",
      "Inline Chat edits code directly in the editor",
      "Use 'New Chat' to reset context when switching tasks"
    ],
    links: [
      { text: "Using Copilot Chat in VS Code", url: "https://docs.github.com/en/copilot/github-copilot-chat/copilot-chat-in-ides/using-github-copilot-chat-in-your-ide" },
      { text: "Copilot Chat Overview", url: "https://docs.github.com/en/copilot/github-copilot-chat/about-github-copilot-chat" }
    ],
    tags: ["chat", "inline chat", "conversational AI", "chat panel"],
    codeExample: null
  },
  {
    id: 6, day: 6, week: 1,
    title: "Copilot for Multiple Languages & File Types",
    subtitle: "Python, JavaScript, TypeScript, Java, C#, and More",
    audience: "both",
    category: "basics",
    difficulty: "Beginner",
    duration: "10 min",
    summary: "Explore how Copilot performs across different programming languages and file types, including configuration files, Markdown, and SQL.",
    content: `**Supported Languages**\nCopilot excels at languages with large training datasets:\n• Tier 1 (Best): JavaScript, TypeScript, Python, Go, Ruby, Java, C#, C++, PHP\n• Tier 2 (Good): Rust, Kotlin, Swift, Scala, Shell/Bash, PowerShell\n• Tier 3 (Decent): SQL, YAML, JSON, Markdown, CSS, HTML\n\n**Beyond Code – Config Files**\nCopilot understands configuration context:\n• Suggests fields in package.json, tsconfig.json\n• Completes GitHub Actions YAML workflows\n• Fills in Dockerfile instructions\n• Suggests Kubernetes manifest fields\n\n**Language-Specific Strengths**\n• Python: Great with pandas, numpy, ML code; reads type hints\n• TypeScript: Understands interfaces and generics deeply\n• Java/C#: Strong with OOP patterns, Spring/ASP.NET conventions\n• SQL: Generates complex queries from comments\n\n**Per-Language Enable/Disable**\nIn VS Code Settings, search "github.copilot.enable" to toggle specific languages.`,
    keyPoints: [
      "Best results with JS/TS, Python, Go, Java, C#",
      "Works on YAML, JSON, Markdown, SQL, and Dockerfiles",
      "Toggle Copilot per-language in VS Code settings",
      "The more context (imports, types), the better the suggestions",
      "SQL queries from natural language comments are particularly impressive"
    ],
    links: [
      { text: "Supported Languages", url: "https://docs.github.com/en/copilot/about-github-copilot/supported-languages-in-github-copilot" },
      { text: "Configuring Copilot per Language", url: "https://docs.github.com/en/copilot/managing-copilot/configure-personal-settings/configuring-github-copilot-in-your-environment" }
    ],
    tags: ["languages", "Python", "JavaScript", "TypeScript", "SQL", "YAML"],
    codeExample: `# Python: Just a comment is enough\n# Parse a CSV file and return rows where age > 30\nimport pandas as pd\ndef get_senior_users(filepath: str) -> pd.DataFrame:\n    df = pd.read_csv(filepath)\n    return df[df['age'] > 30]`
  },
  {
    id: 7, day: 7, week: 1,
    title: "Week 1 Recap: Copilot Basics Cheat Sheet",
    subtitle: "Essential Commands, Shortcuts & Mental Models",
    audience: "both",
    category: "recap",
    difficulty: "Beginner",
    duration: "8 min",
    summary: "A consolidated reference card for everything covered in Week 1 — shortcuts, key concepts, and the mental model for getting the most from Copilot.",
    content: `**Essential Keyboard Shortcuts**\n| Action | Windows/Linux | Mac |\n|--------|--------------|-----|\n| Accept suggestion | Tab | Tab |\n| Dismiss suggestion | Escape | Escape |\n| Next suggestion | Alt+] | Option+] |\n| Previous suggestion | Alt+[ | Option+[ |\n| Open Completions Panel | Ctrl+Enter | Ctrl+Enter |\n| Open Chat Panel | Ctrl+Alt+I | Ctrl+Cmd+I |\n| Inline Chat | Ctrl+I | Ctrl+I |\n| Accept word by word | Ctrl+Right | Ctrl+Right |\n\n**Mental Models for Week 1**\n1. Copilot is a collaborator, not an oracle — review every suggestion\n2. Better input = better output: clear names + descriptive comments\n3. Copilot sees your whole file + neighboring tabs\n4. Chat for understanding, inline for writing\n5. If a suggestion is wrong, just keep typing — it self-corrects`,
    keyPoints: [
      "Tab = accept, Escape = reject, Alt+] = next suggestion",
      "Ctrl+Enter = see all completions; Ctrl+I = inline chat",
      "Always review Copilot's suggestions before accepting",
      "Provide context through comments and good naming",
      "Use Chat for 'why' questions, inline completions for 'what'"
    ],
    links: [
      { text: "Full Keyboard Shortcut Reference", url: "https://docs.github.com/en/copilot/managing-copilot/configure-personal-settings/configuring-github-copilot-in-your-environment" },
      { text: "Copilot Cheat Sheet (GitHub)", url: "https://github.com/github/copilot-docs" }
    ],
    tags: ["cheat sheet", "shortcuts", "recap", "mental model"],
    codeExample: null
  },

  // ─────────────────── WEEK 2: Core Features ───────────────────
  {
    id: 8, day: 8, week: 2,
    title: "Mastering Inline Suggestions",
    subtitle: "Accepting, Rejecting & Cycling with Precision",
    audience: "both",
    category: "core-features",
    difficulty: "Beginner",
    duration: "12 min",
    summary: "Go beyond Tab-to-accept. Learn partial acceptance, cycling strategies, the completions panel, and how to guide Copilot with follow-up edits.",
    content: `**Partial Acceptance**\nInstead of accepting the full suggestion:\n• Ctrl+Right accepts one word at a time\n• This is ideal when the first part of a suggestion is correct but the end needs changing\n\n**Completions Panel (Ctrl+Enter)**\nOpens a dedicated panel showing up to 10 alternative completions side by side. Perfect for:\n• Seeing multiple approaches to the same problem\n• Comparing implementation styles\n• Copy-pasting the best parts from different options\n\n**Guided Iteration**\nIf a suggestion is close but not right:\n1. Accept the suggestion\n2. Edit the parts that are wrong\n3. Copilot will re-suggest based on your edits\nThis iterative loop is faster than writing from scratch.\n\n**When to Reject**\n• Suggestions that use deprecated APIs\n• Security-sensitive code (always write security logic yourself)\n• Code that doesn't match your team's conventions`,
    keyPoints: [
      "Ctrl+Right for word-by-word acceptance",
      "Ctrl+Enter opens a panel with 10 alternative completions",
      "Iterative editing — accept, fix, let Copilot re-suggest",
      "Reject suggestions for security-critical code paths",
      "Cycling with Alt+] is faster than opening the completions panel"
    ],
    links: [
      { text: "Getting Code Suggestions", url: "https://docs.github.com/en/copilot/using-github-copilot/getting-code-suggestions-in-your-ide-with-github-copilot" },
      { text: "Best Practices", url: "https://docs.github.com/en/copilot/using-github-copilot/best-practices-for-using-github-copilot" }
    ],
    tags: ["partial accept", "completions panel", "cycling", "inline"],
    codeExample: null
  },
  {
    id: 9, day: 9, week: 2,
    title: "Comment-Driven Development",
    subtitle: "Using Natural Language as Your Primary Input",
    audience: "both",
    category: "core-features",
    difficulty: "Beginner",
    duration: "15 min",
    summary: "Learn the art of writing descriptive comments that guide Copilot to generate exactly the code you need — the single most powerful Copilot technique.",
    content: `**Comment-Driven Development (CDD)**\nWrite what you want in plain English as a comment, then let Copilot write the code. This is often faster than any other approach.\n\n**Types of Comments That Work Best**\n\n1. **Algorithm description**:\n\`\`\`python\n# Use binary search to find the index of target in a sorted array\n# Return -1 if not found\n\`\`\`\n\n2. **Input/Output specification**:\n\`\`\`typescript\n// Takes a list of products with {name, price, category}\n// Returns the top 5 most expensive items per category\n\`\`\`\n\n3. **Step-by-step instructions**:\n\`\`\`javascript\n// 1. Fetch user data from /api/users\n// 2. Filter out inactive users\n// 3. Sort by last login date descending\n// 4. Return first 10\n\`\`\`\n\n**Tips for Better Comments**\n• Be specific about edge cases: "handle null and empty array"\n• Mention the library: "using lodash", "using axios"\n• Specify the return type: "returns a Promise<User[]>"\n• Give examples: "e.g. input: [1,2,3] → output: 6"`,
    keyPoints: [
      "Describe the algorithm, not the implementation",
      "Specify input types, output types, and edge cases in comments",
      "Multi-step numbered comments produce the best structured code",
      "Mention specific libraries to guide API usage",
      "Comments are your primary way to communicate intent to Copilot"
    ],
    links: [
      { text: "Prompting GitHub Copilot", url: "https://docs.github.com/en/copilot/using-github-copilot/prompt-engineering-for-github-copilot" },
      { text: "Best Practices", url: "https://docs.github.com/en/copilot/using-github-copilot/best-practices-for-using-github-copilot" }
    ],
    tags: ["comment-driven", "prompting", "natural language", "intent"],
    codeExample: `// Binary search: find target in sorted array, return index or -1\nfunction binarySearch(arr, target) {\n  let left = 0, right = arr.length - 1;\n  while (left <= right) {\n    const mid = Math.floor((left + right) / 2);\n    if (arr[mid] === target) return mid;\n    if (arr[mid] < target) left = mid + 1;\n    else right = mid - 1;\n  }\n  return -1;\n}`
  },
  {
    id: 10, day: 10, week: 2,
    title: "Copilot in the Terminal",
    subtitle: "AI-Powered Command Line Suggestions",
    audience: "both",
    category: "core-features",
    difficulty: "Intermediate",
    duration: "12 min",
    summary: "Use Copilot CLI to get AI-powered suggestions for shell commands, git workflows, and terminal tasks without leaving the command line.",
    content: `**GitHub Copilot in the VS Code Terminal**\nCopilot Chat integrates with the VS Code integrated terminal. You can:\n• Ask "how do I find all .log files modified in the last 7 days?"\n• Get git command suggestions directly\n• Explain a command you don't understand\n\n**Inline Terminal Suggestions (Shell)**\nWith Copilot in the terminal enabled, you'll see ghost text for commands too.\n\n**GitHub Copilot CLI (gh copilot)**\nInstall the GitHub CLI with Copilot extension:\n\`\`\`bash\ngh extension install github/gh-copilot\ngh copilot suggest "find all node_modules folders and delete them"\ngh copilot explain "git rebase -i HEAD~3"\n\`\`\`\n\n**Three gh copilot Commands**\n• \`gh copilot suggest\` – Get a shell command suggestion\n• \`gh copilot explain\` – Explain what a command does\n• \`gh copilot alias\` – Create an alias for a gh copilot command\n\n**Practical Use Cases**\n• Complex find/grep/awk pipelines\n• Docker and Kubernetes commands\n• Git rebase, cherry-pick, reflog\n• Regex for sed/awk`,
    keyPoints: [
      "Use @terminal in Copilot Chat to get shell command help",
      "Install gh copilot CLI extension for terminal-native AI",
      "gh copilot suggest + explain are the key commands",
      "Copilot understands the current directory context",
      "Great for complex git, docker, and kubectl workflows"
    ],
    links: [
      { text: "Using Copilot in the Terminal", url: "https://docs.github.com/en/copilot/github-copilot-in-the-cli/using-github-copilot-in-the-cli" },
      { text: "GitHub CLI Copilot Extension", url: "https://docs.github.com/en/copilot/github-copilot-in-the-cli/about-github-copilot-in-the-cli" }
    ],
    tags: ["terminal", "CLI", "gh copilot", "shell", "command line"],
    codeExample: `# Ask Copilot to explain a complex command\ngh copilot explain "find . -name '*.log' -mtime -7 -exec ls -la {} ;"\n\n# Get a suggestion\ngh copilot suggest "compress the logs folder and exclude files older than 30 days"`
  },
  {
    id: 11, day: 11, week: 2,
    title: "Slash Commands in Copilot Chat",
    subtitle: "/explain, /fix, /tests, /doc and More",
    audience: "both",
    category: "core-features",
    difficulty: "Beginner",
    duration: "15 min",
    summary: "Master Copilot Chat slash commands — the power shortcuts that perform specific operations on your selected code with a single command.",
    content: `**What are Slash Commands?**\nSlash commands are built-in Copilot Chat shortcuts that trigger specific actions. Select code in the editor, then use these in the Chat panel or Inline Chat:\n\n**Core Slash Commands**\n| Command | What It Does |\n|---------|-------------|\n| \`/explain\` | Explains the selected code in plain English |\n| \`/fix\` | Identifies and fixes bugs in selected code |\n| \`/tests\` | Generates unit tests for selected code |\n| \`/doc\` | Generates documentation/JSDoc comments |\n| \`/simplify\` | Simplifies complex code |\n| \`/optimize\` | Suggests performance improvements |\n\n**Using Slash Commands**\n1. Select code in your editor\n2. Open Inline Chat (Ctrl+I) or Chat Panel\n3. Type \`/explain\` and press Enter\n\n**Combining with Instructions**\n\`/fix ensure null safety and add error handling\`\n\`/tests use Jest and mock the database calls\`\n\`/doc add JSDoc with @param and @returns tags\`\n\n**Custom Follow-up**\nAfter a slash command result, continue the conversation:\n"/explain" → "Now rewrite it to be more readable"`,
    keyPoints: [
      "/explain – instant code explanation in plain English",
      "/fix – AI-powered bug detection and correction",
      "/tests – generate unit tests with a single command",
      "/doc – auto-generate JSDoc/docstrings",
      "Combine slash commands with natural language instructions"
    ],
    links: [
      { text: "Slash Commands Reference", url: "https://docs.github.com/en/copilot/github-copilot-chat/copilot-chat-in-ides/using-github-copilot-chat-in-your-ide#slash-commands" },
      { text: "Copilot Chat in VS Code", url: "https://docs.github.com/en/copilot/github-copilot-chat/copilot-chat-in-ides/using-github-copilot-chat-in-your-ide" }
    ],
    tags: ["slash commands", "/explain", "/fix", "/tests", "/doc"],
    codeExample: null
  },
  {
    id: 12, day: 12, week: 2,
    title: "Context Variables: @workspace, @file, @vscode",
    subtitle: "Giving Copilot the Right Scope",
    audience: "both",
    category: "core-features",
    difficulty: "Intermediate",
    duration: "15 min",
    summary: "Learn how to use @workspace, @file, #file, and @vscode context variables to scope your Copilot Chat questions precisely.",
    content: `**Why Context Matters**\nBy default, Copilot Chat only knows about what's visible in the editor. Context variables let you expand or narrow scope precisely.\n\n**@workspace**\nAsks Copilot to consider your entire project:\n\`@workspace how is authentication implemented in this project?\`\n\`@workspace where is the database connection configured?\`\n\`@workspace what tests are missing for the payment module?\`\n\n**#file**\nReference a specific file:\n\`#file:src/auth/login.ts explain the login flow\`\n\`#file:package.json what testing frameworks are installed?\`\n\n**@vscode**\nAsk about VS Code itself:\n\`@vscode how do I configure eslint in this project?\`\n\`@vscode how do I debug a Node.js app?\`\n\n**#selection**\nReferences your current text selection — useful in Chat Panel when you want to ask about highlighted code without using Inline Chat.\n\n**Combining Variables**\n\`@workspace #file:src/api/users.ts what other files depend on this?\``,
    keyPoints: [
      "@workspace searches your entire codebase for relevant context",
      "#file references a specific file by path",
      "@vscode answers VS Code configuration and feature questions",
      "#selection references your current highlighted code",
      "Combining context variables gives Copilot the precise scope it needs"
    ],
    links: [
      { text: "Chat Context Variables", url: "https://docs.github.com/en/copilot/github-copilot-chat/copilot-chat-in-ides/copilot-chat-context" },
      { text: "Using @workspace", url: "https://docs.github.com/en/copilot/github-copilot-chat/copilot-chat-in-ides/about-github-copilot-chat-in-your-ide" }
    ],
    tags: ["@workspace", "@file", "@vscode", "context", "variables"],
    codeExample: null
  },
  {
    id: 13, day: 13, week: 2,
    title: "Inline Chat vs. Chat Panel",
    subtitle: "Choosing the Right Interaction Surface",
    audience: "both",
    category: "core-features",
    difficulty: "Beginner",
    duration: "10 min",
    summary: "Understand the difference between Inline Chat and the Chat Panel, when to use each, and how they complement each other in your workflow.",
    content: `**Inline Chat (Ctrl+I)**\nAppears directly in the editor at your cursor position.\n\n✅ Best for:\n• Rewriting a specific function or block\n• Applying quick fixes to selected code\n• Making targeted edits without leaving the editor\n• Using /fix, /explain on a specific selection\n\n**Chat Panel (Ctrl+Alt+I)**\nA persistent panel that stays alongside your editor.\n\n✅ Best for:\n• Learning and understanding concepts\n• Planning architecture or design decisions\n• Multi-step conversations\n• Asking questions about the whole codebase with @workspace\n• Generating new files or large code blocks\n\n**Key Differences**\n| Feature | Inline Chat | Chat Panel |\n|---------|------------|------------|\n| Location | In editor | Side panel |\n| Context | Current cursor/selection | Whole conversation |\n| Apply edits | Directly in file | Copy/apply button |\n| History | One-shot | Persistent |\n\n**Quick Chat (Ctrl+Shift+Alt+L)**\nA lightweight floating window — use it for quick one-off questions when you don't want to open the full panel.`,
    keyPoints: [
      "Inline Chat (Ctrl+I) = targeted in-editor edits",
      "Chat Panel (Ctrl+Alt+I) = persistent conversational assistant",
      "Quick Chat = lightweight floating window for quick questions",
      "Use Inline Chat for code actions, Chat Panel for architectural questions",
      "Both share the same AI model and slash commands"
    ],
    links: [
      { text: "Inline Chat", url: "https://docs.github.com/en/copilot/github-copilot-chat/copilot-chat-in-ides/using-github-copilot-chat-in-your-ide#using-copilot-inline-chat" },
      { text: "Chat Panel Guide", url: "https://docs.github.com/en/copilot/github-copilot-chat/copilot-chat-in-ides/using-github-copilot-chat-in-your-ide" }
    ],
    tags: ["inline chat", "chat panel", "quick chat", "Ctrl+I", "surfaces"],
    codeExample: null
  },
  {
    id: 14, day: 14, week: 2,
    title: "Week 2 Recap: Core Features Summary",
    subtitle: "Master Reference for Everyday Copilot Use",
    audience: "both",
    category: "recap",
    difficulty: "Beginner",
    duration: "8 min",
    summary: "Consolidated reference for all Week 2 core features — slash commands, context variables, chat surfaces, and comment-driven development patterns.",
    content: `**Week 2 Quick Reference**\n\n**Chat Surfaces**\n• Inline Chat: Ctrl+I — targeted in-file edits\n• Chat Panel: Ctrl+Alt+I — persistent conversations\n• Quick Chat: Ctrl+Shift+Alt+L — quick floating queries\n\n**Slash Commands Quick Ref**\n/explain · /fix · /tests · /doc · /simplify · /optimize\n\n**Context Variables Quick Ref**\n@workspace · #file:<path> · @vscode · #selection\n\n**Comment-Driven Patterns**\n• Algorithm: "// Use quicksort to sort by last name"\n• Spec: "// Takes userId, returns User object or null"\n• Steps: "// 1. validate 2. save 3. notify"\n\n**The Copilot Workflow Loop**\n1. Write a clear comment or question\n2. Review the suggestion critically\n3. Accept partially or fully\n4. Iterate with follow-up edits or chat messages\n5. Test the result`,
    keyPoints: [
      "Three chat surfaces for different interaction needs",
      "Slash commands are the fastest path to common operations",
      "@workspace unlocks codebase-wide intelligence",
      "Comment-driven development is the most productive Copilot pattern",
      "Always review and test — Copilot is a collaborator, not a compiler"
    ],
    links: [
      { text: "Copilot Chat Docs", url: "https://docs.github.com/en/copilot/github-copilot-chat" },
      { text: "Context in Copilot Chat", url: "https://docs.github.com/en/copilot/github-copilot-chat/copilot-chat-in-ides/copilot-chat-context" }
    ],
    tags: ["recap", "quick reference", "workflow", "cheat sheet"],
    codeExample: null
  },

  // ─────────────────── WEEK 3: For Developers ───────────────────
  {
    id: 15, day: 15, week: 3,
    title: "Writing Functions & Classes with Copilot",
    subtitle: "Accelerating Development from Boilerplate to Logic",
    audience: "developer",
    category: "developer",
    difficulty: "Intermediate",
    duration: "20 min",
    summary: "From simple utility functions to full class implementations — learn how to scaffold, complete, and refine code structures using Copilot's inline and chat capabilities.",
    content: `**Scaffolding Functions**\nStart with a descriptive function signature or comment:\n\`\`\`typescript\n// Validate an email address using RFC 5322 pattern\n// Returns true if valid, false otherwise\nfunction isValidEmail(email: string): boolean {\n  // Copilot generates the regex and logic...\n}\n\`\`\`\n\n**Generating Full Classes**\nOpen a new file, add a comment describing the class, and let Copilot write the skeleton:\n\`\`\`typescript\n// UserService: handles CRUD operations for users\n// Uses a repository pattern; depends on UserRepository\n// Methods: findById, create, update, delete, findAll\nclass UserService {\n  // Copilot fills in constructor + all methods\n}\n\`\`\`\n\n**Interface-First Development**\nDefine the interface/type first — Copilot's implementation suggestions become much more accurate:\n\`\`\`typescript\ninterface CacheService {\n  get<T>(key: string): Promise<T | null>;\n  set<T>(key: string, value: T, ttl?: number): Promise<void>;\n  delete(key: string): Promise<boolean>;\n}\n\nclass RedisCacheService implements CacheService {\n  // Copilot now knows exactly what to implement\n}\n\`\`\`\n\n**Filling in Boilerplate**\nCopilot excels at:\n• Constructor injection\n• Getter/setter pairs\n• Builder patterns\n• Factory methods`,
    keyPoints: [
      "Define the interface/type before asking Copilot to implement it",
      "Class comments describing dependencies dramatically improve suggestions",
      "Use step-by-step numbered comments for complex function logic",
      "Copilot handles builder, factory, and repository patterns very well",
      "Always review edge case handling — Copilot may omit null checks"
    ],
    links: [
      { text: "Getting Code Suggestions", url: "https://docs.github.com/en/copilot/using-github-copilot/getting-code-suggestions-in-your-ide-with-github-copilot" },
      { text: "Prompt Engineering Guide", url: "https://docs.github.com/en/copilot/using-github-copilot/prompt-engineering-for-github-copilot" }
    ],
    tags: ["functions", "classes", "interfaces", "scaffolding", "developer"],
    codeExample: `interface Repository<T> {\n  findById(id: string): Promise<T | null>;\n  findAll(): Promise<T[]>;\n  save(entity: T): Promise<T>;\n  delete(id: string): Promise<void>;\n}\n\n// UserRepository: implements Repository<User> using PostgreSQL\nclass UserRepository implements Repository<User> {\n  constructor(private readonly db: Database) {}\n  // Copilot generates all four methods...\n}`
  },
  {
    id: 16, day: 16, week: 3,
    title: "Refactoring Code with Copilot",
    subtitle: "/simplify, /optimize, and Targeted Rewrites",
    audience: "developer",
    category: "developer",
    difficulty: "Intermediate",
    duration: "18 min",
    summary: "Use Copilot to modernize legacy code, reduce complexity, improve readability, and apply design patterns through guided refactoring conversations.",
    content: `**Quick Refactors with Slash Commands**\nSelect code and use Inline Chat (Ctrl+I):\n• \`/simplify\` – reduces cyclomatic complexity\n• \`/optimize\` – improves algorithmic efficiency\n• \`Refactor this to use async/await instead of callbacks\`\n• \`Convert to functional style using map/filter/reduce\`\n\n**Guided Refactoring Conversations**\nUse the Chat Panel for larger refactors:\n\`@workspace refactor the authentication module to use the Strategy pattern\`\n\n**Common Refactoring Patterns**\n1. **Extract Method**: Select a code block and ask "Extract this into a separate function named processPayment"\n2. **Replace Magic Numbers**: "Replace all magic numbers in this file with named constants"\n3. **Add Error Handling**: "Add try/catch and proper error propagation to all async functions"\n4. **Convert to TypeScript**: "Add TypeScript types to this JavaScript file"\n\n**Applying Design Patterns**\n\`Convert this God class into a proper Service/Repository separation\`\n\`Refactor this switch statement into a Strategy or Command pattern\`\n\n**Safety Tips**\n• Always run tests before and after refactoring\n• Ask Copilot to explain its refactoring decisions\n• Refactor in small steps, not all at once`,
    keyPoints: [
      "Select code + /simplify or /optimize for quick refactors",
      "Describe the target pattern to get design pattern rewrites",
      "Use chat for large refactors that span multiple methods",
      "Always run tests after refactoring to catch regressions",
      "Ask Copilot to explain its changes before accepting"
    ],
    links: [
      { text: "Refactoring with Copilot", url: "https://docs.github.com/en/copilot/using-github-copilot/using-github-copilot-for-pull-requests/refactoring-code" },
      { text: "Inline Chat Edits", url: "https://docs.github.com/en/copilot/github-copilot-chat/copilot-chat-in-ides/using-github-copilot-chat-in-your-ide#using-copilot-inline-chat" }
    ],
    tags: ["refactoring", "simplify", "optimize", "design patterns", "legacy code"],
    codeExample: `// Before: nested callbacks (ask Copilot to convert)\ngetUser(id, function(err, user) {\n  if (err) handleError(err);\n  getOrders(user.id, function(err, orders) {\n    if (err) handleError(err);\n    processOrders(orders, function(err, result) {\n      if (err) handleError(err);\n      sendResponse(result);\n    });\n  });\n});\n\n// After: async/await (Copilot generates this)\nasync function handleUserOrders(id) {\n  const user = await getUser(id);\n  const orders = await getOrders(user.id);\n  const result = await processOrders(orders);\n  return sendResponse(result);\n}`
  },
  {
    id: 17, day: 17, week: 3,
    title: "Generating Unit Tests Automatically",
    subtitle: "From /tests to Full Test Suites in Minutes",
    audience: "developer",
    category: "developer",
    difficulty: "Intermediate",
    duration: "20 min",
    summary: "Let Copilot generate comprehensive unit tests for your functions and classes, covering happy paths, edge cases, and error scenarios.",
    content: `**Quickest Path: /tests Slash Command**\n1. Select a function in your editor\n2. Press Ctrl+I for Inline Chat\n3. Type \`/tests\` and press Enter\nCopilot generates tests using the framework it detects from your project.\n\n**Specifying the Framework**\n\`/tests using Jest with TypeScript\`\n\`/tests using Pytest with fixtures\`\n\`/tests using NUnit with Moq for mocking\`\n\n**What Copilot Covers**\n• Happy path scenarios\n• Boundary/edge cases\n• Error/exception handling\n• Null/undefined inputs\n• Mock setup for dependencies\n\n**Test-Driven Development with Copilot**\nWrite the test spec first, then let Copilot implement:\n\`\`\`typescript\n// Test: UserService.create should throw if email already exists\n// Test: UserService.create should return the new user with an id\n// Test: UserService.findById should return null for unknown id\ntest('create throws on duplicate email', async () => {\n  // Copilot fills in the test body\n});\n\`\`\`\n\n**Reviewing Generated Tests**\n✅ Check: Are edge cases covered?\n✅ Check: Are mocks properly isolated?\n✅ Check: Do test names describe the behavior?\n✅ Check: Is assertion quality high (not just "truthy")?`,
    keyPoints: [
      "/tests generates unit tests for selected code instantly",
      "Specify your test framework and mocking library in the prompt",
      "Copilot detects the installed test framework from package.json/pom.xml",
      "Use TDD: write test descriptions first, let Copilot implement bodies",
      "Always verify edge cases and mock isolation in generated tests"
    ],
    links: [
      { text: "Generating Unit Tests", url: "https://docs.github.com/en/copilot/using-github-copilot/using-github-copilot-for-testing" },
      { text: "Testing with Copilot", url: "https://docs.github.com/en/copilot/using-github-copilot/getting-code-suggestions-in-your-ide-with-github-copilot" }
    ],
    tags: ["unit tests", "/tests", "Jest", "TDD", "test generation"],
    codeExample: `// Generated by Copilot for a calculateDiscount function\ndescribe('calculateDiscount', () => {\n  it('returns 10% discount for gold members', () => {\n    expect(calculateDiscount(100, 'gold')).toBe(90);\n  });\n  it('returns 0% discount for standard members', () => {\n    expect(calculateDiscount(100, 'standard')).toBe(100);\n  });\n  it('throws for negative price', () => {\n    expect(() => calculateDiscount(-10, 'gold')).toThrow('Invalid price');\n  });\n  it('returns 0 for zero price', () => {\n    expect(calculateDiscount(0, 'gold')).toBe(0);\n  });\n});`
  },
  {
    id: 18, day: 18, week: 3,
    title: "Debugging with Copilot",
    subtitle: "Error Explanation, Root Cause Analysis & /fix",
    audience: "developer",
    category: "developer",
    difficulty: "Intermediate",
    duration: "18 min",
    summary: "Use Copilot to understand error messages, trace root causes, and apply intelligent fixes — making debugging faster and more educational.",
    content: `**Explaining Error Messages**\nPaste an error into Chat:\n\`\`\`\nTypeError: Cannot read properties of undefined (reading 'map')\nat processUsers (utils.js:42:18)\n\`\`\`\n"Explain this error and suggest how to fix it"\n\n**Using /fix on Broken Code**\n1. Select the problematic code\n2. Ctrl+I → \`/fix\`\nCopilot diagnoses the issue and proposes a fix in-place.\n\n**Analyzing Stack Traces**\nShare full stack traces in Chat:\n"@workspace here is the stack trace from our CI failure: [paste]. What's the root cause?"\n\n**The #terminalLastCommand Context**\nAfter a failed command in the VS Code terminal:\n• Use \`#terminalLastCommand\` in Chat to reference the last terminal output\n• "Fix the error shown in #terminalLastCommand"\n\n**Copilot as a Rubber Duck**\nDescribe what your code is supposed to do and what it's actually doing:\n"This function should return sorted users but it's returning them in random order. Here's the code: [paste]. What's wrong?"\n\n**Debugging Async Issues**\nCopilot is particularly good at:\n• Race conditions in async code\n• Missing await keywords\n• Promise chain errors\n• Memory leak patterns`,
    keyPoints: [
      "/fix on selected code provides in-place bug fixes",
      "Paste error messages + stack traces into Chat for root cause analysis",
      "#terminalLastCommand references your latest terminal error",
      "Describe expected vs. actual behavior for the best debugging help",
      "Copilot explains why a bug occurs, not just how to fix it"
    ],
    links: [
      { text: "Debugging with Copilot", url: "https://docs.github.com/en/copilot/using-github-copilot/using-github-copilot-for-debugging" },
      { text: "Copilot Chat Context", url: "https://docs.github.com/en/copilot/github-copilot-chat/copilot-chat-in-ides/copilot-chat-context" }
    ],
    tags: ["debugging", "/fix", "error explanation", "stack trace", "root cause"],
    codeExample: null
  },
  {
    id: 19, day: 19, week: 3,
    title: "Auto-Generating Documentation",
    subtitle: "JSDoc, Docstrings & README Generation",
    audience: "developer",
    category: "developer",
    difficulty: "Intermediate",
    duration: "15 min",
    summary: "Generate JSDoc comments, Python docstrings, XML docs, and even README files automatically using Copilot's /doc command and chat.",
    content: `**The /doc Slash Command**\nSelect a function and use Inline Chat:\n\`Ctrl+I → /doc\`\n\nCopilot generates:\n• JSDoc for JavaScript/TypeScript\n• Docstrings for Python\n• XML documentation for C#\n• KDoc for Kotlin\n\n**Customizing the Output**\n\`/doc include @param, @returns, @throws, and @example tags\`\n\`/doc write Python Google-style docstring\`\n\`/doc add a usage example in the comment\`\n\n**Documenting an Entire File**\n"@workspace add JSDoc to all public functions in #file:src/utils/helpers.ts"\n\n**Generating README Files**\nIn Chat Panel:\n"@workspace generate a README.md for this project including: setup instructions, usage examples, and API reference"\n\n**API Documentation**\n"Generate OpenAPI/Swagger documentation for the endpoints in #file:src/routes/users.ts"\n\n**Inline Examples**\nAsk Copilot to include a usage example in the docs:\n"Add a @example block showing how to call this function with real-looking data"`,
    keyPoints: [
      "/doc generates language-appropriate documentation instantly",
      "Specify the doc format: JSDoc, Google-style, NumPy-style",
      "Ask for @example blocks to improve documentation usefulness",
      "Copilot can generate READMEs, OpenAPI specs, and changelogs",
      "Use @workspace to document multiple files at once"
    ],
    links: [
      { text: "Generating Documentation", url: "https://docs.github.com/en/copilot/using-github-copilot/using-github-copilot-for-documentation" },
      { text: "Copilot Chat Docs", url: "https://docs.github.com/en/copilot/github-copilot-chat/about-github-copilot-chat" }
    ],
    tags: ["documentation", "JSDoc", "docstrings", "/doc", "README"],
    codeExample: `/**\n * Calculates compound interest over a given period.\n * @param principal - The initial investment amount in USD\n * @param rate - Annual interest rate as a decimal (e.g., 0.05 for 5%)\n * @param years - Number of years to compound\n * @returns The total amount after compound interest\n * @example\n * const total = compoundInterest(1000, 0.05, 10);\n * // Returns 1628.89\n */\nfunction compoundInterest(principal: number, rate: number, years: number): number {\n  return principal * Math.pow(1 + rate, years);\n}`
  },
  {
    id: 20, day: 20, week: 3,
    title: "API Integration Patterns with Copilot",
    subtitle: "HTTP Clients, Authentication & Data Mapping",
    audience: "developer",
    category: "developer",
    difficulty: "Intermediate",
    duration: "20 min",
    summary: "Copilot accelerates API integration work — generating HTTP clients, auth headers, error handling, response mapping, and retry logic from simple descriptions.",
    content: `**Generating HTTP Clients**\n\`\`\`typescript\n// Create a typed HTTP client for the GitHub REST API\n// Base URL: https://api.github.com\n// Include Authorization header with Bearer token\n// Handle rate limiting with retry-after header\n// Return typed responses\n\`\`\`\n\n**Auth Patterns**\nCopilot understands common auth flows:\n• Bearer tokens\n• OAuth 2.0 with refresh\n• API key headers\n• Basic auth\n• JWT validation\n\n**Request/Response Mapping**\n"Map this API response object to our internal User model:\n[paste raw API response]"\nCopilot generates a mapping/transformation function.\n\n**Error Handling Patterns**\n"Add retry logic with exponential backoff to this fetch call"\n"Handle 401 by refreshing the OAuth token and retrying"\n"Add request timeout of 5 seconds and timeout-specific error"\n\n**Generating from OpenAPI Specs**\nPaste OpenAPI spec endpoints into Chat:\n"Generate a TypeScript service class for these OpenAPI endpoints: [paste endpoints]"\n\n**Practical Pattern: API Gateway Client**\n"Create a class that wraps all payment API calls, adds logging, handles errors, and maps to our internal types"`,
    keyPoints: [
      "Describe the API base URL and auth method in your comment/prompt",
      "Paste API response shapes to get accurate mapping functions",
      "Ask for retry logic, timeout handling, and rate limiting explicitly",
      "Copilot understands OAuth flows and can scaffold token refresh logic",
      "OpenAPI specs pasted into Chat produce accurate service classes"
    ],
    links: [
      { text: "Copilot for API Development", url: "https://docs.github.com/en/copilot/using-github-copilot/getting-code-suggestions-in-your-ide-with-github-copilot" },
      { text: "Prompt Engineering", url: "https://docs.github.com/en/copilot/using-github-copilot/prompt-engineering-for-github-copilot" }
    ],
    tags: ["API", "HTTP client", "auth", "OAuth", "fetch", "axios"],
    codeExample: `// Typed API client with retry and token refresh\n// Uses axios; handles 401 by refreshing OAuth token\n// Includes request/response logging\nclass ApiClient {\n  constructor(private baseUrl: string, private tokenStore: TokenStore) {}\n  // Copilot generates: request(), get(), post(), put(), delete(),\n  //                    handleUnauthorized(), retryWithBackoff()\n}`
  },
  {
    id: 21, day: 21, week: 3,
    title: "Week 3 Recap: Developer Productivity Patterns",
    subtitle: "From Scaffolding to Shipping — The Developer's Copilot Playbook",
    audience: "developer",
    category: "recap",
    difficulty: "Intermediate",
    duration: "10 min",
    summary: "A consolidated developer-focused reference covering the top Copilot patterns for writing, testing, documenting, debugging, and integrating APIs.",
    content: `**The Developer's Copilot Playbook**\n\n**Write Faster**\n• Interface-first: define types → Copilot implements\n• Comment-driven: describe → accept → refine\n• Boilerplate: let Copilot handle constructors, getters, patterns\n\n**Test Better**\n• /tests on any function → instant test suite\n• TDD: write test descriptions → Copilot writes test bodies\n• Edge cases: ask explicitly for boundary/null/error tests\n\n**Debug Smarter**\n• /fix on broken code → in-place fixes\n• Paste stack traces → root cause analysis\n• #terminalLastCommand → fix CLI errors instantly\n\n**Document Automatically**\n• /doc → language-appropriate comments\n• Ask for @example blocks\n• Generate README with @workspace\n\n**Integrate Faster**\n• Describe API + auth → Copilot generates client\n• Paste response shapes → get mapping functions\n• Ask for retry/timeout/error handling explicitly`,
    keyPoints: [
      "Interface-first development maximizes Copilot suggestion quality",
      "TDD + Copilot = describe tests in English, get implementations free",
      "/fix + #terminalLastCommand = debugging superpowers",
      "/doc + @workspace = auto-document entire modules",
      "Paste API specs/schemas directly into Chat for accurate code generation"
    ],
    links: [
      { text: "Copilot for Developers", url: "https://docs.github.com/en/copilot/using-github-copilot" },
      { text: "Copilot Best Practices", url: "https://docs.github.com/en/copilot/using-github-copilot/best-practices-for-using-github-copilot" }
    ],
    tags: ["recap", "developer", "playbook", "productivity", "patterns"],
    codeExample: null
  },

  // ─────────────────── WEEK 4: For Testers ───────────────────
  {
    id: 22, day: 22, week: 4,
    title: "Test Case Generation from Requirements",
    subtitle: "Turning User Stories into Test Plans",
    audience: "tester",
    category: "tester",
    difficulty: "Intermediate",
    duration: "20 min",
    summary: "Transform user stories, acceptance criteria, and requirements documents into structured test cases using Copilot Chat.",
    content: `**From User Story to Test Cases**\nPaste a user story into Copilot Chat:\n\`\`\`\nAs a registered user, I want to reset my password\nso that I can regain access to my account.\nAcceptance Criteria:\n- User can request a reset link via email\n- Link expires after 1 hour\n- Password must meet complexity requirements\n- User is logged in after successful reset\n\`\`\`\n"Generate comprehensive test cases for this user story in a table format"\n\n**What Copilot Generates**\n| Test ID | Scenario | Input | Expected Result | Priority |\n|---------|----------|-------|----------------|----------|\n| TC-01 | Valid reset flow | Valid email | Reset email sent | High |\n| TC-02 | Expired link | Link > 1hr old | Error: link expired | High |\n| TC-03 | Weak password | "123" | Error: complexity | Medium |\n| TC-04 | Invalid email | Non-existent email | Generic success msg* | High |\n| TC-05 | Already used link | Second use | Error: already used | Medium |\n\n*Security note: show generic message to prevent user enumeration\n\n**Asking for Specific Test Categories**\n"Generate negative test cases only"\n"Add security test cases (SQLi, XSS, brute force)"\n"Add accessibility test cases"\n"What boundary values should I test?"`,
    keyPoints: [
      "Paste acceptance criteria directly into Chat for instant test cases",
      "Ask explicitly for positive, negative, boundary, and security cases",
      "Copilot understands security anti-patterns like user enumeration",
      "Ask for test priority and test data suggestions",
      "Output in table format is ready for test management tools like Jira/TestRail"
    ],
    links: [
      { text: "Copilot for Testing", url: "https://docs.github.com/en/copilot/using-github-copilot/using-github-copilot-for-testing" },
      { text: "Testing Best Practices", url: "https://docs.github.com/en/copilot/using-github-copilot/best-practices-for-using-github-copilot" }
    ],
    tags: ["test cases", "user stories", "requirements", "test plan", "tester"],
    codeExample: null
  },
  {
    id: 23, day: 23, week: 4,
    title: "BDD/Gherkin Scenarios with Copilot",
    subtitle: "Feature Files, Cucumber, and Living Documentation",
    audience: "tester",
    category: "tester",
    difficulty: "Intermediate",
    duration: "18 min",
    summary: "Generate Gherkin feature files and step definitions for Cucumber, SpecFlow, or Behave using Copilot Chat and inline completions.",
    content: `**Generating Feature Files**\nAsk Copilot to write Gherkin:\n"Write a Gherkin feature file for user login with scenarios covering: successful login, invalid credentials, account lockout after 5 attempts, and password reset flow"\n\n**Sample Output**\n\`\`\`gherkin\nFeature: User Authentication\n  As a registered user\n  I want to log in to the application\n  So that I can access my account\n\n  Scenario: Successful login with valid credentials\n    Given I am on the login page\n    When I enter username "user@example.com" and password "ValidP@ss1"\n    Then I should be redirected to the dashboard\n    And I should see "Welcome back" message\n\n  Scenario Outline: Failed login with invalid credentials\n    Given I am on the login page\n    When I enter username "<username>" and password "<password>"\n    Then I should see error "<error>"\n    Examples:\n      | username | password | error |\n      | invalid@x.com | wrong | Invalid credentials |\n      | | ValidP@ss1 | Email is required |\n\`\`\`\n\n**Generating Step Definitions**\nPaste a feature file into Chat:\n"Generate Cucumber/JavaScript step definitions for this feature file: [paste]"\n\n**Tips**\n• Ask for Scenario Outlines when testing multiple data combinations\n• Request Background sections for shared setup steps\n• Ask Copilot to add data table steps for complex input/output`,
    keyPoints: [
      "Paste requirements and ask for complete feature files",
      "Ask for Scenario Outlines to cover multiple data combinations",
      "Generate step definitions by pasting the feature file",
      "Copilot knows Cucumber (Java/JS), SpecFlow (.NET), and Behave (Python)",
      "Ask for Background sections to reduce scenario duplication"
    ],
    links: [
      { text: "BDD with GitHub Copilot", url: "https://docs.github.com/en/copilot/using-github-copilot/using-github-copilot-for-testing" },
      { text: "Cucumber Docs", url: "https://cucumber.io/docs/guides/" }
    ],
    tags: ["BDD", "Gherkin", "Cucumber", "SpecFlow", "Behave", "feature files"],
    codeExample: `Feature: Shopping Cart\n  Scenario Outline: Add item to cart\n    Given the cart is empty\n    When I add "<item>" with quantity <qty>\n    Then the cart total should be <total>\n    Examples:\n      | item     | qty | total |\n      | Widget A |  1  | 9.99  |\n      | Widget A |  3  | 29.97 |`
  },
  {
    id: 24, day: 24, week: 4,
    title: "Automated Test Frameworks with Copilot",
    subtitle: "Playwright, Cypress, Jest, Pytest & More",
    audience: "tester",
    category: "tester",
    difficulty: "Intermediate",
    duration: "22 min",
    summary: "Set up and write automated tests across popular frameworks — Copilot generates page objects, test fixtures, mocks, and full test suites.",
    content: `**Playwright E2E Tests**\n"Generate a Playwright test for the login flow:\n- Navigate to /login\n- Fill email and password fields\n- Click Submit\n- Assert redirect to /dashboard and welcome message"\n\n**Cypress Component Tests**\n"Write a Cypress component test for the LoginForm React component:\n- Mount the component\n- Test form validation errors\n- Test successful submit calls onLogin callback"\n\n**Jest Unit Tests**\n"/tests using Jest with TypeScript, mock all external dependencies"\n\n**Pytest with Fixtures**\n"Generate pytest tests for the UserService class.\nUse fixtures for database setup and teardown.\nMock the email notification service."\n\n**Page Object Model (POM)**\n"Generate a Page Object Model class for the checkout page in Playwright/TypeScript with methods for: filling shipping address, selecting payment, and submitting order"\n\n**Test Data Factories**\n"Create a factory function that generates realistic User test data using faker.js"\n\n**API Testing with Supertest/RestAssured**\n"Write API tests for POST /api/users endpoint using Supertest:\n- 201 on valid data\n- 400 on missing required fields\n- 409 on duplicate email"`,
    keyPoints: [
      "Describe the UI flow in plain English — Copilot generates the selectors",
      "Ask for Page Object Model classes for maintainable E2E tests",
      "Specify mocking strategy: 'mock all external dependencies'",
      "Copilot generates test fixtures and beforeEach/afterEach hooks",
      "Use 'using [Framework]' to specify the exact tool"
    ],
    links: [
      { text: "Testing with Copilot", url: "https://docs.github.com/en/copilot/using-github-copilot/using-github-copilot-for-testing" },
      { text: "Playwright Docs", url: "https://playwright.dev/docs/intro" },
      { text: "Cypress Docs", url: "https://docs.cypress.io/guides/overview/why-cypress" }
    ],
    tags: ["Playwright", "Cypress", "Jest", "Pytest", "E2E", "automation", "POM"],
    codeExample: `// Copilot-generated Playwright test\nimport { test, expect } from '@playwright/test';\n\ntest('successful login redirects to dashboard', async ({ page }) => {\n  await page.goto('/login');\n  await page.fill('[data-testid="email"]', 'user@example.com');\n  await page.fill('[data-testid="password"]', 'ValidP@ss1');\n  await page.click('[data-testid="submit-btn"]');\n  await expect(page).toHaveURL('/dashboard');\n  await expect(page.locator('h1')).toContainText('Welcome back');\n});`
  },
  {
    id: 25, day: 25, week: 4,
    title: "Performance & Load Test Script Generation",
    subtitle: "k6, JMeter, Artillery & Locust",
    audience: "tester",
    category: "tester",
    difficulty: "Advanced",
    duration: "20 min",
    summary: "Generate load test scripts, performance benchmarks, and stress test scenarios using Copilot for k6, Apache JMeter, Artillery, and Locust.",
    content: `**k6 Load Test Scripts**\n"Write a k6 load test script for our REST API:\n- Endpoint: POST /api/orders\n- Ramp up to 100 users over 30 seconds\n- Sustain for 2 minutes\n- Ramp down over 30 seconds\n- Assert p95 response time < 500ms\n- Assert error rate < 1%"\n\n**Artillery YAML Scripts**\n"Generate an Artillery load test config for our checkout API:\n- 50 virtual users\n- Think time: 1-3 seconds between requests\n- Scenarios: browse products (70%), add to cart (20%), checkout (10%)"\n\n**Locust for Python Services**\n"Generate a Locust performance test for the User API with realistic user behavior patterns"\n\n**JMeter Test Plan**\n"Describe a JMeter test plan for our login and order flow with:\n- Thread groups: 10, 50, 100 users\n- CSV data file for credentials\n- Response time assertions"\n\n**Interpreting Results**\n"Analyze these k6 results and identify bottlenecks: [paste output]"\n\n**Threshold Recommendations**\nAsk Copilot: "What are industry-standard performance thresholds for an e-commerce checkout API?"`,
    keyPoints: [
      "Describe load patterns (ramp-up, sustain, ramp-down) in natural language",
      "Specify SLO assertions: p95, error rate, throughput",
      "Ask for realistic user behavior scenarios with weighted flows",
      "Copilot generates k6, Artillery, and Locust scripts well",
      "Paste performance results and ask Copilot to identify bottlenecks"
    ],
    links: [
      { text: "k6 Documentation", url: "https://k6.io/docs/" },
      { text: "Artillery Docs", url: "https://www.artillery.io/docs" },
      { text: "Locust Docs", url: "https://locust.io/" }
    ],
    tags: ["performance", "load testing", "k6", "JMeter", "Artillery", "Locust"],
    codeExample: `import http from 'k6/http';\nimport { check, sleep } from 'k6';\n\nexport const options = {\n  stages: [\n    { duration: '30s', target: 100 }, // ramp up\n    { duration: '2m', target: 100 },  // sustain\n    { duration: '30s', target: 0 },   // ramp down\n  ],\n  thresholds: {\n    http_req_duration: ['p(95)<500'],\n    http_req_failed: ['rate<0.01'],\n  },\n};\n\nexport default function () {\n  const res = http.post('https://api.example.com/orders', JSON.stringify({\n    productId: 'prod-123', quantity: 1\n  }), { headers: { 'Content-Type': 'application/json' } });\n  check(res, { 'status is 201': (r) => r.status === 201 });\n  sleep(1);\n}`
  },
  {
    id: 26, day: 26, week: 4,
    title: "Security Testing with Copilot",
    subtitle: "OWASP Top 10, SQLi, XSS & Vulnerability Patterns",
    audience: "tester",
    category: "tester",
    difficulty: "Advanced",
    duration: "22 min",
    summary: "Use Copilot to generate security test cases based on OWASP Top 10, identify vulnerable code patterns, and write automated security regression tests.",
    content: `**IMPORTANT DISCLAIMER**\nOnly use security testing techniques on systems you own or have explicit written permission to test. Never use these techniques on production systems without authorization.\n\n**OWASP Top 10 Test Cases**\n"Generate test cases for SQL Injection vulnerabilities in the user search endpoint.\nInput fields to test: username, email, search query"\n\n**Analyzing Code for Vulnerabilities**\n"Review this authentication function for security vulnerabilities:\n[paste code]\nFocus on: SQL injection, timing attacks, and insecure password storage"\n\n**XSS Testing**\n"Generate a set of XSS test payloads for the comment submission field.\nInclude: reflected XSS, stored XSS, DOM-based XSS scenarios"\n\n**Auth/AuthZ Testing**\n"Generate test cases for broken access control:\n- Horizontal privilege escalation\n- IDOR (Insecure Direct Object References)\n- Missing function-level access control"\n\n**Security Code Review Prompts**\n"Does this code have any OWASP Top 10 vulnerabilities? Explain each one."\n"Is this JWT validation implementation secure? What's missing?"\n"Does this file upload handler validate file type securely?"\n\n**Automated Security Regression Tests**\nAsk Copilot to generate Jest/Pytest tests that verify security controls are in place.`,
    keyPoints: [
      "Only test systems you own or have explicit authorization to test",
      "Use /explain on suspect code to identify vulnerabilities",
      "Ask Copilot to review code for OWASP Top 10 issues",
      "Generate security regression tests to prevent regressions",
      "Copilot knows OWASP patterns, SANS CWE, and common auth flaws"
    ],
    links: [
      { text: "OWASP Top 10", url: "https://owasp.org/www-project-top-ten/" },
      { text: "OWASP Testing Guide", url: "https://owasp.org/www-project-web-security-testing-guide/" },
      { text: "GitHub Security Advisory", url: "https://docs.github.com/en/code-security" }
    ],
    tags: ["security", "OWASP", "SQLi", "XSS", "penetration testing", "vulnerabilities"],
    codeExample: null
  },
  {
    id: 27, day: 27, week: 4,
    title: "Test Data Generation & Mocking",
    subtitle: "Faker, Factories, and Realistic Test Datasets",
    audience: "tester",
    category: "tester",
    difficulty: "Intermediate",
    duration: "18 min",
    summary: "Generate realistic test data factories, mock service implementations, and data seeding scripts using Copilot.",
    content: `**Test Data Factories with Faker**\n"Generate a TypeScript factory using @faker-js/faker that creates realistic User test objects with: id, name, email, phone, address, createdAt"\n\n**Domain-Specific Data**\n"Create test data for a banking app:\n- Account with realistic IBAN, balance, currency\n- Transaction history with credits/debits\n- Ensure amounts balance correctly"\n\n**Mock Implementations**\nAsk Copilot to generate mocks:\n"Generate a Jest mock for the EmailService interface that:\n- Records all sent emails\n- Allows asserting email count and content\n- Optionally throws to simulate failure"\n\n**Wiremock/MSW Stubs**\n"Generate Mock Service Worker (MSW) handlers for the following API endpoints:\n[paste OpenAPI spec or endpoint list]"\n\n**Database Seeding Scripts**\n"Generate a database seeding script for PostgreSQL that creates:\n- 100 users with realistic profiles\n- 5 users per role (admin, manager, user)\n- Realistic timestamps spanning last 6 months"\n\n**Parameterized Test Data**\n"Generate a data table with 20 rows of edge case inputs for email validation:\nInclude valid emails, invalid formats, internationalized domains, and long addresses"`,
    keyPoints: [
      "Use @faker-js/faker (JS) or Faker (Python) — Copilot knows both",
      "Specify relationships between data objects for realistic scenarios",
      "Ask for factory functions with optional overrides for flexibility",
      "MSW handlers generated from API specs produce accurate mocks",
      "Generate both valid and invalid data sets for positive/negative tests"
    ],
    links: [
      { text: "Faker.js Docs", url: "https://fakerjs.dev/" },
      { text: "Mock Service Worker", url: "https://mswjs.io/docs/" },
      { text: "Python Faker", url: "https://faker.readthedocs.io/en/master/" }
    ],
    tags: ["test data", "faker", "mocking", "factories", "MSW", "seeds"],
    codeExample: `import { faker } from '@faker-js/faker';\n\nfunction createUser(overrides = {}) {\n  return {\n    id: faker.string.uuid(),\n    name: faker.person.fullName(),\n    email: faker.internet.email(),\n    phone: faker.phone.number(),\n    address: {\n      street: faker.location.streetAddress(),\n      city: faker.location.city(),\n      country: faker.location.countryCode(),\n    },\n    createdAt: faker.date.past({ years: 2 }),\n    ...overrides,\n  };\n}`
  },
  {
    id: 28, day: 28, week: 4,
    title: "Week 4 Recap: The Tester's Copilot Toolkit",
    subtitle: "From Test Cases to Automation — The Complete QA Playbook",
    audience: "tester",
    category: "recap",
    difficulty: "Intermediate",
    duration: "10 min",
    summary: "A consolidated QA-focused reference for using Copilot across the full testing spectrum — from requirements to automation to security.",
    content: `**The Tester's Copilot Playbook**\n\n**Requirements → Test Cases**\n• Paste user stories + ACs → "Generate test cases in table format"\n• Ask explicitly for negative, boundary, and security cases\n• Use "add priority column" for test management exports\n\n**BDD Workflow**\n• Paste requirements → Gherkin feature file\n• Paste feature file → step definitions\n• Ask for Scenario Outlines for data-driven scenarios\n\n**Automation**\n• Describe UI flow → Playwright/Cypress test\n• Select source code → /tests → instant unit tests\n• Ask for Page Object Model classes for maintainability\n\n**Performance**\n• Describe load pattern → k6 / Artillery script\n• Ask for SLO threshold assertions\n• Paste results → bottleneck analysis\n\n**Security**\n• "Review for OWASP Top 10" → vulnerability analysis\n• Generate XSS/SQLi test payloads\n• Ask for security regression tests\n\n**Test Data**\n• "Create factory using faker" → realistic test objects\n• Ask for MSW handlers from API specs\n• Generate database seeding scripts`,
    keyPoints: [
      "Copilot covers the full QA spectrum: unit → E2E → performance → security",
      "Paste requirements directly into Chat for instant test artifacts",
      "BDD: requirements → Gherkin → step definitions with three prompts",
      "Always specify the framework and mocking strategy in your prompt",
      "Copilot is your always-available testing SME — but verify its output"
    ],
    links: [
      { text: "Copilot for Testing", url: "https://docs.github.com/en/copilot/using-github-copilot/using-github-copilot-for-testing" }
    ],
    tags: ["recap", "tester", "QA", "playbook", "automation"],
    codeExample: null
  },

  // ─────────────────── WEEK 5: Advanced Features ───────────────────
  {
    id: 29, day: 29, week: 5,
    title: "Custom Instructions & copilot-instructions.md",
    subtitle: "Teaching Copilot Your Team's Conventions",
    audience: "both",
    category: "advanced",
    difficulty: "Advanced",
    duration: "20 min",
    summary: "Configure persistent custom instructions that make every Copilot suggestion align with your team's coding standards, frameworks, and conventions.",
    content: `**What Are Custom Instructions?**\nCustom instructions tell Copilot about your project's conventions so every suggestion is aligned with your standards — without repeating yourself in every prompt.\n\n**Repository-Level: .github/copilot-instructions.md**\nCreate this file in any repository:\n\`\`\`markdown\n# Copilot Instructions\n\n## Stack\n- Frontend: React 18, TypeScript 5, Tailwind CSS\n- Backend: Node.js 20, Express, PostgreSQL\n- Testing: Jest + React Testing Library, Supertest\n\n## Conventions\n- Use functional components with hooks only (no class components)\n- All API functions return Promise<Result<T, Error>>\n- Error messages must be user-friendly\n- Write JSDoc for all exported functions\n- Variable names: camelCase; constants: SCREAMING_SNAKE_CASE\n\n## Testing\n- Every function must have unit tests\n- Mock all external services\n- Use describe/it blocks (not test())\n\`\`\`\n\n**VS Code Personal Instructions**\nSettings → "GitHub Copilot: Instructions" → add your personal preferences\n\n**Prompt Files (.prompt.md)**\nCreate reusable prompt templates:\n\`.github/prompts/create-api-endpoint.prompt.md\`\n\`\`\`markdown\nCreate a REST API endpoint following our conventions:\n- Input validation with Zod\n- Error handling with our AppError class\n- Request logging middleware\n- OpenAPI documentation comment\n\`\`\``,
    keyPoints: [
      ".github/copilot-instructions.md applies to all team members in the repo",
      "Document your stack, naming conventions, and testing requirements",
      "Personal instructions in VS Code settings apply across all repos",
      ".prompt.md files create reusable task templates",
      "Instructions reduce the need to repeat context in every prompt"
    ],
    links: [
      { text: "Custom Instructions Docs", url: "https://docs.github.com/en/copilot/customizing-copilot/adding-repository-custom-instructions-for-github-copilot" },
      { text: "Prompt Files", url: "https://docs.github.com/en/copilot/customizing-copilot/creating-a-custom-copilot-skill" },
      { text: "Personal Instructions", url: "https://docs.github.com/en/copilot/customizing-copilot/adding-personal-custom-instructions-for-github-copilot" }
    ],
    tags: ["custom instructions", "copilot-instructions.md", "team conventions", "configuration"],
    codeExample: null
  },
  {
    id: 30, day: 30, week: 5,
    title: "Prompt Engineering for GitHub Copilot",
    subtitle: "The Science of Getting Better Suggestions",
    audience: "both",
    category: "advanced",
    difficulty: "Advanced",
    duration: "25 min",
    summary: "Master the principles of prompt engineering — context, specificity, examples, and constraints — to dramatically improve Copilot suggestion quality.",
    content: `**The Prompt Engineering Framework (CSPEC)**\n\n**C – Context**: What is this code for?\n"In a fintech application handling PCI-DSS regulated payment data..."\n\n**S – Specificity**: What exactly do you need?\n"Generate a rate limiter middleware that allows 100 requests per user per minute"\n\n**P – Pattern/Style**: What style or pattern?\n"Using the Express middleware pattern, with async/await, TypeScript"\n\n**E – Examples**: Show the expected shape\n"Input: { userId: string, endpoint: string } → Output: boolean"\n\n**C – Constraints**: What must/must not happen?\n"Must not use any external libraries. Must be thread-safe. Must log every rejection."\n\n**Prompt Anti-Patterns**\n❌ Too vague: "make this better"\n❌ Too much at once: "rewrite my entire auth system"\n❌ No types: functions without type info\n❌ Ambiguous names: processData(), doThing()\n\n**Prompt Patterns That Work**\n✅ "Write a [type] function that [action] [input] and returns [output]"\n✅ "Refactor [pattern] to use [target pattern] because [reason]"\n✅ "Generate tests for [function] covering [specific scenarios]"\n✅ "Convert this [language A] snippet to [language B] maintaining the same logic"\n\n**Iterative Refinement**\nBad first prompt → get partial result → refine with follow-up → reach ideal output.`,
    keyPoints: [
      "CSPEC: Context, Specificity, Pattern, Examples, Constraints",
      "Vague prompts get vague results — be specific about inputs and outputs",
      "Show the expected shape with a short example",
      "Constraints (no external libs, thread-safe) dramatically improve quality",
      "Iterative prompting is normal — refine until you get what you need"
    ],
    links: [
      { text: "Prompt Engineering for Copilot", url: "https://docs.github.com/en/copilot/using-github-copilot/prompt-engineering-for-github-copilot" },
      { text: "Best Practices", url: "https://docs.github.com/en/copilot/using-github-copilot/best-practices-for-using-github-copilot" }
    ],
    tags: ["prompt engineering", "CSPEC", "context", "specificity", "advanced"],
    codeExample: null
  },
  {
    id: 31, day: 31, week: 5,
    title: "Copilot Agent Mode & Autonomous Tasks",
    subtitle: "Multi-Step Task Execution Across Files",
    audience: "both",
    category: "advanced",
    difficulty: "Advanced",
    duration: "25 min",
    summary: "Use Copilot's Agent Mode to execute complex, multi-step tasks that span multiple files — creating features, refactoring modules, and fixing cross-cutting bugs.",
    content: `**What is Agent Mode?**\nAgent mode (also called "Copilot Edits" or "Edit Mode") allows Copilot to:\n• Read and edit multiple files simultaneously\n• Plan a series of steps to complete a task\n• Execute those steps autonomously\n• Show you a diff of all changes for review\n\n**Opening Agent Mode in VS Code**\n1. Open the Chat Panel (Ctrl+Alt+I)\n2. Switch to "Agent" or "Edits" mode (dropdown in the chat panel)\n3. Add files to the working set\n4. Describe the task\n\n**Example Agent Tasks**\n\`Implement a user preferences feature:\n- Create a UserPreferences model\n- Add preferences endpoint to the user router\n- Add service method to UserService\n- Write unit tests for the new service method\`\n\n\`Fix the authentication bug: the JWT token is not being validated on the /admin routes\`\n\n\`Migrate all API calls from axios to the native fetch API\`\n\n**Reviewing Agent Changes**\n• Copilot shows a diff for every file it modified\n• You can Accept All, Reject All, or review file by file\n• Always review before accepting — especially cross-file changes\n\n**Agent Mode Best Practices**\n• Provide a clear, scoped task description\n• Start with a small working set of files\n• Review diffs carefully before accepting`,
    keyPoints: [
      "Agent mode edits multiple files in a single coordinated operation",
      "Describe the task at a feature level — Copilot plans the steps",
      "Review the diff for every file before accepting changes",
      "Start with smaller, scoped tasks to build confidence in Agent mode",
      "Agent mode works best with well-structured codebases and clear architecture"
    ],
    links: [
      { text: "Copilot Agent Mode", url: "https://docs.github.com/en/copilot/using-github-copilot/using-copilot-edits" },
      { text: "Copilot Edits", url: "https://code.visualstudio.com/docs/copilot/copilot-edits" }
    ],
    tags: ["agent mode", "multi-file", "autonomous", "Copilot Edits", "advanced"],
    codeExample: null
  },
  {
    id: 32, day: 32, week: 5,
    title: "GitHub Copilot Extensions",
    subtitle: "Extending Copilot with Domain-Specific Plugins",
    audience: "both",
    category: "advanced",
    difficulty: "Advanced",
    duration: "18 min",
    summary: "Learn about GitHub Copilot Extensions — how to use existing marketplace extensions and understand how to build custom ones for specialized domains.",
    content: `**What are Copilot Extensions?**\nCopilot Extensions allow third-party tools and custom applications to integrate with GitHub Copilot Chat. They provide domain-specific expertise beyond general coding assistance.\n\n**Using Extensions in Chat**\nAfter enabling an extension, reference it with @:\n• \`@github\` – GitHub-specific context (PRs, issues, code)\n• \`@azure\` – Azure resource and service queries\n• \`@docker\` – Docker container and Compose help\n• \`@datastax\` – Database queries and schema\n\n**The @github Extension**\nThe most important built-in extension:\n• \`@github find all open bugs related to authentication\`\n• \`@github what was changed in PR #456?\`\n• \`@github who last modified this function?\`\n• \`@github search for all usages of deprecated API\`\n\n**Installing Extensions**\n1. Go to GitHub Marketplace → Copilot Extensions\n2. Install the extension to your GitHub account or organization\n3. Reference it in VS Code Chat with @extensionname\n\n**Building Custom Extensions**\nOrganizations can build internal extensions using:\n• GitHub Apps as the integration point\n• OpenAI-compatible API endpoint\n• SSE streaming for real-time responses\n\nUse cases: Internal docs search, JIRA integration, DataDog queries`,
    keyPoints: [
      "@github is the most powerful built-in Copilot extension",
      "Third-party extensions (@docker, @azure) add specialized knowledge",
      "Install extensions from GitHub Marketplace",
      "Organizations can build internal extensions using GitHub Apps",
      "Extensions use @ prefix followed by extension name in Chat"
    ],
    links: [
      { text: "About Copilot Extensions", url: "https://docs.github.com/en/copilot/building-copilot-extensions/about-building-copilot-extensions" },
      { text: "Copilot Extensions Marketplace", url: "https://github.com/marketplace?type=apps&copilot_app=true" },
      { text: "Using @github in Copilot Chat", url: "https://docs.github.com/en/copilot/github-copilot-chat/copilot-chat-in-ides/about-github-copilot-chat-in-your-ide" }
    ],
    tags: ["extensions", "@github", "@azure", "@docker", "marketplace", "plugins"],
    codeExample: null
  },
  {
    id: 33, day: 33, week: 5,
    title: "Copilot in GitHub Actions & CI/CD",
    subtitle: "AI-Powered Workflows, Pipeline Fixes & PR Automation",
    audience: "both",
    category: "advanced",
    difficulty: "Advanced",
    duration: "20 min",
    summary: "Use Copilot to generate GitHub Actions workflows, fix failing CI pipelines, and automate pull request review tasks.",
    content: `**Generating GitHub Actions Workflows**\n"Generate a GitHub Actions CI/CD workflow for a Node.js app that:\n- Runs on push to main and PRs\n- Installs dependencies with npm ci\n- Runs lint, tests, and build\n- Publishes to NPM if tests pass on main\n- Caches node_modules between runs"\n\n**Fixing Failing Workflows**\nPaste the failing step output into Chat:\n"This GitHub Actions step is failing: [paste error]\nHere is the workflow file: [paste yaml]\nHow do I fix it?"\n\n**Security: Managing Secrets**\n"How do I securely pass a database password to my tests in GitHub Actions without exposing it in logs?"\n\n**Copilot for PRs (GitHub.com)**\nOn any Pull Request on GitHub.com:\n• Click "Copilot" → "Summary" for an AI-generated PR summary\n• "Copilot" → "Review" for AI code review comments\n\n**Automate Repetitive Actions YAML**\n"Generate a GitHub Actions workflow that:\n- Creates a release when a tag is pushed\n- Generates a CHANGELOG from commit messages\n- Builds Docker image and pushes to GHCR\n- Deploys to staging via kubectl"\n\n**Workflow Optimization**\n"Review this GitHub Actions workflow for improvements:\n- Identify steps that can be parallelized\n- Add caching for build artifacts\n- Reduce total execution time"`,
    keyPoints: [
      "Describe the full CI/CD requirements in natural language",
      "Paste failing step errors + workflow YAML to get fixes",
      "GitHub.com Copilot PR summaries and reviews are built-in features",
      "Ask for secret management best practices (never hardcode secrets)",
      "Ask for parallelization and caching opportunities to optimize pipelines"
    ],
    links: [
      { text: "Copilot in GitHub Actions", url: "https://docs.github.com/en/copilot/using-github-copilot/using-github-copilot-for-cicd" },
      { text: "Copilot PR Summaries", url: "https://docs.github.com/en/copilot/github-copilot-enterprise/copilot-pull-request-summaries/about-copilot-pull-request-summaries" },
      { text: "GitHub Actions Docs", url: "https://docs.github.com/en/actions" }
    ],
    tags: ["CI/CD", "GitHub Actions", "pipelines", "PR summary", "automation"],
    codeExample: null
  },
  {
    id: 34, day: 34, week: 5,
    title: "Code Review with Copilot",
    subtitle: "AI-Powered Review Comments, Security Analysis & Style",
    audience: "both",
    category: "advanced",
    difficulty: "Advanced",
    duration: "18 min",
    summary: "Leverage Copilot as a first-pass code reviewer — catching bugs, security issues, style violations, and performance concerns before human review.",
    content: `**Pre-Review Self-Check**\nBefore submitting a PR, select changed code and ask:\n"Review this code for: bugs, security issues, performance problems, and code style violations"\n\n**Security-Focused Review**\n"Does this code have any OWASP Top 10 vulnerabilities?"\n"Is user input properly validated and sanitized?"\n"Are there any potential injection points?"\n\n**Performance Review**\n"Are there any N+1 query problems in this code?"\n"Can any of these database calls be batched?"\n"Is there any unnecessary re-rendering in this React component?"\n\n**Review on GitHub.com**\n• On any PR → "Copilot" button → "Review"\n• Copilot adds inline review comments just like a human reviewer\n• Available to Copilot Enterprise subscribers\n\n**Reviewing a Diff**\nPaste a git diff into Chat:\n"Review this PR diff for correctness and suggest any issues:\n[paste git diff output]"\n\n**Architectural Review**\n"@workspace Does this new module follow the existing patterns in the codebase?"\n"Are there any circular dependencies introduced by this change?"\n\n**Adding Value to Your Team's Reviews**\nUse Copilot to prepare for review — come with specific questions and analysis, not just code.`,
    keyPoints: [
      "Use Copilot as a first-pass reviewer before submitting PRs",
      "Ask targeted review questions: security, performance, style, correctness",
      "GitHub.com PR review feature (Copilot Enterprise) adds inline comments",
      "Paste git diffs into Chat for review without opening the full editor",
      "@workspace reviews check consistency with existing codebase patterns"
    ],
    links: [
      { text: "Copilot Code Review", url: "https://docs.github.com/en/copilot/using-github-copilot/code-review/using-copilot-code-review" },
      { text: "Copilot PR Review (Enterprise)", url: "https://docs.github.com/en/copilot/github-copilot-enterprise/copilot-pull-request-summaries" }
    ],
    tags: ["code review", "PR", "security", "performance", "OWASP", "review"],
    codeExample: null
  },
  {
    id: 35, day: 35, week: 5,
    title: "Multi-File Context & Large Codebase Navigation",
    subtitle: "@workspace, Semantic Search & Code Understanding at Scale",
    audience: "both",
    category: "advanced",
    difficulty: "Advanced",
    duration: "20 min",
    summary: "Strategies for working effectively with Copilot in large codebases — navigating, understanding, and modifying code across dozens of interconnected files.",
    content: `**The Challenge of Large Codebases**\nAs codebases grow, the challenge shifts from writing code to understanding existing code. Copilot Chat excels here.\n\n**@workspace for Codebase Understanding**\n• "How is user authentication implemented?"\n• "Where is the database connection pool configured?"\n• "What pattern does this codebase use for error handling?"\n• "List all the API endpoints in this project"\n\n**Finding Code Without Searching**\n• "Where is the code that processes refunds?"\n• "Which file handles the WebSocket connection?"\n• "Show me all the places where we validate email addresses"\n\n**Understanding Unfamiliar Code**\n• Select a complex function → /explain\n• "Trace the data flow from the API call to the database for createOrder"\n• "Draw a mermaid diagram of the authentication flow"\n\n**Making Cross-File Changes Safely**\n• "If I change the User interface, what other files will be affected?"\n• "What would break if I remove the userCache module?"\n• "What tests cover the payment processing code?"\n\n**Onboarding with Copilot**\nNew to a codebase? Use @workspace to:\n• Understand the architecture\n• Find where to make changes\n• Learn the conventions\n• Discover existing utilities before writing new ones`,
    keyPoints: [
      "@workspace searches the entire project and returns relevant code",
      "Ask Copilot to trace data flows through the codebase",
      "Request Mermaid diagrams to visualize architecture",
      "Ask impact analysis questions before making changes",
      "Copilot accelerates onboarding to unfamiliar codebases dramatically"
    ],
    links: [
      { text: "@workspace Context", url: "https://docs.github.com/en/copilot/github-copilot-chat/copilot-chat-in-ides/copilot-chat-context" },
      { text: "Copilot for Code Understanding", url: "https://docs.github.com/en/copilot/using-github-copilot/using-github-copilot-for-debugging" }
    ],
    tags: ["@workspace", "large codebase", "navigation", "understanding", "onboarding"],
    codeExample: null
  },

  // ─────────────────── WEEK 6: Enterprise & Best Practices ───────────────────
  {
    id: 36, day: 36, week: 6,
    title: "GitHub Copilot for Business & Enterprise",
    subtitle: "Team Management, Policies & Organization Features",
    audience: "both",
    category: "enterprise",
    difficulty: "Advanced",
    duration: "18 min",
    summary: "Overview of GitHub Copilot Business and Enterprise plans — admin controls, usage policies, IP indemnification, and organization-wide deployment.",
    content: `**Copilot Plans Comparison**\n| Feature | Individual | Business | Enterprise |\n|---------|-----------|----------|------------|\n| IDE completions | ✅ | ✅ | ✅ |\n| Copilot Chat | ✅ | ✅ | ✅ |\n| CLI | ✅ | ✅ | ✅ |\n| Admin policy controls | ❌ | ✅ | ✅ |\n| IP indemnification | ❌ | ✅ | ✅ |\n| Content exclusions | ❌ | ✅ | ✅ |\n| PR summaries | ❌ | ❌ | ✅ |\n| Copilot in github.com | ❌ | ❌ | ✅ |\n| Fine-tuned models | ❌ | ❌ | ✅ |\n\n**Admin Controls (Business/Enterprise)**\n• Enable/disable Copilot for specific teams or repos\n• Enforce content exclusion rules\n• View usage analytics and seat assignments\n• Configure allowed/blocked suggestions policy\n\n**IP Indemnification**\nCopilot Business/Enterprise includes IP indemnification — GitHub defends you if copyrighted code in Copilot's output is disputed.\n\n**Deploying to Your Organization**\n1. Purchase seats in GitHub Settings → Copilot\n2. Assign seats to users or teams\n3. Configure org-level policies\n4. Set up repository content exclusions\n5. Share .github/copilot-instructions.md in key repos`,
    keyPoints: [
      "Business plan adds admin controls, usage policies, and IP indemnification",
      "Enterprise plan adds PR summaries, github.com integration, and fine-tuning",
      "Admins can restrict Copilot per repo, team, or organization",
      "Content exclusions prevent Copilot from reading sensitive files",
      "IP indemnification only applies to Business and Enterprise plans"
    ],
    links: [
      { text: "Copilot Business Docs", url: "https://docs.github.com/en/copilot/managing-copilot/managing-copilot-for-your-enterprise" },
      { text: "Managing Copilot in your Organization", url: "https://docs.github.com/en/copilot/managing-copilot/managing-github-copilot-in-your-organization" },
      { text: "Copilot Pricing", url: "https://github.com/features/copilot#pricing" }
    ],
    tags: ["business", "enterprise", "admin", "policies", "IP indemnification"],
    codeExample: null
  },
  {
    id: 37, day: 37, week: 6,
    title: "Security & Privacy Considerations",
    subtitle: "What Data Copilot Sends, Retention & Compliance",
    audience: "both",
    category: "enterprise",
    difficulty: "Advanced",
    duration: "20 min",
    summary: "Understand what data GitHub Copilot transmits, how it's used, data retention policies, and how to configure Copilot for privacy-sensitive environments.",
    content: `**What Data Does Copilot Send?**\nWhen you use Copilot, the following is sent to GitHub's servers:\n• The content around your cursor (prefix + suffix)\n• Open editor tabs (neighboring file context)\n• The file path and language\n• Your VS Code version and Copilot version\n\nCopilot does NOT send your entire codebase automatically.\n\n**Data Retention**\n• Suggestions data: not retained after generation (for Individual)\n• Business/Enterprise: no training data usage by default\n• Prompts and completions are NOT used to train the model for Business+ plans\n\n**Content Exclusions**\nAdmin feature (Business/Enterprise) to prevent Copilot from reading:\n• .env files with secrets\n• Private key files\n• Internal configuration files\n\`\`\`yaml\n# .github/copilot-config.yml\ncontent_exclusions:\n  - "**/.env"\n  - "**/secrets/**"\n  - "**/*.pem"\n\`\`\`\n\n**Compliance Considerations**\n• GDPR: Copilot processes data in US/EU — check your DPA\n• SOC 2 Type II: GitHub is certified\n• HIPAA: Available with Enterprise agreement\n• Ask your Legal/Compliance team before deploying in regulated industries\n\n**Best Practices**\n• Never include actual passwords or tokens in prompts\n• Use content exclusions for all secret files\n• Review generated code for hardcoded credentials`,
    keyPoints: [
      "Copilot sends cursor context + open tabs — not your whole codebase",
      "Business/Enterprise plans do not use your code for model training",
      "Use content exclusions to protect .env and secrets files",
      "GitHub Copilot is SOC 2 Type II certified; HIPAA available for Enterprise",
      "Never paste real passwords, tokens, or PII into Copilot prompts"
    ],
    links: [
      { text: "Copilot Privacy Statement", url: "https://docs.github.com/en/site-policy/privacy-policies/github-copilot-business-privacy-statement" },
      { text: "Content Exclusions", url: "https://docs.github.com/en/copilot/managing-copilot/managing-github-copilot-in-your-organization/managing-github-copilot-features-in-your-organization/configuring-content-exclusions-for-github-copilot" },
      { text: "Copilot Trust Center", url: "https://resources.github.com/copilot-trust-center/" }
    ],
    tags: ["privacy", "security", "data retention", "content exclusions", "compliance", "GDPR"],
    codeExample: null
  },
  {
    id: 38, day: 38, week: 6,
    title: "Measuring Productivity & ROI",
    subtitle: "Copilot Metrics, Acceptance Rates & Business Value",
    audience: "both",
    category: "enterprise",
    difficulty: "Advanced",
    duration: "15 min",
    summary: "Learn how to measure Copilot's impact on developer productivity using the Copilot Metrics API, VS Code telemetry, and organizational surveys.",
    content: `**GitHub Copilot Metrics API**\nAvailable for Business/Enterprise — tracks:\n• Suggestion acceptance rate\n• Lines of code accepted\n• Active users\n• Usage by language\n• Usage by editor\n\nAccess: Organization Settings → Copilot → Usage\n\n**Key Metrics to Track**\n| Metric | Industry Benchmark | What It Means |\n|--------|-------------------|---------------|\n| Acceptance Rate | 25-30% | % of suggestions developers keep |\n| Active Users | >80% of seats | Adoption health |\n| Lines Accepted | 20-40% of code | Code contributed by Copilot |\n| Survey: Time Saved | 30-55% | Developer-reported productivity gain |\n\n**GitHub Research Findings**\nGitHub's own studies show developers using Copilot:\n• Complete tasks 55% faster on average\n• Report higher job satisfaction\n• Write more tests\n• Spend more time on creative/complex work\n\n**Running Your Own Productivity Study**\n1. Baseline: measure task completion time without Copilot\n2. Pilot: enable Copilot for one team, keep control group\n3. Measure: task time, PR cycle time, defect rate, test coverage\n4. Survey: developer satisfaction and perceived productivity\n\n**ROI Calculation**\nROI = (Hours saved × hourly cost) - Copilot license cost`,
    keyPoints: [
      "Copilot Metrics API tracks acceptance rate, lines accepted, active users",
      "Industry benchmark: 25-30% suggestion acceptance rate",
      "GitHub research: 55% faster task completion on average",
      "Measure both quantitative (metrics) and qualitative (surveys) impact",
      "ROI = time saved × developer cost − subscription cost"
    ],
    links: [
      { text: "Copilot Metrics API", url: "https://docs.github.com/en/rest/copilot/copilot-metrics" },
      { text: "GitHub Copilot Research", url: "https://github.blog/2022-09-07-research-quantifying-github-copilots-impact-on-developer-productivity-and-happiness/" },
      { text: "Measuring Copilot Impact", url: "https://docs.github.com/en/copilot/managing-copilot/managing-github-copilot-in-your-organization/reviewing-github-copilot-activity-in-your-organization" }
    ],
    tags: ["metrics", "ROI", "productivity", "acceptance rate", "business value"],
    codeExample: null
  },
  {
    id: 39, day: 39, week: 6,
    title: "Integrating Copilot into Team Workflows",
    subtitle: "Onboarding, Standards & Cultural Adoption",
    audience: "both",
    category: "enterprise",
    difficulty: "Advanced",
    duration: "18 min",
    summary: "A practical guide to rolling out GitHub Copilot across an engineering team — training, standards, pair programming culture, and avoiding common adoption pitfalls.",
    content: `**Rollout Strategy**\n1. **Champions Phase**: Identify 5-10 enthusiastic early adopters\n2. **Pilot Phase**: Expand to one team for 30 days with metrics\n3. **Broad Rollout**: Roll out to all teams with training\n4. **Continuous Improvement**: Regular retrospectives on usage\n\n**Team Standards to Define**\n• When to use inline vs. chat\n• Code review expectations for Copilot-generated code\n• Security review requirements\n• Documentation expectations\n• Acceptable use policies\n\n**copilot-instructions.md as Team Memory**\nMaintain a shared instruction file that encodes:\n• Architecture decisions\n• Naming conventions\n• Testing requirements\n• Prohibited patterns\n\n**Pair Programming with Copilot**\n• Use Copilot as a third pair when mob programming\n• Let junior devs use Copilot for scaffolding, seniors for review\n• Use Copilot Chat during code reviews to explain decisions\n\n**Training Resources for Your Team**\n• GitHub's official Copilot certification (GitHub Skills)\n• Internal lunch-and-learns covering domain-specific patterns\n• Weekly "Copilot tips" in team channels\n• Shared prompt library in copilot-instructions.md\n\n**Avoiding Common Pitfalls**\n❌ "Copilot is always right" — require code review\n❌ Skipping tests because Copilot wrote the code\n❌ Not updating copilot-instructions.md as conventions evolve`,
    keyPoints: [
      "Phased rollout: champions → pilot → broad → continuous improvement",
      "Define clear team standards for Copilot use before broad rollout",
      "copilot-instructions.md becomes your team's shared knowledge base",
      "Pair Copilot with code review — never skip review of AI-generated code",
      "Track adoption and satisfaction with regular retrospectives"
    ],
    links: [
      { text: "GitHub Skills: Copilot", url: "https://skills.github.com/" },
      { text: "Managing Copilot in Organizations", url: "https://docs.github.com/en/copilot/managing-copilot/managing-github-copilot-in-your-organization" },
      { text: "Copilot Adoption Guide", url: "https://resources.github.com/copilot-trust-center/" }
    ],
    tags: ["team", "adoption", "rollout", "training", "culture", "workflow"],
    codeExample: null
  },
  {
    id: 40, day: 40, week: 6,
    title: "Common Pitfalls & How to Avoid Them",
    subtitle: "Anti-Patterns, Over-Reliance & Critical Thinking",
    audience: "both",
    category: "enterprise",
    difficulty: "Intermediate",
    duration: "15 min",
    summary: "The most common mistakes developers and testers make with GitHub Copilot, and practical strategies to use it as an amplifier rather than a crutch.",
    content: `**Anti-Pattern 1: Accepting Without Reading**\nThe most dangerous mistake. Copilot can generate:\n• Plausible-looking but incorrect logic\n• Security vulnerabilities\n• Deprecated API usage\n• Hallucinated library functions\n✅ Fix: Always read every line before pressing Tab\n\n**Anti-Pattern 2: Treating Copilot as an Oracle**\nCopilot can be confidently wrong. It doesn't:\n• Know your business requirements\n• Know your current database schema\n• Know if an API changed last week\n✅ Fix: Use Copilot for patterns, not facts; verify facts independently\n\n**Anti-Pattern 3: Skipping Tests**\nBecause Copilot wrote the code doesn't mean it's correct.\n✅ Fix: /tests on all generated code; treat it like any PR\n\n**Anti-Pattern 4: Vague Prompts**\n"Make this better" leads to random changes.\n✅ Fix: Apply CSPEC — Context, Specificity, Pattern, Examples, Constraints\n\n**Anti-Pattern 5: Forgetting Security**\nCopilot may generate SQL queries without parameterization, or auth code without proper checks.\n✅ Fix: Always review security-critical code; use /explain to audit\n\n**Anti-Pattern 6: Not Maintaining copilot-instructions.md**\nAs conventions change, old instructions mislead Copilot.\n✅ Fix: Treat it like code — review and update in PRs\n\n**Copilot's Known Weaknesses**\n• Complex algorithm correctness\n• Highly domain-specific business logic\n• Cutting-edge APIs released after training cutoff\n• Multi-step numerical correctness`,
    keyPoints: [
      "Always read every suggestion — plausible-looking code can be wrong",
      "Copilot can hallucinate function names and API signatures",
      "Run /tests on generated code — treat it like any other code review",
      "Security-critical paths require manual review, always",
      "Keep copilot-instructions.md up to date as conventions evolve"
    ],
    links: [
      { text: "Responsible Use of Copilot", url: "https://docs.github.com/en/copilot/responsible-use-of-github-copilot-features" },
      { text: "Best Practices", url: "https://docs.github.com/en/copilot/using-github-copilot/best-practices-for-using-github-copilot" }
    ],
    tags: ["pitfalls", "anti-patterns", "best practices", "responsible use", "critical thinking"],
    codeExample: null
  },
  {
    id: 41, day: 41, week: 6,
    title: "Content Exclusions & Admin Controls",
    subtitle: "Protecting Sensitive Files and Enforcing Policies",
    audience: "both",
    category: "enterprise",
    difficulty: "Advanced",
    duration: "12 min",
    summary: "Configure content exclusions to prevent Copilot from reading sensitive files, and use admin controls to enforce organization-wide Copilot policies.",
    content: `**Content Exclusions (Business/Enterprise)**\nPrevent Copilot from using specific files as context:\n\n**How to Configure**\n1. Go to Organization Settings → Copilot → Content Exclusions\n2. Or configure at the repository level in Settings → Copilot\n3. Use glob patterns to match files:\n\`\`\`\n# Exclude all .env files\n**/.env\n**/.env.*\n\n# Exclude secrets directory\n**/secrets/**\n**/credentials/**\n\n# Exclude private keys\n**/*.pem\n**/*.key\n**/*.p12\n\n# Exclude internal config\nconfig/production.yml\n\`\`\`\n\n**What Content Exclusions Do**\n• Excluded files won't appear as neighboring file context\n• Copilot won't autocomplete in excluded files\n• Takes effect for all users in the organization\n\n**Admin Policy Controls**\n• Enable/disable Copilot for specific repositories\n• Control whether Copilot can suggest code matching public code (duplication filter)\n• Require certain safety settings organization-wide\n\n**Duplication Filter**\nThe "public code matching" setting filters suggestions that closely match publicly available code. Recommended: keep enabled for copyright safety.`,
    keyPoints: [
      "Content exclusions prevent Copilot from reading sensitive files",
      "Configure with glob patterns: **/.env, **/secrets/**, *.pem",
      "Exclusions are enforced for all organization members",
      "Duplication filter should stay ON for copyright safety",
      "Admin controls are only available on Business and Enterprise plans"
    ],
    links: [
      { text: "Content Exclusions", url: "https://docs.github.com/en/copilot/managing-copilot/managing-github-copilot-in-your-organization/managing-github-copilot-features-in-your-organization/configuring-content-exclusions-for-github-copilot" },
      { text: "Admin Policies", url: "https://docs.github.com/en/copilot/managing-copilot/managing-github-copilot-in-your-organization/setting-policies-for-copilot-in-your-organization" }
    ],
    tags: ["content exclusions", "admin", "policies", "secrets", "enterprise"],
    codeExample: null
  },
  {
    id: 42, day: 42, week: 6,
    title: "The Future of GitHub Copilot",
    subtitle: "What's Next: Models, Agents, and the AI-Native IDE",
    audience: "both",
    category: "enterprise",
    difficulty: "Advanced",
    duration: "15 min",
    summary: "A look at the roadmap for GitHub Copilot — multi-model support, agentic workflows, MCP integration, and what the AI-native development future looks like.",
    content: `**Multi-Model Support**\nGitHub Copilot now supports choosing your AI model:\n• GPT-4o (OpenAI) — default, fast\n• Claude 3.5/3.7 Sonnet (Anthropic) — strong reasoning\n• Gemini 1.5/2.0 Pro (Google) — large context\n• o1/o3 (OpenAI) — complex reasoning\n\nYou can switch models in VS Code's Chat panel header.\n\n**Model Context Protocol (MCP)**\nCopilot now supports MCP — a standard for connecting AI models to external data sources:\n• Connect Copilot to your database schema\n• Connect to internal APIs and documentation\n• Connect to monitoring/logging systems\n• Build custom tool integrations\n\n**Agentic Workflows**\nThe future of Copilot is fully autonomous agents that can:\n• Triage and fix GitHub Issues end-to-end\n• Write code, run tests, and open PRs\n• Monitor CI/CD and self-fix failures\n• Perform code migrations at scale\n\n**GitHub Copilot Coding Agent (Preview)**\nAssign GitHub Issues to Copilot — it will write the code, run tests, and open a PR for human review. This is the first fully autonomous coding agent in a major IDE.\n\n**What This Means for Developers & Testers**\n• Developers: focus on architecture, review, and complex problems\n• Testers: focus on test strategy, edge cases, and quality — let Copilot handle boilerplate\n• Both: the skill shifts from writing to reviewing, prompting, and directing`,
    keyPoints: [
      "Multi-model: choose between GPT-4o, Claude, Gemini, and o1/o3",
      "MCP integration connects Copilot to external data sources and tools",
      "Copilot Coding Agent can take GitHub Issues and open PRs autonomously",
      "The developer role shifts from writer to director and reviewer",
      "The quality of your prompts and reviews becomes your key skill"
    ],
    links: [
      { text: "GitHub Copilot Roadmap", url: "https://github.com/orgs/github/projects/4247/views/1" },
      { text: "Copilot Multi-Model", url: "https://docs.github.com/en/copilot/using-github-copilot/ai-models/changing-the-ai-model-for-github-copilot-chat" },
      { text: "MCP for Copilot", url: "https://docs.github.com/en/copilot/customizing-copilot/extending-copilot-chat-in-your-ide" },
      { text: "Copilot Coding Agent", url: "https://docs.github.com/en/copilot/using-github-copilot/using-copilot-coding-agent-to-work-on-tasks" },
      { text: "GitHub Next", url: "https://githubnext.com/" }
    ],
    tags: ["future", "multi-model", "MCP", "agents", "roadmap", "GPT-4o", "Claude"],
    codeExample: null
  }
];

export const weeks = [
  { week: 1, title: "Getting Started", description: "Install, authenticate, and understand the fundamentals of GitHub Copilot", color: "#2563eb", days: "1–7" },
  { week: 2, title: "Core Features", description: "Master inline completions, Chat, slash commands, and context variables", color: "#7c3aed", days: "8–14" },
  { week: 3, title: "For Developers", description: "Writing, refactoring, testing, debugging, and API integration", color: "#059669", days: "15–21" },
  { week: 4, title: "For Testers", description: "Test case generation, BDD, automation, performance, and security testing", color: "#d97706", days: "22–28" },
  { week: 5, title: "Advanced Features", description: "Agent mode, extensions, CI/CD, code review, and large codebase navigation", color: "#dc2626", days: "29–35" },
  { week: 6, title: "Enterprise & Best Practices", description: "Business plans, privacy, metrics, team adoption, and the future of Copilot", color: "#0891b2", days: "36–42" },
];

export const audienceLabels = {
  both: { label: "Everyone", color: "#64748b", bg: "#f1f5f9" },
  developer: { label: "Developer", color: "#2563eb", bg: "#eff6ff" },
  tester: { label: "Tester", color: "#d97706", bg: "#fffbeb" },
};

export const difficultyColors = {
  Beginner: { color: "#16a34a", bg: "#f0fdf4" },
  Intermediate: { color: "#d97706", bg: "#fffbeb" },
  Advanced: { color: "#dc2626", bg: "#fef2f2" },
};
