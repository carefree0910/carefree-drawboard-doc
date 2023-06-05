---
id: Types
title: Types
---

There are some special types which are widely used in `carefree-drawboard` 🎨.

## `I18N`

```python title="cfdraw/parsers/noli.py"
class I18N(BaseModel):
    zh: str = Field(..., description="Chinese")
    en: str = Field(..., description="English")
```

## `IStr`

```python title="cfdraw/parsers/noli.py"
IStr = Union[str, I18N]
```

`IStr` is used for i18n (internationalization). Whenever you see a property with type `IStr`, it means that this property is i18n-able, and you can pass either an `str` or an [`I18N`](#i18n) object to it based on your needs.

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

## `IChakra`

:::tip
This class should (and will) eventually align with all the common `chakra` props.
:::

```python
class IChakra(BaseModel):
    w: Optional[str] = Field(None, description="Width")
    h: Optional[str] = Field(None, description="Height")
    p: Optional[str] = Field(None, description="Padding")
    bg: Optional[str] = Field(None, description="Background color")
    textAlign: Optional[TextAlign] = Field(None, description="Text align")
```
