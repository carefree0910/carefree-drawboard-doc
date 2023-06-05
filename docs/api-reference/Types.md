---
id: Types
title: Types
---

There are some special types which are widely used in `carefree-drawboard` 🎨.

## `IStr`

```python title="cfdraw/parsers/noli.py"
class I18N(BaseModel):
    zh: str = Field(..., description="Chinese")
    en: str = Field(..., description="English")

IStr = Union[str, I18N]
```

`IStr` is used for i18n (internationalization). Whenever you see a property with type `IStr`, it means that this property is i18n-able, and you can pass either an `str` or an `I18N` object to it based on your needs.

## `IFieldDefinition`

```python title="cfdraw/schema/fields.py"
IFieldDefinition = Union[
    ITextField,
    IImageField,
    INumberField,
    ISelectField,
    I18NSelectField,
    ISelectLocalField,
    IBooleanField,
    IColorField,
    IListField,
    IObjectField,
]
```

`IFieldDefinition` is a union of all [Available Fields](/docs/api-reference/IPluginInfo#available-fields).
