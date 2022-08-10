![snhora](https://user-images.githubusercontent.com/104692440/183762133-540ba2fc-fcdb-4c76-8c23-9c395e4341e3.png)

# NGX-DEVA-TOOLTIP
![npm](https://img.shields.io/npm/v/react-collapse-details)
![NPM](https://img.shields.io/npm/l/react-collapse-details)

<div style="display: inline_block">
    <img align="center" alt="js" src="https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white" /> 
</div>

## How to install

Below are ways to install the library using npm:

```
npm i ngx-deva-tooltip

```


## How to use  properties component

```jsx
 <ngx-deva-tooltip
    [top]="true"
    description="I am Senhora Deva"
    bgColorTooltip="orange"
    colorTolltip="purple"
  >
    <input type="button" value="Hover Me" />
  </ngx-deva-tooltip>
```

## Properties


| Props               | type     |  Description                                   |
| ------------------- | -------  | ---------------------------------              |
| top                 | boolean  |  Top direction                                 |
| left                | boolean  |  Left direction                                |
| bottom              | boolean  |  Right direction                               |
| right               | boolean  |  Background color of summary                   |
| description         | string   |  Element description                           |
| bgColorTooltip      | string   |  Background color of tooltip                   |
| colorTooltip        | string   |  Color of tooltip                              |
| tabIndex            | number   |  Element that can receive input focus          |

