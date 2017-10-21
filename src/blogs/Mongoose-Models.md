Mongoose-Models

Models are fancy constructors compiled from our Schema definitions. Instances of these models represent documents which can be saved and retrieved from our database. All document creation and retrieval from the database is handled by these models.

##Compiling your first model

```javascript
var schema = new mongoose.Schema({ name: 'string', size: 'string'  });
var Tank = mongoose.model('Tank', schema);
```
The first argument is the singular name of the collection your model is for. **Mongoose automatically looks for the plural version of your model name.** Thus, for the example above, the model Tank is for the **tanks** collection in the database. The `.model()` function makes a copy of `schema`. Make sure that you've added everythinng you want to `schema` before calling `.model()`!

##Constructing documents

Documents are instances of our model. Creating them and saving to the database is easy.

```javascript
var Tank = mongoose.model('Tank', yourSchema);

var small = new Tank({ size: 'small' });

```