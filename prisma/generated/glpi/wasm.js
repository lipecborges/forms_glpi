
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.4.0
 * Query Engine version: a9055b89e58b4b5bfb59600785423b1db3d0e75d
 */
Prisma.prismaVersion = {
  client: "6.4.0",
  engine: "a9055b89e58b4b5bfb59600785423b1db3d0e75d"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.Glpi_agentsScalarFieldEnum = {
  id: 'id',
  deviceid: 'deviceid',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive',
  name: 'name',
  agenttypes_id: 'agenttypes_id',
  last_contact: 'last_contact',
  version: 'version',
  locked: 'locked',
  itemtype: 'itemtype',
  items_id: 'items_id',
  useragent: 'useragent',
  tag: 'tag',
  port: 'port',
  remote_addr: 'remote_addr',
  threads_networkdiscovery: 'threads_networkdiscovery',
  threads_networkinventory: 'threads_networkinventory',
  timeout_networkdiscovery: 'timeout_networkdiscovery',
  timeout_networkinventory: 'timeout_networkinventory',
  use_module_wake_on_lan: 'use_module_wake_on_lan',
  use_module_computer_inventory: 'use_module_computer_inventory',
  use_module_esx_remote_inventory: 'use_module_esx_remote_inventory',
  use_module_remote_inventory: 'use_module_remote_inventory',
  use_module_network_inventory: 'use_module_network_inventory',
  use_module_network_discovery: 'use_module_network_discovery',
  use_module_package_deployment: 'use_module_package_deployment',
  use_module_collect_data: 'use_module_collect_data'
};

exports.Prisma.Glpi_agenttypesScalarFieldEnum = {
  id: 'id',
  name: 'name'
};

exports.Prisma.Glpi_alertsScalarFieldEnum = {
  id: 'id',
  itemtype: 'itemtype',
  items_id: 'items_id',
  type: 'type',
  date: 'date'
};

exports.Prisma.Glpi_apiclientsScalarFieldEnum = {
  id: 'id',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive',
  name: 'name',
  date_mod: 'date_mod',
  date_creation: 'date_creation',
  is_active: 'is_active',
  ipv4_range_start: 'ipv4_range_start',
  ipv4_range_end: 'ipv4_range_end',
  ipv6: 'ipv6',
  app_token: 'app_token',
  app_token_date: 'app_token_date',
  dolog_method: 'dolog_method',
  comment: 'comment'
};

exports.Prisma.Glpi_applianceenvironmentsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  comment: 'comment'
};

exports.Prisma.Glpi_appliancesScalarFieldEnum = {
  id: 'id',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive',
  name: 'name',
  is_deleted: 'is_deleted',
  appliancetypes_id: 'appliancetypes_id',
  comment: 'comment',
  locations_id: 'locations_id',
  manufacturers_id: 'manufacturers_id',
  applianceenvironments_id: 'applianceenvironments_id',
  users_id: 'users_id',
  users_id_tech: 'users_id_tech',
  groups_id: 'groups_id',
  groups_id_tech: 'groups_id_tech',
  date_mod: 'date_mod',
  date_creation: 'date_creation',
  states_id: 'states_id',
  externalidentifier: 'externalidentifier',
  serial: 'serial',
  otherserial: 'otherserial',
  contact: 'contact',
  contact_num: 'contact_num',
  is_helpdesk_visible: 'is_helpdesk_visible',
  pictures: 'pictures'
};

exports.Prisma.Glpi_appliances_itemsScalarFieldEnum = {
  id: 'id',
  appliances_id: 'appliances_id',
  items_id: 'items_id',
  itemtype: 'itemtype'
};

exports.Prisma.Glpi_appliances_items_relationsScalarFieldEnum = {
  id: 'id',
  appliances_items_id: 'appliances_items_id',
  itemtype: 'itemtype',
  items_id: 'items_id'
};

exports.Prisma.Glpi_appliancetypesScalarFieldEnum = {
  id: 'id',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive',
  name: 'name',
  comment: 'comment',
  externalidentifier: 'externalidentifier'
};

exports.Prisma.Glpi_authldapreplicatesScalarFieldEnum = {
  id: 'id',
  authldaps_id: 'authldaps_id',
  host: 'host',
  port: 'port',
  name: 'name',
  timeout: 'timeout'
};

exports.Prisma.Glpi_authldapsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  host: 'host',
  basedn: 'basedn',
  rootdn: 'rootdn',
  port: 'port',
  condition: 'condition',
  login_field: 'login_field',
  sync_field: 'sync_field',
  use_tls: 'use_tls',
  group_field: 'group_field',
  group_condition: 'group_condition',
  group_search_type: 'group_search_type',
  group_member_field: 'group_member_field',
  email1_field: 'email1_field',
  realname_field: 'realname_field',
  firstname_field: 'firstname_field',
  phone_field: 'phone_field',
  phone2_field: 'phone2_field',
  mobile_field: 'mobile_field',
  comment_field: 'comment_field',
  use_dn: 'use_dn',
  time_offset: 'time_offset',
  deref_option: 'deref_option',
  title_field: 'title_field',
  category_field: 'category_field',
  language_field: 'language_field',
  entity_field: 'entity_field',
  entity_condition: 'entity_condition',
  date_mod: 'date_mod',
  comment: 'comment',
  is_default: 'is_default',
  is_active: 'is_active',
  rootdn_passwd: 'rootdn_passwd',
  registration_number_field: 'registration_number_field',
  email2_field: 'email2_field',
  email3_field: 'email3_field',
  email4_field: 'email4_field',
  location_field: 'location_field',
  responsible_field: 'responsible_field',
  pagesize: 'pagesize',
  ldap_maxlimit: 'ldap_maxlimit',
  can_support_pagesize: 'can_support_pagesize',
  picture_field: 'picture_field',
  date_creation: 'date_creation',
  inventory_domain: 'inventory_domain',
  tls_certfile: 'tls_certfile',
  tls_keyfile: 'tls_keyfile',
  use_bind: 'use_bind',
  timeout: 'timeout'
};

exports.Prisma.Glpi_authmailsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  connect_string: 'connect_string',
  host: 'host',
  date_mod: 'date_mod',
  date_creation: 'date_creation',
  comment: 'comment',
  is_active: 'is_active'
};

exports.Prisma.Glpi_autoupdatesystemsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  comment: 'comment'
};

exports.Prisma.Glpi_blacklistedmailcontentsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  content: 'content',
  comment: 'comment',
  date_mod: 'date_mod',
  date_creation: 'date_creation'
};

exports.Prisma.Glpi_blacklistsScalarFieldEnum = {
  id: 'id',
  type: 'type',
  name: 'name',
  value: 'value',
  comment: 'comment',
  date_mod: 'date_mod',
  date_creation: 'date_creation'
};

exports.Prisma.Glpi_budgetsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive',
  comment: 'comment',
  is_deleted: 'is_deleted',
  begin_date: 'begin_date',
  end_date: 'end_date',
  value: 'value',
  is_template: 'is_template',
  template_name: 'template_name',
  date_mod: 'date_mod',
  date_creation: 'date_creation',
  locations_id: 'locations_id',
  budgettypes_id: 'budgettypes_id'
};

exports.Prisma.Glpi_budgettypesScalarFieldEnum = {
  id: 'id',
  name: 'name',
  comment: 'comment',
  date_mod: 'date_mod',
  date_creation: 'date_creation'
};

exports.Prisma.Glpi_businesscriticitiesScalarFieldEnum = {
  id: 'id',
  name: 'name',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive',
  comment: 'comment',
  date_mod: 'date_mod',
  date_creation: 'date_creation',
  businesscriticities_id: 'businesscriticities_id',
  completename: 'completename',
  level: 'level',
  ancestors_cache: 'ancestors_cache',
  sons_cache: 'sons_cache'
};

exports.Prisma.Glpi_cablesScalarFieldEnum = {
  id: 'id',
  name: 'name',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive',
  itemtype_endpoint_a: 'itemtype_endpoint_a',
  itemtype_endpoint_b: 'itemtype_endpoint_b',
  items_id_endpoint_a: 'items_id_endpoint_a',
  items_id_endpoint_b: 'items_id_endpoint_b',
  socketmodels_id_endpoint_a: 'socketmodels_id_endpoint_a',
  socketmodels_id_endpoint_b: 'socketmodels_id_endpoint_b',
  sockets_id_endpoint_a: 'sockets_id_endpoint_a',
  sockets_id_endpoint_b: 'sockets_id_endpoint_b',
  cablestrands_id: 'cablestrands_id',
  color: 'color',
  otherserial: 'otherserial',
  states_id: 'states_id',
  users_id_tech: 'users_id_tech',
  cabletypes_id: 'cabletypes_id',
  comment: 'comment',
  date_mod: 'date_mod',
  date_creation: 'date_creation',
  is_deleted: 'is_deleted'
};

exports.Prisma.Glpi_cablestrandsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  comment: 'comment',
  date_mod: 'date_mod',
  date_creation: 'date_creation'
};

exports.Prisma.Glpi_cabletypesScalarFieldEnum = {
  id: 'id',
  name: 'name',
  comment: 'comment',
  date_mod: 'date_mod',
  date_creation: 'date_creation'
};

exports.Prisma.Glpi_calendarsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive',
  comment: 'comment',
  date_mod: 'date_mod',
  cache_duration: 'cache_duration',
  date_creation: 'date_creation'
};

exports.Prisma.Glpi_calendars_holidaysScalarFieldEnum = {
  id: 'id',
  calendars_id: 'calendars_id',
  holidays_id: 'holidays_id'
};

exports.Prisma.Glpi_calendarsegmentsScalarFieldEnum = {
  id: 'id',
  calendars_id: 'calendars_id',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive',
  day: 'day',
  begin: 'begin',
  end: 'end'
};

exports.Prisma.Glpi_cartridgeitemsScalarFieldEnum = {
  id: 'id',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive',
  name: 'name',
  ref: 'ref',
  locations_id: 'locations_id',
  cartridgeitemtypes_id: 'cartridgeitemtypes_id',
  manufacturers_id: 'manufacturers_id',
  users_id_tech: 'users_id_tech',
  groups_id_tech: 'groups_id_tech',
  is_deleted: 'is_deleted',
  comment: 'comment',
  alarm_threshold: 'alarm_threshold',
  stock_target: 'stock_target',
  date_mod: 'date_mod',
  date_creation: 'date_creation',
  pictures: 'pictures'
};

exports.Prisma.Glpi_cartridgeitems_printermodelsScalarFieldEnum = {
  id: 'id',
  cartridgeitems_id: 'cartridgeitems_id',
  printermodels_id: 'printermodels_id'
};

exports.Prisma.Glpi_cartridgeitemtypesScalarFieldEnum = {
  id: 'id',
  name: 'name',
  comment: 'comment',
  date_mod: 'date_mod',
  date_creation: 'date_creation'
};

exports.Prisma.Glpi_cartridgesScalarFieldEnum = {
  id: 'id',
  entities_id: 'entities_id',
  cartridgeitems_id: 'cartridgeitems_id',
  printers_id: 'printers_id',
  date_in: 'date_in',
  date_use: 'date_use',
  date_out: 'date_out',
  pages: 'pages',
  date_mod: 'date_mod',
  date_creation: 'date_creation'
};

exports.Prisma.Glpi_certificatesScalarFieldEnum = {
  id: 'id',
  name: 'name',
  serial: 'serial',
  otherserial: 'otherserial',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive',
  comment: 'comment',
  is_deleted: 'is_deleted',
  is_template: 'is_template',
  template_name: 'template_name',
  certificatetypes_id: 'certificatetypes_id',
  dns_name: 'dns_name',
  dns_suffix: 'dns_suffix',
  users_id_tech: 'users_id_tech',
  groups_id_tech: 'groups_id_tech',
  locations_id: 'locations_id',
  manufacturers_id: 'manufacturers_id',
  contact: 'contact',
  contact_num: 'contact_num',
  users_id: 'users_id',
  groups_id: 'groups_id',
  is_autosign: 'is_autosign',
  date_expiration: 'date_expiration',
  states_id: 'states_id',
  command: 'command',
  certificate_request: 'certificate_request',
  certificate_item: 'certificate_item',
  date_creation: 'date_creation',
  date_mod: 'date_mod'
};

exports.Prisma.Glpi_certificates_itemsScalarFieldEnum = {
  id: 'id',
  certificates_id: 'certificates_id',
  items_id: 'items_id',
  itemtype: 'itemtype',
  date_creation: 'date_creation',
  date_mod: 'date_mod'
};

exports.Prisma.Glpi_certificatetypesScalarFieldEnum = {
  id: 'id',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive',
  name: 'name',
  comment: 'comment',
  date_creation: 'date_creation',
  date_mod: 'date_mod'
};

exports.Prisma.Glpi_changecostsScalarFieldEnum = {
  id: 'id',
  changes_id: 'changes_id',
  name: 'name',
  comment: 'comment',
  begin_date: 'begin_date',
  end_date: 'end_date',
  actiontime: 'actiontime',
  cost_time: 'cost_time',
  cost_fixed: 'cost_fixed',
  cost_material: 'cost_material',
  budgets_id: 'budgets_id',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive'
};

exports.Prisma.Glpi_changesScalarFieldEnum = {
  id: 'id',
  name: 'name',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive',
  is_deleted: 'is_deleted',
  status: 'status',
  content: 'content',
  date_mod: 'date_mod',
  date: 'date',
  solvedate: 'solvedate',
  closedate: 'closedate',
  time_to_resolve: 'time_to_resolve',
  users_id_recipient: 'users_id_recipient',
  users_id_lastupdater: 'users_id_lastupdater',
  urgency: 'urgency',
  impact: 'impact',
  priority: 'priority',
  itilcategories_id: 'itilcategories_id',
  impactcontent: 'impactcontent',
  controlistcontent: 'controlistcontent',
  rolloutplancontent: 'rolloutplancontent',
  backoutplancontent: 'backoutplancontent',
  checklistcontent: 'checklistcontent',
  global_validation: 'global_validation',
  validation_percent: 'validation_percent',
  actiontime: 'actiontime',
  begin_waiting_date: 'begin_waiting_date',
  waiting_duration: 'waiting_duration',
  close_delay_stat: 'close_delay_stat',
  solve_delay_stat: 'solve_delay_stat',
  date_creation: 'date_creation',
  locations_id: 'locations_id'
};

exports.Prisma.Glpi_changes_groupsScalarFieldEnum = {
  id: 'id',
  changes_id: 'changes_id',
  groups_id: 'groups_id',
  type: 'type'
};

exports.Prisma.Glpi_changes_itemsScalarFieldEnum = {
  id: 'id',
  changes_id: 'changes_id',
  itemtype: 'itemtype',
  items_id: 'items_id'
};

exports.Prisma.Glpi_changes_problemsScalarFieldEnum = {
  id: 'id',
  changes_id: 'changes_id',
  problems_id: 'problems_id'
};

exports.Prisma.Glpi_changes_suppliersScalarFieldEnum = {
  id: 'id',
  changes_id: 'changes_id',
  suppliers_id: 'suppliers_id',
  type: 'type',
  use_notification: 'use_notification',
  alternative_email: 'alternative_email'
};

exports.Prisma.Glpi_changes_ticketsScalarFieldEnum = {
  id: 'id',
  changes_id: 'changes_id',
  tickets_id: 'tickets_id'
};

exports.Prisma.Glpi_changes_usersScalarFieldEnum = {
  id: 'id',
  changes_id: 'changes_id',
  users_id: 'users_id',
  type: 'type',
  use_notification: 'use_notification',
  alternative_email: 'alternative_email'
};

exports.Prisma.Glpi_changetasksScalarFieldEnum = {
  id: 'id',
  uuid: 'uuid',
  changes_id: 'changes_id',
  taskcategories_id: 'taskcategories_id',
  state: 'state',
  date: 'date',
  begin: 'begin',
  end: 'end',
  users_id: 'users_id',
  users_id_editor: 'users_id_editor',
  users_id_tech: 'users_id_tech',
  groups_id_tech: 'groups_id_tech',
  content: 'content',
  actiontime: 'actiontime',
  date_mod: 'date_mod',
  date_creation: 'date_creation',
  tasktemplates_id: 'tasktemplates_id',
  timeline_position: 'timeline_position',
  is_private: 'is_private'
};

exports.Prisma.Glpi_changetemplatehiddenfieldsScalarFieldEnum = {
  id: 'id',
  changetemplates_id: 'changetemplates_id',
  num: 'num'
};

exports.Prisma.Glpi_changetemplatemandatoryfieldsScalarFieldEnum = {
  id: 'id',
  changetemplates_id: 'changetemplates_id',
  num: 'num'
};

exports.Prisma.Glpi_changetemplatepredefinedfieldsScalarFieldEnum = {
  id: 'id',
  changetemplates_id: 'changetemplates_id',
  num: 'num',
  value: 'value'
};

exports.Prisma.Glpi_changetemplatesScalarFieldEnum = {
  id: 'id',
  name: 'name',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive',
  comment: 'comment'
};

exports.Prisma.Glpi_changevalidationsScalarFieldEnum = {
  id: 'id',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive',
  users_id: 'users_id',
  changes_id: 'changes_id',
  users_id_validate: 'users_id_validate',
  comment_submission: 'comment_submission',
  comment_validation: 'comment_validation',
  status: 'status',
  submission_date: 'submission_date',
  validation_date: 'validation_date',
  timeline_position: 'timeline_position'
};

exports.Prisma.Glpi_clustersScalarFieldEnum = {
  id: 'id',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive',
  name: 'name',
  uuid: 'uuid',
  version: 'version',
  users_id_tech: 'users_id_tech',
  groups_id_tech: 'groups_id_tech',
  is_deleted: 'is_deleted',
  states_id: 'states_id',
  comment: 'comment',
  clustertypes_id: 'clustertypes_id',
  autoupdatesystems_id: 'autoupdatesystems_id',
  date_mod: 'date_mod',
  date_creation: 'date_creation'
};

exports.Prisma.Glpi_clustertypesScalarFieldEnum = {
  id: 'id',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive',
  name: 'name',
  comment: 'comment',
  date_creation: 'date_creation',
  date_mod: 'date_mod'
};

exports.Prisma.Glpi_computerantivirusesScalarFieldEnum = {
  id: 'id',
  computers_id: 'computers_id',
  name: 'name',
  manufacturers_id: 'manufacturers_id',
  antivirus_version: 'antivirus_version',
  signature_version: 'signature_version',
  is_active: 'is_active',
  is_deleted: 'is_deleted',
  is_uptodate: 'is_uptodate',
  is_dynamic: 'is_dynamic',
  date_expiration: 'date_expiration',
  date_mod: 'date_mod',
  date_creation: 'date_creation'
};

exports.Prisma.Glpi_computermodelsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  comment: 'comment',
  product_number: 'product_number',
  weight: 'weight',
  required_units: 'required_units',
  depth: 'depth',
  power_connections: 'power_connections',
  power_consumption: 'power_consumption',
  is_half_rack: 'is_half_rack',
  picture_front: 'picture_front',
  picture_rear: 'picture_rear',
  pictures: 'pictures',
  date_mod: 'date_mod',
  date_creation: 'date_creation'
};

exports.Prisma.Glpi_computersScalarFieldEnum = {
  id: 'id',
  entities_id: 'entities_id',
  name: 'name',
  serial: 'serial',
  otherserial: 'otherserial',
  contact: 'contact',
  contact_num: 'contact_num',
  users_id_tech: 'users_id_tech',
  groups_id_tech: 'groups_id_tech',
  comment: 'comment',
  date_mod: 'date_mod',
  autoupdatesystems_id: 'autoupdatesystems_id',
  locations_id: 'locations_id',
  networks_id: 'networks_id',
  computermodels_id: 'computermodels_id',
  computertypes_id: 'computertypes_id',
  is_template: 'is_template',
  template_name: 'template_name',
  manufacturers_id: 'manufacturers_id',
  is_deleted: 'is_deleted',
  is_dynamic: 'is_dynamic',
  users_id: 'users_id',
  groups_id: 'groups_id',
  states_id: 'states_id',
  ticket_tco: 'ticket_tco',
  uuid: 'uuid',
  date_creation: 'date_creation',
  is_recursive: 'is_recursive',
  last_inventory_update: 'last_inventory_update',
  last_boot: 'last_boot'
};

exports.Prisma.Glpi_computers_itemsScalarFieldEnum = {
  id: 'id',
  items_id: 'items_id',
  computers_id: 'computers_id',
  itemtype: 'itemtype',
  is_deleted: 'is_deleted',
  is_dynamic: 'is_dynamic'
};

exports.Prisma.Glpi_computertypesScalarFieldEnum = {
  id: 'id',
  name: 'name',
  comment: 'comment',
  date_mod: 'date_mod',
  date_creation: 'date_creation'
};

exports.Prisma.Glpi_computervirtualmachinesScalarFieldEnum = {
  id: 'id',
  entities_id: 'entities_id',
  computers_id: 'computers_id',
  name: 'name',
  virtualmachinestates_id: 'virtualmachinestates_id',
  virtualmachinesystems_id: 'virtualmachinesystems_id',
  virtualmachinetypes_id: 'virtualmachinetypes_id',
  uuid: 'uuid',
  vcpu: 'vcpu',
  ram: 'ram',
  is_deleted: 'is_deleted',
  is_dynamic: 'is_dynamic',
  comment: 'comment',
  date_mod: 'date_mod',
  date_creation: 'date_creation'
};

exports.Prisma.Glpi_configsScalarFieldEnum = {
  id: 'id',
  context: 'context',
  name: 'name',
  value: 'value'
};

exports.Prisma.Glpi_consumableitemsScalarFieldEnum = {
  id: 'id',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive',
  name: 'name',
  ref: 'ref',
  locations_id: 'locations_id',
  consumableitemtypes_id: 'consumableitemtypes_id',
  manufacturers_id: 'manufacturers_id',
  users_id_tech: 'users_id_tech',
  groups_id_tech: 'groups_id_tech',
  is_deleted: 'is_deleted',
  comment: 'comment',
  alarm_threshold: 'alarm_threshold',
  stock_target: 'stock_target',
  date_mod: 'date_mod',
  date_creation: 'date_creation',
  otherserial: 'otherserial',
  pictures: 'pictures'
};

exports.Prisma.Glpi_consumableitemtypesScalarFieldEnum = {
  id: 'id',
  name: 'name',
  comment: 'comment',
  date_mod: 'date_mod',
  date_creation: 'date_creation'
};

exports.Prisma.Glpi_consumablesScalarFieldEnum = {
  id: 'id',
  entities_id: 'entities_id',
  consumableitems_id: 'consumableitems_id',
  date_in: 'date_in',
  date_out: 'date_out',
  itemtype: 'itemtype',
  items_id: 'items_id',
  date_mod: 'date_mod',
  date_creation: 'date_creation'
};

exports.Prisma.Glpi_contactsScalarFieldEnum = {
  id: 'id',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive',
  name: 'name',
  firstname: 'firstname',
  registration_number: 'registration_number',
  phone: 'phone',
  phone2: 'phone2',
  mobile: 'mobile',
  fax: 'fax',
  email: 'email',
  contacttypes_id: 'contacttypes_id',
  comment: 'comment',
  is_deleted: 'is_deleted',
  usertitles_id: 'usertitles_id',
  address: 'address',
  postcode: 'postcode',
  town: 'town',
  state: 'state',
  country: 'country',
  date_mod: 'date_mod',
  date_creation: 'date_creation',
  pictures: 'pictures'
};

exports.Prisma.Glpi_contacts_suppliersScalarFieldEnum = {
  id: 'id',
  suppliers_id: 'suppliers_id',
  contacts_id: 'contacts_id'
};

exports.Prisma.Glpi_contacttypesScalarFieldEnum = {
  id: 'id',
  name: 'name',
  comment: 'comment',
  date_mod: 'date_mod',
  date_creation: 'date_creation'
};

exports.Prisma.Glpi_contractcostsScalarFieldEnum = {
  id: 'id',
  contracts_id: 'contracts_id',
  name: 'name',
  comment: 'comment',
  begin_date: 'begin_date',
  end_date: 'end_date',
  cost: 'cost',
  budgets_id: 'budgets_id',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive'
};

exports.Prisma.Glpi_contractsScalarFieldEnum = {
  id: 'id',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive',
  name: 'name',
  num: 'num',
  contracttypes_id: 'contracttypes_id',
  locations_id: 'locations_id',
  begin_date: 'begin_date',
  duration: 'duration',
  notice: 'notice',
  periodicity: 'periodicity',
  billing: 'billing',
  comment: 'comment',
  accounting_number: 'accounting_number',
  is_deleted: 'is_deleted',
  week_begin_hour: 'week_begin_hour',
  week_end_hour: 'week_end_hour',
  saturday_begin_hour: 'saturday_begin_hour',
  saturday_end_hour: 'saturday_end_hour',
  use_saturday: 'use_saturday',
  sunday_begin_hour: 'sunday_begin_hour',
  sunday_end_hour: 'sunday_end_hour',
  use_sunday: 'use_sunday',
  max_links_allowed: 'max_links_allowed',
  alert: 'alert',
  renewal: 'renewal',
  template_name: 'template_name',
  is_template: 'is_template',
  states_id: 'states_id',
  date_mod: 'date_mod',
  date_creation: 'date_creation'
};

exports.Prisma.Glpi_contracts_itemsScalarFieldEnum = {
  id: 'id',
  contracts_id: 'contracts_id',
  items_id: 'items_id',
  itemtype: 'itemtype'
};

exports.Prisma.Glpi_contracts_suppliersScalarFieldEnum = {
  id: 'id',
  suppliers_id: 'suppliers_id',
  contracts_id: 'contracts_id'
};

exports.Prisma.Glpi_contracttypesScalarFieldEnum = {
  id: 'id',
  name: 'name',
  comment: 'comment',
  date_mod: 'date_mod',
  date_creation: 'date_creation'
};

exports.Prisma.Glpi_crontasklogsScalarFieldEnum = {
  id: 'id',
  crontasks_id: 'crontasks_id',
  crontasklogs_id: 'crontasklogs_id',
  date: 'date',
  state: 'state',
  elapsed: 'elapsed',
  volume: 'volume',
  content: 'content'
};

exports.Prisma.Glpi_crontasksScalarFieldEnum = {
  id: 'id',
  itemtype: 'itemtype',
  name: 'name',
  frequency: 'frequency',
  param: 'param',
  state: 'state',
  mode: 'mode',
  allowmode: 'allowmode',
  hourmin: 'hourmin',
  hourmax: 'hourmax',
  logs_lifetime: 'logs_lifetime',
  lastrun: 'lastrun',
  lastcode: 'lastcode',
  comment: 'comment',
  date_mod: 'date_mod',
  date_creation: 'date_creation'
};

exports.Prisma.Glpi_dashboards_dashboardsScalarFieldEnum = {
  id: 'id',
  key: 'key',
  name: 'name',
  context: 'context',
  users_id: 'users_id'
};

exports.Prisma.Glpi_dashboards_filtersScalarFieldEnum = {
  id: 'id',
  dashboards_dashboards_id: 'dashboards_dashboards_id',
  users_id: 'users_id',
  filter: 'filter'
};

exports.Prisma.Glpi_dashboards_itemsScalarFieldEnum = {
  id: 'id',
  dashboards_dashboards_id: 'dashboards_dashboards_id',
  gridstack_id: 'gridstack_id',
  card_id: 'card_id',
  x: 'x',
  y: 'y',
  width: 'width',
  height: 'height',
  card_options: 'card_options'
};

exports.Prisma.Glpi_dashboards_rightsScalarFieldEnum = {
  id: 'id',
  dashboards_dashboards_id: 'dashboards_dashboards_id',
  itemtype: 'itemtype',
  items_id: 'items_id'
};

exports.Prisma.Glpi_databaseinstancecategoriesScalarFieldEnum = {
  id: 'id',
  name: 'name',
  comment: 'comment',
  date_mod: 'date_mod',
  date_creation: 'date_creation'
};

exports.Prisma.Glpi_databaseinstancesScalarFieldEnum = {
  id: 'id',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive',
  name: 'name',
  version: 'version',
  port: 'port',
  path: 'path',
  size: 'size',
  databaseinstancetypes_id: 'databaseinstancetypes_id',
  databaseinstancecategories_id: 'databaseinstancecategories_id',
  locations_id: 'locations_id',
  manufacturers_id: 'manufacturers_id',
  users_id_tech: 'users_id_tech',
  groups_id_tech: 'groups_id_tech',
  states_id: 'states_id',
  itemtype: 'itemtype',
  items_id: 'items_id',
  is_onbackup: 'is_onbackup',
  is_active: 'is_active',
  is_deleted: 'is_deleted',
  is_helpdesk_visible: 'is_helpdesk_visible',
  is_dynamic: 'is_dynamic',
  autoupdatesystems_id: 'autoupdatesystems_id',
  date_creation: 'date_creation',
  date_mod: 'date_mod',
  date_lastboot: 'date_lastboot',
  date_lastbackup: 'date_lastbackup',
  comment: 'comment'
};

exports.Prisma.Glpi_databaseinstancetypesScalarFieldEnum = {
  id: 'id',
  name: 'name',
  comment: 'comment',
  date_mod: 'date_mod',
  date_creation: 'date_creation'
};

exports.Prisma.Glpi_databasesScalarFieldEnum = {
  id: 'id',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive',
  name: 'name',
  size: 'size',
  databaseinstances_id: 'databaseinstances_id',
  is_onbackup: 'is_onbackup',
  is_active: 'is_active',
  is_deleted: 'is_deleted',
  is_dynamic: 'is_dynamic',
  date_creation: 'date_creation',
  date_mod: 'date_mod',
  date_update: 'date_update',
  date_lastbackup: 'date_lastbackup'
};

exports.Prisma.Glpi_datacentersScalarFieldEnum = {
  id: 'id',
  name: 'name',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive',
  locations_id: 'locations_id',
  is_deleted: 'is_deleted',
  date_mod: 'date_mod',
  date_creation: 'date_creation',
  pictures: 'pictures'
};

exports.Prisma.Glpi_dcroomsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive',
  locations_id: 'locations_id',
  vis_cols: 'vis_cols',
  vis_rows: 'vis_rows',
  blueprint: 'blueprint',
  datacenters_id: 'datacenters_id',
  is_deleted: 'is_deleted',
  date_mod: 'date_mod',
  date_creation: 'date_creation'
};

exports.Prisma.Glpi_devicebatteriesScalarFieldEnum = {
  id: 'id',
  designation: 'designation',
  comment: 'comment',
  manufacturers_id: 'manufacturers_id',
  voltage: 'voltage',
  capacity: 'capacity',
  devicebatterytypes_id: 'devicebatterytypes_id',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive',
  devicebatterymodels_id: 'devicebatterymodels_id',
  date_mod: 'date_mod',
  date_creation: 'date_creation'
};

exports.Prisma.Glpi_devicebatterymodelsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  comment: 'comment',
  product_number: 'product_number'
};

exports.Prisma.Glpi_devicebatterytypesScalarFieldEnum = {
  id: 'id',
  name: 'name',
  comment: 'comment',
  date_mod: 'date_mod',
  date_creation: 'date_creation'
};

exports.Prisma.Glpi_devicecameramodelsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  comment: 'comment',
  product_number: 'product_number'
};

exports.Prisma.Glpi_devicecamerasScalarFieldEnum = {
  id: 'id',
  designation: 'designation',
  flashunit: 'flashunit',
  lensfacing: 'lensfacing',
  orientation: 'orientation',
  focallength: 'focallength',
  sensorsize: 'sensorsize',
  comment: 'comment',
  manufacturers_id: 'manufacturers_id',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive',
  devicecameramodels_id: 'devicecameramodels_id',
  support: 'support',
  date_mod: 'date_mod',
  date_creation: 'date_creation'
};

exports.Prisma.Glpi_devicecasemodelsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  comment: 'comment',
  product_number: 'product_number'
};

exports.Prisma.Glpi_devicecasesScalarFieldEnum = {
  id: 'id',
  designation: 'designation',
  devicecasetypes_id: 'devicecasetypes_id',
  comment: 'comment',
  manufacturers_id: 'manufacturers_id',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive',
  devicecasemodels_id: 'devicecasemodels_id',
  date_mod: 'date_mod',
  date_creation: 'date_creation'
};

exports.Prisma.Glpi_devicecasetypesScalarFieldEnum = {
  id: 'id',
  name: 'name',
  comment: 'comment',
  date_mod: 'date_mod',
  date_creation: 'date_creation'
};

exports.Prisma.Glpi_devicecontrolmodelsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  comment: 'comment',
  product_number: 'product_number'
};

exports.Prisma.Glpi_devicecontrolsScalarFieldEnum = {
  id: 'id',
  designation: 'designation',
  is_raid: 'is_raid',
  comment: 'comment',
  manufacturers_id: 'manufacturers_id',
  interfacetypes_id: 'interfacetypes_id',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive',
  devicecontrolmodels_id: 'devicecontrolmodels_id',
  date_mod: 'date_mod',
  date_creation: 'date_creation'
};

exports.Prisma.Glpi_devicedrivemodelsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  comment: 'comment',
  product_number: 'product_number'
};

exports.Prisma.Glpi_devicedrivesScalarFieldEnum = {
  id: 'id',
  designation: 'designation',
  is_writer: 'is_writer',
  speed: 'speed',
  comment: 'comment',
  manufacturers_id: 'manufacturers_id',
  interfacetypes_id: 'interfacetypes_id',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive',
  devicedrivemodels_id: 'devicedrivemodels_id',
  date_mod: 'date_mod',
  date_creation: 'date_creation'
};

exports.Prisma.Glpi_devicefirmwaremodelsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  comment: 'comment',
  product_number: 'product_number'
};

exports.Prisma.Glpi_devicefirmwaresScalarFieldEnum = {
  id: 'id',
  designation: 'designation',
  comment: 'comment',
  manufacturers_id: 'manufacturers_id',
  date: 'date',
  version: 'version',
  devicefirmwaretypes_id: 'devicefirmwaretypes_id',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive',
  devicefirmwaremodels_id: 'devicefirmwaremodels_id',
  date_mod: 'date_mod',
  date_creation: 'date_creation'
};

exports.Prisma.Glpi_devicefirmwaretypesScalarFieldEnum = {
  id: 'id',
  name: 'name',
  comment: 'comment',
  date_mod: 'date_mod',
  date_creation: 'date_creation'
};

exports.Prisma.Glpi_devicegenericmodelsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  comment: 'comment',
  product_number: 'product_number'
};

exports.Prisma.Glpi_devicegenericsScalarFieldEnum = {
  id: 'id',
  designation: 'designation',
  devicegenerictypes_id: 'devicegenerictypes_id',
  comment: 'comment',
  manufacturers_id: 'manufacturers_id',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive',
  locations_id: 'locations_id',
  states_id: 'states_id',
  devicegenericmodels_id: 'devicegenericmodels_id',
  date_mod: 'date_mod',
  date_creation: 'date_creation'
};

exports.Prisma.Glpi_devicegenerictypesScalarFieldEnum = {
  id: 'id',
  name: 'name',
  comment: 'comment'
};

exports.Prisma.Glpi_devicegraphiccardmodelsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  comment: 'comment',
  product_number: 'product_number'
};

exports.Prisma.Glpi_devicegraphiccardsScalarFieldEnum = {
  id: 'id',
  designation: 'designation',
  interfacetypes_id: 'interfacetypes_id',
  comment: 'comment',
  manufacturers_id: 'manufacturers_id',
  memory_default: 'memory_default',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive',
  devicegraphiccardmodels_id: 'devicegraphiccardmodels_id',
  chipset: 'chipset',
  date_mod: 'date_mod',
  date_creation: 'date_creation'
};

exports.Prisma.Glpi_deviceharddrivemodelsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  comment: 'comment',
  product_number: 'product_number'
};

exports.Prisma.Glpi_deviceharddrivesScalarFieldEnum = {
  id: 'id',
  designation: 'designation',
  rpm: 'rpm',
  interfacetypes_id: 'interfacetypes_id',
  cache: 'cache',
  comment: 'comment',
  manufacturers_id: 'manufacturers_id',
  capacity_default: 'capacity_default',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive',
  deviceharddrivemodels_id: 'deviceharddrivemodels_id',
  date_mod: 'date_mod',
  date_creation: 'date_creation'
};

exports.Prisma.Glpi_devicememoriesScalarFieldEnum = {
  id: 'id',
  designation: 'designation',
  frequence: 'frequence',
  comment: 'comment',
  manufacturers_id: 'manufacturers_id',
  size_default: 'size_default',
  devicememorytypes_id: 'devicememorytypes_id',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive',
  devicememorymodels_id: 'devicememorymodels_id',
  date_mod: 'date_mod',
  date_creation: 'date_creation'
};

exports.Prisma.Glpi_devicememorymodelsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  comment: 'comment',
  product_number: 'product_number'
};

exports.Prisma.Glpi_devicememorytypesScalarFieldEnum = {
  id: 'id',
  name: 'name',
  comment: 'comment',
  date_mod: 'date_mod',
  date_creation: 'date_creation'
};

exports.Prisma.Glpi_devicemotherboardmodelsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  comment: 'comment',
  product_number: 'product_number'
};

exports.Prisma.Glpi_devicemotherboardsScalarFieldEnum = {
  id: 'id',
  designation: 'designation',
  chipset: 'chipset',
  comment: 'comment',
  manufacturers_id: 'manufacturers_id',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive',
  devicemotherboardmodels_id: 'devicemotherboardmodels_id',
  date_mod: 'date_mod',
  date_creation: 'date_creation'
};

exports.Prisma.Glpi_devicenetworkcardmodelsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  comment: 'comment',
  product_number: 'product_number'
};

exports.Prisma.Glpi_devicenetworkcardsScalarFieldEnum = {
  id: 'id',
  designation: 'designation',
  bandwidth: 'bandwidth',
  comment: 'comment',
  manufacturers_id: 'manufacturers_id',
  mac_default: 'mac_default',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive',
  devicenetworkcardmodels_id: 'devicenetworkcardmodels_id',
  date_mod: 'date_mod',
  date_creation: 'date_creation'
};

exports.Prisma.Glpi_devicepcimodelsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  comment: 'comment',
  product_number: 'product_number'
};

exports.Prisma.Glpi_devicepcisScalarFieldEnum = {
  id: 'id',
  designation: 'designation',
  comment: 'comment',
  manufacturers_id: 'manufacturers_id',
  devicenetworkcardmodels_id: 'devicenetworkcardmodels_id',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive',
  devicepcimodels_id: 'devicepcimodels_id',
  date_mod: 'date_mod',
  date_creation: 'date_creation'
};

exports.Prisma.Glpi_devicepowersuppliesScalarFieldEnum = {
  id: 'id',
  designation: 'designation',
  power: 'power',
  is_atx: 'is_atx',
  comment: 'comment',
  manufacturers_id: 'manufacturers_id',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive',
  devicepowersupplymodels_id: 'devicepowersupplymodels_id',
  date_mod: 'date_mod',
  date_creation: 'date_creation'
};

exports.Prisma.Glpi_devicepowersupplymodelsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  comment: 'comment',
  product_number: 'product_number'
};

exports.Prisma.Glpi_deviceprocessormodelsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  comment: 'comment',
  product_number: 'product_number'
};

exports.Prisma.Glpi_deviceprocessorsScalarFieldEnum = {
  id: 'id',
  designation: 'designation',
  frequence: 'frequence',
  comment: 'comment',
  manufacturers_id: 'manufacturers_id',
  frequency_default: 'frequency_default',
  nbcores_default: 'nbcores_default',
  nbthreads_default: 'nbthreads_default',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive',
  deviceprocessormodels_id: 'deviceprocessormodels_id',
  date_mod: 'date_mod',
  date_creation: 'date_creation'
};

exports.Prisma.Glpi_devicesensormodelsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  comment: 'comment',
  product_number: 'product_number'
};

exports.Prisma.Glpi_devicesensorsScalarFieldEnum = {
  id: 'id',
  designation: 'designation',
  devicesensortypes_id: 'devicesensortypes_id',
  devicesensormodels_id: 'devicesensormodels_id',
  comment: 'comment',
  manufacturers_id: 'manufacturers_id',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive',
  locations_id: 'locations_id',
  states_id: 'states_id',
  date_mod: 'date_mod',
  date_creation: 'date_creation'
};

exports.Prisma.Glpi_devicesensortypesScalarFieldEnum = {
  id: 'id',
  name: 'name',
  comment: 'comment'
};

exports.Prisma.Glpi_devicesimcardsScalarFieldEnum = {
  id: 'id',
  designation: 'designation',
  comment: 'comment',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive',
  manufacturers_id: 'manufacturers_id',
  voltage: 'voltage',
  devicesimcardtypes_id: 'devicesimcardtypes_id',
  date_mod: 'date_mod',
  date_creation: 'date_creation',
  allow_voip: 'allow_voip'
};

exports.Prisma.Glpi_devicesimcardtypesScalarFieldEnum = {
  id: 'id',
  name: 'name',
  comment: 'comment',
  date_mod: 'date_mod',
  date_creation: 'date_creation'
};

exports.Prisma.Glpi_devicesoundcardmodelsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  comment: 'comment',
  product_number: 'product_number'
};

exports.Prisma.Glpi_devicesoundcardsScalarFieldEnum = {
  id: 'id',
  designation: 'designation',
  type: 'type',
  comment: 'comment',
  manufacturers_id: 'manufacturers_id',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive',
  devicesoundcardmodels_id: 'devicesoundcardmodels_id',
  date_mod: 'date_mod',
  date_creation: 'date_creation'
};

exports.Prisma.Glpi_displaypreferencesScalarFieldEnum = {
  id: 'id',
  itemtype: 'itemtype',
  num: 'num',
  rank: 'rank',
  users_id: 'users_id'
};

exports.Prisma.Glpi_documentcategoriesScalarFieldEnum = {
  id: 'id',
  name: 'name',
  comment: 'comment',
  documentcategories_id: 'documentcategories_id',
  completename: 'completename',
  level: 'level',
  ancestors_cache: 'ancestors_cache',
  sons_cache: 'sons_cache',
  date_mod: 'date_mod',
  date_creation: 'date_creation'
};

exports.Prisma.Glpi_documentsScalarFieldEnum = {
  id: 'id',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive',
  name: 'name',
  filename: 'filename',
  filepath: 'filepath',
  documentcategories_id: 'documentcategories_id',
  mime: 'mime',
  date_mod: 'date_mod',
  comment: 'comment',
  is_deleted: 'is_deleted',
  link: 'link',
  users_id: 'users_id',
  tickets_id: 'tickets_id',
  sha1sum: 'sha1sum',
  is_blacklisted: 'is_blacklisted',
  tag: 'tag',
  date_creation: 'date_creation'
};

exports.Prisma.Glpi_documents_itemsScalarFieldEnum = {
  id: 'id',
  documents_id: 'documents_id',
  items_id: 'items_id',
  itemtype: 'itemtype',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive',
  date_mod: 'date_mod',
  users_id: 'users_id',
  timeline_position: 'timeline_position',
  date_creation: 'date_creation',
  date: 'date'
};

exports.Prisma.Glpi_documenttypesScalarFieldEnum = {
  id: 'id',
  name: 'name',
  ext: 'ext',
  icon: 'icon',
  mime: 'mime',
  is_uploadable: 'is_uploadable',
  date_mod: 'date_mod',
  comment: 'comment',
  date_creation: 'date_creation'
};

exports.Prisma.Glpi_domainrecordsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  data: 'data',
  data_obj: 'data_obj',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive',
  domains_id: 'domains_id',
  domainrecordtypes_id: 'domainrecordtypes_id',
  ttl: 'ttl',
  users_id_tech: 'users_id_tech',
  groups_id_tech: 'groups_id_tech',
  is_deleted: 'is_deleted',
  comment: 'comment',
  date_mod: 'date_mod',
  date_creation: 'date_creation'
};

exports.Prisma.Glpi_domainrecordtypesScalarFieldEnum = {
  id: 'id',
  name: 'name',
  fields: 'fields',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive',
  comment: 'comment'
};

exports.Prisma.Glpi_domainrelationsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive',
  comment: 'comment'
};

exports.Prisma.Glpi_domainsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive',
  domaintypes_id: 'domaintypes_id',
  date_expiration: 'date_expiration',
  date_domaincreation: 'date_domaincreation',
  users_id_tech: 'users_id_tech',
  groups_id_tech: 'groups_id_tech',
  is_deleted: 'is_deleted',
  comment: 'comment',
  is_template: 'is_template',
  template_name: 'template_name',
  is_active: 'is_active',
  date_mod: 'date_mod',
  date_creation: 'date_creation'
};

exports.Prisma.Glpi_domains_itemsScalarFieldEnum = {
  id: 'id',
  domains_id: 'domains_id',
  items_id: 'items_id',
  itemtype: 'itemtype',
  domainrelations_id: 'domainrelations_id',
  is_dynamic: 'is_dynamic',
  is_deleted: 'is_deleted'
};

exports.Prisma.Glpi_domaintypesScalarFieldEnum = {
  id: 'id',
  name: 'name',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive',
  comment: 'comment'
};

exports.Prisma.Glpi_dropdowntranslationsScalarFieldEnum = {
  id: 'id',
  items_id: 'items_id',
  itemtype: 'itemtype',
  language: 'language',
  field: 'field',
  value: 'value'
};

exports.Prisma.Glpi_enclosuremodelsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  comment: 'comment',
  product_number: 'product_number',
  weight: 'weight',
  required_units: 'required_units',
  depth: 'depth',
  power_connections: 'power_connections',
  power_consumption: 'power_consumption',
  is_half_rack: 'is_half_rack',
  picture_front: 'picture_front',
  picture_rear: 'picture_rear',
  pictures: 'pictures',
  date_mod: 'date_mod',
  date_creation: 'date_creation'
};

exports.Prisma.Glpi_enclosuresScalarFieldEnum = {
  id: 'id',
  name: 'name',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive',
  locations_id: 'locations_id',
  serial: 'serial',
  otherserial: 'otherserial',
  enclosuremodels_id: 'enclosuremodels_id',
  users_id_tech: 'users_id_tech',
  groups_id_tech: 'groups_id_tech',
  is_template: 'is_template',
  template_name: 'template_name',
  is_deleted: 'is_deleted',
  orientation: 'orientation',
  power_supplies: 'power_supplies',
  states_id: 'states_id',
  comment: 'comment',
  manufacturers_id: 'manufacturers_id',
  date_mod: 'date_mod',
  date_creation: 'date_creation'
};

exports.Prisma.Glpi_entitiesScalarFieldEnum = {
  id: 'id',
  name: 'name',
  entities_id: 'entities_id',
  completename: 'completename',
  comment: 'comment',
  level: 'level',
  sons_cache: 'sons_cache',
  ancestors_cache: 'ancestors_cache',
  registration_number: 'registration_number',
  address: 'address',
  postcode: 'postcode',
  town: 'town',
  state: 'state',
  country: 'country',
  website: 'website',
  phonenumber: 'phonenumber',
  fax: 'fax',
  email: 'email',
  admin_email: 'admin_email',
  admin_email_name: 'admin_email_name',
  from_email: 'from_email',
  from_email_name: 'from_email_name',
  noreply_email: 'noreply_email',
  noreply_email_name: 'noreply_email_name',
  replyto_email: 'replyto_email',
  replyto_email_name: 'replyto_email_name',
  notification_subject_tag: 'notification_subject_tag',
  ldap_dn: 'ldap_dn',
  tag: 'tag',
  authldaps_id: 'authldaps_id',
  mail_domain: 'mail_domain',
  entity_ldapfilter: 'entity_ldapfilter',
  mailing_signature: 'mailing_signature',
  cartridges_alert_repeat: 'cartridges_alert_repeat',
  consumables_alert_repeat: 'consumables_alert_repeat',
  use_licenses_alert: 'use_licenses_alert',
  send_licenses_alert_before_delay: 'send_licenses_alert_before_delay',
  use_certificates_alert: 'use_certificates_alert',
  send_certificates_alert_before_delay: 'send_certificates_alert_before_delay',
  certificates_alert_repeat_interval: 'certificates_alert_repeat_interval',
  use_contracts_alert: 'use_contracts_alert',
  send_contracts_alert_before_delay: 'send_contracts_alert_before_delay',
  use_infocoms_alert: 'use_infocoms_alert',
  send_infocoms_alert_before_delay: 'send_infocoms_alert_before_delay',
  use_reservations_alert: 'use_reservations_alert',
  use_domains_alert: 'use_domains_alert',
  send_domains_alert_close_expiries_delay: 'send_domains_alert_close_expiries_delay',
  send_domains_alert_expired_delay: 'send_domains_alert_expired_delay',
  autoclose_delay: 'autoclose_delay',
  autopurge_delay: 'autopurge_delay',
  notclosed_delay: 'notclosed_delay',
  calendars_strategy: 'calendars_strategy',
  calendars_id: 'calendars_id',
  auto_assign_mode: 'auto_assign_mode',
  tickettype: 'tickettype',
  max_closedate: 'max_closedate',
  inquest_config: 'inquest_config',
  inquest_rate: 'inquest_rate',
  inquest_delay: 'inquest_delay',
  inquest_URL: 'inquest_URL',
  autofill_warranty_date: 'autofill_warranty_date',
  autofill_use_date: 'autofill_use_date',
  autofill_buy_date: 'autofill_buy_date',
  autofill_delivery_date: 'autofill_delivery_date',
  autofill_order_date: 'autofill_order_date',
  tickettemplates_strategy: 'tickettemplates_strategy',
  tickettemplates_id: 'tickettemplates_id',
  changetemplates_strategy: 'changetemplates_strategy',
  changetemplates_id: 'changetemplates_id',
  problemtemplates_strategy: 'problemtemplates_strategy',
  problemtemplates_id: 'problemtemplates_id',
  entities_strategy_software: 'entities_strategy_software',
  entities_id_software: 'entities_id_software',
  default_contract_alert: 'default_contract_alert',
  default_infocom_alert: 'default_infocom_alert',
  default_cartridges_alarm_threshold: 'default_cartridges_alarm_threshold',
  default_consumables_alarm_threshold: 'default_consumables_alarm_threshold',
  delay_send_emails: 'delay_send_emails',
  is_notif_enable_default: 'is_notif_enable_default',
  inquest_duration: 'inquest_duration',
  date_mod: 'date_mod',
  date_creation: 'date_creation',
  autofill_decommission_date: 'autofill_decommission_date',
  suppliers_as_private: 'suppliers_as_private',
  anonymize_support_agents: 'anonymize_support_agents',
  display_users_initials: 'display_users_initials',
  contracts_strategy_default: 'contracts_strategy_default',
  contracts_id_default: 'contracts_id_default',
  enable_custom_css: 'enable_custom_css',
  custom_css_code: 'custom_css_code',
  latitude: 'latitude',
  longitude: 'longitude',
  altitude: 'altitude',
  transfers_strategy: 'transfers_strategy',
  transfers_id: 'transfers_id',
  agent_base_url: 'agent_base_url'
};

exports.Prisma.Glpi_entities_knowbaseitemsScalarFieldEnum = {
  id: 'id',
  knowbaseitems_id: 'knowbaseitems_id',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive'
};

exports.Prisma.Glpi_entities_remindersScalarFieldEnum = {
  id: 'id',
  reminders_id: 'reminders_id',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive'
};

exports.Prisma.Glpi_entities_rssfeedsScalarFieldEnum = {
  id: 'id',
  rssfeeds_id: 'rssfeeds_id',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive'
};

exports.Prisma.Glpi_eventsScalarFieldEnum = {
  id: 'id',
  items_id: 'items_id',
  type: 'type',
  date: 'date',
  service: 'service',
  level: 'level',
  message: 'message'
};

exports.Prisma.Glpi_fieldblacklistsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  field: 'field',
  value: 'value',
  itemtype: 'itemtype',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive',
  comment: 'comment',
  date_mod: 'date_mod',
  date_creation: 'date_creation'
};

exports.Prisma.Glpi_fieldunicitiesScalarFieldEnum = {
  id: 'id',
  name: 'name',
  is_recursive: 'is_recursive',
  itemtype: 'itemtype',
  entities_id: 'entities_id',
  fields: 'fields',
  is_active: 'is_active',
  action_refuse: 'action_refuse',
  action_notify: 'action_notify',
  comment: 'comment',
  date_mod: 'date_mod',
  date_creation: 'date_creation'
};

exports.Prisma.Glpi_filesystemsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  comment: 'comment',
  date_mod: 'date_mod',
  date_creation: 'date_creation'
};

exports.Prisma.Glpi_fqdnsScalarFieldEnum = {
  id: 'id',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive',
  name: 'name',
  fqdn: 'fqdn',
  comment: 'comment',
  date_mod: 'date_mod',
  date_creation: 'date_creation'
};

exports.Prisma.Glpi_groupsScalarFieldEnum = {
  id: 'id',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive',
  name: 'name',
  comment: 'comment',
  ldap_field: 'ldap_field',
  ldap_value: 'ldap_value',
  ldap_group_dn: 'ldap_group_dn',
  date_mod: 'date_mod',
  groups_id: 'groups_id',
  completename: 'completename',
  level: 'level',
  ancestors_cache: 'ancestors_cache',
  sons_cache: 'sons_cache',
  is_requester: 'is_requester',
  is_watcher: 'is_watcher',
  is_assign: 'is_assign',
  is_task: 'is_task',
  is_notify: 'is_notify',
  is_itemgroup: 'is_itemgroup',
  is_usergroup: 'is_usergroup',
  is_manager: 'is_manager',
  date_creation: 'date_creation'
};

exports.Prisma.Glpi_groups_knowbaseitemsScalarFieldEnum = {
  id: 'id',
  knowbaseitems_id: 'knowbaseitems_id',
  groups_id: 'groups_id',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive',
  no_entity_restriction: 'no_entity_restriction'
};

exports.Prisma.Glpi_groups_problemsScalarFieldEnum = {
  id: 'id',
  problems_id: 'problems_id',
  groups_id: 'groups_id',
  type: 'type'
};

exports.Prisma.Glpi_groups_remindersScalarFieldEnum = {
  id: 'id',
  reminders_id: 'reminders_id',
  groups_id: 'groups_id',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive',
  no_entity_restriction: 'no_entity_restriction'
};

exports.Prisma.Glpi_groups_rssfeedsScalarFieldEnum = {
  id: 'id',
  rssfeeds_id: 'rssfeeds_id',
  groups_id: 'groups_id',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive',
  no_entity_restriction: 'no_entity_restriction'
};

exports.Prisma.Glpi_groups_ticketsScalarFieldEnum = {
  id: 'id',
  tickets_id: 'tickets_id',
  groups_id: 'groups_id',
  type: 'type'
};

exports.Prisma.Glpi_groups_usersScalarFieldEnum = {
  id: 'id',
  users_id: 'users_id',
  groups_id: 'groups_id',
  is_dynamic: 'is_dynamic',
  is_manager: 'is_manager',
  is_userdelegate: 'is_userdelegate'
};

exports.Prisma.Glpi_holidaysScalarFieldEnum = {
  id: 'id',
  name: 'name',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive',
  comment: 'comment',
  begin_date: 'begin_date',
  end_date: 'end_date',
  is_perpetual: 'is_perpetual',
  date_mod: 'date_mod',
  date_creation: 'date_creation'
};

exports.Prisma.Glpi_imageformatsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  date_mod: 'date_mod',
  comment: 'comment',
  date_creation: 'date_creation',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive'
};

exports.Prisma.Glpi_imageresolutionsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  is_video: 'is_video',
  date_mod: 'date_mod',
  comment: 'comment',
  date_creation: 'date_creation',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive'
};

exports.Prisma.Glpi_impactcompoundsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  color: 'color'
};

exports.Prisma.Glpi_impactcontextsScalarFieldEnum = {
  id: 'id',
  positions: 'positions',
  zoom: 'zoom',
  pan_x: 'pan_x',
  pan_y: 'pan_y',
  impact_color: 'impact_color',
  depends_color: 'depends_color',
  impact_and_depends_color: 'impact_and_depends_color',
  show_depends: 'show_depends',
  show_impact: 'show_impact',
  max_depth: 'max_depth'
};

exports.Prisma.Glpi_impactitemsScalarFieldEnum = {
  id: 'id',
  itemtype: 'itemtype',
  items_id: 'items_id',
  parent_id: 'parent_id',
  impactcontexts_id: 'impactcontexts_id',
  is_slave: 'is_slave'
};

exports.Prisma.Glpi_impactrelationsScalarFieldEnum = {
  id: 'id',
  itemtype_source: 'itemtype_source',
  items_id_source: 'items_id_source',
  itemtype_impacted: 'itemtype_impacted',
  items_id_impacted: 'items_id_impacted'
};

exports.Prisma.Glpi_infocomsScalarFieldEnum = {
  id: 'id',
  items_id: 'items_id',
  itemtype: 'itemtype',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive',
  buy_date: 'buy_date',
  use_date: 'use_date',
  warranty_duration: 'warranty_duration',
  warranty_info: 'warranty_info',
  suppliers_id: 'suppliers_id',
  order_number: 'order_number',
  delivery_number: 'delivery_number',
  immo_number: 'immo_number',
  value: 'value',
  warranty_value: 'warranty_value',
  sink_time: 'sink_time',
  sink_type: 'sink_type',
  sink_coeff: 'sink_coeff',
  comment: 'comment',
  bill: 'bill',
  budgets_id: 'budgets_id',
  alert: 'alert',
  order_date: 'order_date',
  delivery_date: 'delivery_date',
  inventory_date: 'inventory_date',
  warranty_date: 'warranty_date',
  date_mod: 'date_mod',
  date_creation: 'date_creation',
  decommission_date: 'decommission_date',
  businesscriticities_id: 'businesscriticities_id'
};

exports.Prisma.Glpi_interfacetypesScalarFieldEnum = {
  id: 'id',
  name: 'name',
  comment: 'comment',
  date_mod: 'date_mod',
  date_creation: 'date_creation'
};

exports.Prisma.Glpi_ipaddressesScalarFieldEnum = {
  id: 'id',
  entities_id: 'entities_id',
  items_id: 'items_id',
  itemtype: 'itemtype',
  version: 'version',
  name: 'name',
  binary_0: 'binary_0',
  binary_1: 'binary_1',
  binary_2: 'binary_2',
  binary_3: 'binary_3',
  is_deleted: 'is_deleted',
  is_dynamic: 'is_dynamic',
  mainitems_id: 'mainitems_id',
  mainitemtype: 'mainitemtype'
};

exports.Prisma.Glpi_ipaddresses_ipnetworksScalarFieldEnum = {
  id: 'id',
  ipaddresses_id: 'ipaddresses_id',
  ipnetworks_id: 'ipnetworks_id'
};

exports.Prisma.Glpi_ipnetworksScalarFieldEnum = {
  id: 'id',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive',
  ipnetworks_id: 'ipnetworks_id',
  completename: 'completename',
  level: 'level',
  ancestors_cache: 'ancestors_cache',
  sons_cache: 'sons_cache',
  addressable: 'addressable',
  version: 'version',
  name: 'name',
  address: 'address',
  address_0: 'address_0',
  address_1: 'address_1',
  address_2: 'address_2',
  address_3: 'address_3',
  netmask: 'netmask',
  netmask_0: 'netmask_0',
  netmask_1: 'netmask_1',
  netmask_2: 'netmask_2',
  netmask_3: 'netmask_3',
  gateway: 'gateway',
  gateway_0: 'gateway_0',
  gateway_1: 'gateway_1',
  gateway_2: 'gateway_2',
  gateway_3: 'gateway_3',
  comment: 'comment',
  date_mod: 'date_mod',
  date_creation: 'date_creation'
};

exports.Prisma.Glpi_ipnetworks_vlansScalarFieldEnum = {
  id: 'id',
  ipnetworks_id: 'ipnetworks_id',
  vlans_id: 'vlans_id'
};

exports.Prisma.Glpi_items_clustersScalarFieldEnum = {
  id: 'id',
  clusters_id: 'clusters_id',
  itemtype: 'itemtype',
  items_id: 'items_id'
};

exports.Prisma.Glpi_items_devicebatteriesScalarFieldEnum = {
  id: 'id',
  items_id: 'items_id',
  itemtype: 'itemtype',
  devicebatteries_id: 'devicebatteries_id',
  manufacturing_date: 'manufacturing_date',
  is_deleted: 'is_deleted',
  is_dynamic: 'is_dynamic',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive',
  serial: 'serial',
  otherserial: 'otherserial',
  locations_id: 'locations_id',
  states_id: 'states_id',
  real_capacity: 'real_capacity'
};

exports.Prisma.Glpi_items_devicecamerasScalarFieldEnum = {
  id: 'id',
  items_id: 'items_id',
  itemtype: 'itemtype',
  devicecameras_id: 'devicecameras_id',
  is_deleted: 'is_deleted',
  is_dynamic: 'is_dynamic',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive',
  locations_id: 'locations_id'
};

exports.Prisma.Glpi_items_devicecameras_imageformatsScalarFieldEnum = {
  id: 'id',
  items_devicecameras_id: 'items_devicecameras_id',
  imageformats_id: 'imageformats_id',
  is_dynamic: 'is_dynamic',
  is_deleted: 'is_deleted'
};

exports.Prisma.Glpi_items_devicecameras_imageresolutionsScalarFieldEnum = {
  id: 'id',
  items_devicecameras_id: 'items_devicecameras_id',
  imageresolutions_id: 'imageresolutions_id',
  is_dynamic: 'is_dynamic',
  is_deleted: 'is_deleted'
};

exports.Prisma.Glpi_items_devicecasesScalarFieldEnum = {
  id: 'id',
  items_id: 'items_id',
  itemtype: 'itemtype',
  devicecases_id: 'devicecases_id',
  is_deleted: 'is_deleted',
  is_dynamic: 'is_dynamic',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive',
  serial: 'serial',
  otherserial: 'otherserial',
  locations_id: 'locations_id',
  states_id: 'states_id'
};

exports.Prisma.Glpi_items_devicecontrolsScalarFieldEnum = {
  id: 'id',
  items_id: 'items_id',
  itemtype: 'itemtype',
  devicecontrols_id: 'devicecontrols_id',
  is_deleted: 'is_deleted',
  is_dynamic: 'is_dynamic',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive',
  serial: 'serial',
  busID: 'busID',
  otherserial: 'otherserial',
  locations_id: 'locations_id',
  states_id: 'states_id'
};

exports.Prisma.Glpi_items_devicedrivesScalarFieldEnum = {
  id: 'id',
  items_id: 'items_id',
  itemtype: 'itemtype',
  devicedrives_id: 'devicedrives_id',
  is_deleted: 'is_deleted',
  is_dynamic: 'is_dynamic',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive',
  serial: 'serial',
  busID: 'busID',
  otherserial: 'otherserial',
  locations_id: 'locations_id',
  states_id: 'states_id'
};

exports.Prisma.Glpi_items_devicefirmwaresScalarFieldEnum = {
  id: 'id',
  items_id: 'items_id',
  itemtype: 'itemtype',
  devicefirmwares_id: 'devicefirmwares_id',
  is_deleted: 'is_deleted',
  is_dynamic: 'is_dynamic',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive',
  serial: 'serial',
  otherserial: 'otherserial',
  locations_id: 'locations_id',
  states_id: 'states_id'
};

exports.Prisma.Glpi_items_devicegenericsScalarFieldEnum = {
  id: 'id',
  items_id: 'items_id',
  itemtype: 'itemtype',
  devicegenerics_id: 'devicegenerics_id',
  is_deleted: 'is_deleted',
  is_dynamic: 'is_dynamic',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive',
  serial: 'serial',
  otherserial: 'otherserial',
  locations_id: 'locations_id',
  states_id: 'states_id'
};

exports.Prisma.Glpi_items_devicegraphiccardsScalarFieldEnum = {
  id: 'id',
  items_id: 'items_id',
  itemtype: 'itemtype',
  devicegraphiccards_id: 'devicegraphiccards_id',
  memory: 'memory',
  is_deleted: 'is_deleted',
  is_dynamic: 'is_dynamic',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive',
  serial: 'serial',
  busID: 'busID',
  otherserial: 'otherserial',
  locations_id: 'locations_id',
  states_id: 'states_id'
};

exports.Prisma.Glpi_items_deviceharddrivesScalarFieldEnum = {
  id: 'id',
  items_id: 'items_id',
  itemtype: 'itemtype',
  deviceharddrives_id: 'deviceharddrives_id',
  capacity: 'capacity',
  serial: 'serial',
  is_deleted: 'is_deleted',
  is_dynamic: 'is_dynamic',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive',
  busID: 'busID',
  otherserial: 'otherserial',
  locations_id: 'locations_id',
  states_id: 'states_id'
};

exports.Prisma.Glpi_items_devicememoriesScalarFieldEnum = {
  id: 'id',
  items_id: 'items_id',
  itemtype: 'itemtype',
  devicememories_id: 'devicememories_id',
  size: 'size',
  serial: 'serial',
  is_deleted: 'is_deleted',
  is_dynamic: 'is_dynamic',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive',
  busID: 'busID',
  otherserial: 'otherserial',
  locations_id: 'locations_id',
  states_id: 'states_id'
};

exports.Prisma.Glpi_items_devicemotherboardsScalarFieldEnum = {
  id: 'id',
  items_id: 'items_id',
  itemtype: 'itemtype',
  devicemotherboards_id: 'devicemotherboards_id',
  is_deleted: 'is_deleted',
  is_dynamic: 'is_dynamic',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive',
  serial: 'serial',
  otherserial: 'otherserial',
  locations_id: 'locations_id',
  states_id: 'states_id'
};

exports.Prisma.Glpi_items_devicenetworkcardsScalarFieldEnum = {
  id: 'id',
  items_id: 'items_id',
  itemtype: 'itemtype',
  devicenetworkcards_id: 'devicenetworkcards_id',
  mac: 'mac',
  is_deleted: 'is_deleted',
  is_dynamic: 'is_dynamic',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive',
  serial: 'serial',
  busID: 'busID',
  otherserial: 'otherserial',
  locations_id: 'locations_id',
  states_id: 'states_id'
};

exports.Prisma.Glpi_items_devicepcisScalarFieldEnum = {
  id: 'id',
  items_id: 'items_id',
  itemtype: 'itemtype',
  devicepcis_id: 'devicepcis_id',
  is_deleted: 'is_deleted',
  is_dynamic: 'is_dynamic',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive',
  serial: 'serial',
  busID: 'busID',
  otherserial: 'otherserial',
  locations_id: 'locations_id',
  states_id: 'states_id'
};

exports.Prisma.Glpi_items_devicepowersuppliesScalarFieldEnum = {
  id: 'id',
  items_id: 'items_id',
  itemtype: 'itemtype',
  devicepowersupplies_id: 'devicepowersupplies_id',
  is_deleted: 'is_deleted',
  is_dynamic: 'is_dynamic',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive',
  serial: 'serial',
  otherserial: 'otherserial',
  locations_id: 'locations_id',
  states_id: 'states_id'
};

exports.Prisma.Glpi_items_deviceprocessorsScalarFieldEnum = {
  id: 'id',
  items_id: 'items_id',
  itemtype: 'itemtype',
  deviceprocessors_id: 'deviceprocessors_id',
  frequency: 'frequency',
  serial: 'serial',
  is_deleted: 'is_deleted',
  is_dynamic: 'is_dynamic',
  nbcores: 'nbcores',
  nbthreads: 'nbthreads',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive',
  busID: 'busID',
  otherserial: 'otherserial',
  locations_id: 'locations_id',
  states_id: 'states_id'
};

exports.Prisma.Glpi_items_devicesensorsScalarFieldEnum = {
  id: 'id',
  items_id: 'items_id',
  itemtype: 'itemtype',
  devicesensors_id: 'devicesensors_id',
  is_deleted: 'is_deleted',
  is_dynamic: 'is_dynamic',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive',
  serial: 'serial',
  otherserial: 'otherserial',
  locations_id: 'locations_id',
  states_id: 'states_id'
};

exports.Prisma.Glpi_items_devicesimcardsScalarFieldEnum = {
  id: 'id',
  items_id: 'items_id',
  itemtype: 'itemtype',
  devicesimcards_id: 'devicesimcards_id',
  is_deleted: 'is_deleted',
  is_dynamic: 'is_dynamic',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive',
  serial: 'serial',
  otherserial: 'otherserial',
  states_id: 'states_id',
  locations_id: 'locations_id',
  lines_id: 'lines_id',
  users_id: 'users_id',
  groups_id: 'groups_id',
  pin: 'pin',
  pin2: 'pin2',
  puk: 'puk',
  puk2: 'puk2',
  msin: 'msin',
  comment: 'comment'
};

exports.Prisma.Glpi_items_devicesoundcardsScalarFieldEnum = {
  id: 'id',
  items_id: 'items_id',
  itemtype: 'itemtype',
  devicesoundcards_id: 'devicesoundcards_id',
  is_deleted: 'is_deleted',
  is_dynamic: 'is_dynamic',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive',
  serial: 'serial',
  busID: 'busID',
  otherserial: 'otherserial',
  locations_id: 'locations_id',
  states_id: 'states_id'
};

exports.Prisma.Glpi_items_disksScalarFieldEnum = {
  id: 'id',
  entities_id: 'entities_id',
  itemtype: 'itemtype',
  items_id: 'items_id',
  name: 'name',
  device: 'device',
  mountpoint: 'mountpoint',
  filesystems_id: 'filesystems_id',
  totalsize: 'totalsize',
  freesize: 'freesize',
  is_deleted: 'is_deleted',
  is_dynamic: 'is_dynamic',
  encryption_status: 'encryption_status',
  encryption_tool: 'encryption_tool',
  encryption_algorithm: 'encryption_algorithm',
  encryption_type: 'encryption_type',
  date_mod: 'date_mod',
  date_creation: 'date_creation'
};

exports.Prisma.Glpi_items_enclosuresScalarFieldEnum = {
  id: 'id',
  enclosures_id: 'enclosures_id',
  itemtype: 'itemtype',
  items_id: 'items_id',
  position: 'position'
};

exports.Prisma.Glpi_items_kanbansScalarFieldEnum = {
  id: 'id',
  itemtype: 'itemtype',
  items_id: 'items_id',
  users_id: 'users_id',
  state: 'state',
  date_mod: 'date_mod',
  date_creation: 'date_creation'
};

exports.Prisma.Glpi_items_operatingsystemsScalarFieldEnum = {
  id: 'id',
  items_id: 'items_id',
  itemtype: 'itemtype',
  operatingsystems_id: 'operatingsystems_id',
  operatingsystemversions_id: 'operatingsystemversions_id',
  operatingsystemservicepacks_id: 'operatingsystemservicepacks_id',
  operatingsystemarchitectures_id: 'operatingsystemarchitectures_id',
  operatingsystemkernelversions_id: 'operatingsystemkernelversions_id',
  license_number: 'license_number',
  licenseid: 'licenseid',
  operatingsystemeditions_id: 'operatingsystemeditions_id',
  date_mod: 'date_mod',
  date_creation: 'date_creation',
  is_deleted: 'is_deleted',
  is_dynamic: 'is_dynamic',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive',
  install_date: 'install_date',
  company: 'company',
  owner: 'owner',
  hostid: 'hostid'
};

exports.Prisma.Glpi_items_problemsScalarFieldEnum = {
  id: 'id',
  problems_id: 'problems_id',
  itemtype: 'itemtype',
  items_id: 'items_id'
};

exports.Prisma.Glpi_items_projectsScalarFieldEnum = {
  id: 'id',
  projects_id: 'projects_id',
  itemtype: 'itemtype',
  items_id: 'items_id'
};

exports.Prisma.Glpi_items_racksScalarFieldEnum = {
  id: 'id',
  racks_id: 'racks_id',
  itemtype: 'itemtype',
  items_id: 'items_id',
  position: 'position',
  orientation: 'orientation',
  bgcolor: 'bgcolor',
  hpos: 'hpos',
  is_reserved: 'is_reserved'
};

exports.Prisma.Glpi_items_remotemanagementsScalarFieldEnum = {
  id: 'id',
  itemtype: 'itemtype',
  items_id: 'items_id',
  remoteid: 'remoteid',
  type: 'type',
  is_dynamic: 'is_dynamic',
  is_deleted: 'is_deleted'
};

exports.Prisma.Glpi_items_softwarelicensesScalarFieldEnum = {
  id: 'id',
  items_id: 'items_id',
  itemtype: 'itemtype',
  softwarelicenses_id: 'softwarelicenses_id',
  is_deleted: 'is_deleted',
  is_dynamic: 'is_dynamic'
};

exports.Prisma.Glpi_items_softwareversionsScalarFieldEnum = {
  id: 'id',
  items_id: 'items_id',
  itemtype: 'itemtype',
  softwareversions_id: 'softwareversions_id',
  is_deleted_item: 'is_deleted_item',
  is_template_item: 'is_template_item',
  entities_id: 'entities_id',
  is_deleted: 'is_deleted',
  is_dynamic: 'is_dynamic',
  date_install: 'date_install'
};

exports.Prisma.Glpi_items_ticketsScalarFieldEnum = {
  id: 'id',
  itemtype: 'itemtype',
  items_id: 'items_id',
  tickets_id: 'tickets_id'
};

exports.Prisma.Glpi_itilcategoriesScalarFieldEnum = {
  id: 'id',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive',
  itilcategories_id: 'itilcategories_id',
  name: 'name',
  completename: 'completename',
  comment: 'comment',
  level: 'level',
  knowbaseitemcategories_id: 'knowbaseitemcategories_id',
  users_id: 'users_id',
  groups_id: 'groups_id',
  code: 'code',
  ancestors_cache: 'ancestors_cache',
  sons_cache: 'sons_cache',
  is_helpdeskvisible: 'is_helpdeskvisible',
  tickettemplates_id_incident: 'tickettemplates_id_incident',
  tickettemplates_id_demand: 'tickettemplates_id_demand',
  changetemplates_id: 'changetemplates_id',
  problemtemplates_id: 'problemtemplates_id',
  is_incident: 'is_incident',
  is_request: 'is_request',
  is_problem: 'is_problem',
  is_change: 'is_change',
  date_mod: 'date_mod',
  date_creation: 'date_creation'
};

exports.Prisma.Glpi_itilfollowupsScalarFieldEnum = {
  id: 'id',
  itemtype: 'itemtype',
  items_id: 'items_id',
  date: 'date',
  users_id: 'users_id',
  users_id_editor: 'users_id_editor',
  content: 'content',
  is_private: 'is_private',
  requesttypes_id: 'requesttypes_id',
  date_mod: 'date_mod',
  date_creation: 'date_creation',
  timeline_position: 'timeline_position',
  sourceitems_id: 'sourceitems_id',
  sourceof_items_id: 'sourceof_items_id'
};

exports.Prisma.Glpi_itilfollowuptemplatesScalarFieldEnum = {
  id: 'id',
  date_creation: 'date_creation',
  date_mod: 'date_mod',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive',
  name: 'name',
  content: 'content',
  requesttypes_id: 'requesttypes_id',
  is_private: 'is_private',
  comment: 'comment'
};

exports.Prisma.Glpi_itils_projectsScalarFieldEnum = {
  id: 'id',
  itemtype: 'itemtype',
  items_id: 'items_id',
  projects_id: 'projects_id'
};

exports.Prisma.Glpi_itilsolutionsScalarFieldEnum = {
  id: 'id',
  itemtype: 'itemtype',
  items_id: 'items_id',
  solutiontypes_id: 'solutiontypes_id',
  solutiontype_name: 'solutiontype_name',
  content: 'content',
  date_creation: 'date_creation',
  date_mod: 'date_mod',
  date_approval: 'date_approval',
  users_id: 'users_id',
  user_name: 'user_name',
  users_id_editor: 'users_id_editor',
  users_id_approval: 'users_id_approval',
  user_name_approval: 'user_name_approval',
  status: 'status',
  itilfollowups_id: 'itilfollowups_id'
};

exports.Prisma.Glpi_knowbaseitemcategoriesScalarFieldEnum = {
  id: 'id',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive',
  knowbaseitemcategories_id: 'knowbaseitemcategories_id',
  name: 'name',
  completename: 'completename',
  comment: 'comment',
  level: 'level',
  sons_cache: 'sons_cache',
  ancestors_cache: 'ancestors_cache',
  date_mod: 'date_mod',
  date_creation: 'date_creation'
};

exports.Prisma.Glpi_knowbaseitemsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  answer: 'answer',
  is_faq: 'is_faq',
  users_id: 'users_id',
  view: 'view',
  date_creation: 'date_creation',
  date_mod: 'date_mod',
  begin_date: 'begin_date',
  end_date: 'end_date'
};

exports.Prisma.Glpi_knowbaseitems_commentsScalarFieldEnum = {
  id: 'id',
  knowbaseitems_id: 'knowbaseitems_id',
  users_id: 'users_id',
  language: 'language',
  comment: 'comment',
  parent_comment_id: 'parent_comment_id',
  date_creation: 'date_creation',
  date_mod: 'date_mod'
};

exports.Prisma.Glpi_knowbaseitems_itemsScalarFieldEnum = {
  id: 'id',
  knowbaseitems_id: 'knowbaseitems_id',
  itemtype: 'itemtype',
  items_id: 'items_id',
  date_creation: 'date_creation',
  date_mod: 'date_mod'
};

exports.Prisma.Glpi_knowbaseitems_knowbaseitemcategoriesScalarFieldEnum = {
  id: 'id',
  knowbaseitems_id: 'knowbaseitems_id',
  knowbaseitemcategories_id: 'knowbaseitemcategories_id'
};

exports.Prisma.Glpi_knowbaseitems_profilesScalarFieldEnum = {
  id: 'id',
  knowbaseitems_id: 'knowbaseitems_id',
  profiles_id: 'profiles_id',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive',
  no_entity_restriction: 'no_entity_restriction'
};

exports.Prisma.Glpi_knowbaseitems_revisionsScalarFieldEnum = {
  id: 'id',
  knowbaseitems_id: 'knowbaseitems_id',
  revision: 'revision',
  name: 'name',
  answer: 'answer',
  language: 'language',
  users_id: 'users_id',
  date: 'date'
};

exports.Prisma.Glpi_knowbaseitems_usersScalarFieldEnum = {
  id: 'id',
  knowbaseitems_id: 'knowbaseitems_id',
  users_id: 'users_id'
};

exports.Prisma.Glpi_knowbaseitemtranslationsScalarFieldEnum = {
  id: 'id',
  knowbaseitems_id: 'knowbaseitems_id',
  language: 'language',
  name: 'name',
  answer: 'answer',
  users_id: 'users_id',
  date_mod: 'date_mod',
  date_creation: 'date_creation'
};

exports.Prisma.Glpi_lineoperatorsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  comment: 'comment',
  mcc: 'mcc',
  mnc: 'mnc',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive',
  date_mod: 'date_mod',
  date_creation: 'date_creation'
};

exports.Prisma.Glpi_linesScalarFieldEnum = {
  id: 'id',
  name: 'name',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive',
  is_deleted: 'is_deleted',
  caller_num: 'caller_num',
  caller_name: 'caller_name',
  users_id: 'users_id',
  groups_id: 'groups_id',
  lineoperators_id: 'lineoperators_id',
  locations_id: 'locations_id',
  states_id: 'states_id',
  linetypes_id: 'linetypes_id',
  date_creation: 'date_creation',
  date_mod: 'date_mod',
  comment: 'comment'
};

exports.Prisma.Glpi_linetypesScalarFieldEnum = {
  id: 'id',
  name: 'name',
  comment: 'comment',
  date_mod: 'date_mod',
  date_creation: 'date_creation'
};

exports.Prisma.Glpi_linksScalarFieldEnum = {
  id: 'id',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive',
  name: 'name',
  link: 'link',
  data: 'data',
  open_window: 'open_window',
  date_mod: 'date_mod',
  date_creation: 'date_creation'
};

exports.Prisma.Glpi_links_itemtypesScalarFieldEnum = {
  id: 'id',
  links_id: 'links_id',
  itemtype: 'itemtype'
};

exports.Prisma.Glpi_locationsScalarFieldEnum = {
  id: 'id',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive',
  name: 'name',
  locations_id: 'locations_id',
  completename: 'completename',
  comment: 'comment',
  level: 'level',
  ancestors_cache: 'ancestors_cache',
  sons_cache: 'sons_cache',
  address: 'address',
  postcode: 'postcode',
  town: 'town',
  state: 'state',
  country: 'country',
  building: 'building',
  room: 'room',
  latitude: 'latitude',
  longitude: 'longitude',
  altitude: 'altitude',
  date_mod: 'date_mod',
  date_creation: 'date_creation'
};

exports.Prisma.Glpi_lockedfieldsScalarFieldEnum = {
  id: 'id',
  itemtype: 'itemtype',
  items_id: 'items_id',
  field: 'field',
  value: 'value',
  date_mod: 'date_mod',
  date_creation: 'date_creation',
  is_global: 'is_global'
};

exports.Prisma.Glpi_logsScalarFieldEnum = {
  id: 'id',
  itemtype: 'itemtype',
  items_id: 'items_id',
  itemtype_link: 'itemtype_link',
  linked_action: 'linked_action',
  user_name: 'user_name',
  date_mod: 'date_mod',
  id_search_option: 'id_search_option',
  old_value: 'old_value',
  new_value: 'new_value'
};

exports.Prisma.Glpi_mailcollectorsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  host: 'host',
  login: 'login',
  filesize_max: 'filesize_max',
  is_active: 'is_active',
  date_mod: 'date_mod',
  comment: 'comment',
  passwd: 'passwd',
  accepted: 'accepted',
  refused: 'refused',
  errors: 'errors',
  use_mail_date: 'use_mail_date',
  date_creation: 'date_creation',
  requester_field: 'requester_field',
  add_cc_to_observer: 'add_cc_to_observer',
  collect_only_unread: 'collect_only_unread',
  last_collect_date: 'last_collect_date'
};

exports.Prisma.Glpi_manuallinksScalarFieldEnum = {
  id: 'id',
  name: 'name',
  url: 'url',
  open_window: 'open_window',
  icon: 'icon',
  comment: 'comment',
  items_id: 'items_id',
  itemtype: 'itemtype',
  date_creation: 'date_creation',
  date_mod: 'date_mod'
};

exports.Prisma.Glpi_manufacturersScalarFieldEnum = {
  id: 'id',
  name: 'name',
  comment: 'comment',
  date_mod: 'date_mod',
  date_creation: 'date_creation'
};

exports.Prisma.Glpi_monitormodelsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  comment: 'comment',
  product_number: 'product_number',
  weight: 'weight',
  required_units: 'required_units',
  depth: 'depth',
  power_connections: 'power_connections',
  power_consumption: 'power_consumption',
  is_half_rack: 'is_half_rack',
  picture_front: 'picture_front',
  picture_rear: 'picture_rear',
  pictures: 'pictures',
  date_mod: 'date_mod',
  date_creation: 'date_creation'
};

exports.Prisma.Glpi_monitorsScalarFieldEnum = {
  id: 'id',
  entities_id: 'entities_id',
  name: 'name',
  date_mod: 'date_mod',
  contact: 'contact',
  contact_num: 'contact_num',
  users_id_tech: 'users_id_tech',
  groups_id_tech: 'groups_id_tech',
  comment: 'comment',
  serial: 'serial',
  otherserial: 'otherserial',
  size: 'size',
  have_micro: 'have_micro',
  have_speaker: 'have_speaker',
  have_subd: 'have_subd',
  have_bnc: 'have_bnc',
  have_dvi: 'have_dvi',
  have_pivot: 'have_pivot',
  have_hdmi: 'have_hdmi',
  have_displayport: 'have_displayport',
  locations_id: 'locations_id',
  monitortypes_id: 'monitortypes_id',
  monitormodels_id: 'monitormodels_id',
  manufacturers_id: 'manufacturers_id',
  is_global: 'is_global',
  is_deleted: 'is_deleted',
  is_template: 'is_template',
  template_name: 'template_name',
  users_id: 'users_id',
  groups_id: 'groups_id',
  states_id: 'states_id',
  ticket_tco: 'ticket_tco',
  is_dynamic: 'is_dynamic',
  autoupdatesystems_id: 'autoupdatesystems_id',
  uuid: 'uuid',
  date_creation: 'date_creation',
  is_recursive: 'is_recursive'
};

exports.Prisma.Glpi_monitortypesScalarFieldEnum = {
  id: 'id',
  name: 'name',
  comment: 'comment',
  date_mod: 'date_mod',
  date_creation: 'date_creation'
};

exports.Prisma.Glpi_networkaliasesScalarFieldEnum = {
  id: 'id',
  entities_id: 'entities_id',
  networknames_id: 'networknames_id',
  name: 'name',
  fqdns_id: 'fqdns_id',
  comment: 'comment'
};

exports.Prisma.Glpi_networkequipmentmodelsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  comment: 'comment',
  product_number: 'product_number',
  weight: 'weight',
  required_units: 'required_units',
  depth: 'depth',
  power_connections: 'power_connections',
  power_consumption: 'power_consumption',
  is_half_rack: 'is_half_rack',
  picture_front: 'picture_front',
  picture_rear: 'picture_rear',
  pictures: 'pictures',
  date_mod: 'date_mod',
  date_creation: 'date_creation'
};

exports.Prisma.Glpi_networkequipmentsScalarFieldEnum = {
  id: 'id',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive',
  name: 'name',
  ram: 'ram',
  serial: 'serial',
  otherserial: 'otherserial',
  contact: 'contact',
  contact_num: 'contact_num',
  users_id_tech: 'users_id_tech',
  groups_id_tech: 'groups_id_tech',
  date_mod: 'date_mod',
  comment: 'comment',
  locations_id: 'locations_id',
  networks_id: 'networks_id',
  networkequipmenttypes_id: 'networkequipmenttypes_id',
  networkequipmentmodels_id: 'networkequipmentmodels_id',
  manufacturers_id: 'manufacturers_id',
  is_deleted: 'is_deleted',
  is_template: 'is_template',
  template_name: 'template_name',
  users_id: 'users_id',
  groups_id: 'groups_id',
  states_id: 'states_id',
  ticket_tco: 'ticket_tco',
  is_dynamic: 'is_dynamic',
  uuid: 'uuid',
  date_creation: 'date_creation',
  autoupdatesystems_id: 'autoupdatesystems_id',
  sysdescr: 'sysdescr',
  cpu: 'cpu',
  uptime: 'uptime',
  last_inventory_update: 'last_inventory_update',
  snmpcredentials_id: 'snmpcredentials_id'
};

exports.Prisma.Glpi_networkequipmenttypesScalarFieldEnum = {
  id: 'id',
  name: 'name',
  comment: 'comment',
  date_mod: 'date_mod',
  date_creation: 'date_creation'
};

exports.Prisma.Glpi_networkinterfacesScalarFieldEnum = {
  id: 'id',
  name: 'name',
  comment: 'comment'
};

exports.Prisma.Glpi_networknamesScalarFieldEnum = {
  id: 'id',
  entities_id: 'entities_id',
  items_id: 'items_id',
  itemtype: 'itemtype',
  name: 'name',
  comment: 'comment',
  fqdns_id: 'fqdns_id',
  ipnetworks_id: 'ipnetworks_id',
  is_deleted: 'is_deleted',
  is_dynamic: 'is_dynamic',
  date_mod: 'date_mod',
  date_creation: 'date_creation'
};

exports.Prisma.Glpi_networkportaggregatesScalarFieldEnum = {
  id: 'id',
  networkports_id: 'networkports_id',
  networkports_id_list: 'networkports_id_list',
  date_mod: 'date_mod',
  date_creation: 'date_creation'
};

exports.Prisma.Glpi_networkportaliasesScalarFieldEnum = {
  id: 'id',
  networkports_id: 'networkports_id',
  networkports_id_alias: 'networkports_id_alias',
  date_mod: 'date_mod',
  date_creation: 'date_creation'
};

exports.Prisma.Glpi_networkportconnectionlogsScalarFieldEnum = {
  id: 'id',
  date: 'date',
  connected: 'connected',
  networkports_id_source: 'networkports_id_source',
  networkports_id_destination: 'networkports_id_destination'
};

exports.Prisma.Glpi_networkportdialupsScalarFieldEnum = {
  id: 'id',
  networkports_id: 'networkports_id',
  date_mod: 'date_mod',
  date_creation: 'date_creation'
};

exports.Prisma.Glpi_networkportethernetsScalarFieldEnum = {
  id: 'id',
  networkports_id: 'networkports_id',
  items_devicenetworkcards_id: 'items_devicenetworkcards_id',
  type: 'type',
  speed: 'speed',
  date_mod: 'date_mod',
  date_creation: 'date_creation'
};

exports.Prisma.Glpi_networkportfiberchannelsScalarFieldEnum = {
  id: 'id',
  networkports_id: 'networkports_id',
  items_devicenetworkcards_id: 'items_devicenetworkcards_id',
  networkportfiberchanneltypes_id: 'networkportfiberchanneltypes_id',
  wwn: 'wwn',
  speed: 'speed',
  date_mod: 'date_mod',
  date_creation: 'date_creation'
};

exports.Prisma.Glpi_networkportfiberchanneltypesScalarFieldEnum = {
  id: 'id',
  name: 'name',
  comment: 'comment',
  date_mod: 'date_mod',
  date_creation: 'date_creation'
};

exports.Prisma.Glpi_networkportlocalsScalarFieldEnum = {
  id: 'id',
  networkports_id: 'networkports_id',
  date_mod: 'date_mod',
  date_creation: 'date_creation'
};

exports.Prisma.Glpi_networkportmetricsScalarFieldEnum = {
  id: 'id',
  date: 'date',
  ifinbytes: 'ifinbytes',
  ifinerrors: 'ifinerrors',
  ifoutbytes: 'ifoutbytes',
  ifouterrors: 'ifouterrors',
  networkports_id: 'networkports_id',
  date_creation: 'date_creation',
  date_mod: 'date_mod'
};

exports.Prisma.Glpi_networkportsScalarFieldEnum = {
  id: 'id',
  items_id: 'items_id',
  itemtype: 'itemtype',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive',
  logical_number: 'logical_number',
  name: 'name',
  instantiation_type: 'instantiation_type',
  mac: 'mac',
  comment: 'comment',
  is_deleted: 'is_deleted',
  is_dynamic: 'is_dynamic',
  date_mod: 'date_mod',
  date_creation: 'date_creation',
  ifmtu: 'ifmtu',
  ifspeed: 'ifspeed',
  ifinternalstatus: 'ifinternalstatus',
  ifconnectionstatus: 'ifconnectionstatus',
  iflastchange: 'iflastchange',
  ifinbytes: 'ifinbytes',
  ifinerrors: 'ifinerrors',
  ifoutbytes: 'ifoutbytes',
  ifouterrors: 'ifouterrors',
  ifstatus: 'ifstatus',
  ifdescr: 'ifdescr',
  ifalias: 'ifalias',
  portduplex: 'portduplex',
  trunk: 'trunk',
  lastup: 'lastup'
};

exports.Prisma.Glpi_networkports_networkportsScalarFieldEnum = {
  id: 'id',
  networkports_id_1: 'networkports_id_1',
  networkports_id_2: 'networkports_id_2'
};

exports.Prisma.Glpi_networkports_vlansScalarFieldEnum = {
  id: 'id',
  networkports_id: 'networkports_id',
  vlans_id: 'vlans_id',
  tagged: 'tagged'
};

exports.Prisma.Glpi_networkporttypesScalarFieldEnum = {
  id: 'id',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive',
  value_decimal: 'value_decimal',
  name: 'name',
  comment: 'comment',
  is_importable: 'is_importable',
  instantiation_type: 'instantiation_type',
  date_creation: 'date_creation',
  date_mod: 'date_mod'
};

exports.Prisma.Glpi_networkportwifisScalarFieldEnum = {
  id: 'id',
  networkports_id: 'networkports_id',
  items_devicenetworkcards_id: 'items_devicenetworkcards_id',
  wifinetworks_id: 'wifinetworks_id',
  networkportwifis_id: 'networkportwifis_id',
  version: 'version',
  mode: 'mode',
  date_mod: 'date_mod',
  date_creation: 'date_creation'
};

exports.Prisma.Glpi_networksScalarFieldEnum = {
  id: 'id',
  name: 'name',
  comment: 'comment',
  date_mod: 'date_mod',
  date_creation: 'date_creation'
};

exports.Prisma.Glpi_notepadsScalarFieldEnum = {
  id: 'id',
  itemtype: 'itemtype',
  items_id: 'items_id',
  date_creation: 'date_creation',
  date_mod: 'date_mod',
  users_id: 'users_id',
  users_id_lastupdater: 'users_id_lastupdater',
  content: 'content'
};

exports.Prisma.Glpi_notificationsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  entities_id: 'entities_id',
  itemtype: 'itemtype',
  event: 'event',
  comment: 'comment',
  is_recursive: 'is_recursive',
  is_active: 'is_active',
  date_mod: 'date_mod',
  date_creation: 'date_creation',
  allow_response: 'allow_response'
};

exports.Prisma.Glpi_notifications_notificationtemplatesScalarFieldEnum = {
  id: 'id',
  notifications_id: 'notifications_id',
  mode: 'mode',
  notificationtemplates_id: 'notificationtemplates_id'
};

exports.Prisma.Glpi_notificationtargetsScalarFieldEnum = {
  id: 'id',
  items_id: 'items_id',
  type: 'type',
  notifications_id: 'notifications_id'
};

exports.Prisma.Glpi_notificationtemplatesScalarFieldEnum = {
  id: 'id',
  name: 'name',
  itemtype: 'itemtype',
  date_mod: 'date_mod',
  comment: 'comment',
  css: 'css',
  date_creation: 'date_creation'
};

exports.Prisma.Glpi_notificationtemplatetranslationsScalarFieldEnum = {
  id: 'id',
  notificationtemplates_id: 'notificationtemplates_id',
  language: 'language',
  subject: 'subject',
  content_text: 'content_text',
  content_html: 'content_html'
};

exports.Prisma.Glpi_notimportedemailsScalarFieldEnum = {
  id: 'id',
  from: 'from',
  to: 'to',
  mailcollectors_id: 'mailcollectors_id',
  date: 'date',
  subject: 'subject',
  messageid: 'messageid',
  reason: 'reason',
  users_id: 'users_id'
};

exports.Prisma.Glpi_objectlocksScalarFieldEnum = {
  id: 'id',
  itemtype: 'itemtype',
  items_id: 'items_id',
  users_id: 'users_id',
  date: 'date'
};

exports.Prisma.Glpi_olalevelactionsScalarFieldEnum = {
  id: 'id',
  olalevels_id: 'olalevels_id',
  action_type: 'action_type',
  field: 'field',
  value: 'value'
};

exports.Prisma.Glpi_olalevelcriteriasScalarFieldEnum = {
  id: 'id',
  olalevels_id: 'olalevels_id',
  criteria: 'criteria',
  condition: 'condition',
  pattern: 'pattern'
};

exports.Prisma.Glpi_olalevelsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  olas_id: 'olas_id',
  execution_time: 'execution_time',
  is_active: 'is_active',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive',
  match: 'match',
  uuid: 'uuid'
};

exports.Prisma.Glpi_olalevels_ticketsScalarFieldEnum = {
  id: 'id',
  tickets_id: 'tickets_id',
  olalevels_id: 'olalevels_id',
  date: 'date'
};

exports.Prisma.Glpi_olasScalarFieldEnum = {
  id: 'id',
  name: 'name',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive',
  type: 'type',
  comment: 'comment',
  number_time: 'number_time',
  use_ticket_calendar: 'use_ticket_calendar',
  calendars_id: 'calendars_id',
  date_mod: 'date_mod',
  definition_time: 'definition_time',
  end_of_working_day: 'end_of_working_day',
  date_creation: 'date_creation',
  slms_id: 'slms_id'
};

exports.Prisma.Glpi_operatingsystemarchitecturesScalarFieldEnum = {
  id: 'id',
  name: 'name',
  comment: 'comment',
  date_mod: 'date_mod',
  date_creation: 'date_creation'
};

exports.Prisma.Glpi_operatingsystemeditionsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  comment: 'comment',
  date_mod: 'date_mod',
  date_creation: 'date_creation'
};

exports.Prisma.Glpi_operatingsystemkernelsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  comment: 'comment',
  date_mod: 'date_mod',
  date_creation: 'date_creation'
};

exports.Prisma.Glpi_operatingsystemkernelversionsScalarFieldEnum = {
  id: 'id',
  operatingsystemkernels_id: 'operatingsystemkernels_id',
  name: 'name',
  comment: 'comment',
  date_mod: 'date_mod',
  date_creation: 'date_creation'
};

exports.Prisma.Glpi_operatingsystemsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  comment: 'comment',
  date_mod: 'date_mod',
  date_creation: 'date_creation'
};

exports.Prisma.Glpi_operatingsystemservicepacksScalarFieldEnum = {
  id: 'id',
  name: 'name',
  comment: 'comment',
  date_mod: 'date_mod',
  date_creation: 'date_creation'
};

exports.Prisma.Glpi_operatingsystemversionsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  comment: 'comment',
  date_mod: 'date_mod',
  date_creation: 'date_creation'
};

exports.Prisma.Glpi_passivedcequipmentmodelsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  comment: 'comment',
  product_number: 'product_number',
  weight: 'weight',
  required_units: 'required_units',
  depth: 'depth',
  power_connections: 'power_connections',
  power_consumption: 'power_consumption',
  is_half_rack: 'is_half_rack',
  picture_front: 'picture_front',
  picture_rear: 'picture_rear',
  pictures: 'pictures',
  date_mod: 'date_mod',
  date_creation: 'date_creation'
};

exports.Prisma.Glpi_passivedcequipmentsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive',
  locations_id: 'locations_id',
  serial: 'serial',
  otherserial: 'otherserial',
  passivedcequipmentmodels_id: 'passivedcequipmentmodels_id',
  passivedcequipmenttypes_id: 'passivedcequipmenttypes_id',
  users_id_tech: 'users_id_tech',
  groups_id_tech: 'groups_id_tech',
  is_template: 'is_template',
  template_name: 'template_name',
  is_deleted: 'is_deleted',
  states_id: 'states_id',
  comment: 'comment',
  manufacturers_id: 'manufacturers_id',
  date_mod: 'date_mod',
  date_creation: 'date_creation'
};

exports.Prisma.Glpi_passivedcequipmenttypesScalarFieldEnum = {
  id: 'id',
  name: 'name',
  comment: 'comment',
  date_mod: 'date_mod',
  date_creation: 'date_creation'
};

exports.Prisma.Glpi_pcivendorsScalarFieldEnum = {
  id: 'id',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive',
  vendorid: 'vendorid',
  deviceid: 'deviceid',
  name: 'name',
  comment: 'comment',
  date_creation: 'date_creation',
  date_mod: 'date_mod'
};

exports.Prisma.Glpi_pdumodelsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  comment: 'comment',
  product_number: 'product_number',
  weight: 'weight',
  required_units: 'required_units',
  depth: 'depth',
  power_connections: 'power_connections',
  max_power: 'max_power',
  is_half_rack: 'is_half_rack',
  picture_front: 'picture_front',
  picture_rear: 'picture_rear',
  pictures: 'pictures',
  is_rackable: 'is_rackable',
  date_mod: 'date_mod',
  date_creation: 'date_creation'
};

exports.Prisma.Glpi_pdusScalarFieldEnum = {
  id: 'id',
  name: 'name',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive',
  locations_id: 'locations_id',
  serial: 'serial',
  otherserial: 'otherserial',
  pdumodels_id: 'pdumodels_id',
  users_id_tech: 'users_id_tech',
  groups_id_tech: 'groups_id_tech',
  is_template: 'is_template',
  template_name: 'template_name',
  is_deleted: 'is_deleted',
  states_id: 'states_id',
  comment: 'comment',
  manufacturers_id: 'manufacturers_id',
  pdutypes_id: 'pdutypes_id',
  date_mod: 'date_mod',
  date_creation: 'date_creation'
};

exports.Prisma.Glpi_pdus_plugsScalarFieldEnum = {
  id: 'id',
  plugs_id: 'plugs_id',
  pdus_id: 'pdus_id',
  number_plugs: 'number_plugs',
  date_mod: 'date_mod',
  date_creation: 'date_creation'
};

exports.Prisma.Glpi_pdus_racksScalarFieldEnum = {
  id: 'id',
  racks_id: 'racks_id',
  pdus_id: 'pdus_id',
  side: 'side',
  position: 'position',
  bgcolor: 'bgcolor',
  date_mod: 'date_mod',
  date_creation: 'date_creation'
};

exports.Prisma.Glpi_pdutypesScalarFieldEnum = {
  id: 'id',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive',
  name: 'name',
  comment: 'comment',
  date_creation: 'date_creation',
  date_mod: 'date_mod'
};

exports.Prisma.Glpi_pendingreasonsScalarFieldEnum = {
  id: 'id',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive',
  name: 'name',
  followup_frequency: 'followup_frequency',
  followups_before_resolution: 'followups_before_resolution',
  itilfollowuptemplates_id: 'itilfollowuptemplates_id',
  solutiontemplates_id: 'solutiontemplates_id',
  comment: 'comment'
};

exports.Prisma.Glpi_pendingreasons_itemsScalarFieldEnum = {
  id: 'id',
  pendingreasons_id: 'pendingreasons_id',
  items_id: 'items_id',
  itemtype: 'itemtype',
  followup_frequency: 'followup_frequency',
  followups_before_resolution: 'followups_before_resolution',
  bump_count: 'bump_count',
  last_bump_date: 'last_bump_date',
  previous_status: 'previous_status'
};

exports.Prisma.Glpi_peripheralmodelsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  comment: 'comment',
  product_number: 'product_number',
  weight: 'weight',
  required_units: 'required_units',
  depth: 'depth',
  power_connections: 'power_connections',
  power_consumption: 'power_consumption',
  is_half_rack: 'is_half_rack',
  picture_front: 'picture_front',
  picture_rear: 'picture_rear',
  pictures: 'pictures',
  date_mod: 'date_mod',
  date_creation: 'date_creation'
};

exports.Prisma.Glpi_peripheralsScalarFieldEnum = {
  id: 'id',
  entities_id: 'entities_id',
  name: 'name',
  date_mod: 'date_mod',
  contact: 'contact',
  contact_num: 'contact_num',
  users_id_tech: 'users_id_tech',
  groups_id_tech: 'groups_id_tech',
  comment: 'comment',
  serial: 'serial',
  otherserial: 'otherserial',
  locations_id: 'locations_id',
  peripheraltypes_id: 'peripheraltypes_id',
  peripheralmodels_id: 'peripheralmodels_id',
  brand: 'brand',
  manufacturers_id: 'manufacturers_id',
  is_global: 'is_global',
  is_deleted: 'is_deleted',
  is_template: 'is_template',
  template_name: 'template_name',
  users_id: 'users_id',
  groups_id: 'groups_id',
  states_id: 'states_id',
  ticket_tco: 'ticket_tco',
  is_dynamic: 'is_dynamic',
  autoupdatesystems_id: 'autoupdatesystems_id',
  uuid: 'uuid',
  date_creation: 'date_creation',
  is_recursive: 'is_recursive'
};

exports.Prisma.Glpi_peripheraltypesScalarFieldEnum = {
  id: 'id',
  name: 'name',
  comment: 'comment',
  date_mod: 'date_mod',
  date_creation: 'date_creation'
};

exports.Prisma.Glpi_phonemodelsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  comment: 'comment',
  product_number: 'product_number',
  date_mod: 'date_mod',
  date_creation: 'date_creation',
  picture_front: 'picture_front',
  picture_rear: 'picture_rear',
  pictures: 'pictures'
};

exports.Prisma.Glpi_phonepowersuppliesScalarFieldEnum = {
  id: 'id',
  name: 'name',
  comment: 'comment',
  date_mod: 'date_mod',
  date_creation: 'date_creation'
};

exports.Prisma.Glpi_phonesScalarFieldEnum = {
  id: 'id',
  entities_id: 'entities_id',
  name: 'name',
  date_mod: 'date_mod',
  contact: 'contact',
  contact_num: 'contact_num',
  users_id_tech: 'users_id_tech',
  groups_id_tech: 'groups_id_tech',
  comment: 'comment',
  serial: 'serial',
  otherserial: 'otherserial',
  locations_id: 'locations_id',
  phonetypes_id: 'phonetypes_id',
  phonemodels_id: 'phonemodels_id',
  brand: 'brand',
  phonepowersupplies_id: 'phonepowersupplies_id',
  number_line: 'number_line',
  have_headset: 'have_headset',
  have_hp: 'have_hp',
  manufacturers_id: 'manufacturers_id',
  is_global: 'is_global',
  is_deleted: 'is_deleted',
  is_template: 'is_template',
  template_name: 'template_name',
  users_id: 'users_id',
  groups_id: 'groups_id',
  states_id: 'states_id',
  ticket_tco: 'ticket_tco',
  is_dynamic: 'is_dynamic',
  autoupdatesystems_id: 'autoupdatesystems_id',
  uuid: 'uuid',
  date_creation: 'date_creation',
  is_recursive: 'is_recursive',
  last_inventory_update: 'last_inventory_update'
};

exports.Prisma.Glpi_phonetypesScalarFieldEnum = {
  id: 'id',
  name: 'name',
  comment: 'comment',
  date_mod: 'date_mod',
  date_creation: 'date_creation'
};

exports.Prisma.Glpi_planningeventcategoriesScalarFieldEnum = {
  id: 'id',
  name: 'name',
  color: 'color',
  comment: 'comment',
  date_mod: 'date_mod',
  date_creation: 'date_creation'
};

exports.Prisma.Glpi_planningexternaleventsScalarFieldEnum = {
  id: 'id',
  uuid: 'uuid',
  planningexternaleventtemplates_id: 'planningexternaleventtemplates_id',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive',
  date: 'date',
  users_id: 'users_id',
  users_id_guests: 'users_id_guests',
  groups_id: 'groups_id',
  name: 'name',
  text: 'text',
  begin: 'begin',
  end: 'end',
  rrule: 'rrule',
  state: 'state',
  planningeventcategories_id: 'planningeventcategories_id',
  background: 'background',
  date_mod: 'date_mod',
  date_creation: 'date_creation'
};

exports.Prisma.Glpi_planningexternaleventtemplatesScalarFieldEnum = {
  id: 'id',
  entities_id: 'entities_id',
  name: 'name',
  text: 'text',
  comment: 'comment',
  duration: 'duration',
  before_time: 'before_time',
  rrule: 'rrule',
  state: 'state',
  planningeventcategories_id: 'planningeventcategories_id',
  background: 'background',
  date_mod: 'date_mod',
  date_creation: 'date_creation'
};

exports.Prisma.Glpi_planningrecallsScalarFieldEnum = {
  id: 'id',
  items_id: 'items_id',
  itemtype: 'itemtype',
  users_id: 'users_id',
  before_time: 'before_time',
  when: 'when'
};

exports.Prisma.Glpi_plugin_barcode_configsScalarFieldEnum = {
  id: 'id',
  type: 'type'
};

exports.Prisma.Glpi_plugin_barcode_configs_typesScalarFieldEnum = {
  id: 'id',
  type: 'type',
  size: 'size',
  orientation: 'orientation',
  marginTop: 'marginTop',
  marginBottom: 'marginBottom',
  marginLeft: 'marginLeft',
  marginRight: 'marginRight',
  marginHorizontal: 'marginHorizontal',
  marginVertical: 'marginVertical',
  maxCodeWidth: 'maxCodeWidth',
  maxCodeHeight: 'maxCodeHeight',
  txtSize: 'txtSize',
  txtSpacing: 'txtSpacing'
};

exports.Prisma.Glpi_plugin_datainjection_infosScalarFieldEnum = {
  id: 'id',
  models_id: 'models_id',
  itemtype: 'itemtype',
  value: 'value',
  is_mandatory: 'is_mandatory'
};

exports.Prisma.Glpi_plugin_datainjection_mappingsScalarFieldEnum = {
  id: 'id',
  models_id: 'models_id',
  itemtype: 'itemtype',
  rank: 'rank',
  name: 'name',
  value: 'value',
  is_mandatory: 'is_mandatory'
};

exports.Prisma.Glpi_plugin_datainjection_modelcsvsScalarFieldEnum = {
  id: 'id',
  models_id: 'models_id',
  itemtype: 'itemtype',
  delimiter: 'delimiter',
  is_header_present: 'is_header_present'
};

exports.Prisma.Glpi_plugin_datainjection_modelsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  comment: 'comment',
  date_mod: 'date_mod',
  date_creation: 'date_creation',
  filetype: 'filetype',
  itemtype: 'itemtype',
  entities_id: 'entities_id',
  behavior_add: 'behavior_add',
  behavior_update: 'behavior_update',
  can_add_dropdown: 'can_add_dropdown',
  can_overwrite_if_not_empty: 'can_overwrite_if_not_empty',
  is_private: 'is_private',
  is_recursive: 'is_recursive',
  users_id: 'users_id',
  date_format: 'date_format',
  float_format: 'float_format',
  port_unicity: 'port_unicity',
  step: 'step'
};

exports.Prisma.Glpi_plugin_fields_containerdisplayconditionsScalarFieldEnum = {
  id: 'id',
  plugin_fields_containers_id: 'plugin_fields_containers_id',
  itemtype: 'itemtype',
  search_option: 'search_option',
  condition: 'condition',
  value: 'value',
  is_visible: 'is_visible'
};

exports.Prisma.Glpi_plugin_fields_containersScalarFieldEnum = {
  id: 'id',
  name: 'name',
  label: 'label',
  itemtypes: 'itemtypes',
  type: 'type',
  subtype: 'subtype',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive',
  is_active: 'is_active'
};

exports.Prisma.Glpi_plugin_fields_fieldsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  label: 'label',
  type: 'type',
  plugin_fields_containers_id: 'plugin_fields_containers_id',
  ranking: 'ranking',
  default_value: 'default_value',
  is_active: 'is_active',
  is_readonly: 'is_readonly',
  mandatory: 'mandatory',
  multiple: 'multiple',
  allowed_values: 'allowed_values'
};

exports.Prisma.Glpi_plugin_fields_labeltranslationsScalarFieldEnum = {
  id: 'id',
  itemtype: 'itemtype',
  items_id: 'items_id',
  language: 'language',
  label: 'label'
};

exports.Prisma.Glpi_plugin_fields_pluginformcreatorcategoryasdasdasdasdsScalarFieldEnum = {
  id: 'id',
  items_id: 'items_id',
  itemtype: 'itemtype',
  plugin_fields_containers_id: 'plugin_fields_containers_id'
};

exports.Prisma.Glpi_plugin_fields_profilesScalarFieldEnum = {
  id: 'id',
  profiles_id: 'profiles_id',
  plugin_fields_containers_id: 'plugin_fields_containers_id',
  right: 'right'
};

exports.Prisma.Glpi_plugin_fields_statusoverridesScalarFieldEnum = {
  id: 'id',
  plugin_fields_fields_id: 'plugin_fields_fields_id',
  itemtype: 'itemtype',
  states: 'states',
  is_readonly: 'is_readonly',
  mandatory: 'mandatory'
};

exports.Prisma.Glpi_plugin_formcreator_answersScalarFieldEnum = {
  id: 'id',
  plugin_formcreator_formanswers_id: 'plugin_formcreator_formanswers_id',
  plugin_formcreator_questions_id: 'plugin_formcreator_questions_id',
  answer: 'answer'
};

exports.Prisma.Glpi_plugin_formcreator_categoriesScalarFieldEnum = {
  id: 'id',
  name: 'name',
  comment: 'comment',
  completename: 'completename',
  plugin_formcreator_categories_id: 'plugin_formcreator_categories_id',
  level: 'level',
  sons_cache: 'sons_cache',
  ancestors_cache: 'ancestors_cache',
  knowbaseitemcategories_id: 'knowbaseitemcategories_id'
};

exports.Prisma.Glpi_plugin_formcreator_conditionsScalarFieldEnum = {
  id: 'id',
  itemtype: 'itemtype',
  items_id: 'items_id',
  plugin_formcreator_questions_id: 'plugin_formcreator_questions_id',
  show_condition: 'show_condition',
  show_value: 'show_value',
  show_logic: 'show_logic',
  order: 'order',
  uuid: 'uuid'
};

exports.Prisma.Glpi_plugin_formcreator_entityconfigsScalarFieldEnum = {
  id: 'id',
  entities_id: 'entities_id',
  replace_helpdesk: 'replace_helpdesk',
  default_form_list_mode: 'default_form_list_mode',
  sort_order: 'sort_order',
  is_kb_separated: 'is_kb_separated',
  is_search_visible: 'is_search_visible',
  is_dashboard_visible: 'is_dashboard_visible',
  is_header_visible: 'is_header_visible',
  is_search_issue_visible: 'is_search_issue_visible',
  tile_design: 'tile_design',
  header: 'header',
  service_catalog_home: 'service_catalog_home'
};

exports.Prisma.Glpi_plugin_formcreator_formanswersScalarFieldEnum = {
  id: 'id',
  name: 'name',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive',
  plugin_formcreator_forms_id: 'plugin_formcreator_forms_id',
  requester_id: 'requester_id',
  users_id_validator: 'users_id_validator',
  groups_id_validator: 'groups_id_validator',
  request_date: 'request_date',
  status: 'status',
  comment: 'comment'
};

exports.Prisma.Glpi_plugin_formcreator_formsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive',
  icon: 'icon',
  icon_color: 'icon_color',
  background_color: 'background_color',
  access_rights: 'access_rights',
  description: 'description',
  content: 'content',
  plugin_formcreator_categories_id: 'plugin_formcreator_categories_id',
  is_active: 'is_active',
  language: 'language',
  helpdesk_home: 'helpdesk_home',
  is_deleted: 'is_deleted',
  validation_required: 'validation_required',
  usage_count: 'usage_count',
  is_default: 'is_default',
  is_captcha_enabled: 'is_captcha_enabled',
  show_rule: 'show_rule',
  formanswer_name: 'formanswer_name',
  is_visible: 'is_visible',
  uuid: 'uuid'
};

exports.Prisma.Glpi_plugin_formcreator_forms_groupsScalarFieldEnum = {
  id: 'id',
  plugin_formcreator_forms_id: 'plugin_formcreator_forms_id',
  groups_id: 'groups_id',
  uuid: 'uuid'
};

exports.Prisma.Glpi_plugin_formcreator_forms_languagesScalarFieldEnum = {
  id: 'id',
  plugin_formcreator_forms_id: 'plugin_formcreator_forms_id',
  name: 'name',
  comment: 'comment',
  uuid: 'uuid'
};

exports.Prisma.Glpi_plugin_formcreator_forms_profilesScalarFieldEnum = {
  id: 'id',
  plugin_formcreator_forms_id: 'plugin_formcreator_forms_id',
  profiles_id: 'profiles_id',
  uuid: 'uuid'
};

exports.Prisma.Glpi_plugin_formcreator_forms_usersScalarFieldEnum = {
  id: 'id',
  plugin_formcreator_forms_id: 'plugin_formcreator_forms_id',
  users_id: 'users_id',
  uuid: 'uuid'
};

exports.Prisma.Glpi_plugin_formcreator_forms_validatorsScalarFieldEnum = {
  id: 'id',
  plugin_formcreator_forms_id: 'plugin_formcreator_forms_id',
  itemtype: 'itemtype',
  items_id: 'items_id',
  uuid: 'uuid'
};

exports.Prisma.Glpi_plugin_formcreator_issuesScalarFieldEnum = {
  id: 'id',
  name: 'name',
  display_id: 'display_id',
  items_id: 'items_id',
  itemtype: 'itemtype',
  status: 'status',
  date_creation: 'date_creation',
  date_mod: 'date_mod',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive',
  requester_id: 'requester_id',
  comment: 'comment',
  users_id_recipient: 'users_id_recipient'
};

exports.Prisma.Glpi_plugin_formcreator_items_targetticketsScalarFieldEnum = {
  id: 'id',
  plugin_formcreator_targettickets_id: 'plugin_formcreator_targettickets_id',
  link: 'link',
  itemtype: 'itemtype',
  items_id: 'items_id',
  uuid: 'uuid'
};

exports.Prisma.Glpi_plugin_formcreator_questiondependenciesScalarFieldEnum = {
  id: 'id',
  plugin_formcreator_questions_id: 'plugin_formcreator_questions_id',
  plugin_formcreator_questions_id_2: 'plugin_formcreator_questions_id_2',
  fieldname: 'fieldname',
  uuid: 'uuid'
};

exports.Prisma.Glpi_plugin_formcreator_questionrangesScalarFieldEnum = {
  id: 'id',
  plugin_formcreator_questions_id: 'plugin_formcreator_questions_id',
  range_min: 'range_min',
  range_max: 'range_max',
  fieldname: 'fieldname',
  uuid: 'uuid'
};

exports.Prisma.Glpi_plugin_formcreator_questionregexesScalarFieldEnum = {
  id: 'id',
  plugin_formcreator_questions_id: 'plugin_formcreator_questions_id',
  regex: 'regex',
  fieldname: 'fieldname',
  uuid: 'uuid'
};

exports.Prisma.Glpi_plugin_formcreator_questionsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  plugin_formcreator_sections_id: 'plugin_formcreator_sections_id',
  fieldtype: 'fieldtype',
  required: 'required',
  show_empty: 'show_empty',
  default_values: 'default_values',
  itemtype: 'itemtype',
  values: 'values',
  description: 'description',
  row: 'row',
  col: 'col',
  width: 'width',
  show_rule: 'show_rule',
  uuid: 'uuid'
};

exports.Prisma.Glpi_plugin_formcreator_sectionsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  plugin_formcreator_forms_id: 'plugin_formcreator_forms_id',
  order: 'order',
  show_rule: 'show_rule',
  uuid: 'uuid'
};

exports.Prisma.Glpi_plugin_formcreator_targetchangesScalarFieldEnum = {
  id: 'id',
  name: 'name',
  plugin_formcreator_forms_id: 'plugin_formcreator_forms_id',
  target_name: 'target_name',
  changetemplates_id: 'changetemplates_id',
  content: 'content',
  impactcontent: 'impactcontent',
  controlistcontent: 'controlistcontent',
  rolloutplancontent: 'rolloutplancontent',
  backoutplancontent: 'backoutplancontent',
  checklistcontent: 'checklistcontent',
  due_date_rule: 'due_date_rule',
  due_date_question: 'due_date_question',
  due_date_value: 'due_date_value',
  due_date_period: 'due_date_period',
  urgency_rule: 'urgency_rule',
  urgency_question: 'urgency_question',
  validation_followup: 'validation_followup',
  destination_entity: 'destination_entity',
  destination_entity_value: 'destination_entity_value',
  tag_type: 'tag_type',
  tag_questions: 'tag_questions',
  tag_specifics: 'tag_specifics',
  category_rule: 'category_rule',
  category_question: 'category_question',
  commonitil_validation_rule: 'commonitil_validation_rule',
  commonitil_validation_question: 'commonitil_validation_question',
  show_rule: 'show_rule',
  sla_rule: 'sla_rule',
  sla_question_tto: 'sla_question_tto',
  sla_question_ttr: 'sla_question_ttr',
  ola_rule: 'ola_rule',
  ola_question_tto: 'ola_question_tto',
  ola_question_ttr: 'ola_question_ttr',
  uuid: 'uuid'
};

exports.Prisma.Glpi_plugin_formcreator_targetproblemsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  plugin_formcreator_forms_id: 'plugin_formcreator_forms_id',
  target_name: 'target_name',
  problemtemplates_id: 'problemtemplates_id',
  content: 'content',
  impactcontent: 'impactcontent',
  causecontent: 'causecontent',
  symptomcontent: 'symptomcontent',
  urgency_rule: 'urgency_rule',
  urgency_question: 'urgency_question',
  destination_entity: 'destination_entity',
  destination_entity_value: 'destination_entity_value',
  tag_type: 'tag_type',
  tag_questions: 'tag_questions',
  tag_specifics: 'tag_specifics',
  category_rule: 'category_rule',
  category_question: 'category_question',
  show_rule: 'show_rule',
  uuid: 'uuid'
};

exports.Prisma.Glpi_plugin_formcreator_targets_actorsScalarFieldEnum = {
  id: 'id',
  itemtype: 'itemtype',
  items_id: 'items_id',
  actor_role: 'actor_role',
  actor_type: 'actor_type',
  actor_value: 'actor_value',
  use_notification: 'use_notification',
  uuid: 'uuid'
};

exports.Prisma.Glpi_plugin_formcreator_targetticketsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  plugin_formcreator_forms_id: 'plugin_formcreator_forms_id',
  target_name: 'target_name',
  source_rule: 'source_rule',
  source_question: 'source_question',
  type_rule: 'type_rule',
  type_question: 'type_question',
  tickettemplates_id: 'tickettemplates_id',
  content: 'content',
  due_date_rule: 'due_date_rule',
  due_date_question: 'due_date_question',
  due_date_value: 'due_date_value',
  due_date_period: 'due_date_period',
  urgency_rule: 'urgency_rule',
  urgency_question: 'urgency_question',
  validation_followup: 'validation_followup',
  destination_entity: 'destination_entity',
  destination_entity_value: 'destination_entity_value',
  tag_type: 'tag_type',
  tag_questions: 'tag_questions',
  tag_specifics: 'tag_specifics',
  category_rule: 'category_rule',
  category_question: 'category_question',
  associate_rule: 'associate_rule',
  associate_question: 'associate_question',
  location_rule: 'location_rule',
  location_question: 'location_question',
  commonitil_validation_rule: 'commonitil_validation_rule',
  commonitil_validation_question: 'commonitil_validation_question',
  show_rule: 'show_rule',
  sla_rule: 'sla_rule',
  sla_question_tto: 'sla_question_tto',
  sla_question_ttr: 'sla_question_ttr',
  ola_rule: 'ola_rule',
  ola_question_tto: 'ola_question_tto',
  ola_question_ttr: 'ola_question_ttr',
  uuid: 'uuid'
};

exports.Prisma.Glpi_plugin_itilcategorygroups_categoriesScalarFieldEnum = {
  id: 'id',
  is_active: 'is_active',
  name: 'name',
  comment: 'comment',
  date_mod: 'date_mod',
  itilcategories_id: 'itilcategories_id',
  view_all_lvl1: 'view_all_lvl1',
  view_all_lvl2: 'view_all_lvl2',
  view_all_lvl3: 'view_all_lvl3',
  view_all_lvl4: 'view_all_lvl4',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive',
  is_incident: 'is_incident',
  is_request: 'is_request',
  is_groups_restriction: 'is_groups_restriction'
};

exports.Prisma.Glpi_plugin_itilcategorygroups_categories_groupsScalarFieldEnum = {
  id: 'id',
  plugin_itilcategorygroups_categories_id: 'plugin_itilcategorygroups_categories_id',
  level: 'level',
  itilcategories_id: 'itilcategories_id',
  groups_id: 'groups_id'
};

exports.Prisma.Glpi_plugin_itilcategorygroups_groups_levelsScalarFieldEnum = {
  id: 'id',
  groups_id: 'groups_id',
  lvl: 'lvl'
};

exports.Prisma.Glpi_plugin_metademands_basketlinesScalarFieldEnum = {
  id: 'id',
  users_id: 'users_id',
  plugin_metademands_metademands_id: 'plugin_metademands_metademands_id',
  plugin_metademands_fields_id: 'plugin_metademands_fields_id',
  line: 'line',
  name: 'name',
  value: 'value',
  value2: 'value2'
};

exports.Prisma.Glpi_plugin_metademands_basketobjectsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  reference: 'reference',
  plugin_metademands_basketobjecttypes_id: 'plugin_metademands_basketobjecttypes_id'
};

exports.Prisma.Glpi_plugin_metademands_basketobjecttranslationsScalarFieldEnum = {
  id: 'id',
  items_id: 'items_id',
  itemtype: 'itemtype',
  field: 'field',
  language: 'language',
  value: 'value'
};

exports.Prisma.Glpi_plugin_metademands_basketobjecttypesScalarFieldEnum = {
  id: 'id',
  name: 'name'
};

exports.Prisma.Glpi_plugin_metademands_basketobjecttypetranslationsScalarFieldEnum = {
  id: 'id',
  items_id: 'items_id',
  itemtype: 'itemtype',
  language: 'language',
  field: 'field',
  value: 'value'
};

exports.Prisma.Glpi_plugin_metademands_conditionsScalarFieldEnum = {
  id: 'id',
  plugin_metademands_fields_id: 'plugin_metademands_fields_id',
  plugin_metademands_metademands_id: 'plugin_metademands_metademands_id',
  items_id: 'items_id',
  item: 'item',
  check_value: 'check_value',
  show_logic: 'show_logic',
  show_condition: 'show_condition',
  order: 'order',
  type: 'type'
};

exports.Prisma.Glpi_plugin_metademands_configsScalarFieldEnum = {
  id: 'id',
  simpleticket_to_metademand: 'simpleticket_to_metademand',
  parent_ticket_tag: 'parent_ticket_tag',
  son_ticket_tag: 'son_ticket_tag',
  create_pdf: 'create_pdf',
  show_requester_informations: 'show_requester_informations',
  childs_parent_content: 'childs_parent_content',
  display_type: 'display_type',
  display_buttonlist_servicecatalog: 'display_buttonlist_servicecatalog',
  title_servicecatalog: 'title_servicecatalog',
  comment_servicecatalog: 'comment_servicecatalog',
  fa_servicecatalog: 'fa_servicecatalog',
  languageTech: 'languageTech',
  use_draft: 'use_draft',
  show_form_changes: 'show_form_changes',
  add_groups_with_regex: 'add_groups_with_regex'
};

exports.Prisma.Glpi_plugin_metademands_configstepsScalarFieldEnum = {
  id: 'id',
  plugin_metademands_metademands_id: 'plugin_metademands_metademands_id',
  link_user_block: 'link_user_block',
  multiple_link_groups_blocks: 'multiple_link_groups_blocks',
  add_user_as_requester: 'add_user_as_requester',
  step_by_step_interface: 'step_by_step_interface'
};

exports.Prisma.Glpi_plugin_metademands_draftsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  plugin_metademands_metademands_id: 'plugin_metademands_metademands_id',
  users_id: 'users_id',
  date: 'date'
};

exports.Prisma.Glpi_plugin_metademands_drafts_valuesScalarFieldEnum = {
  id: 'id',
  plugin_metademands_drafts_id: 'plugin_metademands_drafts_id',
  plugin_metademands_fields_id: 'plugin_metademands_fields_id',
  value: 'value',
  value2: 'value2'
};

exports.Prisma.Glpi_plugin_metademands_fieldcustomvaluesScalarFieldEnum = {
  id: 'id',
  plugin_metademands_fields_id: 'plugin_metademands_fields_id',
  name: 'name',
  is_default: 'is_default',
  comment: 'comment',
  rank: 'rank'
};

exports.Prisma.Glpi_plugin_metademands_fieldoptionsScalarFieldEnum = {
  id: 'id',
  plugin_metademands_fields_id: 'plugin_metademands_fields_id',
  check_value: 'check_value',
  plugin_metademands_tasks_id: 'plugin_metademands_tasks_id',
  fields_link: 'fields_link',
  hidden_link: 'hidden_link',
  hidden_block: 'hidden_block',
  users_id_validate: 'users_id_validate',
  childs_blocks: 'childs_blocks',
  checkbox_value: 'checkbox_value',
  checkbox_id: 'checkbox_id',
  parent_field_id: 'parent_field_id'
};

exports.Prisma.Glpi_plugin_metademands_fieldparametersScalarFieldEnum = {
  id: 'id',
  plugin_metademands_fields_id: 'plugin_metademands_fields_id',
  custom: 'custom',
  default: 'default',
  hide_title: 'hide_title',
  is_mandatory: 'is_mandatory',
  max_upload: 'max_upload',
  regex: 'regex',
  color: 'color',
  row_display: 'row_display',
  is_basket: 'is_basket',
  display_type: 'display_type',
  used_by_ticket: 'used_by_ticket',
  used_by_child: 'used_by_child',
  link_to_user: 'link_to_user',
  default_use_id_requester: 'default_use_id_requester',
  default_use_id_requester_supervisor: 'default_use_id_requester_supervisor',
  use_future_date: 'use_future_date',
  use_date_now: 'use_date_now',
  additional_number_day: 'additional_number_day',
  informations_to_display: 'informations_to_display',
  use_richtext: 'use_richtext',
  icon: 'icon',
  readonly: 'readonly',
  hidden: 'hidden'
};

exports.Prisma.Glpi_plugin_metademands_fieldsScalarFieldEnum = {
  id: 'id',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive',
  comment: 'comment',
  rank: 'rank',
  order: 'order',
  name: 'name',
  label2: 'label2',
  type: 'type',
  item: 'item',
  plugin_metademands_fields_id: 'plugin_metademands_fields_id',
  plugin_metademands_metademands_id: 'plugin_metademands_metademands_id',
  date_creation: 'date_creation',
  date_mod: 'date_mod'
};

exports.Prisma.Glpi_plugin_metademands_fieldtranslationsScalarFieldEnum = {
  id: 'id',
  items_id: 'items_id',
  itemtype: 'itemtype',
  language: 'language',
  field: 'field',
  value: 'value'
};

exports.Prisma.Glpi_plugin_metademands_formsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  plugin_metademands_metademands_id: 'plugin_metademands_metademands_id',
  items_id: 'items_id',
  itemtype: 'itemtype',
  users_id: 'users_id',
  date: 'date',
  is_model: 'is_model',
  resources_id: 'resources_id'
};

exports.Prisma.Glpi_plugin_metademands_forms_valuesScalarFieldEnum = {
  id: 'id',
  plugin_metademands_forms_id: 'plugin_metademands_forms_id',
  plugin_metademands_fields_id: 'plugin_metademands_fields_id',
  value: 'value',
  value2: 'value2'
};

exports.Prisma.Glpi_plugin_metademands_groupconfigsScalarFieldEnum = {
  id: 'id',
  entities_id: 'entities_id',
  visibility: 'visibility',
  plugin_metademands_metademands_id: 'plugin_metademands_metademands_id'
};

exports.Prisma.Glpi_plugin_metademands_groupsScalarFieldEnum = {
  id: 'id',
  entities_id: 'entities_id',
  groups_id: 'groups_id',
  plugin_metademands_metademands_id: 'plugin_metademands_metademands_id'
};

exports.Prisma.Glpi_plugin_metademands_interticketfollowupsScalarFieldEnum = {
  id: 'id',
  tickets_id: 'tickets_id',
  targets_id: 'targets_id',
  date: 'date',
  users_id: 'users_id',
  users_id_editor: 'users_id_editor',
  content: 'content',
  is_private: 'is_private',
  requesttypes_id: 'requesttypes_id',
  date_mod: 'date_mod',
  date_creation: 'date_creation',
  timeline_position: 'timeline_position'
};

exports.Prisma.Glpi_plugin_metademands_mailtasksScalarFieldEnum = {
  id: 'id',
  content: 'content',
  users_id_recipient: 'users_id_recipient',
  groups_id_recipient: 'groups_id_recipient',
  plugin_metademands_tasks_id: 'plugin_metademands_tasks_id',
  itilcategories_id: 'itilcategories_id',
  email: 'email'
};

exports.Prisma.Glpi_plugin_metademands_metademandsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive',
  is_template: 'is_template',
  template_name: 'template_name',
  is_active: 'is_active',
  maintenance_mode: 'maintenance_mode',
  can_update: 'can_update',
  can_clone: 'can_clone',
  comment: 'comment',
  object_to_create: 'object_to_create',
  type: 'type',
  itilcategories_id: 'itilcategories_id',
  icon: 'icon',
  is_order: 'is_order',
  create_one_ticket: 'create_one_ticket',
  force_create_tasks: 'force_create_tasks',
  date_creation: 'date_creation',
  date_mod: 'date_mod',
  validation_subticket: 'validation_subticket',
  is_deleted: 'is_deleted',
  hide_no_field: 'hide_no_field',
  title_color: 'title_color',
  background_color: 'background_color',
  step_by_step_mode: 'step_by_step_mode',
  show_rule: 'show_rule',
  initial_requester_childs_tickets: 'initial_requester_childs_tickets',
  is_basket: 'is_basket'
};

exports.Prisma.Glpi_plugin_metademands_metademands_resourcesScalarFieldEnum = {
  id: 'id',
  entities_id: 'entities_id',
  plugin_resources_contracttypes_id: 'plugin_resources_contracttypes_id',
  plugin_metademands_metademands_id: 'plugin_metademands_metademands_id'
};

exports.Prisma.Glpi_plugin_metademands_metademandtasksScalarFieldEnum = {
  id: 'id',
  entities_id: 'entities_id',
  plugin_metademands_metademands_id: 'plugin_metademands_metademands_id',
  plugin_metademands_tasks_id: 'plugin_metademands_tasks_id'
};

exports.Prisma.Glpi_plugin_metademands_metademandtranslationsScalarFieldEnum = {
  id: 'id',
  items_id: 'items_id',
  itemtype: 'itemtype',
  language: 'language',
  field: 'field',
  value: 'value'
};

exports.Prisma.Glpi_plugin_metademands_metademandvalidationsScalarFieldEnum = {
  id: 'id',
  tickets_id: 'tickets_id',
  plugin_metademands_metademands_id: 'plugin_metademands_metademands_id',
  users_id: 'users_id',
  validate: 'validate',
  date: 'date',
  tickets_to_create: 'tickets_to_create'
};

exports.Prisma.Glpi_plugin_metademands_pluginfieldsScalarFieldEnum = {
  id: 'id',
  plugin_fields_fields_id: 'plugin_fields_fields_id',
  plugin_metademands_fields_id: 'plugin_metademands_fields_id',
  plugin_metademands_metademands_id: 'plugin_metademands_metademands_id'
};

exports.Prisma.Glpi_plugin_metademands_stepformsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  plugin_metademands_metademands_id: 'plugin_metademands_metademands_id',
  items_id: 'items_id',
  users_id: 'users_id',
  groups_id_dest: 'groups_id_dest',
  users_id_dest: 'users_id_dest',
  date: 'date',
  reminder_date: 'reminder_date',
  block_id: 'block_id'
};

exports.Prisma.Glpi_plugin_metademands_stepforms_actorsScalarFieldEnum = {
  id: 'id',
  plugin_metademands_stepforms_id: 'plugin_metademands_stepforms_id',
  users_id: 'users_id'
};

exports.Prisma.Glpi_plugin_metademands_stepforms_valuesScalarFieldEnum = {
  id: 'id',
  plugin_metademands_stepforms_id: 'plugin_metademands_stepforms_id',
  plugin_metademands_fields_id: 'plugin_metademands_fields_id',
  value: 'value',
  value2: 'value2'
};

exports.Prisma.Glpi_plugin_metademands_stepsScalarFieldEnum = {
  id: 'id',
  plugin_metademands_metademands_id: 'plugin_metademands_metademands_id',
  block_id: 'block_id',
  groups_id: 'groups_id',
  reminder_delay: 'reminder_delay',
  message: 'message'
};

exports.Prisma.Glpi_plugin_metademands_tasksScalarFieldEnum = {
  id: 'id',
  name: 'name',
  completename: 'completename',
  comment: 'comment',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive',
  level: 'level',
  type: 'type',
  ancestors_cache: 'ancestors_cache',
  sons_cache: 'sons_cache',
  plugin_metademands_tasks_id: 'plugin_metademands_tasks_id',
  plugin_metademands_metademands_id: 'plugin_metademands_metademands_id',
  block_use: 'block_use',
  useBlock: 'useBlock',
  formatastable: 'formatastable',
  block_parent_ticket_resolution: 'block_parent_ticket_resolution'
};

exports.Prisma.Glpi_plugin_metademands_ticketfieldsScalarFieldEnum = {
  id: 'id',
  num: 'num',
  value: 'value',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive',
  is_mandatory: 'is_mandatory',
  is_deletable: 'is_deletable',
  plugin_metademands_metademands_id: 'plugin_metademands_metademands_id'
};

exports.Prisma.Glpi_plugin_metademands_tickets_fieldsScalarFieldEnum = {
  id: 'id',
  value: 'value',
  value2: 'value2',
  tickets_id: 'tickets_id',
  plugin_metademands_fields_id: 'plugin_metademands_fields_id'
};

exports.Prisma.Glpi_plugin_metademands_tickets_metademandsScalarFieldEnum = {
  id: 'id',
  plugin_metademands_metademands_id: 'plugin_metademands_metademands_id',
  tickets_id: 'tickets_id',
  parent_tickets_id: 'parent_tickets_id',
  tickettemplates_id: 'tickettemplates_id',
  status: 'status'
};

exports.Prisma.Glpi_plugin_metademands_tickets_tasksScalarFieldEnum = {
  id: 'id',
  plugin_metademands_tasks_id: 'plugin_metademands_tasks_id',
  level: 'level',
  tickets_id: 'tickets_id',
  parent_tickets_id: 'parent_tickets_id'
};

exports.Prisma.Glpi_plugin_metademands_tickettasksScalarFieldEnum = {
  id: 'id',
  entities_id: 'entities_id',
  content: 'content',
  itilcategories_id: 'itilcategories_id',
  type: 'type',
  status: 'status',
  actiontime: 'actiontime',
  requesttypes_id: 'requesttypes_id',
  groups_id_assign: 'groups_id_assign',
  users_id_assign: 'users_id_assign',
  groups_id_requester: 'groups_id_requester',
  users_id_requester: 'users_id_requester',
  groups_id_observer: 'groups_id_observer',
  users_id_observer: 'users_id_observer',
  plugin_metademands_tasks_id: 'plugin_metademands_tasks_id'
};

exports.Prisma.Glpi_plugin_mycustomview_configScalarFieldEnum = {
  id: 'id',
  max_filters: 'max_filters'
};

exports.Prisma.Glpi_plugin_mycustomview_savedsearch_listScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  savedsearch_id: 'savedsearch_id',
  order: 'order',
  screen_mode: 'screen_mode',
  height: 'height'
};

exports.Prisma.Glpi_plugin_mycustomview_user_settingsScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  default_page: 'default_page',
  list_limit: 'list_limit',
  settings_hidden: 'settings_hidden'
};

exports.Prisma.Glpi_plugin_mydashboard_alertsScalarFieldEnum = {
  id: 'id',
  reminders_id: 'reminders_id',
  impact: 'impact',
  type: 'type',
  is_public: 'is_public',
  itilcategories_id: 'itilcategories_id'
};

exports.Prisma.Glpi_plugin_mydashboard_configsScalarFieldEnum = {
  id: 'id',
  enable_fullscreen: 'enable_fullscreen',
  display_menu: 'display_menu',
  replace_central: 'replace_central',
  google_api_key: 'google_api_key',
  impact_1: 'impact_1',
  impact_2: 'impact_2',
  impact_3: 'impact_3',
  impact_4: 'impact_4',
  impact_5: 'impact_5',
  levelCat: 'levelCat',
  title_alerts_widget: 'title_alerts_widget',
  title_maintenances_widget: 'title_maintenances_widget',
  title_informations_widget: 'title_informations_widget'
};

exports.Prisma.Glpi_plugin_mydashboard_configtranslationsScalarFieldEnum = {
  id: 'id',
  items_id: 'items_id',
  itemtype: 'itemtype',
  language: 'language',
  field: 'field',
  value: 'value'
};

exports.Prisma.Glpi_plugin_mydashboard_customswidgetsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  comment: 'comment',
  content: 'content'
};

exports.Prisma.Glpi_plugin_mydashboard_dashboardsScalarFieldEnum = {
  id: 'id',
  users_id: 'users_id',
  grid: 'grid',
  profiles_id: 'profiles_id',
  grid_statesave: 'grid_statesave'
};

exports.Prisma.Glpi_plugin_mydashboard_groupprofilesScalarFieldEnum = {
  id: 'id',
  groups_id: 'groups_id',
  profiles_id: 'profiles_id'
};

exports.Prisma.Glpi_plugin_mydashboard_itilalertsScalarFieldEnum = {
  id: 'id',
  reminders_id: 'reminders_id',
  items_id: 'items_id',
  itemtype: 'itemtype'
};

exports.Prisma.Glpi_plugin_mydashboard_preferencesScalarFieldEnum = {
  id: 'id',
  automatic_refresh: 'automatic_refresh',
  automatic_refresh_delay: 'automatic_refresh_delay',
  nb_widgets_width: 'nb_widgets_width',
  replace_central: 'replace_central',
  prefered_group: 'prefered_group',
  prefered_entity: 'prefered_entity',
  edit_mode: 'edit_mode',
  drag_mode: 'drag_mode',
  requester_prefered_group: 'requester_prefered_group',
  color_palette: 'color_palette',
  prefered_type: 'prefered_type'
};

exports.Prisma.Glpi_plugin_mydashboard_preferenceuserblacklistsScalarFieldEnum = {
  id: 'id',
  users_id: 'users_id',
  plugin_name: 'plugin_name'
};

exports.Prisma.Glpi_plugin_mydashboard_profileauthorizedwidgetsScalarFieldEnum = {
  id: 'id',
  profiles_id: 'profiles_id',
  widgets_id: 'widgets_id'
};

exports.Prisma.Glpi_plugin_mydashboard_stockticketindicatorsScalarFieldEnum = {
  id: 'id',
  year: 'year',
  week: 'week',
  nbTickets: 'nbTickets',
  indicator_id: 'indicator_id',
  groups_id: 'groups_id',
  entities_id: 'entities_id'
};

exports.Prisma.Glpi_plugin_mydashboard_stockticketsScalarFieldEnum = {
  id: 'id',
  date: 'date',
  nbstocktickets: 'nbstocktickets',
  entities_id: 'entities_id',
  groups_id: 'groups_id'
};

exports.Prisma.Glpi_plugin_mydashboard_stockwidgetsScalarFieldEnum = {
  id: 'id',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive',
  name: 'name',
  states: 'states',
  itemtype: 'itemtype',
  icon: 'icon',
  types: 'types',
  alarm_threshold: 'alarm_threshold'
};

exports.Prisma.Glpi_plugin_mydashboard_userwidgetsScalarFieldEnum = {
  id: 'id',
  users_id: 'users_id',
  profiles_id: 'profiles_id',
  widgets_id: 'widgets_id',
  interface: 'interface'
};

exports.Prisma.Glpi_plugin_mydashboard_widgetsScalarFieldEnum = {
  id: 'id',
  name: 'name'
};

exports.Prisma.Glpi_pluginsScalarFieldEnum = {
  id: 'id',
  directory: 'directory',
  name: 'name',
  version: 'version',
  state: 'state',
  author: 'author',
  homepage: 'homepage',
  license: 'license'
};

exports.Prisma.Glpi_plugsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  comment: 'comment',
  date_mod: 'date_mod',
  date_creation: 'date_creation'
};

exports.Prisma.Glpi_printerlogsScalarFieldEnum = {
  id: 'id',
  printers_id: 'printers_id',
  total_pages: 'total_pages',
  bw_pages: 'bw_pages',
  color_pages: 'color_pages',
  rv_pages: 'rv_pages',
  prints: 'prints',
  bw_prints: 'bw_prints',
  color_prints: 'color_prints',
  copies: 'copies',
  bw_copies: 'bw_copies',
  color_copies: 'color_copies',
  scanned: 'scanned',
  date: 'date',
  date_creation: 'date_creation',
  date_mod: 'date_mod',
  faxed: 'faxed'
};

exports.Prisma.Glpi_printermodelsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  comment: 'comment',
  product_number: 'product_number',
  date_mod: 'date_mod',
  date_creation: 'date_creation',
  picture_front: 'picture_front',
  picture_rear: 'picture_rear',
  pictures: 'pictures'
};

exports.Prisma.Glpi_printersScalarFieldEnum = {
  id: 'id',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive',
  name: 'name',
  date_mod: 'date_mod',
  contact: 'contact',
  contact_num: 'contact_num',
  users_id_tech: 'users_id_tech',
  groups_id_tech: 'groups_id_tech',
  serial: 'serial',
  otherserial: 'otherserial',
  have_serial: 'have_serial',
  have_parallel: 'have_parallel',
  have_usb: 'have_usb',
  have_wifi: 'have_wifi',
  have_ethernet: 'have_ethernet',
  comment: 'comment',
  memory_size: 'memory_size',
  locations_id: 'locations_id',
  networks_id: 'networks_id',
  printertypes_id: 'printertypes_id',
  printermodels_id: 'printermodels_id',
  manufacturers_id: 'manufacturers_id',
  is_global: 'is_global',
  is_deleted: 'is_deleted',
  is_template: 'is_template',
  template_name: 'template_name',
  init_pages_counter: 'init_pages_counter',
  last_pages_counter: 'last_pages_counter',
  users_id: 'users_id',
  groups_id: 'groups_id',
  states_id: 'states_id',
  ticket_tco: 'ticket_tco',
  is_dynamic: 'is_dynamic',
  uuid: 'uuid',
  date_creation: 'date_creation',
  sysdescr: 'sysdescr',
  last_inventory_update: 'last_inventory_update',
  snmpcredentials_id: 'snmpcredentials_id',
  autoupdatesystems_id: 'autoupdatesystems_id'
};

exports.Prisma.Glpi_printers_cartridgeinfosScalarFieldEnum = {
  id: 'id',
  printers_id: 'printers_id',
  property: 'property',
  value: 'value',
  date_mod: 'date_mod',
  date_creation: 'date_creation'
};

exports.Prisma.Glpi_printertypesScalarFieldEnum = {
  id: 'id',
  name: 'name',
  comment: 'comment',
  date_mod: 'date_mod',
  date_creation: 'date_creation'
};

exports.Prisma.Glpi_problemcostsScalarFieldEnum = {
  id: 'id',
  problems_id: 'problems_id',
  name: 'name',
  comment: 'comment',
  begin_date: 'begin_date',
  end_date: 'end_date',
  actiontime: 'actiontime',
  cost_time: 'cost_time',
  cost_fixed: 'cost_fixed',
  cost_material: 'cost_material',
  budgets_id: 'budgets_id',
  entities_id: 'entities_id'
};

exports.Prisma.Glpi_problemsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive',
  is_deleted: 'is_deleted',
  status: 'status',
  content: 'content',
  date_mod: 'date_mod',
  date: 'date',
  solvedate: 'solvedate',
  closedate: 'closedate',
  time_to_resolve: 'time_to_resolve',
  users_id_recipient: 'users_id_recipient',
  users_id_lastupdater: 'users_id_lastupdater',
  urgency: 'urgency',
  impact: 'impact',
  priority: 'priority',
  itilcategories_id: 'itilcategories_id',
  impactcontent: 'impactcontent',
  causecontent: 'causecontent',
  symptomcontent: 'symptomcontent',
  actiontime: 'actiontime',
  begin_waiting_date: 'begin_waiting_date',
  waiting_duration: 'waiting_duration',
  close_delay_stat: 'close_delay_stat',
  solve_delay_stat: 'solve_delay_stat',
  date_creation: 'date_creation',
  locations_id: 'locations_id'
};

exports.Prisma.Glpi_problems_suppliersScalarFieldEnum = {
  id: 'id',
  problems_id: 'problems_id',
  suppliers_id: 'suppliers_id',
  type: 'type',
  use_notification: 'use_notification',
  alternative_email: 'alternative_email'
};

exports.Prisma.Glpi_problems_ticketsScalarFieldEnum = {
  id: 'id',
  problems_id: 'problems_id',
  tickets_id: 'tickets_id'
};

exports.Prisma.Glpi_problems_usersScalarFieldEnum = {
  id: 'id',
  problems_id: 'problems_id',
  users_id: 'users_id',
  type: 'type',
  use_notification: 'use_notification',
  alternative_email: 'alternative_email'
};

exports.Prisma.Glpi_problemtasksScalarFieldEnum = {
  id: 'id',
  uuid: 'uuid',
  problems_id: 'problems_id',
  taskcategories_id: 'taskcategories_id',
  date: 'date',
  begin: 'begin',
  end: 'end',
  users_id: 'users_id',
  users_id_editor: 'users_id_editor',
  users_id_tech: 'users_id_tech',
  groups_id_tech: 'groups_id_tech',
  content: 'content',
  actiontime: 'actiontime',
  state: 'state',
  date_mod: 'date_mod',
  date_creation: 'date_creation',
  tasktemplates_id: 'tasktemplates_id',
  timeline_position: 'timeline_position',
  is_private: 'is_private'
};

exports.Prisma.Glpi_problemtemplatehiddenfieldsScalarFieldEnum = {
  id: 'id',
  problemtemplates_id: 'problemtemplates_id',
  num: 'num'
};

exports.Prisma.Glpi_problemtemplatemandatoryfieldsScalarFieldEnum = {
  id: 'id',
  problemtemplates_id: 'problemtemplates_id',
  num: 'num'
};

exports.Prisma.Glpi_problemtemplatepredefinedfieldsScalarFieldEnum = {
  id: 'id',
  problemtemplates_id: 'problemtemplates_id',
  num: 'num',
  value: 'value'
};

exports.Prisma.Glpi_problemtemplatesScalarFieldEnum = {
  id: 'id',
  name: 'name',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive',
  comment: 'comment'
};

exports.Prisma.Glpi_profilerightsScalarFieldEnum = {
  id: 'id',
  profiles_id: 'profiles_id',
  name: 'name',
  rights: 'rights'
};

exports.Prisma.Glpi_profilesScalarFieldEnum = {
  id: 'id',
  name: 'name',
  interface: 'interface',
  is_default: 'is_default',
  helpdesk_hardware: 'helpdesk_hardware',
  helpdesk_item_type: 'helpdesk_item_type',
  ticket_status: 'ticket_status',
  date_mod: 'date_mod',
  comment: 'comment',
  problem_status: 'problem_status',
  create_ticket_on_login: 'create_ticket_on_login',
  tickettemplates_id: 'tickettemplates_id',
  changetemplates_id: 'changetemplates_id',
  problemtemplates_id: 'problemtemplates_id',
  change_status: 'change_status',
  managed_domainrecordtypes: 'managed_domainrecordtypes',
  date_creation: 'date_creation'
};

exports.Prisma.Glpi_profiles_remindersScalarFieldEnum = {
  id: 'id',
  reminders_id: 'reminders_id',
  profiles_id: 'profiles_id',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive',
  no_entity_restriction: 'no_entity_restriction'
};

exports.Prisma.Glpi_profiles_rssfeedsScalarFieldEnum = {
  id: 'id',
  rssfeeds_id: 'rssfeeds_id',
  profiles_id: 'profiles_id',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive',
  no_entity_restriction: 'no_entity_restriction'
};

exports.Prisma.Glpi_profiles_usersScalarFieldEnum = {
  id: 'id',
  users_id: 'users_id',
  profiles_id: 'profiles_id',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive',
  is_dynamic: 'is_dynamic',
  is_default_profile: 'is_default_profile'
};

exports.Prisma.Glpi_projectcostsScalarFieldEnum = {
  id: 'id',
  projects_id: 'projects_id',
  name: 'name',
  comment: 'comment',
  begin_date: 'begin_date',
  end_date: 'end_date',
  cost: 'cost',
  budgets_id: 'budgets_id',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive'
};

exports.Prisma.Glpi_projectsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  code: 'code',
  priority: 'priority',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive',
  projects_id: 'projects_id',
  projectstates_id: 'projectstates_id',
  projecttypes_id: 'projecttypes_id',
  date: 'date',
  date_mod: 'date_mod',
  users_id: 'users_id',
  groups_id: 'groups_id',
  plan_start_date: 'plan_start_date',
  plan_end_date: 'plan_end_date',
  real_start_date: 'real_start_date',
  real_end_date: 'real_end_date',
  percent_done: 'percent_done',
  auto_percent_done: 'auto_percent_done',
  show_on_global_gantt: 'show_on_global_gantt',
  content: 'content',
  comment: 'comment',
  is_deleted: 'is_deleted',
  date_creation: 'date_creation',
  projecttemplates_id: 'projecttemplates_id',
  is_template: 'is_template',
  template_name: 'template_name'
};

exports.Prisma.Glpi_projectstatesScalarFieldEnum = {
  id: 'id',
  name: 'name',
  comment: 'comment',
  color: 'color',
  is_finished: 'is_finished',
  date_mod: 'date_mod',
  date_creation: 'date_creation'
};

exports.Prisma.Glpi_projecttasklinksScalarFieldEnum = {
  id: 'id',
  projecttasks_id_source: 'projecttasks_id_source',
  source_uuid: 'source_uuid',
  projecttasks_id_target: 'projecttasks_id_target',
  target_uuid: 'target_uuid',
  type: 'type',
  lag: 'lag',
  lead: 'lead'
};

exports.Prisma.Glpi_projecttasksScalarFieldEnum = {
  id: 'id',
  uuid: 'uuid',
  name: 'name',
  content: 'content',
  comment: 'comment',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive',
  projects_id: 'projects_id',
  projecttasks_id: 'projecttasks_id',
  date_creation: 'date_creation',
  date_mod: 'date_mod',
  plan_start_date: 'plan_start_date',
  plan_end_date: 'plan_end_date',
  real_start_date: 'real_start_date',
  real_end_date: 'real_end_date',
  planned_duration: 'planned_duration',
  effective_duration: 'effective_duration',
  projectstates_id: 'projectstates_id',
  projecttasktypes_id: 'projecttasktypes_id',
  users_id: 'users_id',
  percent_done: 'percent_done',
  auto_percent_done: 'auto_percent_done',
  is_milestone: 'is_milestone',
  projecttasktemplates_id: 'projecttasktemplates_id',
  is_template: 'is_template',
  template_name: 'template_name'
};

exports.Prisma.Glpi_projecttasks_ticketsScalarFieldEnum = {
  id: 'id',
  tickets_id: 'tickets_id',
  projecttasks_id: 'projecttasks_id'
};

exports.Prisma.Glpi_projecttaskteamsScalarFieldEnum = {
  id: 'id',
  projecttasks_id: 'projecttasks_id',
  itemtype: 'itemtype',
  items_id: 'items_id'
};

exports.Prisma.Glpi_projecttasktemplatesScalarFieldEnum = {
  id: 'id',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive',
  name: 'name',
  description: 'description',
  comment: 'comment',
  projects_id: 'projects_id',
  projecttasks_id: 'projecttasks_id',
  plan_start_date: 'plan_start_date',
  plan_end_date: 'plan_end_date',
  real_start_date: 'real_start_date',
  real_end_date: 'real_end_date',
  planned_duration: 'planned_duration',
  effective_duration: 'effective_duration',
  projectstates_id: 'projectstates_id',
  projecttasktypes_id: 'projecttasktypes_id',
  users_id: 'users_id',
  percent_done: 'percent_done',
  is_milestone: 'is_milestone',
  comments: 'comments',
  date_mod: 'date_mod',
  date_creation: 'date_creation'
};

exports.Prisma.Glpi_projecttasktypesScalarFieldEnum = {
  id: 'id',
  name: 'name',
  comment: 'comment',
  date_mod: 'date_mod',
  date_creation: 'date_creation'
};

exports.Prisma.Glpi_projectteamsScalarFieldEnum = {
  id: 'id',
  projects_id: 'projects_id',
  itemtype: 'itemtype',
  items_id: 'items_id'
};

exports.Prisma.Glpi_projecttypesScalarFieldEnum = {
  id: 'id',
  name: 'name',
  comment: 'comment',
  date_mod: 'date_mod',
  date_creation: 'date_creation'
};

exports.Prisma.Glpi_queuednotificationsScalarFieldEnum = {
  id: 'id',
  itemtype: 'itemtype',
  items_id: 'items_id',
  notificationtemplates_id: 'notificationtemplates_id',
  entities_id: 'entities_id',
  is_deleted: 'is_deleted',
  sent_try: 'sent_try',
  create_time: 'create_time',
  send_time: 'send_time',
  sent_time: 'sent_time',
  name: 'name',
  sender: 'sender',
  sendername: 'sendername',
  recipient: 'recipient',
  recipientname: 'recipientname',
  replyto: 'replyto',
  replytoname: 'replytoname',
  headers: 'headers',
  body_html: 'body_html',
  body_text: 'body_text',
  messageid: 'messageid',
  documents: 'documents',
  mode: 'mode',
  event: 'event'
};

exports.Prisma.Glpi_rackmodelsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  comment: 'comment',
  product_number: 'product_number',
  date_mod: 'date_mod',
  date_creation: 'date_creation',
  pictures: 'pictures'
};

exports.Prisma.Glpi_racksScalarFieldEnum = {
  id: 'id',
  name: 'name',
  comment: 'comment',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive',
  locations_id: 'locations_id',
  serial: 'serial',
  otherserial: 'otherserial',
  rackmodels_id: 'rackmodels_id',
  manufacturers_id: 'manufacturers_id',
  racktypes_id: 'racktypes_id',
  states_id: 'states_id',
  users_id_tech: 'users_id_tech',
  groups_id_tech: 'groups_id_tech',
  width: 'width',
  height: 'height',
  depth: 'depth',
  number_units: 'number_units',
  is_template: 'is_template',
  template_name: 'template_name',
  is_deleted: 'is_deleted',
  dcrooms_id: 'dcrooms_id',
  room_orientation: 'room_orientation',
  position: 'position',
  bgcolor: 'bgcolor',
  max_power: 'max_power',
  mesured_power: 'mesured_power',
  max_weight: 'max_weight',
  date_mod: 'date_mod',
  date_creation: 'date_creation'
};

exports.Prisma.Glpi_racktypesScalarFieldEnum = {
  id: 'id',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive',
  name: 'name',
  comment: 'comment',
  date_creation: 'date_creation',
  date_mod: 'date_mod'
};

exports.Prisma.Glpi_recurrentchangesScalarFieldEnum = {
  id: 'id',
  name: 'name',
  comment: 'comment',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive',
  is_active: 'is_active',
  changetemplates_id: 'changetemplates_id',
  begin_date: 'begin_date',
  periodicity: 'periodicity',
  create_before: 'create_before',
  next_creation_date: 'next_creation_date',
  calendars_id: 'calendars_id',
  end_date: 'end_date'
};

exports.Prisma.Glpi_refusedequipmentsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  itemtype: 'itemtype',
  entities_id: 'entities_id',
  ip: 'ip',
  mac: 'mac',
  rules_id: 'rules_id',
  method: 'method',
  serial: 'serial',
  uuid: 'uuid',
  agents_id: 'agents_id',
  autoupdatesystems_id: 'autoupdatesystems_id',
  date_creation: 'date_creation',
  date_mod: 'date_mod'
};

exports.Prisma.Glpi_registeredidsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  items_id: 'items_id',
  itemtype: 'itemtype',
  device_type: 'device_type'
};

exports.Prisma.Glpi_remindersScalarFieldEnum = {
  id: 'id',
  uuid: 'uuid',
  date: 'date',
  users_id: 'users_id',
  name: 'name',
  text: 'text',
  begin: 'begin',
  end: 'end',
  is_planned: 'is_planned',
  date_mod: 'date_mod',
  state: 'state',
  begin_view_date: 'begin_view_date',
  end_view_date: 'end_view_date',
  date_creation: 'date_creation'
};

exports.Prisma.Glpi_reminders_usersScalarFieldEnum = {
  id: 'id',
  reminders_id: 'reminders_id',
  users_id: 'users_id'
};

exports.Prisma.Glpi_remindertranslationsScalarFieldEnum = {
  id: 'id',
  reminders_id: 'reminders_id',
  language: 'language',
  name: 'name',
  text: 'text',
  users_id: 'users_id',
  date_mod: 'date_mod',
  date_creation: 'date_creation'
};

exports.Prisma.Glpi_requesttypesScalarFieldEnum = {
  id: 'id',
  name: 'name',
  is_helpdesk_default: 'is_helpdesk_default',
  is_followup_default: 'is_followup_default',
  is_mail_default: 'is_mail_default',
  is_mailfollowup_default: 'is_mailfollowup_default',
  is_active: 'is_active',
  is_ticketheader: 'is_ticketheader',
  is_itilfollowup: 'is_itilfollowup',
  comment: 'comment',
  date_mod: 'date_mod',
  date_creation: 'date_creation'
};

exports.Prisma.Glpi_reservationitemsScalarFieldEnum = {
  id: 'id',
  itemtype: 'itemtype',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive',
  items_id: 'items_id',
  comment: 'comment',
  is_active: 'is_active'
};

exports.Prisma.Glpi_reservationsScalarFieldEnum = {
  id: 'id',
  reservationitems_id: 'reservationitems_id',
  begin: 'begin',
  end: 'end',
  users_id: 'users_id',
  comment: 'comment',
  group: 'group'
};

exports.Prisma.Glpi_rssfeedsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  users_id: 'users_id',
  comment: 'comment',
  url: 'url',
  refresh_rate: 'refresh_rate',
  max_items: 'max_items',
  have_error: 'have_error',
  is_active: 'is_active',
  date_mod: 'date_mod',
  date_creation: 'date_creation'
};

exports.Prisma.Glpi_rssfeeds_usersScalarFieldEnum = {
  id: 'id',
  rssfeeds_id: 'rssfeeds_id',
  users_id: 'users_id'
};

exports.Prisma.Glpi_ruleactionsScalarFieldEnum = {
  id: 'id',
  rules_id: 'rules_id',
  action_type: 'action_type',
  field: 'field',
  value: 'value'
};

exports.Prisma.Glpi_rulecriteriasScalarFieldEnum = {
  id: 'id',
  rules_id: 'rules_id',
  criteria: 'criteria',
  condition: 'condition',
  pattern: 'pattern'
};

exports.Prisma.Glpi_rulematchedlogsScalarFieldEnum = {
  id: 'id',
  date: 'date',
  items_id: 'items_id',
  itemtype: 'itemtype',
  rules_id: 'rules_id',
  agents_id: 'agents_id',
  method: 'method'
};

exports.Prisma.Glpi_rulerightparametersScalarFieldEnum = {
  id: 'id',
  name: 'name',
  value: 'value',
  comment: 'comment',
  date_mod: 'date_mod',
  date_creation: 'date_creation'
};

exports.Prisma.Glpi_rulesScalarFieldEnum = {
  id: 'id',
  entities_id: 'entities_id',
  sub_type: 'sub_type',
  ranking: 'ranking',
  name: 'name',
  description: 'description',
  match: 'match',
  is_active: 'is_active',
  comment: 'comment',
  date_mod: 'date_mod',
  is_recursive: 'is_recursive',
  uuid: 'uuid',
  condition: 'condition',
  date_creation: 'date_creation'
};

exports.Prisma.Glpi_savedsearchesScalarFieldEnum = {
  id: 'id',
  name: 'name',
  type: 'type',
  itemtype: 'itemtype',
  users_id: 'users_id',
  is_private: 'is_private',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive',
  query: 'query',
  last_execution_time: 'last_execution_time',
  do_count: 'do_count',
  last_execution_date: 'last_execution_date',
  counter: 'counter'
};

exports.Prisma.Glpi_savedsearches_alertsScalarFieldEnum = {
  id: 'id',
  savedsearches_id: 'savedsearches_id',
  name: 'name',
  is_active: 'is_active',
  operator: 'operator',
  value: 'value',
  date_mod: 'date_mod',
  date_creation: 'date_creation',
  frequency: 'frequency'
};

exports.Prisma.Glpi_savedsearches_usersScalarFieldEnum = {
  id: 'id',
  users_id: 'users_id',
  itemtype: 'itemtype',
  savedsearches_id: 'savedsearches_id'
};

exports.Prisma.Glpi_slalevelactionsScalarFieldEnum = {
  id: 'id',
  slalevels_id: 'slalevels_id',
  action_type: 'action_type',
  field: 'field',
  value: 'value'
};

exports.Prisma.Glpi_slalevelcriteriasScalarFieldEnum = {
  id: 'id',
  slalevels_id: 'slalevels_id',
  criteria: 'criteria',
  condition: 'condition',
  pattern: 'pattern'
};

exports.Prisma.Glpi_slalevelsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  slas_id: 'slas_id',
  execution_time: 'execution_time',
  is_active: 'is_active',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive',
  match: 'match',
  uuid: 'uuid'
};

exports.Prisma.Glpi_slalevels_ticketsScalarFieldEnum = {
  id: 'id',
  tickets_id: 'tickets_id',
  slalevels_id: 'slalevels_id',
  date: 'date'
};

exports.Prisma.Glpi_slasScalarFieldEnum = {
  id: 'id',
  name: 'name',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive',
  type: 'type',
  comment: 'comment',
  number_time: 'number_time',
  use_ticket_calendar: 'use_ticket_calendar',
  calendars_id: 'calendars_id',
  date_mod: 'date_mod',
  definition_time: 'definition_time',
  end_of_working_day: 'end_of_working_day',
  date_creation: 'date_creation',
  slms_id: 'slms_id'
};

exports.Prisma.Glpi_slmsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive',
  comment: 'comment',
  use_ticket_calendar: 'use_ticket_calendar',
  calendars_id: 'calendars_id',
  date_mod: 'date_mod',
  date_creation: 'date_creation'
};

exports.Prisma.Glpi_snmpcredentialsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  snmpversion: 'snmpversion',
  community: 'community',
  username: 'username',
  authentication: 'authentication',
  auth_passphrase: 'auth_passphrase',
  encryption: 'encryption',
  priv_passphrase: 'priv_passphrase',
  is_deleted: 'is_deleted'
};

exports.Prisma.Glpi_socketmodelsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  comment: 'comment',
  date_mod: 'date_mod',
  date_creation: 'date_creation'
};

exports.Prisma.Glpi_socketsScalarFieldEnum = {
  id: 'id',
  position: 'position',
  locations_id: 'locations_id',
  name: 'name',
  socketmodels_id: 'socketmodels_id',
  wiring_side: 'wiring_side',
  itemtype: 'itemtype',
  items_id: 'items_id',
  networkports_id: 'networkports_id',
  comment: 'comment',
  date_mod: 'date_mod',
  date_creation: 'date_creation'
};

exports.Prisma.Glpi_softwarecategoriesScalarFieldEnum = {
  id: 'id',
  name: 'name',
  comment: 'comment',
  softwarecategories_id: 'softwarecategories_id',
  completename: 'completename',
  level: 'level',
  ancestors_cache: 'ancestors_cache',
  sons_cache: 'sons_cache'
};

exports.Prisma.Glpi_softwarelicensesScalarFieldEnum = {
  id: 'id',
  softwares_id: 'softwares_id',
  softwarelicenses_id: 'softwarelicenses_id',
  completename: 'completename',
  level: 'level',
  ancestors_cache: 'ancestors_cache',
  sons_cache: 'sons_cache',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive',
  number: 'number',
  softwarelicensetypes_id: 'softwarelicensetypes_id',
  name: 'name',
  serial: 'serial',
  otherserial: 'otherserial',
  softwareversions_id_buy: 'softwareversions_id_buy',
  softwareversions_id_use: 'softwareversions_id_use',
  expire: 'expire',
  comment: 'comment',
  date_mod: 'date_mod',
  is_valid: 'is_valid',
  date_creation: 'date_creation',
  is_deleted: 'is_deleted',
  locations_id: 'locations_id',
  users_id_tech: 'users_id_tech',
  users_id: 'users_id',
  groups_id_tech: 'groups_id_tech',
  groups_id: 'groups_id',
  is_helpdesk_visible: 'is_helpdesk_visible',
  is_template: 'is_template',
  template_name: 'template_name',
  states_id: 'states_id',
  manufacturers_id: 'manufacturers_id',
  contact: 'contact',
  contact_num: 'contact_num',
  allow_overquota: 'allow_overquota',
  pictures: 'pictures'
};

exports.Prisma.Glpi_softwarelicensetypesScalarFieldEnum = {
  id: 'id',
  name: 'name',
  comment: 'comment',
  date_mod: 'date_mod',
  date_creation: 'date_creation',
  softwarelicensetypes_id: 'softwarelicensetypes_id',
  level: 'level',
  ancestors_cache: 'ancestors_cache',
  sons_cache: 'sons_cache',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive',
  completename: 'completename'
};

exports.Prisma.Glpi_softwaresScalarFieldEnum = {
  id: 'id',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive',
  name: 'name',
  comment: 'comment',
  locations_id: 'locations_id',
  users_id_tech: 'users_id_tech',
  groups_id_tech: 'groups_id_tech',
  is_update: 'is_update',
  softwares_id: 'softwares_id',
  manufacturers_id: 'manufacturers_id',
  is_deleted: 'is_deleted',
  is_template: 'is_template',
  template_name: 'template_name',
  date_mod: 'date_mod',
  users_id: 'users_id',
  groups_id: 'groups_id',
  ticket_tco: 'ticket_tco',
  is_helpdesk_visible: 'is_helpdesk_visible',
  softwarecategories_id: 'softwarecategories_id',
  is_valid: 'is_valid',
  date_creation: 'date_creation',
  pictures: 'pictures'
};

exports.Prisma.Glpi_softwareversionsScalarFieldEnum = {
  id: 'id',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive',
  softwares_id: 'softwares_id',
  states_id: 'states_id',
  name: 'name',
  arch: 'arch',
  comment: 'comment',
  operatingsystems_id: 'operatingsystems_id',
  date_mod: 'date_mod',
  date_creation: 'date_creation'
};

exports.Prisma.Glpi_solutiontemplatesScalarFieldEnum = {
  id: 'id',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive',
  name: 'name',
  content: 'content',
  solutiontypes_id: 'solutiontypes_id',
  comment: 'comment',
  date_mod: 'date_mod',
  date_creation: 'date_creation'
};

exports.Prisma.Glpi_solutiontypesScalarFieldEnum = {
  id: 'id',
  name: 'name',
  comment: 'comment',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive',
  date_mod: 'date_mod',
  date_creation: 'date_creation'
};

exports.Prisma.Glpi_ssovariablesScalarFieldEnum = {
  id: 'id',
  name: 'name',
  comment: 'comment',
  date_mod: 'date_mod',
  date_creation: 'date_creation'
};

exports.Prisma.Glpi_statesScalarFieldEnum = {
  id: 'id',
  name: 'name',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive',
  comment: 'comment',
  states_id: 'states_id',
  completename: 'completename',
  level: 'level',
  ancestors_cache: 'ancestors_cache',
  sons_cache: 'sons_cache',
  is_visible_computer: 'is_visible_computer',
  is_visible_monitor: 'is_visible_monitor',
  is_visible_networkequipment: 'is_visible_networkequipment',
  is_visible_peripheral: 'is_visible_peripheral',
  is_visible_phone: 'is_visible_phone',
  is_visible_printer: 'is_visible_printer',
  is_visible_softwareversion: 'is_visible_softwareversion',
  is_visible_softwarelicense: 'is_visible_softwarelicense',
  is_visible_line: 'is_visible_line',
  is_visible_certificate: 'is_visible_certificate',
  is_visible_rack: 'is_visible_rack',
  is_visible_passivedcequipment: 'is_visible_passivedcequipment',
  is_visible_enclosure: 'is_visible_enclosure',
  is_visible_pdu: 'is_visible_pdu',
  is_visible_cluster: 'is_visible_cluster',
  is_visible_contract: 'is_visible_contract',
  is_visible_appliance: 'is_visible_appliance',
  is_visible_databaseinstance: 'is_visible_databaseinstance',
  is_visible_cable: 'is_visible_cable',
  is_visible_unmanaged: 'is_visible_unmanaged',
  date_mod: 'date_mod',
  date_creation: 'date_creation'
};

exports.Prisma.Glpi_suppliersScalarFieldEnum = {
  id: 'id',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive',
  name: 'name',
  suppliertypes_id: 'suppliertypes_id',
  registration_number: 'registration_number',
  address: 'address',
  postcode: 'postcode',
  town: 'town',
  state: 'state',
  country: 'country',
  website: 'website',
  phonenumber: 'phonenumber',
  comment: 'comment',
  is_deleted: 'is_deleted',
  fax: 'fax',
  email: 'email',
  date_mod: 'date_mod',
  date_creation: 'date_creation',
  is_active: 'is_active',
  pictures: 'pictures'
};

exports.Prisma.Glpi_suppliers_ticketsScalarFieldEnum = {
  id: 'id',
  tickets_id: 'tickets_id',
  suppliers_id: 'suppliers_id',
  type: 'type',
  use_notification: 'use_notification',
  alternative_email: 'alternative_email'
};

exports.Prisma.Glpi_suppliertypesScalarFieldEnum = {
  id: 'id',
  name: 'name',
  comment: 'comment',
  date_mod: 'date_mod',
  date_creation: 'date_creation'
};

exports.Prisma.Glpi_taskcategoriesScalarFieldEnum = {
  id: 'id',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive',
  taskcategories_id: 'taskcategories_id',
  name: 'name',
  completename: 'completename',
  comment: 'comment',
  level: 'level',
  ancestors_cache: 'ancestors_cache',
  sons_cache: 'sons_cache',
  is_active: 'is_active',
  is_helpdeskvisible: 'is_helpdeskvisible',
  date_mod: 'date_mod',
  date_creation: 'date_creation',
  knowbaseitemcategories_id: 'knowbaseitemcategories_id'
};

exports.Prisma.Glpi_tasktemplatesScalarFieldEnum = {
  id: 'id',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive',
  name: 'name',
  content: 'content',
  taskcategories_id: 'taskcategories_id',
  actiontime: 'actiontime',
  comment: 'comment',
  date_mod: 'date_mod',
  date_creation: 'date_creation',
  state: 'state',
  is_private: 'is_private',
  users_id_tech: 'users_id_tech',
  groups_id_tech: 'groups_id_tech'
};

exports.Prisma.Glpi_ticketcostsScalarFieldEnum = {
  id: 'id',
  tickets_id: 'tickets_id',
  name: 'name',
  comment: 'comment',
  begin_date: 'begin_date',
  end_date: 'end_date',
  actiontime: 'actiontime',
  cost_time: 'cost_time',
  cost_fixed: 'cost_fixed',
  cost_material: 'cost_material',
  budgets_id: 'budgets_id',
  entities_id: 'entities_id'
};

exports.Prisma.Glpi_ticketrecurrentsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  comment: 'comment',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive',
  is_active: 'is_active',
  tickettemplates_id: 'tickettemplates_id',
  begin_date: 'begin_date',
  periodicity: 'periodicity',
  create_before: 'create_before',
  next_creation_date: 'next_creation_date',
  calendars_id: 'calendars_id',
  end_date: 'end_date'
};

exports.Prisma.Glpi_ticketsScalarFieldEnum = {
  id: 'id',
  entities_id: 'entities_id',
  name: 'name',
  date: 'date',
  closedate: 'closedate',
  solvedate: 'solvedate',
  takeintoaccountdate: 'takeintoaccountdate',
  date_mod: 'date_mod',
  users_id_lastupdater: 'users_id_lastupdater',
  status: 'status',
  users_id_recipient: 'users_id_recipient',
  requesttypes_id: 'requesttypes_id',
  content: 'content',
  urgency: 'urgency',
  impact: 'impact',
  priority: 'priority',
  itilcategories_id: 'itilcategories_id',
  type: 'type',
  global_validation: 'global_validation',
  slas_id_ttr: 'slas_id_ttr',
  slas_id_tto: 'slas_id_tto',
  slalevels_id_ttr: 'slalevels_id_ttr',
  time_to_resolve: 'time_to_resolve',
  time_to_own: 'time_to_own',
  begin_waiting_date: 'begin_waiting_date',
  sla_waiting_duration: 'sla_waiting_duration',
  ola_waiting_duration: 'ola_waiting_duration',
  olas_id_tto: 'olas_id_tto',
  olas_id_ttr: 'olas_id_ttr',
  olalevels_id_ttr: 'olalevels_id_ttr',
  ola_tto_begin_date: 'ola_tto_begin_date',
  ola_ttr_begin_date: 'ola_ttr_begin_date',
  internal_time_to_resolve: 'internal_time_to_resolve',
  internal_time_to_own: 'internal_time_to_own',
  waiting_duration: 'waiting_duration',
  close_delay_stat: 'close_delay_stat',
  solve_delay_stat: 'solve_delay_stat',
  takeintoaccount_delay_stat: 'takeintoaccount_delay_stat',
  actiontime: 'actiontime',
  is_deleted: 'is_deleted',
  locations_id: 'locations_id',
  validation_percent: 'validation_percent',
  date_creation: 'date_creation'
};

exports.Prisma.Glpi_tickets_contractsScalarFieldEnum = {
  id: 'id',
  tickets_id: 'tickets_id',
  contracts_id: 'contracts_id'
};

exports.Prisma.Glpi_tickets_ticketsScalarFieldEnum = {
  id: 'id',
  tickets_id_1: 'tickets_id_1',
  tickets_id_2: 'tickets_id_2',
  link: 'link'
};

exports.Prisma.Glpi_tickets_usersScalarFieldEnum = {
  id: 'id',
  tickets_id: 'tickets_id',
  users_id: 'users_id',
  type: 'type',
  use_notification: 'use_notification',
  alternative_email: 'alternative_email'
};

exports.Prisma.Glpi_ticketsatisfactionsScalarFieldEnum = {
  id: 'id',
  tickets_id: 'tickets_id',
  type: 'type',
  date_begin: 'date_begin',
  date_answered: 'date_answered',
  satisfaction: 'satisfaction',
  comment: 'comment'
};

exports.Prisma.Glpi_tickettasksScalarFieldEnum = {
  id: 'id',
  uuid: 'uuid',
  tickets_id: 'tickets_id',
  taskcategories_id: 'taskcategories_id',
  date: 'date',
  users_id: 'users_id',
  users_id_editor: 'users_id_editor',
  content: 'content',
  is_private: 'is_private',
  actiontime: 'actiontime',
  begin: 'begin',
  end: 'end',
  state: 'state',
  users_id_tech: 'users_id_tech',
  groups_id_tech: 'groups_id_tech',
  date_mod: 'date_mod',
  date_creation: 'date_creation',
  tasktemplates_id: 'tasktemplates_id',
  timeline_position: 'timeline_position',
  sourceitems_id: 'sourceitems_id',
  sourceof_items_id: 'sourceof_items_id'
};

exports.Prisma.Glpi_tickettemplatehiddenfieldsScalarFieldEnum = {
  id: 'id',
  tickettemplates_id: 'tickettemplates_id',
  num: 'num'
};

exports.Prisma.Glpi_tickettemplatemandatoryfieldsScalarFieldEnum = {
  id: 'id',
  tickettemplates_id: 'tickettemplates_id',
  num: 'num'
};

exports.Prisma.Glpi_tickettemplatepredefinedfieldsScalarFieldEnum = {
  id: 'id',
  tickettemplates_id: 'tickettemplates_id',
  num: 'num',
  value: 'value'
};

exports.Prisma.Glpi_tickettemplatesScalarFieldEnum = {
  id: 'id',
  name: 'name',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive',
  comment: 'comment'
};

exports.Prisma.Glpi_ticketvalidationsScalarFieldEnum = {
  id: 'id',
  entities_id: 'entities_id',
  users_id: 'users_id',
  tickets_id: 'tickets_id',
  users_id_validate: 'users_id_validate',
  comment_submission: 'comment_submission',
  comment_validation: 'comment_validation',
  status: 'status',
  submission_date: 'submission_date',
  validation_date: 'validation_date',
  timeline_position: 'timeline_position'
};

exports.Prisma.Glpi_transfersScalarFieldEnum = {
  id: 'id',
  name: 'name',
  keep_ticket: 'keep_ticket',
  keep_networklink: 'keep_networklink',
  keep_reservation: 'keep_reservation',
  keep_history: 'keep_history',
  keep_device: 'keep_device',
  keep_infocom: 'keep_infocom',
  keep_dc_monitor: 'keep_dc_monitor',
  clean_dc_monitor: 'clean_dc_monitor',
  keep_dc_phone: 'keep_dc_phone',
  clean_dc_phone: 'clean_dc_phone',
  keep_dc_peripheral: 'keep_dc_peripheral',
  clean_dc_peripheral: 'clean_dc_peripheral',
  keep_dc_printer: 'keep_dc_printer',
  clean_dc_printer: 'clean_dc_printer',
  keep_supplier: 'keep_supplier',
  clean_supplier: 'clean_supplier',
  keep_contact: 'keep_contact',
  clean_contact: 'clean_contact',
  keep_contract: 'keep_contract',
  clean_contract: 'clean_contract',
  keep_software: 'keep_software',
  clean_software: 'clean_software',
  keep_document: 'keep_document',
  clean_document: 'clean_document',
  keep_cartridgeitem: 'keep_cartridgeitem',
  clean_cartridgeitem: 'clean_cartridgeitem',
  keep_cartridge: 'keep_cartridge',
  keep_consumable: 'keep_consumable',
  date_mod: 'date_mod',
  date_creation: 'date_creation',
  comment: 'comment',
  keep_disk: 'keep_disk',
  keep_certificate: 'keep_certificate',
  clean_certificate: 'clean_certificate',
  lock_updated_fields: 'lock_updated_fields',
  keep_location: 'keep_location'
};

exports.Prisma.Glpi_unmanagedsScalarFieldEnum = {
  id: 'id',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive',
  name: 'name',
  serial: 'serial',
  otherserial: 'otherserial',
  contact: 'contact',
  contact_num: 'contact_num',
  date_mod: 'date_mod',
  comment: 'comment',
  locations_id: 'locations_id',
  networks_id: 'networks_id',
  manufacturers_id: 'manufacturers_id',
  is_deleted: 'is_deleted',
  users_id: 'users_id',
  groups_id: 'groups_id',
  states_id: 'states_id',
  users_id_tech: 'users_id_tech',
  groups_id_tech: 'groups_id_tech',
  is_dynamic: 'is_dynamic',
  date_creation: 'date_creation',
  autoupdatesystems_id: 'autoupdatesystems_id',
  sysdescr: 'sysdescr',
  agents_id: 'agents_id',
  itemtype: 'itemtype',
  accepted: 'accepted',
  hub: 'hub',
  ip: 'ip',
  snmpcredentials_id: 'snmpcredentials_id',
  last_inventory_update: 'last_inventory_update'
};

exports.Prisma.Glpi_usbvendorsScalarFieldEnum = {
  id: 'id',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive',
  vendorid: 'vendorid',
  deviceid: 'deviceid',
  name: 'name',
  comment: 'comment',
  date_creation: 'date_creation',
  date_mod: 'date_mod'
};

exports.Prisma.Glpi_usercategoriesScalarFieldEnum = {
  id: 'id',
  name: 'name',
  comment: 'comment',
  date_mod: 'date_mod',
  date_creation: 'date_creation'
};

exports.Prisma.Glpi_useremailsScalarFieldEnum = {
  id: 'id',
  users_id: 'users_id',
  is_default: 'is_default',
  is_dynamic: 'is_dynamic',
  email: 'email'
};

exports.Prisma.Glpi_usersScalarFieldEnum = {
  id: 'id',
  name: 'name',
  password: 'password',
  password_last_update: 'password_last_update',
  phone: 'phone',
  phone2: 'phone2',
  mobile: 'mobile',
  realname: 'realname',
  firstname: 'firstname',
  locations_id: 'locations_id',
  language: 'language',
  use_mode: 'use_mode',
  list_limit: 'list_limit',
  is_active: 'is_active',
  comment: 'comment',
  auths_id: 'auths_id',
  authtype: 'authtype',
  last_login: 'last_login',
  date_mod: 'date_mod',
  date_sync: 'date_sync',
  is_deleted: 'is_deleted',
  profiles_id: 'profiles_id',
  entities_id: 'entities_id',
  usertitles_id: 'usertitles_id',
  usercategories_id: 'usercategories_id',
  date_format: 'date_format',
  number_format: 'number_format',
  names_format: 'names_format',
  csv_delimiter: 'csv_delimiter',
  is_ids_visible: 'is_ids_visible',
  use_flat_dropdowntree: 'use_flat_dropdowntree',
  use_flat_dropdowntree_on_search_result: 'use_flat_dropdowntree_on_search_result',
  show_jobs_at_login: 'show_jobs_at_login',
  priority_1: 'priority_1',
  priority_2: 'priority_2',
  priority_3: 'priority_3',
  priority_4: 'priority_4',
  priority_5: 'priority_5',
  priority_6: 'priority_6',
  followup_private: 'followup_private',
  task_private: 'task_private',
  default_requesttypes_id: 'default_requesttypes_id',
  password_forget_token: 'password_forget_token',
  password_forget_token_date: 'password_forget_token_date',
  user_dn: 'user_dn',
  user_dn_hash: 'user_dn_hash',
  registration_number: 'registration_number',
  show_count_on_tabs: 'show_count_on_tabs',
  refresh_views: 'refresh_views',
  set_default_tech: 'set_default_tech',
  personal_token: 'personal_token',
  personal_token_date: 'personal_token_date',
  api_token: 'api_token',
  api_token_date: 'api_token_date',
  cookie_token: 'cookie_token',
  cookie_token_date: 'cookie_token_date',
  display_count_on_home: 'display_count_on_home',
  notification_to_myself: 'notification_to_myself',
  duedateok_color: 'duedateok_color',
  duedatewarning_color: 'duedatewarning_color',
  duedatecritical_color: 'duedatecritical_color',
  duedatewarning_less: 'duedatewarning_less',
  duedatecritical_less: 'duedatecritical_less',
  duedatewarning_unit: 'duedatewarning_unit',
  duedatecritical_unit: 'duedatecritical_unit',
  display_options: 'display_options',
  is_deleted_ldap: 'is_deleted_ldap',
  pdffont: 'pdffont',
  picture: 'picture',
  begin_date: 'begin_date',
  end_date: 'end_date',
  keep_devices_when_purging_item: 'keep_devices_when_purging_item',
  privatebookmarkorder: 'privatebookmarkorder',
  backcreated: 'backcreated',
  task_state: 'task_state',
  palette: 'palette',
  page_layout: 'page_layout',
  fold_menu: 'fold_menu',
  fold_search: 'fold_search',
  savedsearches_pinned: 'savedsearches_pinned',
  timeline_order: 'timeline_order',
  itil_layout: 'itil_layout',
  richtext_layout: 'richtext_layout',
  set_default_requester: 'set_default_requester',
  lock_autolock_mode: 'lock_autolock_mode',
  lock_directunlock_notification: 'lock_directunlock_notification',
  date_creation: 'date_creation',
  highcontrast_css: 'highcontrast_css',
  plannings: 'plannings',
  sync_field: 'sync_field',
  groups_id: 'groups_id',
  users_id_supervisor: 'users_id_supervisor',
  timezone: 'timezone',
  default_dashboard_central: 'default_dashboard_central',
  default_dashboard_assets: 'default_dashboard_assets',
  default_dashboard_helpdesk: 'default_dashboard_helpdesk',
  default_dashboard_mini_ticket: 'default_dashboard_mini_ticket',
  default_central_tab: 'default_central_tab',
  nickname: 'nickname',
  timeline_action_btn_layout: 'timeline_action_btn_layout',
  timeline_date_format: 'timeline_date_format'
};

exports.Prisma.Glpi_usertitlesScalarFieldEnum = {
  id: 'id',
  name: 'name',
  comment: 'comment',
  date_mod: 'date_mod',
  date_creation: 'date_creation'
};

exports.Prisma.Glpi_virtualmachinestatesScalarFieldEnum = {
  id: 'id',
  name: 'name',
  comment: 'comment',
  date_mod: 'date_mod',
  date_creation: 'date_creation'
};

exports.Prisma.Glpi_virtualmachinesystemsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  comment: 'comment',
  date_mod: 'date_mod',
  date_creation: 'date_creation'
};

exports.Prisma.Glpi_virtualmachinetypesScalarFieldEnum = {
  id: 'id',
  name: 'name',
  comment: 'comment',
  date_mod: 'date_mod',
  date_creation: 'date_creation'
};

exports.Prisma.Glpi_vlansScalarFieldEnum = {
  id: 'id',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive',
  name: 'name',
  comment: 'comment',
  tag: 'tag',
  date_mod: 'date_mod',
  date_creation: 'date_creation'
};

exports.Prisma.Glpi_vobjectsScalarFieldEnum = {
  id: 'id',
  itemtype: 'itemtype',
  items_id: 'items_id',
  data: 'data',
  date_mod: 'date_mod',
  date_creation: 'date_creation'
};

exports.Prisma.Glpi_wifinetworksScalarFieldEnum = {
  id: 'id',
  entities_id: 'entities_id',
  is_recursive: 'is_recursive',
  name: 'name',
  essid: 'essid',
  mode: 'mode',
  comment: 'comment',
  date_mod: 'date_mod',
  date_creation: 'date_creation'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.glpi_agentsOrderByRelevanceFieldEnum = {
  deviceid: 'deviceid',
  name: 'name',
  version: 'version',
  itemtype: 'itemtype',
  useragent: 'useragent',
  tag: 'tag',
  port: 'port',
  remote_addr: 'remote_addr'
};

exports.Prisma.glpi_agenttypesOrderByRelevanceFieldEnum = {
  name: 'name'
};

exports.Prisma.glpi_alertsOrderByRelevanceFieldEnum = {
  itemtype: 'itemtype'
};

exports.Prisma.glpi_apiclientsOrderByRelevanceFieldEnum = {
  name: 'name',
  ipv6: 'ipv6',
  app_token: 'app_token',
  comment: 'comment'
};

exports.Prisma.glpi_applianceenvironmentsOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment'
};

exports.Prisma.glpi_appliancesOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment',
  externalidentifier: 'externalidentifier',
  serial: 'serial',
  otherserial: 'otherserial',
  contact: 'contact',
  contact_num: 'contact_num',
  pictures: 'pictures'
};

exports.Prisma.glpi_appliances_itemsOrderByRelevanceFieldEnum = {
  itemtype: 'itemtype'
};

exports.Prisma.glpi_appliances_items_relationsOrderByRelevanceFieldEnum = {
  itemtype: 'itemtype'
};

exports.Prisma.glpi_appliancetypesOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment',
  externalidentifier: 'externalidentifier'
};

exports.Prisma.glpi_authldapreplicatesOrderByRelevanceFieldEnum = {
  host: 'host',
  name: 'name'
};

exports.Prisma.glpi_authldapsOrderByRelevanceFieldEnum = {
  name: 'name',
  host: 'host',
  basedn: 'basedn',
  rootdn: 'rootdn',
  condition: 'condition',
  login_field: 'login_field',
  sync_field: 'sync_field',
  group_field: 'group_field',
  group_condition: 'group_condition',
  group_member_field: 'group_member_field',
  email1_field: 'email1_field',
  realname_field: 'realname_field',
  firstname_field: 'firstname_field',
  phone_field: 'phone_field',
  phone2_field: 'phone2_field',
  mobile_field: 'mobile_field',
  comment_field: 'comment_field',
  title_field: 'title_field',
  category_field: 'category_field',
  language_field: 'language_field',
  entity_field: 'entity_field',
  entity_condition: 'entity_condition',
  comment: 'comment',
  rootdn_passwd: 'rootdn_passwd',
  registration_number_field: 'registration_number_field',
  email2_field: 'email2_field',
  email3_field: 'email3_field',
  email4_field: 'email4_field',
  location_field: 'location_field',
  responsible_field: 'responsible_field',
  picture_field: 'picture_field',
  inventory_domain: 'inventory_domain',
  tls_certfile: 'tls_certfile',
  tls_keyfile: 'tls_keyfile'
};

exports.Prisma.glpi_authmailsOrderByRelevanceFieldEnum = {
  name: 'name',
  connect_string: 'connect_string',
  host: 'host',
  comment: 'comment'
};

exports.Prisma.glpi_autoupdatesystemsOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment'
};

exports.Prisma.glpi_blacklistedmailcontentsOrderByRelevanceFieldEnum = {
  name: 'name',
  content: 'content',
  comment: 'comment'
};

exports.Prisma.glpi_blacklistsOrderByRelevanceFieldEnum = {
  name: 'name',
  value: 'value',
  comment: 'comment'
};

exports.Prisma.glpi_budgetsOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment',
  template_name: 'template_name'
};

exports.Prisma.glpi_budgettypesOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment'
};

exports.Prisma.glpi_businesscriticitiesOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment',
  completename: 'completename',
  ancestors_cache: 'ancestors_cache',
  sons_cache: 'sons_cache'
};

exports.Prisma.glpi_cablesOrderByRelevanceFieldEnum = {
  name: 'name',
  itemtype_endpoint_a: 'itemtype_endpoint_a',
  itemtype_endpoint_b: 'itemtype_endpoint_b',
  color: 'color',
  otherserial: 'otherserial',
  comment: 'comment'
};

exports.Prisma.glpi_cablestrandsOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment'
};

exports.Prisma.glpi_cabletypesOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment'
};

exports.Prisma.glpi_calendarsOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment',
  cache_duration: 'cache_duration'
};

exports.Prisma.glpi_cartridgeitemsOrderByRelevanceFieldEnum = {
  name: 'name',
  ref: 'ref',
  comment: 'comment',
  pictures: 'pictures'
};

exports.Prisma.glpi_cartridgeitemtypesOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment'
};

exports.Prisma.glpi_certificatesOrderByRelevanceFieldEnum = {
  name: 'name',
  serial: 'serial',
  otherserial: 'otherserial',
  comment: 'comment',
  template_name: 'template_name',
  dns_name: 'dns_name',
  dns_suffix: 'dns_suffix',
  contact: 'contact',
  contact_num: 'contact_num',
  command: 'command',
  certificate_request: 'certificate_request',
  certificate_item: 'certificate_item'
};

exports.Prisma.glpi_certificates_itemsOrderByRelevanceFieldEnum = {
  itemtype: 'itemtype'
};

exports.Prisma.glpi_certificatetypesOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment'
};

exports.Prisma.glpi_changecostsOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment'
};

exports.Prisma.glpi_changesOrderByRelevanceFieldEnum = {
  name: 'name',
  content: 'content',
  impactcontent: 'impactcontent',
  controlistcontent: 'controlistcontent',
  rolloutplancontent: 'rolloutplancontent',
  backoutplancontent: 'backoutplancontent',
  checklistcontent: 'checklistcontent'
};

exports.Prisma.glpi_changes_itemsOrderByRelevanceFieldEnum = {
  itemtype: 'itemtype'
};

exports.Prisma.glpi_changes_suppliersOrderByRelevanceFieldEnum = {
  alternative_email: 'alternative_email'
};

exports.Prisma.glpi_changes_usersOrderByRelevanceFieldEnum = {
  alternative_email: 'alternative_email'
};

exports.Prisma.glpi_changetasksOrderByRelevanceFieldEnum = {
  uuid: 'uuid',
  content: 'content'
};

exports.Prisma.glpi_changetemplatepredefinedfieldsOrderByRelevanceFieldEnum = {
  value: 'value'
};

exports.Prisma.glpi_changetemplatesOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment'
};

exports.Prisma.glpi_changevalidationsOrderByRelevanceFieldEnum = {
  comment_submission: 'comment_submission',
  comment_validation: 'comment_validation'
};

exports.Prisma.glpi_clustersOrderByRelevanceFieldEnum = {
  name: 'name',
  uuid: 'uuid',
  version: 'version',
  comment: 'comment'
};

exports.Prisma.glpi_clustertypesOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment'
};

exports.Prisma.glpi_computerantivirusesOrderByRelevanceFieldEnum = {
  name: 'name',
  antivirus_version: 'antivirus_version',
  signature_version: 'signature_version'
};

exports.Prisma.glpi_computermodelsOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment',
  product_number: 'product_number',
  picture_front: 'picture_front',
  picture_rear: 'picture_rear',
  pictures: 'pictures'
};

exports.Prisma.glpi_computersOrderByRelevanceFieldEnum = {
  name: 'name',
  serial: 'serial',
  otherserial: 'otherserial',
  contact: 'contact',
  contact_num: 'contact_num',
  comment: 'comment',
  template_name: 'template_name',
  uuid: 'uuid'
};

exports.Prisma.glpi_computers_itemsOrderByRelevanceFieldEnum = {
  itemtype: 'itemtype'
};

exports.Prisma.glpi_computertypesOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment'
};

exports.Prisma.glpi_computervirtualmachinesOrderByRelevanceFieldEnum = {
  name: 'name',
  uuid: 'uuid',
  comment: 'comment'
};

exports.Prisma.glpi_configsOrderByRelevanceFieldEnum = {
  context: 'context',
  name: 'name',
  value: 'value'
};

exports.Prisma.glpi_consumableitemsOrderByRelevanceFieldEnum = {
  name: 'name',
  ref: 'ref',
  comment: 'comment',
  otherserial: 'otherserial',
  pictures: 'pictures'
};

exports.Prisma.glpi_consumableitemtypesOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment'
};

exports.Prisma.glpi_consumablesOrderByRelevanceFieldEnum = {
  itemtype: 'itemtype'
};

exports.Prisma.glpi_contactsOrderByRelevanceFieldEnum = {
  name: 'name',
  firstname: 'firstname',
  registration_number: 'registration_number',
  phone: 'phone',
  phone2: 'phone2',
  mobile: 'mobile',
  fax: 'fax',
  email: 'email',
  comment: 'comment',
  address: 'address',
  postcode: 'postcode',
  town: 'town',
  state: 'state',
  country: 'country',
  pictures: 'pictures'
};

exports.Prisma.glpi_contacttypesOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment'
};

exports.Prisma.glpi_contractcostsOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment'
};

exports.Prisma.glpi_contractsOrderByRelevanceFieldEnum = {
  name: 'name',
  num: 'num',
  comment: 'comment',
  accounting_number: 'accounting_number',
  template_name: 'template_name'
};

exports.Prisma.glpi_contracts_itemsOrderByRelevanceFieldEnum = {
  itemtype: 'itemtype'
};

exports.Prisma.glpi_contracttypesOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment'
};

exports.Prisma.glpi_crontasklogsOrderByRelevanceFieldEnum = {
  content: 'content'
};

exports.Prisma.glpi_crontasksOrderByRelevanceFieldEnum = {
  itemtype: 'itemtype',
  name: 'name',
  comment: 'comment'
};

exports.Prisma.glpi_dashboards_dashboardsOrderByRelevanceFieldEnum = {
  key: 'key',
  name: 'name',
  context: 'context'
};

exports.Prisma.glpi_dashboards_filtersOrderByRelevanceFieldEnum = {
  filter: 'filter'
};

exports.Prisma.glpi_dashboards_itemsOrderByRelevanceFieldEnum = {
  gridstack_id: 'gridstack_id',
  card_id: 'card_id',
  card_options: 'card_options'
};

exports.Prisma.glpi_dashboards_rightsOrderByRelevanceFieldEnum = {
  itemtype: 'itemtype'
};

exports.Prisma.glpi_databaseinstancecategoriesOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment'
};

exports.Prisma.glpi_databaseinstancesOrderByRelevanceFieldEnum = {
  name: 'name',
  version: 'version',
  port: 'port',
  path: 'path',
  itemtype: 'itemtype',
  comment: 'comment'
};

exports.Prisma.glpi_databaseinstancetypesOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment'
};

exports.Prisma.glpi_databasesOrderByRelevanceFieldEnum = {
  name: 'name'
};

exports.Prisma.glpi_datacentersOrderByRelevanceFieldEnum = {
  name: 'name',
  pictures: 'pictures'
};

exports.Prisma.glpi_dcroomsOrderByRelevanceFieldEnum = {
  name: 'name',
  blueprint: 'blueprint'
};

exports.Prisma.glpi_devicebatteriesOrderByRelevanceFieldEnum = {
  designation: 'designation',
  comment: 'comment'
};

exports.Prisma.glpi_devicebatterymodelsOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment',
  product_number: 'product_number'
};

exports.Prisma.glpi_devicebatterytypesOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment'
};

exports.Prisma.glpi_devicecameramodelsOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment',
  product_number: 'product_number'
};

exports.Prisma.glpi_devicecamerasOrderByRelevanceFieldEnum = {
  designation: 'designation',
  lensfacing: 'lensfacing',
  orientation: 'orientation',
  focallength: 'focallength',
  sensorsize: 'sensorsize',
  comment: 'comment',
  support: 'support'
};

exports.Prisma.glpi_devicecasemodelsOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment',
  product_number: 'product_number'
};

exports.Prisma.glpi_devicecasesOrderByRelevanceFieldEnum = {
  designation: 'designation',
  comment: 'comment'
};

exports.Prisma.glpi_devicecasetypesOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment'
};

exports.Prisma.glpi_devicecontrolmodelsOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment',
  product_number: 'product_number'
};

exports.Prisma.glpi_devicecontrolsOrderByRelevanceFieldEnum = {
  designation: 'designation',
  comment: 'comment'
};

exports.Prisma.glpi_devicedrivemodelsOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment',
  product_number: 'product_number'
};

exports.Prisma.glpi_devicedrivesOrderByRelevanceFieldEnum = {
  designation: 'designation',
  speed: 'speed',
  comment: 'comment'
};

exports.Prisma.glpi_devicefirmwaremodelsOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment',
  product_number: 'product_number'
};

exports.Prisma.glpi_devicefirmwaresOrderByRelevanceFieldEnum = {
  designation: 'designation',
  comment: 'comment',
  version: 'version'
};

exports.Prisma.glpi_devicefirmwaretypesOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment'
};

exports.Prisma.glpi_devicegenericmodelsOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment',
  product_number: 'product_number'
};

exports.Prisma.glpi_devicegenericsOrderByRelevanceFieldEnum = {
  designation: 'designation',
  comment: 'comment'
};

exports.Prisma.glpi_devicegenerictypesOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment'
};

exports.Prisma.glpi_devicegraphiccardmodelsOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment',
  product_number: 'product_number'
};

exports.Prisma.glpi_devicegraphiccardsOrderByRelevanceFieldEnum = {
  designation: 'designation',
  comment: 'comment',
  chipset: 'chipset'
};

exports.Prisma.glpi_deviceharddrivemodelsOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment',
  product_number: 'product_number'
};

exports.Prisma.glpi_deviceharddrivesOrderByRelevanceFieldEnum = {
  designation: 'designation',
  rpm: 'rpm',
  cache: 'cache',
  comment: 'comment'
};

exports.Prisma.glpi_devicememoriesOrderByRelevanceFieldEnum = {
  designation: 'designation',
  frequence: 'frequence',
  comment: 'comment'
};

exports.Prisma.glpi_devicememorymodelsOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment',
  product_number: 'product_number'
};

exports.Prisma.glpi_devicememorytypesOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment'
};

exports.Prisma.glpi_devicemotherboardmodelsOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment',
  product_number: 'product_number'
};

exports.Prisma.glpi_devicemotherboardsOrderByRelevanceFieldEnum = {
  designation: 'designation',
  chipset: 'chipset',
  comment: 'comment'
};

exports.Prisma.glpi_devicenetworkcardmodelsOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment',
  product_number: 'product_number'
};

exports.Prisma.glpi_devicenetworkcardsOrderByRelevanceFieldEnum = {
  designation: 'designation',
  bandwidth: 'bandwidth',
  comment: 'comment',
  mac_default: 'mac_default'
};

exports.Prisma.glpi_devicepcimodelsOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment',
  product_number: 'product_number'
};

exports.Prisma.glpi_devicepcisOrderByRelevanceFieldEnum = {
  designation: 'designation',
  comment: 'comment'
};

exports.Prisma.glpi_devicepowersuppliesOrderByRelevanceFieldEnum = {
  designation: 'designation',
  power: 'power',
  comment: 'comment'
};

exports.Prisma.glpi_devicepowersupplymodelsOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment',
  product_number: 'product_number'
};

exports.Prisma.glpi_deviceprocessormodelsOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment',
  product_number: 'product_number'
};

exports.Prisma.glpi_deviceprocessorsOrderByRelevanceFieldEnum = {
  designation: 'designation',
  comment: 'comment'
};

exports.Prisma.glpi_devicesensormodelsOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment',
  product_number: 'product_number'
};

exports.Prisma.glpi_devicesensorsOrderByRelevanceFieldEnum = {
  designation: 'designation',
  comment: 'comment'
};

exports.Prisma.glpi_devicesensortypesOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment'
};

exports.Prisma.glpi_devicesimcardsOrderByRelevanceFieldEnum = {
  designation: 'designation',
  comment: 'comment'
};

exports.Prisma.glpi_devicesimcardtypesOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment'
};

exports.Prisma.glpi_devicesoundcardmodelsOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment',
  product_number: 'product_number'
};

exports.Prisma.glpi_devicesoundcardsOrderByRelevanceFieldEnum = {
  designation: 'designation',
  type: 'type',
  comment: 'comment'
};

exports.Prisma.glpi_displaypreferencesOrderByRelevanceFieldEnum = {
  itemtype: 'itemtype'
};

exports.Prisma.glpi_documentcategoriesOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment',
  completename: 'completename',
  ancestors_cache: 'ancestors_cache',
  sons_cache: 'sons_cache'
};

exports.Prisma.glpi_documentsOrderByRelevanceFieldEnum = {
  name: 'name',
  filename: 'filename',
  filepath: 'filepath',
  mime: 'mime',
  comment: 'comment',
  link: 'link',
  sha1sum: 'sha1sum',
  tag: 'tag'
};

exports.Prisma.glpi_documents_itemsOrderByRelevanceFieldEnum = {
  itemtype: 'itemtype'
};

exports.Prisma.glpi_documenttypesOrderByRelevanceFieldEnum = {
  name: 'name',
  ext: 'ext',
  icon: 'icon',
  mime: 'mime',
  comment: 'comment'
};

exports.Prisma.glpi_domainrecordsOrderByRelevanceFieldEnum = {
  name: 'name',
  data: 'data',
  data_obj: 'data_obj',
  comment: 'comment'
};

exports.Prisma.glpi_domainrecordtypesOrderByRelevanceFieldEnum = {
  name: 'name',
  fields: 'fields',
  comment: 'comment'
};

exports.Prisma.glpi_domainrelationsOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment'
};

exports.Prisma.glpi_domainsOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment',
  template_name: 'template_name'
};

exports.Prisma.glpi_domains_itemsOrderByRelevanceFieldEnum = {
  itemtype: 'itemtype'
};

exports.Prisma.glpi_domaintypesOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment'
};

exports.Prisma.glpi_dropdowntranslationsOrderByRelevanceFieldEnum = {
  itemtype: 'itemtype',
  language: 'language',
  field: 'field',
  value: 'value'
};

exports.Prisma.glpi_enclosuremodelsOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment',
  product_number: 'product_number',
  picture_front: 'picture_front',
  picture_rear: 'picture_rear',
  pictures: 'pictures'
};

exports.Prisma.glpi_enclosuresOrderByRelevanceFieldEnum = {
  name: 'name',
  serial: 'serial',
  otherserial: 'otherserial',
  template_name: 'template_name',
  comment: 'comment'
};

exports.Prisma.glpi_entitiesOrderByRelevanceFieldEnum = {
  name: 'name',
  completename: 'completename',
  comment: 'comment',
  sons_cache: 'sons_cache',
  ancestors_cache: 'ancestors_cache',
  registration_number: 'registration_number',
  address: 'address',
  postcode: 'postcode',
  town: 'town',
  state: 'state',
  country: 'country',
  website: 'website',
  phonenumber: 'phonenumber',
  fax: 'fax',
  email: 'email',
  admin_email: 'admin_email',
  admin_email_name: 'admin_email_name',
  from_email: 'from_email',
  from_email_name: 'from_email_name',
  noreply_email: 'noreply_email',
  noreply_email_name: 'noreply_email_name',
  replyto_email: 'replyto_email',
  replyto_email_name: 'replyto_email_name',
  notification_subject_tag: 'notification_subject_tag',
  ldap_dn: 'ldap_dn',
  tag: 'tag',
  mail_domain: 'mail_domain',
  entity_ldapfilter: 'entity_ldapfilter',
  mailing_signature: 'mailing_signature',
  inquest_URL: 'inquest_URL',
  autofill_warranty_date: 'autofill_warranty_date',
  autofill_use_date: 'autofill_use_date',
  autofill_buy_date: 'autofill_buy_date',
  autofill_delivery_date: 'autofill_delivery_date',
  autofill_order_date: 'autofill_order_date',
  autofill_decommission_date: 'autofill_decommission_date',
  custom_css_code: 'custom_css_code',
  latitude: 'latitude',
  longitude: 'longitude',
  altitude: 'altitude',
  agent_base_url: 'agent_base_url'
};

exports.Prisma.glpi_eventsOrderByRelevanceFieldEnum = {
  type: 'type',
  service: 'service',
  message: 'message'
};

exports.Prisma.glpi_fieldblacklistsOrderByRelevanceFieldEnum = {
  name: 'name',
  field: 'field',
  value: 'value',
  itemtype: 'itemtype',
  comment: 'comment'
};

exports.Prisma.glpi_fieldunicitiesOrderByRelevanceFieldEnum = {
  name: 'name',
  itemtype: 'itemtype',
  fields: 'fields',
  comment: 'comment'
};

exports.Prisma.glpi_filesystemsOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment'
};

exports.Prisma.glpi_fqdnsOrderByRelevanceFieldEnum = {
  name: 'name',
  fqdn: 'fqdn',
  comment: 'comment'
};

exports.Prisma.glpi_groupsOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment',
  ldap_field: 'ldap_field',
  ldap_value: 'ldap_value',
  ldap_group_dn: 'ldap_group_dn',
  completename: 'completename',
  ancestors_cache: 'ancestors_cache',
  sons_cache: 'sons_cache'
};

exports.Prisma.glpi_holidaysOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment'
};

exports.Prisma.glpi_imageformatsOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment'
};

exports.Prisma.glpi_imageresolutionsOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment'
};

exports.Prisma.glpi_impactcompoundsOrderByRelevanceFieldEnum = {
  name: 'name',
  color: 'color'
};

exports.Prisma.glpi_impactcontextsOrderByRelevanceFieldEnum = {
  positions: 'positions',
  impact_color: 'impact_color',
  depends_color: 'depends_color',
  impact_and_depends_color: 'impact_and_depends_color'
};

exports.Prisma.glpi_impactitemsOrderByRelevanceFieldEnum = {
  itemtype: 'itemtype'
};

exports.Prisma.glpi_impactrelationsOrderByRelevanceFieldEnum = {
  itemtype_source: 'itemtype_source',
  itemtype_impacted: 'itemtype_impacted'
};

exports.Prisma.glpi_infocomsOrderByRelevanceFieldEnum = {
  itemtype: 'itemtype',
  warranty_info: 'warranty_info',
  order_number: 'order_number',
  delivery_number: 'delivery_number',
  immo_number: 'immo_number',
  comment: 'comment',
  bill: 'bill'
};

exports.Prisma.glpi_interfacetypesOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment'
};

exports.Prisma.glpi_ipaddressesOrderByRelevanceFieldEnum = {
  itemtype: 'itemtype',
  name: 'name',
  mainitemtype: 'mainitemtype'
};

exports.Prisma.glpi_ipnetworksOrderByRelevanceFieldEnum = {
  completename: 'completename',
  ancestors_cache: 'ancestors_cache',
  sons_cache: 'sons_cache',
  name: 'name',
  address: 'address',
  netmask: 'netmask',
  gateway: 'gateway',
  comment: 'comment'
};

exports.Prisma.glpi_items_clustersOrderByRelevanceFieldEnum = {
  itemtype: 'itemtype'
};

exports.Prisma.glpi_items_devicebatteriesOrderByRelevanceFieldEnum = {
  itemtype: 'itemtype',
  serial: 'serial',
  otherserial: 'otherserial'
};

exports.Prisma.glpi_items_devicecamerasOrderByRelevanceFieldEnum = {
  itemtype: 'itemtype'
};

exports.Prisma.glpi_items_devicecasesOrderByRelevanceFieldEnum = {
  itemtype: 'itemtype',
  serial: 'serial',
  otherserial: 'otherserial'
};

exports.Prisma.glpi_items_devicecontrolsOrderByRelevanceFieldEnum = {
  itemtype: 'itemtype',
  serial: 'serial',
  busID: 'busID',
  otherserial: 'otherserial'
};

exports.Prisma.glpi_items_devicedrivesOrderByRelevanceFieldEnum = {
  itemtype: 'itemtype',
  serial: 'serial',
  busID: 'busID',
  otherserial: 'otherserial'
};

exports.Prisma.glpi_items_devicefirmwaresOrderByRelevanceFieldEnum = {
  itemtype: 'itemtype',
  serial: 'serial',
  otherserial: 'otherserial'
};

exports.Prisma.glpi_items_devicegenericsOrderByRelevanceFieldEnum = {
  itemtype: 'itemtype',
  serial: 'serial',
  otherserial: 'otherserial'
};

exports.Prisma.glpi_items_devicegraphiccardsOrderByRelevanceFieldEnum = {
  itemtype: 'itemtype',
  serial: 'serial',
  busID: 'busID',
  otherserial: 'otherserial'
};

exports.Prisma.glpi_items_deviceharddrivesOrderByRelevanceFieldEnum = {
  itemtype: 'itemtype',
  serial: 'serial',
  busID: 'busID',
  otherserial: 'otherserial'
};

exports.Prisma.glpi_items_devicememoriesOrderByRelevanceFieldEnum = {
  itemtype: 'itemtype',
  serial: 'serial',
  busID: 'busID',
  otherserial: 'otherserial'
};

exports.Prisma.glpi_items_devicemotherboardsOrderByRelevanceFieldEnum = {
  itemtype: 'itemtype',
  serial: 'serial',
  otherserial: 'otherserial'
};

exports.Prisma.glpi_items_devicenetworkcardsOrderByRelevanceFieldEnum = {
  itemtype: 'itemtype',
  mac: 'mac',
  serial: 'serial',
  busID: 'busID',
  otherserial: 'otherserial'
};

exports.Prisma.glpi_items_devicepcisOrderByRelevanceFieldEnum = {
  itemtype: 'itemtype',
  serial: 'serial',
  busID: 'busID',
  otherserial: 'otherserial'
};

exports.Prisma.glpi_items_devicepowersuppliesOrderByRelevanceFieldEnum = {
  itemtype: 'itemtype',
  serial: 'serial',
  otherserial: 'otherserial'
};

exports.Prisma.glpi_items_deviceprocessorsOrderByRelevanceFieldEnum = {
  itemtype: 'itemtype',
  serial: 'serial',
  busID: 'busID',
  otherserial: 'otherserial'
};

exports.Prisma.glpi_items_devicesensorsOrderByRelevanceFieldEnum = {
  itemtype: 'itemtype',
  serial: 'serial',
  otherserial: 'otherserial'
};

exports.Prisma.glpi_items_devicesimcardsOrderByRelevanceFieldEnum = {
  itemtype: 'itemtype',
  serial: 'serial',
  otherserial: 'otherserial',
  pin: 'pin',
  pin2: 'pin2',
  puk: 'puk',
  puk2: 'puk2',
  msin: 'msin',
  comment: 'comment'
};

exports.Prisma.glpi_items_devicesoundcardsOrderByRelevanceFieldEnum = {
  itemtype: 'itemtype',
  serial: 'serial',
  busID: 'busID',
  otherserial: 'otherserial'
};

exports.Prisma.glpi_items_disksOrderByRelevanceFieldEnum = {
  itemtype: 'itemtype',
  name: 'name',
  device: 'device',
  mountpoint: 'mountpoint',
  encryption_tool: 'encryption_tool',
  encryption_algorithm: 'encryption_algorithm',
  encryption_type: 'encryption_type'
};

exports.Prisma.glpi_items_enclosuresOrderByRelevanceFieldEnum = {
  itemtype: 'itemtype'
};

exports.Prisma.glpi_items_kanbansOrderByRelevanceFieldEnum = {
  itemtype: 'itemtype',
  state: 'state'
};

exports.Prisma.glpi_items_operatingsystemsOrderByRelevanceFieldEnum = {
  itemtype: 'itemtype',
  license_number: 'license_number',
  licenseid: 'licenseid',
  company: 'company',
  owner: 'owner',
  hostid: 'hostid'
};

exports.Prisma.glpi_items_problemsOrderByRelevanceFieldEnum = {
  itemtype: 'itemtype'
};

exports.Prisma.glpi_items_projectsOrderByRelevanceFieldEnum = {
  itemtype: 'itemtype'
};

exports.Prisma.glpi_items_racksOrderByRelevanceFieldEnum = {
  itemtype: 'itemtype',
  bgcolor: 'bgcolor'
};

exports.Prisma.glpi_items_remotemanagementsOrderByRelevanceFieldEnum = {
  itemtype: 'itemtype',
  remoteid: 'remoteid',
  type: 'type'
};

exports.Prisma.glpi_items_softwarelicensesOrderByRelevanceFieldEnum = {
  itemtype: 'itemtype'
};

exports.Prisma.glpi_items_softwareversionsOrderByRelevanceFieldEnum = {
  itemtype: 'itemtype'
};

exports.Prisma.glpi_items_ticketsOrderByRelevanceFieldEnum = {
  itemtype: 'itemtype'
};

exports.Prisma.glpi_itilcategoriesOrderByRelevanceFieldEnum = {
  name: 'name',
  completename: 'completename',
  comment: 'comment',
  code: 'code',
  ancestors_cache: 'ancestors_cache',
  sons_cache: 'sons_cache'
};

exports.Prisma.glpi_itilfollowupsOrderByRelevanceFieldEnum = {
  itemtype: 'itemtype',
  content: 'content'
};

exports.Prisma.glpi_itilfollowuptemplatesOrderByRelevanceFieldEnum = {
  name: 'name',
  content: 'content',
  comment: 'comment'
};

exports.Prisma.glpi_itils_projectsOrderByRelevanceFieldEnum = {
  itemtype: 'itemtype'
};

exports.Prisma.glpi_itilsolutionsOrderByRelevanceFieldEnum = {
  itemtype: 'itemtype',
  solutiontype_name: 'solutiontype_name',
  content: 'content',
  user_name: 'user_name',
  user_name_approval: 'user_name_approval'
};

exports.Prisma.glpi_knowbaseitemcategoriesOrderByRelevanceFieldEnum = {
  name: 'name',
  completename: 'completename',
  comment: 'comment',
  sons_cache: 'sons_cache',
  ancestors_cache: 'ancestors_cache'
};

exports.Prisma.glpi_knowbaseitemsOrderByRelevanceFieldEnum = {
  name: 'name',
  answer: 'answer'
};

exports.Prisma.glpi_knowbaseitems_commentsOrderByRelevanceFieldEnum = {
  language: 'language',
  comment: 'comment'
};

exports.Prisma.glpi_knowbaseitems_itemsOrderByRelevanceFieldEnum = {
  itemtype: 'itemtype'
};

exports.Prisma.glpi_knowbaseitems_revisionsOrderByRelevanceFieldEnum = {
  name: 'name',
  answer: 'answer',
  language: 'language'
};

exports.Prisma.glpi_knowbaseitemtranslationsOrderByRelevanceFieldEnum = {
  language: 'language',
  name: 'name',
  answer: 'answer'
};

exports.Prisma.glpi_lineoperatorsOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment'
};

exports.Prisma.glpi_linesOrderByRelevanceFieldEnum = {
  name: 'name',
  caller_num: 'caller_num',
  caller_name: 'caller_name',
  comment: 'comment'
};

exports.Prisma.glpi_linetypesOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment'
};

exports.Prisma.glpi_linksOrderByRelevanceFieldEnum = {
  name: 'name',
  link: 'link',
  data: 'data'
};

exports.Prisma.glpi_links_itemtypesOrderByRelevanceFieldEnum = {
  itemtype: 'itemtype'
};

exports.Prisma.glpi_locationsOrderByRelevanceFieldEnum = {
  name: 'name',
  completename: 'completename',
  comment: 'comment',
  ancestors_cache: 'ancestors_cache',
  sons_cache: 'sons_cache',
  address: 'address',
  postcode: 'postcode',
  town: 'town',
  state: 'state',
  country: 'country',
  building: 'building',
  room: 'room',
  latitude: 'latitude',
  longitude: 'longitude',
  altitude: 'altitude'
};

exports.Prisma.glpi_lockedfieldsOrderByRelevanceFieldEnum = {
  itemtype: 'itemtype',
  field: 'field',
  value: 'value'
};

exports.Prisma.glpi_logsOrderByRelevanceFieldEnum = {
  itemtype: 'itemtype',
  itemtype_link: 'itemtype_link',
  user_name: 'user_name',
  old_value: 'old_value',
  new_value: 'new_value'
};

exports.Prisma.glpi_mailcollectorsOrderByRelevanceFieldEnum = {
  name: 'name',
  host: 'host',
  login: 'login',
  comment: 'comment',
  passwd: 'passwd',
  accepted: 'accepted',
  refused: 'refused'
};

exports.Prisma.glpi_manuallinksOrderByRelevanceFieldEnum = {
  name: 'name',
  url: 'url',
  icon: 'icon',
  comment: 'comment',
  itemtype: 'itemtype'
};

exports.Prisma.glpi_manufacturersOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment'
};

exports.Prisma.glpi_monitormodelsOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment',
  product_number: 'product_number',
  picture_front: 'picture_front',
  picture_rear: 'picture_rear',
  pictures: 'pictures'
};

exports.Prisma.glpi_monitorsOrderByRelevanceFieldEnum = {
  name: 'name',
  contact: 'contact',
  contact_num: 'contact_num',
  comment: 'comment',
  serial: 'serial',
  otherserial: 'otherserial',
  template_name: 'template_name',
  uuid: 'uuid'
};

exports.Prisma.glpi_monitortypesOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment'
};

exports.Prisma.glpi_networkaliasesOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment'
};

exports.Prisma.glpi_networkequipmentmodelsOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment',
  product_number: 'product_number',
  picture_front: 'picture_front',
  picture_rear: 'picture_rear',
  pictures: 'pictures'
};

exports.Prisma.glpi_networkequipmentsOrderByRelevanceFieldEnum = {
  name: 'name',
  serial: 'serial',
  otherserial: 'otherserial',
  contact: 'contact',
  contact_num: 'contact_num',
  comment: 'comment',
  template_name: 'template_name',
  uuid: 'uuid',
  sysdescr: 'sysdescr',
  uptime: 'uptime'
};

exports.Prisma.glpi_networkequipmenttypesOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment'
};

exports.Prisma.glpi_networkinterfacesOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment'
};

exports.Prisma.glpi_networknamesOrderByRelevanceFieldEnum = {
  itemtype: 'itemtype',
  name: 'name',
  comment: 'comment'
};

exports.Prisma.glpi_networkportaggregatesOrderByRelevanceFieldEnum = {
  networkports_id_list: 'networkports_id_list'
};

exports.Prisma.glpi_networkportethernetsOrderByRelevanceFieldEnum = {
  type: 'type'
};

exports.Prisma.glpi_networkportfiberchannelsOrderByRelevanceFieldEnum = {
  wwn: 'wwn'
};

exports.Prisma.glpi_networkportfiberchanneltypesOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment'
};

exports.Prisma.glpi_networkportsOrderByRelevanceFieldEnum = {
  itemtype: 'itemtype',
  name: 'name',
  instantiation_type: 'instantiation_type',
  mac: 'mac',
  comment: 'comment',
  ifinternalstatus: 'ifinternalstatus',
  iflastchange: 'iflastchange',
  ifstatus: 'ifstatus',
  ifdescr: 'ifdescr',
  ifalias: 'ifalias',
  portduplex: 'portduplex'
};

exports.Prisma.glpi_networkporttypesOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment',
  instantiation_type: 'instantiation_type'
};

exports.Prisma.glpi_networkportwifisOrderByRelevanceFieldEnum = {
  version: 'version',
  mode: 'mode'
};

exports.Prisma.glpi_networksOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment'
};

exports.Prisma.glpi_notepadsOrderByRelevanceFieldEnum = {
  itemtype: 'itemtype',
  content: 'content'
};

exports.Prisma.glpi_notificationsOrderByRelevanceFieldEnum = {
  name: 'name',
  itemtype: 'itemtype',
  event: 'event',
  comment: 'comment'
};

exports.Prisma.glpi_notifications_notificationtemplatesOrderByRelevanceFieldEnum = {
  mode: 'mode'
};

exports.Prisma.glpi_notificationtemplatesOrderByRelevanceFieldEnum = {
  name: 'name',
  itemtype: 'itemtype',
  comment: 'comment',
  css: 'css'
};

exports.Prisma.glpi_notificationtemplatetranslationsOrderByRelevanceFieldEnum = {
  language: 'language',
  subject: 'subject',
  content_text: 'content_text',
  content_html: 'content_html'
};

exports.Prisma.glpi_notimportedemailsOrderByRelevanceFieldEnum = {
  from: 'from',
  to: 'to',
  subject: 'subject',
  messageid: 'messageid'
};

exports.Prisma.glpi_objectlocksOrderByRelevanceFieldEnum = {
  itemtype: 'itemtype'
};

exports.Prisma.glpi_olalevelactionsOrderByRelevanceFieldEnum = {
  action_type: 'action_type',
  field: 'field',
  value: 'value'
};

exports.Prisma.glpi_olalevelcriteriasOrderByRelevanceFieldEnum = {
  criteria: 'criteria',
  pattern: 'pattern'
};

exports.Prisma.glpi_olalevelsOrderByRelevanceFieldEnum = {
  name: 'name',
  match: 'match',
  uuid: 'uuid'
};

exports.Prisma.glpi_olasOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment',
  definition_time: 'definition_time'
};

exports.Prisma.glpi_operatingsystemarchitecturesOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment'
};

exports.Prisma.glpi_operatingsystemeditionsOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment'
};

exports.Prisma.glpi_operatingsystemkernelsOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment'
};

exports.Prisma.glpi_operatingsystemkernelversionsOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment'
};

exports.Prisma.glpi_operatingsystemsOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment'
};

exports.Prisma.glpi_operatingsystemservicepacksOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment'
};

exports.Prisma.glpi_operatingsystemversionsOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment'
};

exports.Prisma.glpi_passivedcequipmentmodelsOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment',
  product_number: 'product_number',
  picture_front: 'picture_front',
  picture_rear: 'picture_rear',
  pictures: 'pictures'
};

exports.Prisma.glpi_passivedcequipmentsOrderByRelevanceFieldEnum = {
  name: 'name',
  serial: 'serial',
  otherserial: 'otherserial',
  template_name: 'template_name',
  comment: 'comment'
};

exports.Prisma.glpi_passivedcequipmenttypesOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment'
};

exports.Prisma.glpi_pcivendorsOrderByRelevanceFieldEnum = {
  vendorid: 'vendorid',
  deviceid: 'deviceid',
  name: 'name',
  comment: 'comment'
};

exports.Prisma.glpi_pdumodelsOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment',
  product_number: 'product_number',
  picture_front: 'picture_front',
  picture_rear: 'picture_rear',
  pictures: 'pictures'
};

exports.Prisma.glpi_pdusOrderByRelevanceFieldEnum = {
  name: 'name',
  serial: 'serial',
  otherserial: 'otherserial',
  template_name: 'template_name',
  comment: 'comment'
};

exports.Prisma.glpi_pdus_racksOrderByRelevanceFieldEnum = {
  bgcolor: 'bgcolor'
};

exports.Prisma.glpi_pdutypesOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment'
};

exports.Prisma.glpi_pendingreasonsOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment'
};

exports.Prisma.glpi_pendingreasons_itemsOrderByRelevanceFieldEnum = {
  itemtype: 'itemtype'
};

exports.Prisma.glpi_peripheralmodelsOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment',
  product_number: 'product_number',
  picture_front: 'picture_front',
  picture_rear: 'picture_rear',
  pictures: 'pictures'
};

exports.Prisma.glpi_peripheralsOrderByRelevanceFieldEnum = {
  name: 'name',
  contact: 'contact',
  contact_num: 'contact_num',
  comment: 'comment',
  serial: 'serial',
  otherserial: 'otherserial',
  brand: 'brand',
  template_name: 'template_name',
  uuid: 'uuid'
};

exports.Prisma.glpi_peripheraltypesOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment'
};

exports.Prisma.glpi_phonemodelsOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment',
  product_number: 'product_number',
  picture_front: 'picture_front',
  picture_rear: 'picture_rear',
  pictures: 'pictures'
};

exports.Prisma.glpi_phonepowersuppliesOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment'
};

exports.Prisma.glpi_phonesOrderByRelevanceFieldEnum = {
  name: 'name',
  contact: 'contact',
  contact_num: 'contact_num',
  comment: 'comment',
  serial: 'serial',
  otherserial: 'otherserial',
  brand: 'brand',
  number_line: 'number_line',
  template_name: 'template_name',
  uuid: 'uuid'
};

exports.Prisma.glpi_phonetypesOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment'
};

exports.Prisma.glpi_planningeventcategoriesOrderByRelevanceFieldEnum = {
  name: 'name',
  color: 'color',
  comment: 'comment'
};

exports.Prisma.glpi_planningexternaleventsOrderByRelevanceFieldEnum = {
  uuid: 'uuid',
  users_id_guests: 'users_id_guests',
  name: 'name',
  text: 'text',
  rrule: 'rrule'
};

exports.Prisma.glpi_planningexternaleventtemplatesOrderByRelevanceFieldEnum = {
  name: 'name',
  text: 'text',
  comment: 'comment',
  rrule: 'rrule'
};

exports.Prisma.glpi_planningrecallsOrderByRelevanceFieldEnum = {
  itemtype: 'itemtype'
};

exports.Prisma.glpi_plugin_barcode_configsOrderByRelevanceFieldEnum = {
  type: 'type'
};

exports.Prisma.glpi_plugin_barcode_configs_typesOrderByRelevanceFieldEnum = {
  type: 'type',
  size: 'size',
  orientation: 'orientation'
};

exports.Prisma.glpi_plugin_datainjection_infosOrderByRelevanceFieldEnum = {
  itemtype: 'itemtype',
  value: 'value'
};

exports.Prisma.glpi_plugin_datainjection_mappingsOrderByRelevanceFieldEnum = {
  itemtype: 'itemtype',
  name: 'name',
  value: 'value'
};

exports.Prisma.glpi_plugin_datainjection_modelcsvsOrderByRelevanceFieldEnum = {
  itemtype: 'itemtype',
  delimiter: 'delimiter'
};

exports.Prisma.glpi_plugin_datainjection_modelsOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment',
  filetype: 'filetype',
  itemtype: 'itemtype',
  date_format: 'date_format'
};

exports.Prisma.glpi_plugin_fields_containerdisplayconditionsOrderByRelevanceFieldEnum = {
  itemtype: 'itemtype',
  search_option: 'search_option',
  condition: 'condition',
  value: 'value'
};

exports.Prisma.glpi_plugin_fields_containersOrderByRelevanceFieldEnum = {
  name: 'name',
  label: 'label',
  itemtypes: 'itemtypes',
  type: 'type',
  subtype: 'subtype'
};

exports.Prisma.glpi_plugin_fields_fieldsOrderByRelevanceFieldEnum = {
  name: 'name',
  label: 'label',
  type: 'type',
  default_value: 'default_value',
  allowed_values: 'allowed_values'
};

exports.Prisma.glpi_plugin_fields_labeltranslationsOrderByRelevanceFieldEnum = {
  itemtype: 'itemtype',
  language: 'language',
  label: 'label'
};

exports.Prisma.glpi_plugin_fields_pluginformcreatorcategoryasdasdasdasdsOrderByRelevanceFieldEnum = {
  itemtype: 'itemtype'
};

exports.Prisma.glpi_plugin_fields_profilesOrderByRelevanceFieldEnum = {
  right: 'right'
};

exports.Prisma.glpi_plugin_fields_statusoverridesOrderByRelevanceFieldEnum = {
  itemtype: 'itemtype',
  states: 'states'
};

exports.Prisma.glpi_plugin_formcreator_answersOrderByRelevanceFieldEnum = {
  answer: 'answer'
};

exports.Prisma.glpi_plugin_formcreator_categoriesOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment',
  completename: 'completename',
  sons_cache: 'sons_cache',
  ancestors_cache: 'ancestors_cache'
};

exports.Prisma.glpi_plugin_formcreator_conditionsOrderByRelevanceFieldEnum = {
  itemtype: 'itemtype',
  show_value: 'show_value',
  uuid: 'uuid'
};

exports.Prisma.glpi_plugin_formcreator_entityconfigsOrderByRelevanceFieldEnum = {
  header: 'header'
};

exports.Prisma.glpi_plugin_formcreator_formanswersOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment'
};

exports.Prisma.glpi_plugin_formcreator_formsOrderByRelevanceFieldEnum = {
  name: 'name',
  icon: 'icon',
  icon_color: 'icon_color',
  background_color: 'background_color',
  description: 'description',
  content: 'content',
  language: 'language',
  formanswer_name: 'formanswer_name',
  uuid: 'uuid'
};

exports.Prisma.glpi_plugin_formcreator_forms_groupsOrderByRelevanceFieldEnum = {
  uuid: 'uuid'
};

exports.Prisma.glpi_plugin_formcreator_forms_languagesOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment',
  uuid: 'uuid'
};

exports.Prisma.glpi_plugin_formcreator_forms_profilesOrderByRelevanceFieldEnum = {
  uuid: 'uuid'
};

exports.Prisma.glpi_plugin_formcreator_forms_usersOrderByRelevanceFieldEnum = {
  uuid: 'uuid'
};

exports.Prisma.glpi_plugin_formcreator_forms_validatorsOrderByRelevanceFieldEnum = {
  itemtype: 'itemtype',
  uuid: 'uuid'
};

exports.Prisma.glpi_plugin_formcreator_issuesOrderByRelevanceFieldEnum = {
  name: 'name',
  display_id: 'display_id',
  itemtype: 'itemtype',
  status: 'status',
  comment: 'comment'
};

exports.Prisma.glpi_plugin_formcreator_items_targetticketsOrderByRelevanceFieldEnum = {
  itemtype: 'itemtype',
  uuid: 'uuid'
};

exports.Prisma.glpi_plugin_formcreator_questiondependenciesOrderByRelevanceFieldEnum = {
  fieldname: 'fieldname',
  uuid: 'uuid'
};

exports.Prisma.glpi_plugin_formcreator_questionrangesOrderByRelevanceFieldEnum = {
  range_min: 'range_min',
  range_max: 'range_max',
  fieldname: 'fieldname',
  uuid: 'uuid'
};

exports.Prisma.glpi_plugin_formcreator_questionregexesOrderByRelevanceFieldEnum = {
  regex: 'regex',
  fieldname: 'fieldname',
  uuid: 'uuid'
};

exports.Prisma.glpi_plugin_formcreator_questionsOrderByRelevanceFieldEnum = {
  name: 'name',
  fieldtype: 'fieldtype',
  default_values: 'default_values',
  itemtype: 'itemtype',
  values: 'values',
  description: 'description',
  uuid: 'uuid'
};

exports.Prisma.glpi_plugin_formcreator_sectionsOrderByRelevanceFieldEnum = {
  name: 'name',
  uuid: 'uuid'
};

exports.Prisma.glpi_plugin_formcreator_targetchangesOrderByRelevanceFieldEnum = {
  name: 'name',
  target_name: 'target_name',
  content: 'content',
  impactcontent: 'impactcontent',
  controlistcontent: 'controlistcontent',
  rolloutplancontent: 'rolloutplancontent',
  backoutplancontent: 'backoutplancontent',
  checklistcontent: 'checklistcontent',
  tag_questions: 'tag_questions',
  tag_specifics: 'tag_specifics',
  commonitil_validation_question: 'commonitil_validation_question',
  uuid: 'uuid'
};

exports.Prisma.glpi_plugin_formcreator_targetproblemsOrderByRelevanceFieldEnum = {
  name: 'name',
  target_name: 'target_name',
  content: 'content',
  impactcontent: 'impactcontent',
  causecontent: 'causecontent',
  symptomcontent: 'symptomcontent',
  tag_questions: 'tag_questions',
  tag_specifics: 'tag_specifics',
  uuid: 'uuid'
};

exports.Prisma.glpi_plugin_formcreator_targets_actorsOrderByRelevanceFieldEnum = {
  itemtype: 'itemtype',
  uuid: 'uuid'
};

exports.Prisma.glpi_plugin_formcreator_targetticketsOrderByRelevanceFieldEnum = {
  name: 'name',
  target_name: 'target_name',
  content: 'content',
  tag_questions: 'tag_questions',
  tag_specifics: 'tag_specifics',
  commonitil_validation_question: 'commonitil_validation_question',
  uuid: 'uuid'
};

exports.Prisma.glpi_plugin_itilcategorygroups_categoriesOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment'
};

exports.Prisma.glpi_plugin_metademands_basketlinesOrderByRelevanceFieldEnum = {
  name: 'name',
  value: 'value',
  value2: 'value2'
};

exports.Prisma.glpi_plugin_metademands_basketobjectsOrderByRelevanceFieldEnum = {
  name: 'name',
  description: 'description',
  reference: 'reference'
};

exports.Prisma.glpi_plugin_metademands_basketobjecttranslationsOrderByRelevanceFieldEnum = {
  itemtype: 'itemtype',
  field: 'field',
  language: 'language',
  value: 'value'
};

exports.Prisma.glpi_plugin_metademands_basketobjecttypesOrderByRelevanceFieldEnum = {
  name: 'name'
};

exports.Prisma.glpi_plugin_metademands_basketobjecttypetranslationsOrderByRelevanceFieldEnum = {
  itemtype: 'itemtype',
  language: 'language',
  field: 'field',
  value: 'value'
};

exports.Prisma.glpi_plugin_metademands_conditionsOrderByRelevanceFieldEnum = {
  item: 'item',
  check_value: 'check_value',
  type: 'type'
};

exports.Prisma.glpi_plugin_metademands_configsOrderByRelevanceFieldEnum = {
  parent_ticket_tag: 'parent_ticket_tag',
  son_ticket_tag: 'son_ticket_tag',
  title_servicecatalog: 'title_servicecatalog',
  comment_servicecatalog: 'comment_servicecatalog',
  fa_servicecatalog: 'fa_servicecatalog',
  languageTech: 'languageTech'
};

exports.Prisma.glpi_plugin_metademands_draftsOrderByRelevanceFieldEnum = {
  name: 'name'
};

exports.Prisma.glpi_plugin_metademands_drafts_valuesOrderByRelevanceFieldEnum = {
  value: 'value',
  value2: 'value2'
};

exports.Prisma.glpi_plugin_metademands_fieldcustomvaluesOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment'
};

exports.Prisma.glpi_plugin_metademands_fieldoptionsOrderByRelevanceFieldEnum = {
  childs_blocks: 'childs_blocks'
};

exports.Prisma.glpi_plugin_metademands_fieldparametersOrderByRelevanceFieldEnum = {
  custom: 'custom',
  default: 'default',
  regex: 'regex',
  color: 'color',
  informations_to_display: 'informations_to_display',
  icon: 'icon'
};

exports.Prisma.glpi_plugin_metademands_fieldsOrderByRelevanceFieldEnum = {
  comment: 'comment',
  name: 'name',
  label2: 'label2',
  type: 'type',
  item: 'item'
};

exports.Prisma.glpi_plugin_metademands_fieldtranslationsOrderByRelevanceFieldEnum = {
  itemtype: 'itemtype',
  language: 'language',
  field: 'field',
  value: 'value'
};

exports.Prisma.glpi_plugin_metademands_formsOrderByRelevanceFieldEnum = {
  name: 'name',
  itemtype: 'itemtype'
};

exports.Prisma.glpi_plugin_metademands_forms_valuesOrderByRelevanceFieldEnum = {
  value: 'value',
  value2: 'value2'
};

exports.Prisma.glpi_plugin_metademands_interticketfollowupsOrderByRelevanceFieldEnum = {
  content: 'content'
};

exports.Prisma.glpi_plugin_metademands_mailtasksOrderByRelevanceFieldEnum = {
  content: 'content',
  email: 'email'
};

exports.Prisma.glpi_plugin_metademands_metademandsOrderByRelevanceFieldEnum = {
  name: 'name',
  template_name: 'template_name',
  comment: 'comment',
  object_to_create: 'object_to_create',
  itilcategories_id: 'itilcategories_id',
  icon: 'icon',
  title_color: 'title_color',
  background_color: 'background_color'
};

exports.Prisma.glpi_plugin_metademands_metademandtranslationsOrderByRelevanceFieldEnum = {
  itemtype: 'itemtype',
  language: 'language',
  field: 'field',
  value: 'value'
};

exports.Prisma.glpi_plugin_metademands_metademandvalidationsOrderByRelevanceFieldEnum = {
  tickets_to_create: 'tickets_to_create'
};

exports.Prisma.glpi_plugin_metademands_stepformsOrderByRelevanceFieldEnum = {
  name: 'name'
};

exports.Prisma.glpi_plugin_metademands_stepforms_valuesOrderByRelevanceFieldEnum = {
  value: 'value',
  value2: 'value2'
};

exports.Prisma.glpi_plugin_metademands_stepsOrderByRelevanceFieldEnum = {
  reminder_delay: 'reminder_delay',
  message: 'message'
};

exports.Prisma.glpi_plugin_metademands_tasksOrderByRelevanceFieldEnum = {
  name: 'name',
  completename: 'completename',
  comment: 'comment',
  ancestors_cache: 'ancestors_cache',
  sons_cache: 'sons_cache',
  block_use: 'block_use'
};

exports.Prisma.glpi_plugin_metademands_ticketfieldsOrderByRelevanceFieldEnum = {
  value: 'value'
};

exports.Prisma.glpi_plugin_metademands_tickets_fieldsOrderByRelevanceFieldEnum = {
  value: 'value',
  value2: 'value2'
};

exports.Prisma.glpi_plugin_metademands_tickettasksOrderByRelevanceFieldEnum = {
  content: 'content',
  status: 'status'
};

exports.Prisma.glpi_plugin_mydashboard_configsOrderByRelevanceFieldEnum = {
  google_api_key: 'google_api_key',
  impact_1: 'impact_1',
  impact_2: 'impact_2',
  impact_3: 'impact_3',
  impact_4: 'impact_4',
  impact_5: 'impact_5',
  title_alerts_widget: 'title_alerts_widget',
  title_maintenances_widget: 'title_maintenances_widget',
  title_informations_widget: 'title_informations_widget'
};

exports.Prisma.glpi_plugin_mydashboard_configtranslationsOrderByRelevanceFieldEnum = {
  itemtype: 'itemtype',
  language: 'language',
  field: 'field',
  value: 'value'
};

exports.Prisma.glpi_plugin_mydashboard_customswidgetsOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment',
  content: 'content'
};

exports.Prisma.glpi_plugin_mydashboard_dashboardsOrderByRelevanceFieldEnum = {
  grid: 'grid',
  grid_statesave: 'grid_statesave'
};

exports.Prisma.glpi_plugin_mydashboard_groupprofilesOrderByRelevanceFieldEnum = {
  groups_id: 'groups_id'
};

exports.Prisma.glpi_plugin_mydashboard_itilalertsOrderByRelevanceFieldEnum = {
  itemtype: 'itemtype'
};

exports.Prisma.glpi_plugin_mydashboard_preferencesOrderByRelevanceFieldEnum = {
  prefered_group: 'prefered_group',
  requester_prefered_group: 'requester_prefered_group',
  color_palette: 'color_palette'
};

exports.Prisma.glpi_plugin_mydashboard_preferenceuserblacklistsOrderByRelevanceFieldEnum = {
  plugin_name: 'plugin_name'
};

exports.Prisma.glpi_plugin_mydashboard_stockwidgetsOrderByRelevanceFieldEnum = {
  name: 'name',
  states: 'states',
  itemtype: 'itemtype',
  icon: 'icon',
  types: 'types'
};

exports.Prisma.glpi_plugin_mydashboard_widgetsOrderByRelevanceFieldEnum = {
  name: 'name'
};

exports.Prisma.glpi_pluginsOrderByRelevanceFieldEnum = {
  directory: 'directory',
  name: 'name',
  version: 'version',
  author: 'author',
  homepage: 'homepage',
  license: 'license'
};

exports.Prisma.glpi_plugsOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment'
};

exports.Prisma.glpi_printermodelsOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment',
  product_number: 'product_number',
  picture_front: 'picture_front',
  picture_rear: 'picture_rear',
  pictures: 'pictures'
};

exports.Prisma.glpi_printersOrderByRelevanceFieldEnum = {
  name: 'name',
  contact: 'contact',
  contact_num: 'contact_num',
  serial: 'serial',
  otherserial: 'otherserial',
  comment: 'comment',
  memory_size: 'memory_size',
  template_name: 'template_name',
  uuid: 'uuid',
  sysdescr: 'sysdescr'
};

exports.Prisma.glpi_printers_cartridgeinfosOrderByRelevanceFieldEnum = {
  property: 'property',
  value: 'value'
};

exports.Prisma.glpi_printertypesOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment'
};

exports.Prisma.glpi_problemcostsOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment'
};

exports.Prisma.glpi_problemsOrderByRelevanceFieldEnum = {
  name: 'name',
  content: 'content',
  impactcontent: 'impactcontent',
  causecontent: 'causecontent',
  symptomcontent: 'symptomcontent'
};

exports.Prisma.glpi_problems_suppliersOrderByRelevanceFieldEnum = {
  alternative_email: 'alternative_email'
};

exports.Prisma.glpi_problems_usersOrderByRelevanceFieldEnum = {
  alternative_email: 'alternative_email'
};

exports.Prisma.glpi_problemtasksOrderByRelevanceFieldEnum = {
  uuid: 'uuid',
  content: 'content'
};

exports.Prisma.glpi_problemtemplatepredefinedfieldsOrderByRelevanceFieldEnum = {
  value: 'value'
};

exports.Prisma.glpi_problemtemplatesOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment'
};

exports.Prisma.glpi_profilerightsOrderByRelevanceFieldEnum = {
  name: 'name'
};

exports.Prisma.glpi_profilesOrderByRelevanceFieldEnum = {
  name: 'name',
  interface: 'interface',
  helpdesk_item_type: 'helpdesk_item_type',
  ticket_status: 'ticket_status',
  comment: 'comment',
  problem_status: 'problem_status',
  change_status: 'change_status',
  managed_domainrecordtypes: 'managed_domainrecordtypes'
};

exports.Prisma.glpi_projectcostsOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment'
};

exports.Prisma.glpi_projectsOrderByRelevanceFieldEnum = {
  name: 'name',
  code: 'code',
  content: 'content',
  comment: 'comment',
  template_name: 'template_name'
};

exports.Prisma.glpi_projectstatesOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment',
  color: 'color'
};

exports.Prisma.glpi_projecttasklinksOrderByRelevanceFieldEnum = {
  source_uuid: 'source_uuid',
  target_uuid: 'target_uuid'
};

exports.Prisma.glpi_projecttasksOrderByRelevanceFieldEnum = {
  uuid: 'uuid',
  name: 'name',
  content: 'content',
  comment: 'comment',
  template_name: 'template_name'
};

exports.Prisma.glpi_projecttaskteamsOrderByRelevanceFieldEnum = {
  itemtype: 'itemtype'
};

exports.Prisma.glpi_projecttasktemplatesOrderByRelevanceFieldEnum = {
  name: 'name',
  description: 'description',
  comment: 'comment',
  comments: 'comments'
};

exports.Prisma.glpi_projecttasktypesOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment'
};

exports.Prisma.glpi_projectteamsOrderByRelevanceFieldEnum = {
  itemtype: 'itemtype'
};

exports.Prisma.glpi_projecttypesOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment'
};

exports.Prisma.glpi_queuednotificationsOrderByRelevanceFieldEnum = {
  itemtype: 'itemtype',
  name: 'name',
  sender: 'sender',
  sendername: 'sendername',
  recipient: 'recipient',
  recipientname: 'recipientname',
  replyto: 'replyto',
  replytoname: 'replytoname',
  headers: 'headers',
  body_html: 'body_html',
  body_text: 'body_text',
  messageid: 'messageid',
  documents: 'documents',
  mode: 'mode',
  event: 'event'
};

exports.Prisma.glpi_rackmodelsOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment',
  product_number: 'product_number',
  pictures: 'pictures'
};

exports.Prisma.glpi_racksOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment',
  serial: 'serial',
  otherserial: 'otherserial',
  template_name: 'template_name',
  position: 'position',
  bgcolor: 'bgcolor'
};

exports.Prisma.glpi_racktypesOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment'
};

exports.Prisma.glpi_recurrentchangesOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment',
  periodicity: 'periodicity'
};

exports.Prisma.glpi_refusedequipmentsOrderByRelevanceFieldEnum = {
  name: 'name',
  itemtype: 'itemtype',
  ip: 'ip',
  mac: 'mac',
  method: 'method',
  serial: 'serial',
  uuid: 'uuid'
};

exports.Prisma.glpi_registeredidsOrderByRelevanceFieldEnum = {
  name: 'name',
  itemtype: 'itemtype',
  device_type: 'device_type'
};

exports.Prisma.glpi_remindersOrderByRelevanceFieldEnum = {
  uuid: 'uuid',
  name: 'name',
  text: 'text'
};

exports.Prisma.glpi_remindertranslationsOrderByRelevanceFieldEnum = {
  language: 'language',
  name: 'name',
  text: 'text'
};

exports.Prisma.glpi_requesttypesOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment'
};

exports.Prisma.glpi_reservationitemsOrderByRelevanceFieldEnum = {
  itemtype: 'itemtype',
  comment: 'comment'
};

exports.Prisma.glpi_reservationsOrderByRelevanceFieldEnum = {
  comment: 'comment'
};

exports.Prisma.glpi_rssfeedsOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment',
  url: 'url'
};

exports.Prisma.glpi_ruleactionsOrderByRelevanceFieldEnum = {
  action_type: 'action_type',
  field: 'field',
  value: 'value'
};

exports.Prisma.glpi_rulecriteriasOrderByRelevanceFieldEnum = {
  criteria: 'criteria',
  pattern: 'pattern'
};

exports.Prisma.glpi_rulematchedlogsOrderByRelevanceFieldEnum = {
  itemtype: 'itemtype',
  method: 'method'
};

exports.Prisma.glpi_rulerightparametersOrderByRelevanceFieldEnum = {
  name: 'name',
  value: 'value',
  comment: 'comment'
};

exports.Prisma.glpi_rulesOrderByRelevanceFieldEnum = {
  sub_type: 'sub_type',
  name: 'name',
  description: 'description',
  match: 'match',
  comment: 'comment',
  uuid: 'uuid'
};

exports.Prisma.glpi_savedsearchesOrderByRelevanceFieldEnum = {
  name: 'name',
  itemtype: 'itemtype',
  query: 'query'
};

exports.Prisma.glpi_savedsearches_alertsOrderByRelevanceFieldEnum = {
  name: 'name'
};

exports.Prisma.glpi_savedsearches_usersOrderByRelevanceFieldEnum = {
  itemtype: 'itemtype'
};

exports.Prisma.glpi_slalevelactionsOrderByRelevanceFieldEnum = {
  action_type: 'action_type',
  field: 'field',
  value: 'value'
};

exports.Prisma.glpi_slalevelcriteriasOrderByRelevanceFieldEnum = {
  criteria: 'criteria',
  pattern: 'pattern'
};

exports.Prisma.glpi_slalevelsOrderByRelevanceFieldEnum = {
  name: 'name',
  match: 'match',
  uuid: 'uuid'
};

exports.Prisma.glpi_slasOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment',
  definition_time: 'definition_time'
};

exports.Prisma.glpi_slmsOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment'
};

exports.Prisma.glpi_snmpcredentialsOrderByRelevanceFieldEnum = {
  name: 'name',
  snmpversion: 'snmpversion',
  community: 'community',
  username: 'username',
  authentication: 'authentication',
  auth_passphrase: 'auth_passphrase',
  encryption: 'encryption',
  priv_passphrase: 'priv_passphrase'
};

exports.Prisma.glpi_socketmodelsOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment'
};

exports.Prisma.glpi_socketsOrderByRelevanceFieldEnum = {
  name: 'name',
  itemtype: 'itemtype',
  comment: 'comment'
};

exports.Prisma.glpi_softwarecategoriesOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment',
  completename: 'completename',
  ancestors_cache: 'ancestors_cache',
  sons_cache: 'sons_cache'
};

exports.Prisma.glpi_softwarelicensesOrderByRelevanceFieldEnum = {
  completename: 'completename',
  ancestors_cache: 'ancestors_cache',
  sons_cache: 'sons_cache',
  name: 'name',
  serial: 'serial',
  otherserial: 'otherserial',
  comment: 'comment',
  template_name: 'template_name',
  contact: 'contact',
  contact_num: 'contact_num',
  pictures: 'pictures'
};

exports.Prisma.glpi_softwarelicensetypesOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment',
  ancestors_cache: 'ancestors_cache',
  sons_cache: 'sons_cache',
  completename: 'completename'
};

exports.Prisma.glpi_softwaresOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment',
  template_name: 'template_name',
  pictures: 'pictures'
};

exports.Prisma.glpi_softwareversionsOrderByRelevanceFieldEnum = {
  name: 'name',
  arch: 'arch',
  comment: 'comment'
};

exports.Prisma.glpi_solutiontemplatesOrderByRelevanceFieldEnum = {
  name: 'name',
  content: 'content',
  comment: 'comment'
};

exports.Prisma.glpi_solutiontypesOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment'
};

exports.Prisma.glpi_ssovariablesOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment'
};

exports.Prisma.glpi_statesOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment',
  completename: 'completename',
  ancestors_cache: 'ancestors_cache',
  sons_cache: 'sons_cache'
};

exports.Prisma.glpi_suppliersOrderByRelevanceFieldEnum = {
  name: 'name',
  registration_number: 'registration_number',
  address: 'address',
  postcode: 'postcode',
  town: 'town',
  state: 'state',
  country: 'country',
  website: 'website',
  phonenumber: 'phonenumber',
  comment: 'comment',
  fax: 'fax',
  email: 'email',
  pictures: 'pictures'
};

exports.Prisma.glpi_suppliers_ticketsOrderByRelevanceFieldEnum = {
  alternative_email: 'alternative_email'
};

exports.Prisma.glpi_suppliertypesOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment'
};

exports.Prisma.glpi_taskcategoriesOrderByRelevanceFieldEnum = {
  name: 'name',
  completename: 'completename',
  comment: 'comment',
  ancestors_cache: 'ancestors_cache',
  sons_cache: 'sons_cache'
};

exports.Prisma.glpi_tasktemplatesOrderByRelevanceFieldEnum = {
  name: 'name',
  content: 'content',
  comment: 'comment'
};

exports.Prisma.glpi_ticketcostsOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment'
};

exports.Prisma.glpi_ticketrecurrentsOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment',
  periodicity: 'periodicity'
};

exports.Prisma.glpi_ticketsOrderByRelevanceFieldEnum = {
  name: 'name',
  content: 'content'
};

exports.Prisma.glpi_tickets_usersOrderByRelevanceFieldEnum = {
  alternative_email: 'alternative_email'
};

exports.Prisma.glpi_ticketsatisfactionsOrderByRelevanceFieldEnum = {
  comment: 'comment'
};

exports.Prisma.glpi_tickettasksOrderByRelevanceFieldEnum = {
  uuid: 'uuid',
  content: 'content'
};

exports.Prisma.glpi_tickettemplatepredefinedfieldsOrderByRelevanceFieldEnum = {
  value: 'value'
};

exports.Prisma.glpi_tickettemplatesOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment'
};

exports.Prisma.glpi_ticketvalidationsOrderByRelevanceFieldEnum = {
  comment_submission: 'comment_submission',
  comment_validation: 'comment_validation'
};

exports.Prisma.glpi_transfersOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment'
};

exports.Prisma.glpi_unmanagedsOrderByRelevanceFieldEnum = {
  name: 'name',
  serial: 'serial',
  otherserial: 'otherserial',
  contact: 'contact',
  contact_num: 'contact_num',
  comment: 'comment',
  sysdescr: 'sysdescr',
  itemtype: 'itemtype',
  ip: 'ip'
};

exports.Prisma.glpi_usbvendorsOrderByRelevanceFieldEnum = {
  vendorid: 'vendorid',
  deviceid: 'deviceid',
  name: 'name',
  comment: 'comment'
};

exports.Prisma.glpi_usercategoriesOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment'
};

exports.Prisma.glpi_useremailsOrderByRelevanceFieldEnum = {
  email: 'email'
};

exports.Prisma.glpi_usersOrderByRelevanceFieldEnum = {
  name: 'name',
  password: 'password',
  phone: 'phone',
  phone2: 'phone2',
  mobile: 'mobile',
  realname: 'realname',
  firstname: 'firstname',
  language: 'language',
  comment: 'comment',
  csv_delimiter: 'csv_delimiter',
  priority_1: 'priority_1',
  priority_2: 'priority_2',
  priority_3: 'priority_3',
  priority_4: 'priority_4',
  priority_5: 'priority_5',
  priority_6: 'priority_6',
  password_forget_token: 'password_forget_token',
  user_dn: 'user_dn',
  user_dn_hash: 'user_dn_hash',
  registration_number: 'registration_number',
  personal_token: 'personal_token',
  api_token: 'api_token',
  cookie_token: 'cookie_token',
  duedateok_color: 'duedateok_color',
  duedatewarning_color: 'duedatewarning_color',
  duedatecritical_color: 'duedatecritical_color',
  duedatewarning_unit: 'duedatewarning_unit',
  duedatecritical_unit: 'duedatecritical_unit',
  display_options: 'display_options',
  pdffont: 'pdffont',
  picture: 'picture',
  privatebookmarkorder: 'privatebookmarkorder',
  palette: 'palette',
  page_layout: 'page_layout',
  savedsearches_pinned: 'savedsearches_pinned',
  timeline_order: 'timeline_order',
  itil_layout: 'itil_layout',
  richtext_layout: 'richtext_layout',
  plannings: 'plannings',
  sync_field: 'sync_field',
  timezone: 'timezone',
  default_dashboard_central: 'default_dashboard_central',
  default_dashboard_assets: 'default_dashboard_assets',
  default_dashboard_helpdesk: 'default_dashboard_helpdesk',
  default_dashboard_mini_ticket: 'default_dashboard_mini_ticket',
  nickname: 'nickname'
};

exports.Prisma.glpi_usertitlesOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment'
};

exports.Prisma.glpi_virtualmachinestatesOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment'
};

exports.Prisma.glpi_virtualmachinesystemsOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment'
};

exports.Prisma.glpi_virtualmachinetypesOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment'
};

exports.Prisma.glpi_vlansOrderByRelevanceFieldEnum = {
  name: 'name',
  comment: 'comment'
};

exports.Prisma.glpi_vobjectsOrderByRelevanceFieldEnum = {
  itemtype: 'itemtype',
  data: 'data'
};

exports.Prisma.glpi_wifinetworksOrderByRelevanceFieldEnum = {
  name: 'name',
  essid: 'essid',
  mode: 'mode',
  comment: 'comment'
};


exports.Prisma.ModelName = {
  glpi_agents: 'glpi_agents',
  glpi_agenttypes: 'glpi_agenttypes',
  glpi_alerts: 'glpi_alerts',
  glpi_apiclients: 'glpi_apiclients',
  glpi_applianceenvironments: 'glpi_applianceenvironments',
  glpi_appliances: 'glpi_appliances',
  glpi_appliances_items: 'glpi_appliances_items',
  glpi_appliances_items_relations: 'glpi_appliances_items_relations',
  glpi_appliancetypes: 'glpi_appliancetypes',
  glpi_authldapreplicates: 'glpi_authldapreplicates',
  glpi_authldaps: 'glpi_authldaps',
  glpi_authmails: 'glpi_authmails',
  glpi_autoupdatesystems: 'glpi_autoupdatesystems',
  glpi_blacklistedmailcontents: 'glpi_blacklistedmailcontents',
  glpi_blacklists: 'glpi_blacklists',
  glpi_budgets: 'glpi_budgets',
  glpi_budgettypes: 'glpi_budgettypes',
  glpi_businesscriticities: 'glpi_businesscriticities',
  glpi_cables: 'glpi_cables',
  glpi_cablestrands: 'glpi_cablestrands',
  glpi_cabletypes: 'glpi_cabletypes',
  glpi_calendars: 'glpi_calendars',
  glpi_calendars_holidays: 'glpi_calendars_holidays',
  glpi_calendarsegments: 'glpi_calendarsegments',
  glpi_cartridgeitems: 'glpi_cartridgeitems',
  glpi_cartridgeitems_printermodels: 'glpi_cartridgeitems_printermodels',
  glpi_cartridgeitemtypes: 'glpi_cartridgeitemtypes',
  glpi_cartridges: 'glpi_cartridges',
  glpi_certificates: 'glpi_certificates',
  glpi_certificates_items: 'glpi_certificates_items',
  glpi_certificatetypes: 'glpi_certificatetypes',
  glpi_changecosts: 'glpi_changecosts',
  glpi_changes: 'glpi_changes',
  glpi_changes_groups: 'glpi_changes_groups',
  glpi_changes_items: 'glpi_changes_items',
  glpi_changes_problems: 'glpi_changes_problems',
  glpi_changes_suppliers: 'glpi_changes_suppliers',
  glpi_changes_tickets: 'glpi_changes_tickets',
  glpi_changes_users: 'glpi_changes_users',
  glpi_changetasks: 'glpi_changetasks',
  glpi_changetemplatehiddenfields: 'glpi_changetemplatehiddenfields',
  glpi_changetemplatemandatoryfields: 'glpi_changetemplatemandatoryfields',
  glpi_changetemplatepredefinedfields: 'glpi_changetemplatepredefinedfields',
  glpi_changetemplates: 'glpi_changetemplates',
  glpi_changevalidations: 'glpi_changevalidations',
  glpi_clusters: 'glpi_clusters',
  glpi_clustertypes: 'glpi_clustertypes',
  glpi_computerantiviruses: 'glpi_computerantiviruses',
  glpi_computermodels: 'glpi_computermodels',
  glpi_computers: 'glpi_computers',
  glpi_computers_items: 'glpi_computers_items',
  glpi_computertypes: 'glpi_computertypes',
  glpi_computervirtualmachines: 'glpi_computervirtualmachines',
  glpi_configs: 'glpi_configs',
  glpi_consumableitems: 'glpi_consumableitems',
  glpi_consumableitemtypes: 'glpi_consumableitemtypes',
  glpi_consumables: 'glpi_consumables',
  glpi_contacts: 'glpi_contacts',
  glpi_contacts_suppliers: 'glpi_contacts_suppliers',
  glpi_contacttypes: 'glpi_contacttypes',
  glpi_contractcosts: 'glpi_contractcosts',
  glpi_contracts: 'glpi_contracts',
  glpi_contracts_items: 'glpi_contracts_items',
  glpi_contracts_suppliers: 'glpi_contracts_suppliers',
  glpi_contracttypes: 'glpi_contracttypes',
  glpi_crontasklogs: 'glpi_crontasklogs',
  glpi_crontasks: 'glpi_crontasks',
  glpi_dashboards_dashboards: 'glpi_dashboards_dashboards',
  glpi_dashboards_filters: 'glpi_dashboards_filters',
  glpi_dashboards_items: 'glpi_dashboards_items',
  glpi_dashboards_rights: 'glpi_dashboards_rights',
  glpi_databaseinstancecategories: 'glpi_databaseinstancecategories',
  glpi_databaseinstances: 'glpi_databaseinstances',
  glpi_databaseinstancetypes: 'glpi_databaseinstancetypes',
  glpi_databases: 'glpi_databases',
  glpi_datacenters: 'glpi_datacenters',
  glpi_dcrooms: 'glpi_dcrooms',
  glpi_devicebatteries: 'glpi_devicebatteries',
  glpi_devicebatterymodels: 'glpi_devicebatterymodels',
  glpi_devicebatterytypes: 'glpi_devicebatterytypes',
  glpi_devicecameramodels: 'glpi_devicecameramodels',
  glpi_devicecameras: 'glpi_devicecameras',
  glpi_devicecasemodels: 'glpi_devicecasemodels',
  glpi_devicecases: 'glpi_devicecases',
  glpi_devicecasetypes: 'glpi_devicecasetypes',
  glpi_devicecontrolmodels: 'glpi_devicecontrolmodels',
  glpi_devicecontrols: 'glpi_devicecontrols',
  glpi_devicedrivemodels: 'glpi_devicedrivemodels',
  glpi_devicedrives: 'glpi_devicedrives',
  glpi_devicefirmwaremodels: 'glpi_devicefirmwaremodels',
  glpi_devicefirmwares: 'glpi_devicefirmwares',
  glpi_devicefirmwaretypes: 'glpi_devicefirmwaretypes',
  glpi_devicegenericmodels: 'glpi_devicegenericmodels',
  glpi_devicegenerics: 'glpi_devicegenerics',
  glpi_devicegenerictypes: 'glpi_devicegenerictypes',
  glpi_devicegraphiccardmodels: 'glpi_devicegraphiccardmodels',
  glpi_devicegraphiccards: 'glpi_devicegraphiccards',
  glpi_deviceharddrivemodels: 'glpi_deviceharddrivemodels',
  glpi_deviceharddrives: 'glpi_deviceharddrives',
  glpi_devicememories: 'glpi_devicememories',
  glpi_devicememorymodels: 'glpi_devicememorymodels',
  glpi_devicememorytypes: 'glpi_devicememorytypes',
  glpi_devicemotherboardmodels: 'glpi_devicemotherboardmodels',
  glpi_devicemotherboards: 'glpi_devicemotherboards',
  glpi_devicenetworkcardmodels: 'glpi_devicenetworkcardmodels',
  glpi_devicenetworkcards: 'glpi_devicenetworkcards',
  glpi_devicepcimodels: 'glpi_devicepcimodels',
  glpi_devicepcis: 'glpi_devicepcis',
  glpi_devicepowersupplies: 'glpi_devicepowersupplies',
  glpi_devicepowersupplymodels: 'glpi_devicepowersupplymodels',
  glpi_deviceprocessormodels: 'glpi_deviceprocessormodels',
  glpi_deviceprocessors: 'glpi_deviceprocessors',
  glpi_devicesensormodels: 'glpi_devicesensormodels',
  glpi_devicesensors: 'glpi_devicesensors',
  glpi_devicesensortypes: 'glpi_devicesensortypes',
  glpi_devicesimcards: 'glpi_devicesimcards',
  glpi_devicesimcardtypes: 'glpi_devicesimcardtypes',
  glpi_devicesoundcardmodels: 'glpi_devicesoundcardmodels',
  glpi_devicesoundcards: 'glpi_devicesoundcards',
  glpi_displaypreferences: 'glpi_displaypreferences',
  glpi_documentcategories: 'glpi_documentcategories',
  glpi_documents: 'glpi_documents',
  glpi_documents_items: 'glpi_documents_items',
  glpi_documenttypes: 'glpi_documenttypes',
  glpi_domainrecords: 'glpi_domainrecords',
  glpi_domainrecordtypes: 'glpi_domainrecordtypes',
  glpi_domainrelations: 'glpi_domainrelations',
  glpi_domains: 'glpi_domains',
  glpi_domains_items: 'glpi_domains_items',
  glpi_domaintypes: 'glpi_domaintypes',
  glpi_dropdowntranslations: 'glpi_dropdowntranslations',
  glpi_enclosuremodels: 'glpi_enclosuremodels',
  glpi_enclosures: 'glpi_enclosures',
  glpi_entities: 'glpi_entities',
  glpi_entities_knowbaseitems: 'glpi_entities_knowbaseitems',
  glpi_entities_reminders: 'glpi_entities_reminders',
  glpi_entities_rssfeeds: 'glpi_entities_rssfeeds',
  glpi_events: 'glpi_events',
  glpi_fieldblacklists: 'glpi_fieldblacklists',
  glpi_fieldunicities: 'glpi_fieldunicities',
  glpi_filesystems: 'glpi_filesystems',
  glpi_fqdns: 'glpi_fqdns',
  glpi_groups: 'glpi_groups',
  glpi_groups_knowbaseitems: 'glpi_groups_knowbaseitems',
  glpi_groups_problems: 'glpi_groups_problems',
  glpi_groups_reminders: 'glpi_groups_reminders',
  glpi_groups_rssfeeds: 'glpi_groups_rssfeeds',
  glpi_groups_tickets: 'glpi_groups_tickets',
  glpi_groups_users: 'glpi_groups_users',
  glpi_holidays: 'glpi_holidays',
  glpi_imageformats: 'glpi_imageformats',
  glpi_imageresolutions: 'glpi_imageresolutions',
  glpi_impactcompounds: 'glpi_impactcompounds',
  glpi_impactcontexts: 'glpi_impactcontexts',
  glpi_impactitems: 'glpi_impactitems',
  glpi_impactrelations: 'glpi_impactrelations',
  glpi_infocoms: 'glpi_infocoms',
  glpi_interfacetypes: 'glpi_interfacetypes',
  glpi_ipaddresses: 'glpi_ipaddresses',
  glpi_ipaddresses_ipnetworks: 'glpi_ipaddresses_ipnetworks',
  glpi_ipnetworks: 'glpi_ipnetworks',
  glpi_ipnetworks_vlans: 'glpi_ipnetworks_vlans',
  glpi_items_clusters: 'glpi_items_clusters',
  glpi_items_devicebatteries: 'glpi_items_devicebatteries',
  glpi_items_devicecameras: 'glpi_items_devicecameras',
  glpi_items_devicecameras_imageformats: 'glpi_items_devicecameras_imageformats',
  glpi_items_devicecameras_imageresolutions: 'glpi_items_devicecameras_imageresolutions',
  glpi_items_devicecases: 'glpi_items_devicecases',
  glpi_items_devicecontrols: 'glpi_items_devicecontrols',
  glpi_items_devicedrives: 'glpi_items_devicedrives',
  glpi_items_devicefirmwares: 'glpi_items_devicefirmwares',
  glpi_items_devicegenerics: 'glpi_items_devicegenerics',
  glpi_items_devicegraphiccards: 'glpi_items_devicegraphiccards',
  glpi_items_deviceharddrives: 'glpi_items_deviceharddrives',
  glpi_items_devicememories: 'glpi_items_devicememories',
  glpi_items_devicemotherboards: 'glpi_items_devicemotherboards',
  glpi_items_devicenetworkcards: 'glpi_items_devicenetworkcards',
  glpi_items_devicepcis: 'glpi_items_devicepcis',
  glpi_items_devicepowersupplies: 'glpi_items_devicepowersupplies',
  glpi_items_deviceprocessors: 'glpi_items_deviceprocessors',
  glpi_items_devicesensors: 'glpi_items_devicesensors',
  glpi_items_devicesimcards: 'glpi_items_devicesimcards',
  glpi_items_devicesoundcards: 'glpi_items_devicesoundcards',
  glpi_items_disks: 'glpi_items_disks',
  glpi_items_enclosures: 'glpi_items_enclosures',
  glpi_items_kanbans: 'glpi_items_kanbans',
  glpi_items_operatingsystems: 'glpi_items_operatingsystems',
  glpi_items_problems: 'glpi_items_problems',
  glpi_items_projects: 'glpi_items_projects',
  glpi_items_racks: 'glpi_items_racks',
  glpi_items_remotemanagements: 'glpi_items_remotemanagements',
  glpi_items_softwarelicenses: 'glpi_items_softwarelicenses',
  glpi_items_softwareversions: 'glpi_items_softwareversions',
  glpi_items_tickets: 'glpi_items_tickets',
  glpi_itilcategories: 'glpi_itilcategories',
  glpi_itilfollowups: 'glpi_itilfollowups',
  glpi_itilfollowuptemplates: 'glpi_itilfollowuptemplates',
  glpi_itils_projects: 'glpi_itils_projects',
  glpi_itilsolutions: 'glpi_itilsolutions',
  glpi_knowbaseitemcategories: 'glpi_knowbaseitemcategories',
  glpi_knowbaseitems: 'glpi_knowbaseitems',
  glpi_knowbaseitems_comments: 'glpi_knowbaseitems_comments',
  glpi_knowbaseitems_items: 'glpi_knowbaseitems_items',
  glpi_knowbaseitems_knowbaseitemcategories: 'glpi_knowbaseitems_knowbaseitemcategories',
  glpi_knowbaseitems_profiles: 'glpi_knowbaseitems_profiles',
  glpi_knowbaseitems_revisions: 'glpi_knowbaseitems_revisions',
  glpi_knowbaseitems_users: 'glpi_knowbaseitems_users',
  glpi_knowbaseitemtranslations: 'glpi_knowbaseitemtranslations',
  glpi_lineoperators: 'glpi_lineoperators',
  glpi_lines: 'glpi_lines',
  glpi_linetypes: 'glpi_linetypes',
  glpi_links: 'glpi_links',
  glpi_links_itemtypes: 'glpi_links_itemtypes',
  glpi_locations: 'glpi_locations',
  glpi_lockedfields: 'glpi_lockedfields',
  glpi_logs: 'glpi_logs',
  glpi_mailcollectors: 'glpi_mailcollectors',
  glpi_manuallinks: 'glpi_manuallinks',
  glpi_manufacturers: 'glpi_manufacturers',
  glpi_monitormodels: 'glpi_monitormodels',
  glpi_monitors: 'glpi_monitors',
  glpi_monitortypes: 'glpi_monitortypes',
  glpi_networkaliases: 'glpi_networkaliases',
  glpi_networkequipmentmodels: 'glpi_networkequipmentmodels',
  glpi_networkequipments: 'glpi_networkequipments',
  glpi_networkequipmenttypes: 'glpi_networkequipmenttypes',
  glpi_networkinterfaces: 'glpi_networkinterfaces',
  glpi_networknames: 'glpi_networknames',
  glpi_networkportaggregates: 'glpi_networkportaggregates',
  glpi_networkportaliases: 'glpi_networkportaliases',
  glpi_networkportconnectionlogs: 'glpi_networkportconnectionlogs',
  glpi_networkportdialups: 'glpi_networkportdialups',
  glpi_networkportethernets: 'glpi_networkportethernets',
  glpi_networkportfiberchannels: 'glpi_networkportfiberchannels',
  glpi_networkportfiberchanneltypes: 'glpi_networkportfiberchanneltypes',
  glpi_networkportlocals: 'glpi_networkportlocals',
  glpi_networkportmetrics: 'glpi_networkportmetrics',
  glpi_networkports: 'glpi_networkports',
  glpi_networkports_networkports: 'glpi_networkports_networkports',
  glpi_networkports_vlans: 'glpi_networkports_vlans',
  glpi_networkporttypes: 'glpi_networkporttypes',
  glpi_networkportwifis: 'glpi_networkportwifis',
  glpi_networks: 'glpi_networks',
  glpi_notepads: 'glpi_notepads',
  glpi_notifications: 'glpi_notifications',
  glpi_notifications_notificationtemplates: 'glpi_notifications_notificationtemplates',
  glpi_notificationtargets: 'glpi_notificationtargets',
  glpi_notificationtemplates: 'glpi_notificationtemplates',
  glpi_notificationtemplatetranslations: 'glpi_notificationtemplatetranslations',
  glpi_notimportedemails: 'glpi_notimportedemails',
  glpi_objectlocks: 'glpi_objectlocks',
  glpi_olalevelactions: 'glpi_olalevelactions',
  glpi_olalevelcriterias: 'glpi_olalevelcriterias',
  glpi_olalevels: 'glpi_olalevels',
  glpi_olalevels_tickets: 'glpi_olalevels_tickets',
  glpi_olas: 'glpi_olas',
  glpi_operatingsystemarchitectures: 'glpi_operatingsystemarchitectures',
  glpi_operatingsystemeditions: 'glpi_operatingsystemeditions',
  glpi_operatingsystemkernels: 'glpi_operatingsystemkernels',
  glpi_operatingsystemkernelversions: 'glpi_operatingsystemkernelversions',
  glpi_operatingsystems: 'glpi_operatingsystems',
  glpi_operatingsystemservicepacks: 'glpi_operatingsystemservicepacks',
  glpi_operatingsystemversions: 'glpi_operatingsystemversions',
  glpi_passivedcequipmentmodels: 'glpi_passivedcequipmentmodels',
  glpi_passivedcequipments: 'glpi_passivedcequipments',
  glpi_passivedcequipmenttypes: 'glpi_passivedcequipmenttypes',
  glpi_pcivendors: 'glpi_pcivendors',
  glpi_pdumodels: 'glpi_pdumodels',
  glpi_pdus: 'glpi_pdus',
  glpi_pdus_plugs: 'glpi_pdus_plugs',
  glpi_pdus_racks: 'glpi_pdus_racks',
  glpi_pdutypes: 'glpi_pdutypes',
  glpi_pendingreasons: 'glpi_pendingreasons',
  glpi_pendingreasons_items: 'glpi_pendingreasons_items',
  glpi_peripheralmodels: 'glpi_peripheralmodels',
  glpi_peripherals: 'glpi_peripherals',
  glpi_peripheraltypes: 'glpi_peripheraltypes',
  glpi_phonemodels: 'glpi_phonemodels',
  glpi_phonepowersupplies: 'glpi_phonepowersupplies',
  glpi_phones: 'glpi_phones',
  glpi_phonetypes: 'glpi_phonetypes',
  glpi_planningeventcategories: 'glpi_planningeventcategories',
  glpi_planningexternalevents: 'glpi_planningexternalevents',
  glpi_planningexternaleventtemplates: 'glpi_planningexternaleventtemplates',
  glpi_planningrecalls: 'glpi_planningrecalls',
  glpi_plugin_barcode_configs: 'glpi_plugin_barcode_configs',
  glpi_plugin_barcode_configs_types: 'glpi_plugin_barcode_configs_types',
  glpi_plugin_datainjection_infos: 'glpi_plugin_datainjection_infos',
  glpi_plugin_datainjection_mappings: 'glpi_plugin_datainjection_mappings',
  glpi_plugin_datainjection_modelcsvs: 'glpi_plugin_datainjection_modelcsvs',
  glpi_plugin_datainjection_models: 'glpi_plugin_datainjection_models',
  glpi_plugin_fields_containerdisplayconditions: 'glpi_plugin_fields_containerdisplayconditions',
  glpi_plugin_fields_containers: 'glpi_plugin_fields_containers',
  glpi_plugin_fields_fields: 'glpi_plugin_fields_fields',
  glpi_plugin_fields_labeltranslations: 'glpi_plugin_fields_labeltranslations',
  glpi_plugin_fields_pluginformcreatorcategoryasdasdasdasds: 'glpi_plugin_fields_pluginformcreatorcategoryasdasdasdasds',
  glpi_plugin_fields_profiles: 'glpi_plugin_fields_profiles',
  glpi_plugin_fields_statusoverrides: 'glpi_plugin_fields_statusoverrides',
  glpi_plugin_formcreator_answers: 'glpi_plugin_formcreator_answers',
  glpi_plugin_formcreator_categories: 'glpi_plugin_formcreator_categories',
  glpi_plugin_formcreator_conditions: 'glpi_plugin_formcreator_conditions',
  glpi_plugin_formcreator_entityconfigs: 'glpi_plugin_formcreator_entityconfigs',
  glpi_plugin_formcreator_formanswers: 'glpi_plugin_formcreator_formanswers',
  glpi_plugin_formcreator_forms: 'glpi_plugin_formcreator_forms',
  glpi_plugin_formcreator_forms_groups: 'glpi_plugin_formcreator_forms_groups',
  glpi_plugin_formcreator_forms_languages: 'glpi_plugin_formcreator_forms_languages',
  glpi_plugin_formcreator_forms_profiles: 'glpi_plugin_formcreator_forms_profiles',
  glpi_plugin_formcreator_forms_users: 'glpi_plugin_formcreator_forms_users',
  glpi_plugin_formcreator_forms_validators: 'glpi_plugin_formcreator_forms_validators',
  glpi_plugin_formcreator_issues: 'glpi_plugin_formcreator_issues',
  glpi_plugin_formcreator_items_targettickets: 'glpi_plugin_formcreator_items_targettickets',
  glpi_plugin_formcreator_questiondependencies: 'glpi_plugin_formcreator_questiondependencies',
  glpi_plugin_formcreator_questionranges: 'glpi_plugin_formcreator_questionranges',
  glpi_plugin_formcreator_questionregexes: 'glpi_plugin_formcreator_questionregexes',
  glpi_plugin_formcreator_questions: 'glpi_plugin_formcreator_questions',
  glpi_plugin_formcreator_sections: 'glpi_plugin_formcreator_sections',
  glpi_plugin_formcreator_targetchanges: 'glpi_plugin_formcreator_targetchanges',
  glpi_plugin_formcreator_targetproblems: 'glpi_plugin_formcreator_targetproblems',
  glpi_plugin_formcreator_targets_actors: 'glpi_plugin_formcreator_targets_actors',
  glpi_plugin_formcreator_targettickets: 'glpi_plugin_formcreator_targettickets',
  glpi_plugin_itilcategorygroups_categories: 'glpi_plugin_itilcategorygroups_categories',
  glpi_plugin_itilcategorygroups_categories_groups: 'glpi_plugin_itilcategorygroups_categories_groups',
  glpi_plugin_itilcategorygroups_groups_levels: 'glpi_plugin_itilcategorygroups_groups_levels',
  glpi_plugin_metademands_basketlines: 'glpi_plugin_metademands_basketlines',
  glpi_plugin_metademands_basketobjects: 'glpi_plugin_metademands_basketobjects',
  glpi_plugin_metademands_basketobjecttranslations: 'glpi_plugin_metademands_basketobjecttranslations',
  glpi_plugin_metademands_basketobjecttypes: 'glpi_plugin_metademands_basketobjecttypes',
  glpi_plugin_metademands_basketobjecttypetranslations: 'glpi_plugin_metademands_basketobjecttypetranslations',
  glpi_plugin_metademands_conditions: 'glpi_plugin_metademands_conditions',
  glpi_plugin_metademands_configs: 'glpi_plugin_metademands_configs',
  glpi_plugin_metademands_configsteps: 'glpi_plugin_metademands_configsteps',
  glpi_plugin_metademands_drafts: 'glpi_plugin_metademands_drafts',
  glpi_plugin_metademands_drafts_values: 'glpi_plugin_metademands_drafts_values',
  glpi_plugin_metademands_fieldcustomvalues: 'glpi_plugin_metademands_fieldcustomvalues',
  glpi_plugin_metademands_fieldoptions: 'glpi_plugin_metademands_fieldoptions',
  glpi_plugin_metademands_fieldparameters: 'glpi_plugin_metademands_fieldparameters',
  glpi_plugin_metademands_fields: 'glpi_plugin_metademands_fields',
  glpi_plugin_metademands_fieldtranslations: 'glpi_plugin_metademands_fieldtranslations',
  glpi_plugin_metademands_forms: 'glpi_plugin_metademands_forms',
  glpi_plugin_metademands_forms_values: 'glpi_plugin_metademands_forms_values',
  glpi_plugin_metademands_groupconfigs: 'glpi_plugin_metademands_groupconfigs',
  glpi_plugin_metademands_groups: 'glpi_plugin_metademands_groups',
  glpi_plugin_metademands_interticketfollowups: 'glpi_plugin_metademands_interticketfollowups',
  glpi_plugin_metademands_mailtasks: 'glpi_plugin_metademands_mailtasks',
  glpi_plugin_metademands_metademands: 'glpi_plugin_metademands_metademands',
  glpi_plugin_metademands_metademands_resources: 'glpi_plugin_metademands_metademands_resources',
  glpi_plugin_metademands_metademandtasks: 'glpi_plugin_metademands_metademandtasks',
  glpi_plugin_metademands_metademandtranslations: 'glpi_plugin_metademands_metademandtranslations',
  glpi_plugin_metademands_metademandvalidations: 'glpi_plugin_metademands_metademandvalidations',
  glpi_plugin_metademands_pluginfields: 'glpi_plugin_metademands_pluginfields',
  glpi_plugin_metademands_stepforms: 'glpi_plugin_metademands_stepforms',
  glpi_plugin_metademands_stepforms_actors: 'glpi_plugin_metademands_stepforms_actors',
  glpi_plugin_metademands_stepforms_values: 'glpi_plugin_metademands_stepforms_values',
  glpi_plugin_metademands_steps: 'glpi_plugin_metademands_steps',
  glpi_plugin_metademands_tasks: 'glpi_plugin_metademands_tasks',
  glpi_plugin_metademands_ticketfields: 'glpi_plugin_metademands_ticketfields',
  glpi_plugin_metademands_tickets_fields: 'glpi_plugin_metademands_tickets_fields',
  glpi_plugin_metademands_tickets_metademands: 'glpi_plugin_metademands_tickets_metademands',
  glpi_plugin_metademands_tickets_tasks: 'glpi_plugin_metademands_tickets_tasks',
  glpi_plugin_metademands_tickettasks: 'glpi_plugin_metademands_tickettasks',
  glpi_plugin_mycustomview_config: 'glpi_plugin_mycustomview_config',
  glpi_plugin_mycustomview_savedsearch_list: 'glpi_plugin_mycustomview_savedsearch_list',
  glpi_plugin_mycustomview_user_settings: 'glpi_plugin_mycustomview_user_settings',
  glpi_plugin_mydashboard_alerts: 'glpi_plugin_mydashboard_alerts',
  glpi_plugin_mydashboard_configs: 'glpi_plugin_mydashboard_configs',
  glpi_plugin_mydashboard_configtranslations: 'glpi_plugin_mydashboard_configtranslations',
  glpi_plugin_mydashboard_customswidgets: 'glpi_plugin_mydashboard_customswidgets',
  glpi_plugin_mydashboard_dashboards: 'glpi_plugin_mydashboard_dashboards',
  glpi_plugin_mydashboard_groupprofiles: 'glpi_plugin_mydashboard_groupprofiles',
  glpi_plugin_mydashboard_itilalerts: 'glpi_plugin_mydashboard_itilalerts',
  glpi_plugin_mydashboard_preferences: 'glpi_plugin_mydashboard_preferences',
  glpi_plugin_mydashboard_preferenceuserblacklists: 'glpi_plugin_mydashboard_preferenceuserblacklists',
  glpi_plugin_mydashboard_profileauthorizedwidgets: 'glpi_plugin_mydashboard_profileauthorizedwidgets',
  glpi_plugin_mydashboard_stockticketindicators: 'glpi_plugin_mydashboard_stockticketindicators',
  glpi_plugin_mydashboard_stocktickets: 'glpi_plugin_mydashboard_stocktickets',
  glpi_plugin_mydashboard_stockwidgets: 'glpi_plugin_mydashboard_stockwidgets',
  glpi_plugin_mydashboard_userwidgets: 'glpi_plugin_mydashboard_userwidgets',
  glpi_plugin_mydashboard_widgets: 'glpi_plugin_mydashboard_widgets',
  glpi_plugins: 'glpi_plugins',
  glpi_plugs: 'glpi_plugs',
  glpi_printerlogs: 'glpi_printerlogs',
  glpi_printermodels: 'glpi_printermodels',
  glpi_printers: 'glpi_printers',
  glpi_printers_cartridgeinfos: 'glpi_printers_cartridgeinfos',
  glpi_printertypes: 'glpi_printertypes',
  glpi_problemcosts: 'glpi_problemcosts',
  glpi_problems: 'glpi_problems',
  glpi_problems_suppliers: 'glpi_problems_suppliers',
  glpi_problems_tickets: 'glpi_problems_tickets',
  glpi_problems_users: 'glpi_problems_users',
  glpi_problemtasks: 'glpi_problemtasks',
  glpi_problemtemplatehiddenfields: 'glpi_problemtemplatehiddenfields',
  glpi_problemtemplatemandatoryfields: 'glpi_problemtemplatemandatoryfields',
  glpi_problemtemplatepredefinedfields: 'glpi_problemtemplatepredefinedfields',
  glpi_problemtemplates: 'glpi_problemtemplates',
  glpi_profilerights: 'glpi_profilerights',
  glpi_profiles: 'glpi_profiles',
  glpi_profiles_reminders: 'glpi_profiles_reminders',
  glpi_profiles_rssfeeds: 'glpi_profiles_rssfeeds',
  glpi_profiles_users: 'glpi_profiles_users',
  glpi_projectcosts: 'glpi_projectcosts',
  glpi_projects: 'glpi_projects',
  glpi_projectstates: 'glpi_projectstates',
  glpi_projecttasklinks: 'glpi_projecttasklinks',
  glpi_projecttasks: 'glpi_projecttasks',
  glpi_projecttasks_tickets: 'glpi_projecttasks_tickets',
  glpi_projecttaskteams: 'glpi_projecttaskteams',
  glpi_projecttasktemplates: 'glpi_projecttasktemplates',
  glpi_projecttasktypes: 'glpi_projecttasktypes',
  glpi_projectteams: 'glpi_projectteams',
  glpi_projecttypes: 'glpi_projecttypes',
  glpi_queuednotifications: 'glpi_queuednotifications',
  glpi_rackmodels: 'glpi_rackmodels',
  glpi_racks: 'glpi_racks',
  glpi_racktypes: 'glpi_racktypes',
  glpi_recurrentchanges: 'glpi_recurrentchanges',
  glpi_refusedequipments: 'glpi_refusedequipments',
  glpi_registeredids: 'glpi_registeredids',
  glpi_reminders: 'glpi_reminders',
  glpi_reminders_users: 'glpi_reminders_users',
  glpi_remindertranslations: 'glpi_remindertranslations',
  glpi_requesttypes: 'glpi_requesttypes',
  glpi_reservationitems: 'glpi_reservationitems',
  glpi_reservations: 'glpi_reservations',
  glpi_rssfeeds: 'glpi_rssfeeds',
  glpi_rssfeeds_users: 'glpi_rssfeeds_users',
  glpi_ruleactions: 'glpi_ruleactions',
  glpi_rulecriterias: 'glpi_rulecriterias',
  glpi_rulematchedlogs: 'glpi_rulematchedlogs',
  glpi_rulerightparameters: 'glpi_rulerightparameters',
  glpi_rules: 'glpi_rules',
  glpi_savedsearches: 'glpi_savedsearches',
  glpi_savedsearches_alerts: 'glpi_savedsearches_alerts',
  glpi_savedsearches_users: 'glpi_savedsearches_users',
  glpi_slalevelactions: 'glpi_slalevelactions',
  glpi_slalevelcriterias: 'glpi_slalevelcriterias',
  glpi_slalevels: 'glpi_slalevels',
  glpi_slalevels_tickets: 'glpi_slalevels_tickets',
  glpi_slas: 'glpi_slas',
  glpi_slms: 'glpi_slms',
  glpi_snmpcredentials: 'glpi_snmpcredentials',
  glpi_socketmodels: 'glpi_socketmodels',
  glpi_sockets: 'glpi_sockets',
  glpi_softwarecategories: 'glpi_softwarecategories',
  glpi_softwarelicenses: 'glpi_softwarelicenses',
  glpi_softwarelicensetypes: 'glpi_softwarelicensetypes',
  glpi_softwares: 'glpi_softwares',
  glpi_softwareversions: 'glpi_softwareversions',
  glpi_solutiontemplates: 'glpi_solutiontemplates',
  glpi_solutiontypes: 'glpi_solutiontypes',
  glpi_ssovariables: 'glpi_ssovariables',
  glpi_states: 'glpi_states',
  glpi_suppliers: 'glpi_suppliers',
  glpi_suppliers_tickets: 'glpi_suppliers_tickets',
  glpi_suppliertypes: 'glpi_suppliertypes',
  glpi_taskcategories: 'glpi_taskcategories',
  glpi_tasktemplates: 'glpi_tasktemplates',
  glpi_ticketcosts: 'glpi_ticketcosts',
  glpi_ticketrecurrents: 'glpi_ticketrecurrents',
  glpi_tickets: 'glpi_tickets',
  glpi_tickets_contracts: 'glpi_tickets_contracts',
  glpi_tickets_tickets: 'glpi_tickets_tickets',
  glpi_tickets_users: 'glpi_tickets_users',
  glpi_ticketsatisfactions: 'glpi_ticketsatisfactions',
  glpi_tickettasks: 'glpi_tickettasks',
  glpi_tickettemplatehiddenfields: 'glpi_tickettemplatehiddenfields',
  glpi_tickettemplatemandatoryfields: 'glpi_tickettemplatemandatoryfields',
  glpi_tickettemplatepredefinedfields: 'glpi_tickettemplatepredefinedfields',
  glpi_tickettemplates: 'glpi_tickettemplates',
  glpi_ticketvalidations: 'glpi_ticketvalidations',
  glpi_transfers: 'glpi_transfers',
  glpi_unmanageds: 'glpi_unmanageds',
  glpi_usbvendors: 'glpi_usbvendors',
  glpi_usercategories: 'glpi_usercategories',
  glpi_useremails: 'glpi_useremails',
  glpi_users: 'glpi_users',
  glpi_usertitles: 'glpi_usertitles',
  glpi_virtualmachinestates: 'glpi_virtualmachinestates',
  glpi_virtualmachinesystems: 'glpi_virtualmachinesystems',
  glpi_virtualmachinetypes: 'glpi_virtualmachinetypes',
  glpi_vlans: 'glpi_vlans',
  glpi_vobjects: 'glpi_vobjects',
  glpi_wifinetworks: 'glpi_wifinetworks'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
