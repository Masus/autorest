import * as codemodel from '#common/code-model/code-model';
import * as command from '#common/code-model/command-operation';
import * as components from '#common/code-model/components';
import * as T from '#common/code-model/exports'
import * as http from '#common/code-model/http-operation';
import * as schema from '#common/code-model/schema';
import { EnhancedTypeDeclaration } from '#csharp/schema/extended-type-declaration';
import { ModelClass } from '#csharp/lowlevel-generator/model/model-class';
import { ModelInterface } from '#csharp/lowlevel-generator/model/interface';

// C# specific details for components

export interface SchemaDetails extends schema.SchemaDetails {
  typeDeclaration?: EnhancedTypeDeclaration;
  classImplementation?: ModelClass;
  interfaceImplementation?: ModelInterface;
  interfaceName?: string;
}

export interface PropertyDetails extends schema.PropertyDetails {

}

export interface ParameterDetails extends http.HttpParameterDetails {

}

export interface ClientDetails extends codemodel.ClientDetails {

}

export interface HttpOperationDetails extends http.HttpOperationDetails {

}

export interface CommandOperationDetails extends command.CommandOperationDetails {

}

export interface LanguageDetails<T extends components.ImplementationDetails> extends components.LanguageDetails<T> {
  csharp: T;
}

export type Schema = T.SchemaT<LanguageDetails<SchemaDetails>, LanguageDetails<PropertyDetails>>;
export type Property = T.PropertyT<LanguageDetails<SchemaDetails>, LanguageDetails<PropertyDetails>>;
export type HttpOperation = T.HttpOperationT<LanguageDetails<SchemaDetails>, LanguageDetails<PropertyDetails>, LanguageDetails<ParameterDetails>, LanguageDetails<HttpOperationDetails>>;
export type HttpOperationParameter = T.HttpOperationParameterT<LanguageDetails<SchemaDetails>, LanguageDetails<PropertyDetails>, LanguageDetails<ParameterDetails>>;
export type HttpComponents = T.HttpComponentsT<LanguageDetails<SchemaDetails>, LanguageDetails<PropertyDetails>, LanguageDetails<ParameterDetails>, LanguageDetails<HttpOperationDetails>>;
export type Model = T.ModelT<LanguageDetails<SchemaDetails>, LanguageDetails<PropertyDetails>, LanguageDetails<ParameterDetails>, LanguageDetails<HttpOperationDetails>, LanguageDetails<ClientDetails>>;
export type CommandOperation = T.CommandOperationT<LanguageDetails<SchemaDetails>, LanguageDetails<PropertyDetails>, LanguageDetails<ParameterDetails>, LanguageDetails<HttpOperationDetails>, LanguageDetails<CommandOperationDetails>>;