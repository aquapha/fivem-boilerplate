import Globals from "globals";
import EslintJavaScript from "@eslint/js";
import EslintReact from "eslint-plugin-react";
import EslintTypeScript from "typescript-eslint";
import EslintImportRules from "eslint-plugin-import";
import EslintReactHooks from "eslint-plugin-react-hooks";
import EslintReactRefresh from "eslint-plugin-react-refresh";
import EslintTypeScriptParser from "@typescript-eslint/parser";
import EslintTypeScriptPlugin from "@typescript-eslint/eslint-plugin";

const eslintConfig = EslintTypeScript.config(
  {
    ignores: [
      "dist",
      "app/(payload)",
      "postcss.config.js",
      "tailwind.config.js",
      "server/modules/postgres/migrations",
      "./payload-generated-schema.ts",
    ],
  },
  {
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  EslintJavaScript.configs.recommended,
  EslintTypeScript.configs.recommended,
  EslintReact.configs.flat.recommended,
  EslintImportRules.flatConfigs.typescript,
  {
    files: ["**/*.{ts,tsx,js,jsx}"],
    languageOptions: {
      sourceType: "module",
      ecmaVersion: "latest",
      globals: Globals.browser,
      parser: EslintTypeScriptParser,
      parserOptions: {
        projectService: true,
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  },
  {
    plugins: {
      react: EslintReact,
      import: EslintImportRules,
      "react-hooks": EslintReactHooks,
      "react-refresh": EslintReactRefresh,
      "@typescript-eslint": EslintTypeScriptPlugin,
    },
    rules: {
      // COMMON RULES

      // Enforce semicolons at the end of statements
      // https://eslint.org/docs/rules/semi
      semi: "error",

      // Enforce consistent quote style
      // https://eslint.org/docs/rules/quotes
      quotes: ["error", "double"],

      // Enforce curly braces for control flow, including if statements
      // https://eslint.org/docs/rules/curly
      curly: ["error", "all"],

      // Enforce return statements in callbacks of array methods
      // https://eslint.org/docs/latest/rules/array-callback-return
      "array-callback-return": "error",

      // Disallow await inside of loops
      // https://eslint.org/docs/latest/rules/no-await-in-loop
      "no-await-in-loop": "error",

      // Disallow returning value in constructor
      // https://eslint.org/docs/rules/no-constructor-return
      "no-constructor-return": "error",

      // Disallow duplicate module imports
      // https://eslint.org/docs/latest/rules/no-duplicate-imports
      "no-duplicate-imports": "error",

      // Disallow returning values from Promise executor functions
      // https://eslint.org/docs/rules/no-promise-executor-return
      "no-promise-executor-return": "error",

      // disallow comparisons where both sides are exactly the same
      // https://eslint.org/docs/rules/no-self-compare
      "no-self-compare": "error",

      // Disallow template literal placeholder syntax in regular strings
      // https://eslint.org/docs/rules/no-template-curly-in-string
      "no-template-curly-in-string": "error",

      // Disallow the use of variables before they are defined
      // https://eslint.org/docs/latest/rules/no-use-before-define
      "no-use-before-define": "off",

      // treat var statements as if they were block scoped
      // https://eslint.org/docs/rules/block-scoped-var
      "block-scoped-var": "error",

      // require camel case names
      // https://eslint.org/docs/latest/rules/camelcase
      camelcase: "error",

      // enforce that class methods use "this"
      // https://eslint.org/docs/rules/class-methods-use-this
      "class-methods-use-this": "error",

      // require return statements to either always or never specify values
      // https://eslint.org/docs/rules/consistent-return
      "consistent-return": "error",

      // Enforce consistent brace style for all control statements
      // https://eslint.org/docs/latest/rules/curly
      curly: "error",

      // Require default cases in switch statements
      // https://eslint.org/docs/latest/rules/default-casea
      "default-case": "error",

      // Enforce default clauses in switch statements to be last
      // https://eslint.org/docs/rules/default-case-last
      "default-case-last": "error",

      // Enforce default parameters to be last
      // https://eslint.org/docs/latest/rules/default-param-last
      "default-param-last": "error",

      // Enforce dot notation whenever possible
      // https://eslint.org/docs/rules/dot-notation
      "dot-notation": "error",

      // Require the use of === and !==s
      // https://eslint.org/docs/latest/rules/eqeqeq
      eqeqeq: "error",

      // ? Enforce the consistent use of either function declarations or expressions assigned to variables
      // https://eslint.org/docs/latest/rules/func-style
      "func-style": ["error", "declaration"],

      // Require grouped accessor pairs in object literals and classes
      // https://eslint.org/docs/rules/grouped-accessor-pairs
      "grouped-accessor-pairs": "error",

      // Require for-in loops to include an if statement
      // https://eslint.org/docs/rules/guard-for-in
      "guard-for-in": "error",

      // Enforce a maximum number of classes per file
      // https://eslint.org/docs/rules/max-classes-per-file
      "max-classes-per-file": ["error", 1],

      // Require constructor names to begin with a capital letter
      // https://eslint.org/docs/latest/rules/new-cap
      "new-cap": "off",

      // Disallow Array constructors
      // https://eslint.org/docs/latest/rules/no-array-constructor
      "no-array-constructor": "error",

      // Disallow use of arguments.caller or arguments.callee
      // https://eslint.org/docs/rules/no-caller
      "no-caller": "error",

      // Disallow the use of alert, confirm, and prompt
      // https://eslint.org/docs/latest/rules/no-alert
      "no-alert": "warn",

      // Disallow the use of console
      // https://eslint.org/docs/latest/rules/no-console
      "no-console": "warn",

      // Disallow continue statements
      // https://eslint.org/docs/latest/rules/no-continue
      "no-continue": "error",

      // Disallow empty functions
      // https://eslint.org/docs/latest/rules/no-empty-function
      "no-empty-function": "error",

      // Disallow use of eval()
      // https://eslint.org/docs/rules/no-eval
      "no-eval": "error",

      // Disallow adding to native types
      // https://eslint.org/docs/rules/no-extend-native
      "no-extend-native": "error",

      // Disallow unnecessary function binding
      // https://eslint.org/docs/rules/no-extra-bind
      "no-extra-bind": "error",

      // Disallow Unnecessary Labels
      // https://eslint.org/docs/rules/no-extra-label
      "no-extra-label": "error",

      // Disallow use of eval()-like methods
      // https://eslint.org/docs/rules/no-implied-eval
      "no-implied-eval": "error",

      // Disallow usage of __iterator__ property
      // https://eslint.org/docs/rules/no-iterator
      "no-iterator": "error",

      // Disallow labels that share a name with a variable
      // https://eslint.org/docs/rules/no-label-var
      "no-label-var": "error",

      // Disallow labeled statements
      // https://eslint.org/docs/latest/rules/no-labels
      "no-labels": "error",

      // disallow unnecessary nested blocks
      // https://eslint.org/docs/rules/no-lone-blocks
      "no-lone-blocks": "error",

      // disallow if as the only statement in an else block
      // https://eslint.org/docs/rules/no-lonely-if
      "no-lonely-if": "error",

      // Disallow creation of functions within loops
      // https://eslint.org/docs/rules/no-loop-func
      "no-loop-func": "error",

      // Disallow use of chained assignment expressions
      // https://eslint.org/docs/rules/no-multi-assign
      "no-multi-assign": "error",

      // Disallow use of multiline strings
      // https://eslint.org/docs/rules/no-multi-str
      "no-multi-str": "error",

      // Disallow nested ternary expressions
      // https://eslint.org/docs/latest/rules/no-nested-ternary
      "no-nested-ternary": "error",

      // Disallow use of new operator when not part of the assignment or comparison
      // https://eslint.org/docs/rules/no-new
      "no-new": "error",

      // Disallow use of new operator for Function object
      // https://eslint.org/docs/rules/no-new-func
      "no-new-func": "error",

      // Disallows creating new instances of String, Number, and Boolean
      // https://eslint.org/docs/rules/no-new-wrappers
      "no-new-wrappers": "error",

      // Disallow octal escape sequences in string literals
      // https://eslint.org/docs/rules/no-octal-escape
      "no-octal-escape": "error",

      // Disallow use of unary operators, ++ and --
      // https://eslint.org/docs/rules/no-plusplus
      "no-plusplus": "error",

      // Disallow usage of __proto__ property
      // https://eslint.org/docs/rules/no-proto
      "no-proto": "error",

      // Disallow certain object properties
      // https://eslint.org/docs/rules/no-restricted-properties
      "no-restricted-properties": [
        "error",
        {
          object: "arguments",
          property: "callee",
          message: "arguments.callee is deprecated",
        },
        {
          object: "global",
          property: "isFinite",
          message: "Please use Number.isFinite instead",
        },
        {
          object: "self",
          property: "isFinite",
          message: "Please use Number.isFinite instead",
        },
        {
          object: "window",
          property: "isFinite",
          message: "Please use Number.isFinite instead",
        },
        {
          object: "global",
          property: "isNaN",
          message: "Please use Number.isNaN instead",
        },
        {
          object: "self",
          property: "isNaN",
          message: "Please use Number.isNaN instead",
        },
        {
          object: "window",
          property: "isNaN",
          message: "Please use Number.isNaN instead",
        },
        {
          property: "__defineGetter__",
          message: "Please use Object.defineProperty instead.",
        },
        {
          property: "__defineSetter__",
          message: "Please use Object.defineProperty instead.",
        },
        {
          object: "Math",
          property: "pow",
          message: "Use the exponentiation operator (**) instead.",
        },
      ],

      // Disallow certain syntax forms
      // https://eslint.org/docs/rules/no-restricted-syntax
      "no-restricted-syntax": [
        "error",
        {
          selector: "ForInStatement",
          message:
            "for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.",
        },
        {
          selector: "ForOfStatement",
          message:
            "iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.",
        },
        {
          selector: "LabeledStatement",
          message:
            "Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.",
        },
        {
          selector: "WithStatement",
          message:
            "`with` is disallowed in strict mode because it makes code impossible to predict and optimize.",
        },
      ],

      // Disallow use of assignment in return statement
      // https://eslint.org/docs/rules/no-return-assign
      "no-return-assign": "error",

      // Disallow dangling underscores in identifiers
      // https://eslint.org/docs/latest/rules/no-underscore-dangle#rule-details
      "no-underscore-dangle": "off",

      // Disallow use of `javascript:` urls.
      // https://eslint.org/docs/rules/no-script-url
      "no-script-url": "error",

      // Disallow use of comma operator
      // https://eslint.org/docs/rules/no-sequences
      "no-sequences": "error",

      // Disallow declaration of variables already declared in the outer scope
      // https://eslint.org/docs/latest/rules/no-shadow
      "no-shadow": "error",

      // Eestrict what can be thrown as an exception
      // https://eslint.org/docs/rules/no-throw-literal
      "no-throw-literal": "error",

      // Disallow initializing variables to undefined
      // https://eslint.org/docs/latest/rules/no-undef-init
      "no-undef-init": "error",

      // Disallow the use of undefined as an identifier
      // https://eslint.org/docs/latest/rules/no-undefined
      "no-undefined": "off",

      // Disallow ternary operators when simpler alternatives exist
      // https://eslint.org/docs/latest/rules/no-unneeded-ternary
      "no-unneeded-ternary": "error",

      // Disallow unused expressions
      // https://eslint.org/docs/latest/rules/no-unused-expressions
      "no-unused-expressions": "error",

      // Disallow useless computed property keys
      // https://eslint.org/docs/rules/no-useless-computed-key
      "no-useless-computed-key": "error",

      // Disallow useless string concatenation
      // https://eslint.org/docs/rules/no-useless-concat
      "no-useless-concat": "error",

      // disallow unnecessary constructor
      // https://eslint.org/docs/rules/no-useless-constructor
      "no-useless-constructor": "error",

      // disallow renaming import, export, and destructured assignments to the same name
      // https://eslint.org/docs/rules/no-useless-rename
      "no-useless-rename": "error",

      // Disallow redundant return; keywords
      // https://eslint.org/docs/rules/no-useless-return
      "no-useless-return": "error",

      // Require let or const instead of var
      // https://eslint.org/docs/latest/rules/no-var
      "no-var": "error",

      // Disallow void operators
      // https://eslint.org/docs/latest/rules/no-void
      "no-void": "error",

      // Require or disallow method and property shorthand syntax for object literals
      // https://eslint.org/docs/latest/rules/object-shorthand
      "object-shorthand": "error",

      // Enforce variables to be declared either together or separately in functions
      // https://eslint.org/docs/latest/rules/one-var
      "one-var": ["error", "never"],

      // Require assignment operator shorthand where possible or prohibit it entirely
      // https://eslint.org/docs/rules/operator-assignment
      "operator-assignment": "error",

      // Require using arrow functions for callbacks
      // https://eslint.org/docs/latest/rules/prefer-arrow-callback
      "prefer-arrow-callback": "error",

      // Require const declarations for variables that are never reassigned after declared
      // https://eslint.org/docs/latest/rules/prefer-const
      "prefer-const": "error",

      // Prefer destructuring from arrays and objects
      // https://eslint.org/docs/rules/prefer-destructuring
      "prefer-destructuring": [
        "error",
        {
          VariableDeclarator: {
            array: false,
            object: true,
          },
          AssignmentExpression: {
            array: true,
            object: false,
          },
        },
        {
          enforceForRenamedProperties: false,
        },
      ],

      // Disallow the use of Math.pow in favor of the ** operator
      // https://eslint.org/docs/rules/prefer-exponentiation-operator
      "prefer-exponentiation-operator": "error",

      // Prefer use of an object spread over Object.assign
      // https://eslint.org/docs/rules/prefer-object-spread
      "prefer-object-spread": "error",

      // Require using Error objects as Promise rejection reasons
      // https://eslint.org/docs/rules/prefer-promise-reject-errors
      "prefer-promise-reject-errors": "error",

      // Use rest parameters instead of arguments
      // https://eslint.org/docs/rules/prefer-rest-params
      "prefer-rest-params": "error",

      // Require spread operators instead of .apply()
      // https://eslint.org/docs/rules/prefer-spread
      "prefer-spread": "error",

      // Require template literals instead of string concatenation
      // https://eslint.org/docs/latest/rules/prefer-template
      "prefer-template": "error",

      // Require use of the second argument for parseInt()
      // https://eslint.org/docs/rules/radix
      radix: "error",

      // Disallow async functions which have no await expression
      // https://eslint.org/docs/latest/rules/require-await
      "require-await": "error",

      // Require a Symbol description
      // https://eslint.org/docs/rules/symbol-description
      "symbol-description": "error",

      // Requires to declare all vars on top of their containing scope
      // https://eslint.org/docs/rules/vars-on-top
      "vars-on-top": "error",

      // Require or disallow Yoda conditions
      // https://eslint.org/docs/rules/yoda
      yoda: "error",

      // Require or disallow the Unicode Byte Order Mark
      // https://eslint.org/docs/rules/unicode-bom
      "unicode-bom": "error",

      // -------------------------------------------------------------------------------------------
      //   IMPORTS
      // -------------------------------------------------------------------------------------------

      // Forbid modules without exports, or exports without matching import in another module.
      // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-unused-modules.md
      "import/no-unused-modules": "error",

      // Forbid empty named import blocks.
      // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-empty-named-blocks.md
      "import/no-empty-named-blocks": "error",

      // Prefer a default export if module exports a single name or multiple names.
      // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/prefer-default-export.md
      "import/prefer-default-export": "off",

      // Prefer named exports to be grouped together in a single export declaration
      // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/group-exports.md
      "import/group-exports": "off",

      // Ensure all exports appear after other statements.
      // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/exports-last.md
      "import/exports-last": "error",

      // Forbid a module from importing itself.
      // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-self-import.md
      "import/no-self-import": "error",

      // Forbid default exports. (NextJS routing expects default exports)
      // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-default-export.md
      "import/no-default-export": "off",

      // Forbid anonymous default exports
      // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-anonymous-default-export.md
      "import/no-anonymous-default-export": "error",

      // Enforces type import marker
      // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/consistent-type-specifier-style.md
      "import/consistent-type-specifier-style": ["error", "prefer-inline"],

      // Ensure all imports appear before other statements.
      // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/first.md
      "import/first": "error",

      // Ensure named imports correspond to a named export in the remote file.
      // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/named.md
      "import/named": "error",

      // Forbid the use of mutable exports with var or let.
      // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-mutable-exports.md
      "import/no-mutable-exports": "error",

      // ? Enforce a convention in module import order.
      // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md
      "import/order": [
        "error",
        {
          groups: ["type", "external", "builtin", "index", "sibling", "parent"],
          "newlines-between": "always",
          pathGroups: [
            {
              // Minimatch pattern used to match against specifiers
              pattern: "~/**",
              // The predefined group this PathGroup is defined in relation to
              group: "builtin",
              // How matching imports will be positioned relative to 'group'
              position: "after",
            },
          ],
        },
      ],

      // -------------------------------------------------------------------------------------------
      //   TYPESCRIPT
      // -------------------------------------------------------------------------------------------

      // Enforce type import separation
      // https://typescript-eslint.io/rules/consistent-type-imports/
      "@typescript-eslint/consistent-type-imports": [
        "error",
        { prefer: "type-imports", fixStyle: "inline-type-imports" },
      ],

      // -------------------------------------------------------------------------------------------
      //   REACT
      // -------------------------------------------------------------------------------------------

      // Disallow missing React when using JSX
      // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md
      "react/react-in-jsx-scope": "off",

      // Disallow file extensions that may contain JSX
      // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
      "react/jsx-filename-extension": ["error", { extensions: [".tsx"] }],

      // Enforce components to be safely updated with Fast Refresh.
      // https://github.com/ArnaudBarre/eslint-plugin-react-refresh
      "react-refresh/only-export-components": [
        "warn",
        {
          allowConstantExport: true,
          allowExportNames: ["viewport", "metadata", "generateMetadata"],
        },
      ],

      // Enforces consistent naming for boolean props
      // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/boolean-prop-naming.md
      "react/boolean-prop-naming": "error",

      // Prevent usage of button elements without an explicit type attribute
      // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/button-has-type.md
      "react/button-has-type": [
        "error",
        {
          button: true,
          submit: true,
          reset: false,
        },
      ],

      // Enforce using onChange or readonly attribute when checked is used
      // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/checked-requires-onchange-or-readonly.md
      "react/checked-requires-onchange-or-readonly": "error",

      // ? Enforce consistent usage of destructuring assignment of props, state, and context
      // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
      "react/destructuring-assignment": "error",

      // This rule aims to ensure that any prop in defaultProps has a non-required type definition.
      // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/default-props-match-prop-types.md
      "react/default-props-match-prop-types": "error",

      // ? Prevent missing displayName in a React component definition
      // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/display-name.md
      "react/display-name": "error",

      // Disallow using another component's propTypes
      // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/forbid-foreign-prop-types.md
      "react/forbid-foreign-prop-types": "error",

      // Disallow certain propTypes (class components)
      // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/forbid-prop-types.md
      "react/forbid-prop-types": [
        "error",
        {
          forbid: ["any", "array", "object"],
          checkContextTypes: true,
          checkChildContextTypes: true,
        },
      ],

      // ? (react 19 passes ref as a prop) Require all forwardRef components include a ref parameter
      // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/forward-ref-uses-ref.md
      "react/forward-ref-uses-ref": "error",

      // ? Enforce a specific function type for function components
      // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/function-component-definition.md
      "react/function-component-definition": [
        "error",
        {
          namedComponents: "function-declaration",
          unnamedComponents: "function-expression",
        },
      ],

      // Ensure destructuring and symmetric naming of useState hook value and setter variables
      // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/hook-use-state.md
      "react/hook-use-state": "error",

      // Enforce boolean attributes notation in JSX
      // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md
      "react/jsx-boolean-value": "error",

      // Enforce closing bracket location in JSX
      // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md
      "react/jsx-closing-bracket-location": "error",

      // Enforce closing tag location for multiline JSX
      // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-closing-tag-location.md
      "react/jsx-closing-tag-location": "error",

      // Enforce curly braces or disallow unnecessary curly braces in JSX props and/or children
      // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-curly-brace-presence.md
      "react/jsx-curly-brace-presence": "error",

      // Enforce consistent linebreaks in curly braces in JSX attributes and expressions
      // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-curly-newline.md
      "react/jsx-curly-newline": "error",

      // Enforce or disallow spaces inside of curly braces in JSX attributes and expressions
      // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md
      "react/jsx-curly-spacing": "error",

      // Enforce spacing around jsx equals signs
      // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-equals-spacing.md
      "react/jsx-equals-spacing": "error",

      // Require that the first prop in a JSX element be on a new line when the element is multiline
      // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-first-prop-new-line.md
      "react/jsx-first-prop-new-line": "error",

      // Enforce shorthand or standard form for React fragments
      // https://github.com/jsx-eslint/eslint-plugin-react/blob/bc976b837abeab1dffd90ac6168b746a83fc83cc/docs/rules/jsx-fragments.md
      "react/jsx-fragments": "error",

      // Enforce event handler naming conventions in JSX
      // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-handler-names.md
      "react/jsx-handler-names": "error",

      // Enforce JSX indentation
      // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-indent.md
      "react/jsx-indent": ["error", 2],

      // Enforce props indentation in JSX
      // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-indent-props.md
      "react/jsx-indent-props": ["error", 2],

      // Limit maximum of props on a single line in JSX
      // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-max-props-per-line.md
      "react/jsx-max-props-per-line": [
        "error",
        { maximum: 1, when: "multiline" },
      ],

      // Disallow comments from being inserted as text nodes
      // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-comment-textnodes.md
      "react/jsx-no-comment-textnodes": "error",

      // Disallows JSX context provider values from taking values that will cause needless rerenders
      // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-constructed-context-values.md
      "react/jsx-no-constructed-context-values": "error",

      // Disallow problematic leaked values from being rendered
      // https://github.com/jsx-eslint/eslint-plugin-react/blob/c42b624d0fb9ad647583a775ab9751091eec066f/docs/rules/jsx-no-leaked-render.md
      "react/jsx-no-leaked-render": "error",

      // Disallow usage of javascript: URLs
      // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-script-url.md
      "react/jsx-no-script-url": [
        "error",
        [
          {
            name: "Link",
            props: ["to"],
          },
        ],
      ],

      // Disallow unnecessary fragments
      // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-useless-fragment.md
      "react/jsx-no-useless-fragment": "error",

      // One JSX Element Per Line
      // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-one-expression-per-line.md
      "react/jsx-one-expression-per-line": ["off", { allow: "single-child" }],

      // Enforce PascalCase for user-defined JSX components
      // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md
      "react/jsx-pascal-case": "error",

      // Disallow multiple spaces between inline JSX props
      // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-multi-spaces.md
      "react/jsx-props-no-multi-spaces": "error",

      // Disallow JSX prop spreading the same identifier multiple times
      // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-spread-multi.md
      "react/jsx-props-no-spread-multi": "error",

      // ? Disallow JSX props spreading
      // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-spreading.md
      "react/jsx-props-no-spreading": [
        "off",
        {
          html: "enforce",
          custom: "enforce",
          explicitSpread: "ignore",
        },
      ],

      // Enforce whitespace in and around the JSX opening and closing brackets
      // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-tag-spacing.md
      "react/jsx-tag-spacing": [
        "error",
        {
          closingSlash: "never",
          beforeSelfClosing: "always",
          afterOpening: "never",
          beforeClosing: "never",
        },
      ],

      // Disallow missing parentheses around multiline JSX
      // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-wrap-multilines.md
      "react/jsx-wrap-multilines": [
        "off",
        {
          declaration: "parens-new-line",
          assignment: "parens-new-line",
          return: "parens-new-line",
          arrow: "parens-new-line",
          condition: "parens-new-line",
          logical: "parens-new-line",
          prop: "parens-new-line",
        },
      ],

      // Disallow when this.state is accessed within setState
      // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-access-state-in-setstate.md
      "react/no-access-state-in-setstate": "error",

      // Disallow usage of Array index in keys
      // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md
      "react/no-array-index-key": "error",

      // Lifecycle methods should be methods on the prototype, not class fields (class components)
      // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-arrow-function-lifecycle.md
      "react/no-arrow-function-lifecycle": "error",

      // Disallow usage of dangerous JSX properties
      // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-danger.md
      "react/no-danger": "error",

      // Disallow multiple component definition per file
      // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md
      "react/no-multi-comp": "off",

      // Enforce that namespaces are not used in React elements
      // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-namespace.md
      "react/no-namespace": "error",

      // Disallow this from being used in stateless functional components
      // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-this-in-sfc.md
      "react/no-this-in-sfc": "error",

      // Disallow common typos (class components)
      // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-typos.md
      "react/no-typos": "error",

      // Disallow creating unstable components inside components
      // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unstable-nested-components.md
      "react/no-unstable-nested-components": "error",

      // Disallow definitions of unused propTypes
      // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unused-prop-types.md
      "react/no-unused-prop-types": "error",

      // Disallow definitions of unused state
      // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unused-state.md
      "react/no-unused-state": "error",

      // Enforce ES5 or ES6 class for React Components
      // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md
      "react/prefer-es6-class": "error",

      // Prefer exact prop-type definitions
      // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prefer-exact-props.md
      "react/prefer-exact-props": "error",

      // Enforce a defaultProps definition for every prop that is not a required prop
      // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/require-default-props.md
      "react/require-default-props": "off",

      // Disallow extra closing tags for components without children
      // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md
      "react/self-closing-comp": "error",

      // Enforce component methods order (class component)
      // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/sort-comp.md
      "react/sort-comp": "error",

      // Enforces where React component static properties should be positioned (class components)
      // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/static-property-placement.md
      "react/static-property-placement": "error",

      // Enforce style prop value is an object
      // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/style-prop-object.md
      "react/style-prop-object": "error",

      // Disallow void DOM elements (e.g. <img />, <br />) from receiving children
      // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/void-dom-elements-no-children.md
      "react/void-dom-elements-no-children": "error",

      // React hooks
      // https://react.dev/reference/rules/rules-of-hooks
      "react-hooks/rules-of-hooks": "error",
      // Enforce list of dependencies validation
      "react-hooks/exhaustive-deps": "error",
    },
  }
);

export default eslintConfig;
