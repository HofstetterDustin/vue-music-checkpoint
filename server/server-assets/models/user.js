import { debug } from 'util';

var mongoose = require('mongoose')
var Schema = mongoose.Schema

var ObjectId = mongoose.SchemaTypes.ObjectId
var schemaName = 'User'

var schema = new Schema({})         //todo://


module.exports = mongoose.model(schemaName,schema)
