import Ember from 'ember';

export default class SchemaLoader {
  static load(schema) {
    let attributes = {};
    return Ember.Mixin.create(attributes);
  }
}
