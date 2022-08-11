![snhora](https://user-images.githubusercontent.com/104692440/183762133-540ba2fc-fcdb-4c76-8c23-9c395e4341e3.png)


# NGX-DEVA-TOOLTIP

<a href=“http://exemplo.com/“>Instagram/a>

https://user-images.githubusercontent.com/104692440/184020667-5fe1fc81-df56-4ef7-854d-bbeacc50198b.mp4

TOOLTIP
![npm](https://img.shields.io/npm/v/ngx-deva-tooltip)
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
First import the module from the lib in the module you want to use it 
```Jsx
  imports: [
    BrowserModule,
    NgxDevaTooltipModule
  ],
```

```jsx
<ngx-deva-tooltip
      [top]="true"
      description="Top direction"
      bgColorTooltip="#ffa500"
      colorTooltip="#800080"
      [tabIndex]="0"
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

