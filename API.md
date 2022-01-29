# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NodeScriptDeployment <a name="NodeScriptDeployment" id="@wheatstalk/cdk8s-node-script.NodeScriptDeployment"></a>

Creates a job using node script code.

#### Initializers <a name="Initializers" id="@wheatstalk/cdk8s-node-script.NodeScriptDeployment.Initializer"></a>

```typescript
import { NodeScriptDeployment } from '@wheatstalk/cdk8s-node-script'

new NodeScriptDeployment(scope: Construct, id: string, props: NodeScriptDeploymentProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@wheatstalk/cdk8s-node-script.NodeScriptDeployment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@wheatstalk/cdk8s-node-script.NodeScriptDeployment.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@wheatstalk/cdk8s-node-script.NodeScriptDeployment.Initializer.parameter.props">props</a></code> | <code><a href="#@wheatstalk/cdk8s-node-script.NodeScriptDeploymentProps">NodeScriptDeploymentProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@wheatstalk/cdk8s-node-script.NodeScriptDeployment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@wheatstalk/cdk8s-node-script.NodeScriptDeployment.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@wheatstalk/cdk8s-node-script.NodeScriptDeployment.Initializer.parameter.props"></a>

- *Type:* <a href="#@wheatstalk/cdk8s-node-script.NodeScriptDeploymentProps">NodeScriptDeploymentProps</a>

---





### NodeScriptJob <a name="NodeScriptJob" id="@wheatstalk/cdk8s-node-script.NodeScriptJob"></a>

Creates a job using node script code.

#### Initializers <a name="Initializers" id="@wheatstalk/cdk8s-node-script.NodeScriptJob.Initializer"></a>

```typescript
import { NodeScriptJob } from '@wheatstalk/cdk8s-node-script'

new NodeScriptJob(scope: Construct, id: string, props: NodeScriptJobProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@wheatstalk/cdk8s-node-script.NodeScriptJob.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@wheatstalk/cdk8s-node-script.NodeScriptJob.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@wheatstalk/cdk8s-node-script.NodeScriptJob.Initializer.parameter.props">props</a></code> | <code><a href="#@wheatstalk/cdk8s-node-script.NodeScriptJobProps">NodeScriptJobProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@wheatstalk/cdk8s-node-script.NodeScriptJob.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@wheatstalk/cdk8s-node-script.NodeScriptJob.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@wheatstalk/cdk8s-node-script.NodeScriptJob.Initializer.parameter.props"></a>

- *Type:* <a href="#@wheatstalk/cdk8s-node-script.NodeScriptJobProps">NodeScriptJobProps</a>

---





## Structs <a name="Structs" id="Structs"></a>

### BundlerOptions <a name="BundlerOptions" id="@wheatstalk/cdk8s-node-script.BundlerOptions"></a>

Bundling options.

#### Initializer <a name="Initializer" id="@wheatstalk/cdk8s-node-script.BundlerOptions.Initializer"></a>

```typescript
import { BundlerOptions } from '@wheatstalk/cdk8s-node-script'

const bundlerOptions: BundlerOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@wheatstalk/cdk8s-node-script.BundlerOptions.property.entrypoint">entrypoint</a></code> | <code>string</code> | Entrypoint file. |
| <code><a href="#@wheatstalk/cdk8s-node-script.BundlerOptions.property.minify">minify</a></code> | <code>boolean</code> | Minify the code. |
| <code><a href="#@wheatstalk/cdk8s-node-script.BundlerOptions.property.tsconfigPath">tsconfigPath</a></code> | <code>string</code> | Path to the tsconfig file. |

---

##### `entrypoint`<sup>Required</sup> <a name="entrypoint" id="@wheatstalk/cdk8s-node-script.BundlerOptions.property.entrypoint"></a>

```typescript
public readonly entrypoint: string;
```

- *Type:* string

Entrypoint file.

---

##### `minify`<sup>Optional</sup> <a name="minify" id="@wheatstalk/cdk8s-node-script.BundlerOptions.property.minify"></a>

```typescript
public readonly minify: boolean;
```

- *Type:* boolean
- *Default:* true

Minify the code.

---

##### `tsconfigPath`<sup>Optional</sup> <a name="tsconfigPath" id="@wheatstalk/cdk8s-node-script.BundlerOptions.property.tsconfigPath"></a>

```typescript
public readonly tsconfigPath: string;
```

- *Type:* string
- *Default:* none provided

Path to the tsconfig file.

---

### InlineCodeProps <a name="InlineCodeProps" id="@wheatstalk/cdk8s-node-script.InlineCodeProps"></a>

#### Initializer <a name="Initializer" id="@wheatstalk/cdk8s-node-script.InlineCodeProps.Initializer"></a>

```typescript
import { InlineCodeProps } from '@wheatstalk/cdk8s-node-script'

const inlineCodeProps: InlineCodeProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@wheatstalk/cdk8s-node-script.InlineCodeProps.property.code">code</a></code> | <code>string</code> | *No description.* |

---

##### `code`<sup>Required</sup> <a name="code" id="@wheatstalk/cdk8s-node-script.InlineCodeProps.property.code"></a>

```typescript
public readonly code: string;
```

- *Type:* string

---

### NodeScriptDeploymentProps <a name="NodeScriptDeploymentProps" id="@wheatstalk/cdk8s-node-script.NodeScriptDeploymentProps"></a>

#### Initializer <a name="Initializer" id="@wheatstalk/cdk8s-node-script.NodeScriptDeploymentProps.Initializer"></a>

```typescript
import { NodeScriptDeploymentProps } from '@wheatstalk/cdk8s-node-script'

const nodeScriptDeploymentProps: NodeScriptDeploymentProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@wheatstalk/cdk8s-node-script.NodeScriptDeploymentProps.property.code">code</a></code> | <code><a href="#@wheatstalk/cdk8s-node-script.Code">Code</a></code> | The code to run. |

---

##### `code`<sup>Required</sup> <a name="code" id="@wheatstalk/cdk8s-node-script.NodeScriptDeploymentProps.property.code"></a>

```typescript
public readonly code: Code;
```

- *Type:* <a href="#@wheatstalk/cdk8s-node-script.Code">Code</a>

The code to run.

---

### NodeScriptJobProps <a name="NodeScriptJobProps" id="@wheatstalk/cdk8s-node-script.NodeScriptJobProps"></a>

#### Initializer <a name="Initializer" id="@wheatstalk/cdk8s-node-script.NodeScriptJobProps.Initializer"></a>

```typescript
import { NodeScriptJobProps } from '@wheatstalk/cdk8s-node-script'

const nodeScriptJobProps: NodeScriptJobProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@wheatstalk/cdk8s-node-script.NodeScriptJobProps.property.code">code</a></code> | <code><a href="#@wheatstalk/cdk8s-node-script.Code">Code</a></code> | The code to run. |

---

##### `code`<sup>Required</sup> <a name="code" id="@wheatstalk/cdk8s-node-script.NodeScriptJobProps.property.code"></a>

```typescript
public readonly code: Code;
```

- *Type:* <a href="#@wheatstalk/cdk8s-node-script.Code">Code</a>

The code to run.

---

## Classes <a name="Classes" id="Classes"></a>

### Code <a name="Code" id="@wheatstalk/cdk8s-node-script.Code"></a>

Provides code for node scripts.

#### Initializers <a name="Initializers" id="@wheatstalk/cdk8s-node-script.Code.Initializer"></a>

```typescript
import { Code } from '@wheatstalk/cdk8s-node-script'

new Code()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@wheatstalk/cdk8s-node-script.Code.fromBundler">fromBundler</a></code> | Creates code by bundling a user-provided script. |
| <code><a href="#@wheatstalk/cdk8s-node-script.Code.fromInline">fromInline</a></code> | Creates code from an inline script. |

---

##### `fromBundler` <a name="fromBundler" id="@wheatstalk/cdk8s-node-script.Code.fromBundler"></a>

```typescript
import { Code } from '@wheatstalk/cdk8s-node-script'

Code.fromBundler(options: BundlerOptions)
```

###### `options`<sup>Required</sup> <a name="options" id="@wheatstalk/cdk8s-node-script.Code.fromBundler.parameter.options"></a>

- *Type:* <a href="#@wheatstalk/cdk8s-node-script.BundlerOptions">BundlerOptions</a>

---

##### `fromInline` <a name="fromInline" id="@wheatstalk/cdk8s-node-script.Code.fromInline"></a>

```typescript
import { Code } from '@wheatstalk/cdk8s-node-script'

Code.fromInline(code: string)
```

###### `code`<sup>Required</sup> <a name="code" id="@wheatstalk/cdk8s-node-script.Code.fromInline.parameter.code"></a>

- *Type:* string

---



### Hello <a name="Hello" id="@wheatstalk/cdk8s-node-script.Hello"></a>

#### Initializers <a name="Initializers" id="@wheatstalk/cdk8s-node-script.Hello.Initializer"></a>

```typescript
import { Hello } from '@wheatstalk/cdk8s-node-script'

new Hello()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@wheatstalk/cdk8s-node-script.Hello.sayHello">sayHello</a></code> | *No description.* |

---

##### `sayHello` <a name="sayHello" id="@wheatstalk/cdk8s-node-script.Hello.sayHello"></a>

```typescript
public sayHello()
```





