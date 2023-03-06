# CSS Guidelines

## Overriding component styles
1. If you have a simple enough component and it makes sense to have color/size props, you should add them (use your discretion)
2. Otherwise, you can make className a prop so user can just override that component directly (this is still a wonky solution since there could be multiple sub or nested components)
2. If you are working on one of the 3 UIs and you can't override the component CSS/you want to have a more specific prop to make your life easier, tell the person who made the component to make the changes

## Class naming scheme

- Name classes according to the following structure:
  `.type--variant:state`
  - type
    - The specific component in question.
    - ie: button/alert/card/etc
  - variant
    - A variation of the component type
    - ie: primary/secondary/disabled/etc
  - state (pseudo class selectors)
    - hover/focus/disabled/invalid/etc
- Use the full component name for the type. (Don't abbreviate)
  - This is to keep things consistent with the design document.
  - ex: 
    - .btn-primary (bad)
    - vs
    - .button-primary (good)
- Use single dashes to separate words.
  - ex: 
    - .searchField--contained (bad)
    - vs
    - .search-field--contained (good)

- Use double dashes to separate the type from the variant.
  - ex: 
    - .button-primary (bad)
    - vs
    - .button--primary (good)
- Use CSS pseudo class selectors when possible.
  - ex: 
    - .button--primary--hover (bad)
    - vs
    - .button--primary:hover (good)
- Use CSS custom properties (variables) when possible.
  - Colors should use the color variables instead of hex codes.

## Example

A primary button input.

The type may have a base style:

```css
.button {
  ...
}
```

The component may have a styled variant which modifies the base style:

```css
.button--primary {
  ...
}
```

The component variant may also have a styled state:
  
```css
.button--primary:hover {
  ...
}

.button--primary:focus {
  ...
}

.button--primary:disabled {
  ...
}
```
