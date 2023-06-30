# Lendica iBranch Triggers

FundNow and PayLater button web component to open invoice payment term offers in iBranch.

[![npm version](https://img.shields.io/badge/npm-v0.0.1-8c8ca1)](https://www.npmjs.com/package/@lendica/ibranchtrigger)

## Installation

#### Option 1. Install from npm package
```sh
npm i @lendica/ibranchtrigger
```
#### Option 2. Include the CDN script
```html
<script src="https://static.golendica.com/v2/ibranch-trigger.js" defer></script>
```


## Usage

Use the component as native HTML tags:

```html
<!-- Pass bill id and invoice id as strings -->

<paylater-trigger bill-id="partner_bill_uuid"></paylater-trigger>
<fundnow-trigger invoice-id="partner_invoice_uuid"></fundnow-trigger>
```

#### Overriding texts
```html
<paylater-trigger bill-id="partner_bill_uuid">
	<span slot="button-text">Override button text</span>
	<span slot="info">Override info tooltip content</span>
</paylater-trigger>
```

#### Overriding button onclick handler
```html
<!-- Default onclick checks if lendica is ready, takes the bill or invoice id provided and opens 
	the offer terms in iBranch. Override to implement additional logic.
	Refer to iBranch API for all available methods. -->

<paylater-trigger onclick="console.log('override onclick')"></paylater-trigger>
```

#### Overriding primary color
```html
<!-- Pass regular CSS color codes to override the primary color for the button and info icon fill
Currently supporting filled button style only -->

<paylater-trigger color="#58A10E"></paylater-trigger>
<fundnow-trigger color="green"></fundnow-trigger>
```

#### Advanced styling
Overriding individual button styles
```html
<!-- Pass the regular css styles to data-style attribute. Styles applied to the button only -->

<paylater-trigger data-style="border-radius: 0;"></paylater-trigger>
```