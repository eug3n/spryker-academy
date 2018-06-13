define({"206":{i:0.00182553758495858,u:"../developing_with_spryker/module_guide/search/search_configure_features.html",a:"In this section you’ll learn how to configure faceted navigation, filters, pagination and sorting, so all the important search features that are provided by the Search module. This configuration is only relevant if you enable the three query expanders and result formatters mentioned above. ...",t:"Configure Search Features"},"207":{i:0.00076028728158699,u:"../developing_with_spryker/module_guide/search/search_filter.html",a:"In Zed there’s a section (Search and Filters -\u003e Filter Preferences) for managing the product attributes that you’d like to filter by in the shop. There are several filter types that the framework supports at the moment: single-select: filter for one value at a time (e.g. radio group), multi-select: ...",t:"Filter Preferences - Search"},"208":{i:0.000528793412954831,u:"../developing_with_spryker/module_guide/search/search_multi_currency.html",a:"\n            If you don\u0027t have the multi-currency feature in you current project yet and want to migrate, you have to follow certain steps to migrate your system.\n\n            First  migrate Price  and  modules related to multi-currency  before proceeding with the search for multi-currency.\n\n        ...",t:"Multi-Currency - Search"},"209":{i:0.00169615415921665,u:"../developing_with_spryker/module_guide/search/search_preferences.html",a:"In Zed there’s a section (Search and Filters -\u003e Search Preferences) for managing searchable product attributes. To be able to search after a product in the shop that has a specific attribute (e.g. color, size, etc.), you can click on “Add attribute to search” to create new, or “Edit” if it already ...",t:"Search Preferences"},"210":{i:0.00248110331226931,u:"../developing_with_spryker/module_guide/search/search_query.html",a:"Once we have all necessary data in Elasticsearch, it’s time to display them in Yves. In order to achieve this, we first need to query Elasticsearch, which will return raw data for us that we need to  Process Query Result  to display it in our templates. In the SearchClient you can find the search() ...",t:"Search Query"},"211":{i:0.000787616737956985,u:"../developing_with_spryker/module_guide/step_engine/step_engine.html",a:"The StepEngine module provides an easy way to define multi-step pages with forms. Using this module you can define Steps and additionally you can link forms to interact with the user. This is useful in handling the checkout process where you can define multiple steps, such as: select payment method; ...",t:"Step Engine"},"212":{i:0.000636628861981435,u:"../developing_with_spryker/module_guide/step_engine/step_engine_breadcrumb.html",a:"To set up breadcrumb navigation for a step collection, first you’ll need to mark which steps you would like to have in your breadcrumb. To mark a step available for breadcrumb just implement \\Spryker\\Yves\\StepEngine\\Dependency\\Step\\StepWithBreadcrumbInterface in all the necessary steps. The ...",t:"Breadcrumb Navigation - Step Engine"},"213":{i:0.000850291120044727,u:"../developing_with_spryker/module_guide/step_engine/step_engine_define_step.html",a:"When adding a new step, you must implement the StepInterface. The StepInterface defines all the methods that StepEngine needs when executing a step: preCondition() - here you define the requirements for the step to get executed requireInput() - here you define if the step requires user input (e.g. ...",t:"Defining a Step - Step Engine"},"214":{i:0.000636628861981435,u:"../developing_with_spryker/module_guide/step_engine/step_engine_use_case_scenario.html",a:"Below you can see an example of configuration for the checkout process, containing two steps: an entry step and a success step. Click to expand the code sample \u003c?php\nnamespace Pyz\\Yves\\Checkout;\n\nuse Pyz\\Yves\\Checkout\\Form\\FormFactory;\nuse ...",t:"Use Case Scenario - Step Engine"},"215":{i:0.000636628861981435,u:"../developing_with_spryker/module_guide/step_engine/step_engine_workflow.html",a:"When you need to define a multi-step process using the StepEngine feature, you need to implement the following interfaces: StepInterface - here you implement the logic that needs to get executed when the defined step takes place SubFormInterface - defines the name of the form and the pathProperty ...",t:"Step Engine Workflow"},"216":{i:0.0147530986097932,u:"../developing_with_spryker/module_guide/tax/tax.html",a:"The Tax module is responsible for handling tax rates that can apply for products, product options or shipment. Overview The tax sets can have different tax rates for each country defined in your shop. You can see in the diagram below how these entities are modeled in the database. A tax set is ...",t:"Tax"},"217":{i:0.00814352444476994,u:"../developing_with_spryker/module_guide/tax/tax_2_0.html",a:"The latest version of this module can be found here  Tax Spryker allows to define different tax sets that include one to many different tax rates. Tax Set - Tax Rate Association A tax set has associated at least one tax rate. For products on which there aren’t applied any taxes : associate the ...",t:"Tax Version 2.0"},"218":{i:0.00145606593763604,u:"../developing_with_spryker/module_guide/url/url.html",a:" The URL module handles dynamic URLs for entities that appear on the front-end (Yves). At the moment, Spryker core provides URL handling for products, CMS pages, categories and URL redirects. The URLs are stored in one database table and each is unique. The database structure for storing URLs looks ...",t:"URL "},"219":{i:0.00112156377408658,u:"../developing_with_spryker/module_guide/url/url_handling_new_entity.html",a:"The following information describes how to handle URLs for other types of entities that Spryker core provides. Prerequisites Before you begin, make sure the target entity is already in your database (the one to you would like to assign URLs to). In the examples below we\u0027ll call this entity ...",t:"Handling New Types of Entity URLs"},"220":{i:0.00112156377408658,u:"../developing_with_spryker/module_guide/url/url_redirects.html",a:"A URL redirect is a special entity that consists of a source URL (which is provided by the spy_url database table), a target URL and an HTTP status code (stored in spy_url_redirect database table). Redirects are exported to the key-value storage with collectors and are matched with StorageRouter ...",t:"URL Redirects"},"221":{i:0.000502733727205929,u:"../developing_with_spryker/module_guide/utilities/about_utilities.html",a:"The following modules are utilities.   Academy Navigation To navigate through content, click on an option from the right-hand table of contents or use the search (above).  You can also use navigation buttons on the top right corner of page:  Navigate previous button takes you the page preceding the ...",t:"About Utilities"},"222":{i:0.00860321228755417,u:"../developing_with_spryker/module_guide/utilities/currency.html",a:"\nThe Currency module provides an easy way to retrieve information about a currency given as an ISO code.\n The methods in the CurrencyFacade will always return an instance of the CurrencyTransfer. You can get any currency by its ISO code or the current configured currency.\n\n Usage\n CurrencyFacade ...",t:"Currency"},"223":{i:0.00352502420217339,u:"../developing_with_spryker/module_guide/utilities/install_tool.html",a:"Spryker offers an install tool which can be used to install the system as described in the install recipe file(s). Installation Install the module with composer by running the following command: \n        composer require spryker/install\n         After the installation you can run the command with ...",t:"Install Tool"},"224":{i:0.00130777707898143,u:"../developing_with_spryker/module_guide/utilities/logger.html",a:"Spryker contains a  PSR-3  compatible logger which can be customized to any needs. You can use the logger everywhere in the system, as in the example below: \u003c?php\n\nuse Spryker\\Shared\\Log\\LoggerTrait;\n\nclass MyClass\n{\n\n    use LoggerTrait;\n\n    public function myFunction()\n    {\n        // This will ...",t:"Logger"},"225":{i:0.00415959998233354,u:"../developing_with_spryker/module_guide/utilities/money.html",a:"Money Handling monetary values can be a problem and is often quite hard. The Money module makes it easier to work with monetary values. Spryker handles all monetary values as integer and provides conversions from decimal values to cent values and vice versa. The key feature of this module is to ...",t:"Money"},"226":{i:0.000724241056071597,u:"../developing_with_spryker/module_guide/wishlist/wishlist.html",a:"The Wishlist module is very straight forward and easy to use. A Customer has a default wishlist, which will be created first time when there is a request made to manage its items. There is only one wishlist per customer by default, however one customer can have multiple named wishlists, if required. ...",t:"Wishlist"},"227":{i:0.000502733727205929,u:"../developing_with_spryker/module_guide/wishlist/wishlist_items_mgmt.html",a:"addItem(WishlistItemTransfer $wishlistItemTransfer) Adds item to wishlist. Required values: fkCustomer, fkProduct. Optional: wishlistName. In case wishlist name is not provided the default value will be used. \u003c?php\n$wishlistItemTransfer = (new WishlistItemTransfer())\n    -\u003esetWishlistName(\u0027foobar\u0027)\n ...",t:"Wishlist Items Management"},"228":{i:0.000502733727205929,u:"../developing_with_spryker/module_guide/wishlist/wishlist_management.html",a:"createWishlist(WishlistTransfer $wishlistTransfer) Creates wishlist for a specific customer with given name. Required values: name, fkCustomer. \u003c?php\n$wishlistTransfer = (new WishlistTransfer())\n    -\u003esetName(\u0027foobar\u0027)\n    -\u003esetFkCustomer(1);\n\n$wishlistTransfer = ...",t:"Wishlist Management"},"229":{i:0.000502733727205929,u:"../developing_with_spryker/module_guide/wishlist/wishlist_schema.html",a:"Wishlist Schema As is the concept of the wishlist, the schema is also very straightforward. A customer can have multiple wishlists, which can have multiple items.",t:"Wishlist Schema"},"230":{i:0.000591336658752196,u:"../developing_with_spryker/module_guide/zed_api/zed_api.html",a:"The Spryker OS offers a flexible REST API for Zed. It maps basic REST functionality to the persistence layer of the Spryker backend.\n\n By default, the API accepts and returns JSON as format. But it can be extended to work with any format. As for JSON, the API specification is close to JSON API ...",t:"Zed API (BETA)"},"231":{i:0.000502733727205929,u:"../developing_with_spryker/module_guide/zed_api/zed_api_resources.html",a:"Each module can have a “{module}Api” module(e.g. CustomerApi for Customer). Such an API module exposes CRUD facade methods (find, get, add, update, remove) that can be mapped to a URL via REST resource/action resolution.\n\n The main Api module contains a dispatcher that delegates to those API module ...",t:"Zed API Resources"},"232":{i:0.000502733727205929,u:"../developing_with_spryker/module_guide/zed_api/zed_api_config.html",a:"First of all we need to decide on the resources being exposed. Those will be mapped inside the ApiDependencyProvider:\n\n \u003c?php\nuse Spryker\\Zed\\CustomerApi\\Communication\\Plugin\\Api\\CustomerApiResourcePlugin;\nuse Spryker\\Zed\\ProductApi\\Communication\\Plugin\\Api\\ProductApiResourcePlugin;\n\n    /**\n     * ...",t:"Zed API Configuration"},"233":{i:0.000502733727205929,u:"../developing_with_spryker/module_guide/zed_api/zed_api_processor_stack.html",a:"Request and Pre Processing\n We now need to decide further on the URL format. Should this be extension driven, which is easier to browse, or HTTP header driven, for example? What kind of URL query string transformation do we need, what kind of header parsing is required?\n\n In order to keep this ...",t:"Processor Stack - Zed API"},"234":{i:0.000502733727205929,u:"../developing_with_spryker/module_guide/zed_api/zed_api_crud_function.html",a:"Filtering\n For find action we return a paginated collection that can be limited and customized based on query string input or headers. So using the provided FilterPreProcessors one can enable filtering (conditions), sorting (and multi-sorting) and pagination.\n\n Condition Filtering\n For the filtering ...",t:"CRUD Functionality - Zed API"},"235":{i:0.000502733727205929,u:"../developing_with_spryker/module_guide/zed_api/zed_api_additional_function.html",a:"Meta Information\n Links as part of the meta information will be part of the response on the same level as the data: {\n    \"data\": ...,\n    \"links\": [\n        \"self\" =\u003e ...                         \n        ...\n    ],\n    ...\n}\n “self” URIs are included, for example for adding an item.\n\n",t:"Additional Functionality - Zed API"},"236":{i:0.000502733727205929,u:"../developing_with_spryker/module_guide/zed_api/zed_api_project_implementation.html",a:"For the API and the API bundles to get activated we need to configure our own service provider stack in the Zed ApplicationDependencyProvider class:\n\n \u003c?php\n    /**\n     * @param \\Spryker\\Zed\\Kernel\\Container $container\n     *\n     * @return \\Silex\\ServiceProviderInterface[]\n     */\n    protected ...",t:"Project Implementation - Zed API"},"237":{i:0.000502733727205929,u:"../developing_with_spryker/module_guide/zed_api/zed_api_appendix.html",a:"API Documentation\n We will soon provide an extensive documentation on the API resource URIs available and a tool to parse those to a standard.\n\n Logging\n By default all incoming requests and outgoing responses will be logged as “info” level.\n\n Security Recommendations\n Secure the API with a token ...",t:"Appendix - Zed API"},"238":{i:0.000724241056071597,u:"../developing_with_spryker/module_guide/data_feed.html",a:"BETA version\n This module is still in development. For questions and inquiries please contact  academy@spryker.com DataFeed modules help to query abstract products, categories, prices, availability data and related information for exporting or processing. The data Feed is not dependent on ...",t:"Data Feed Modules"},"239":{i:0.00335130864376017,u:"../developing_with_spryker/module_guide/flysystem.html",a:"The Flysystem moduleintegrates Spryker with the  thephpleague/flysystem  vendor package. It handles operations, flysystem adapter configuration and provides a FlysystemFilesystemBuilderPluginInterface, where the build() method is expected to return a concrete implementation of the ...",t:"Flysystem"},"240":{i:0.00267355411823159,u:"../developing_with_spryker/module_guide/user_rights_management.html",a:"User and rights management is a general term that describes the security functionality for controlling user access to perform various roles throughout the system. In the Spryker Commerce OS user and rights management is implemented in the following three bundles: ACL - ACL stands for Access Control ...",t:"User and Rights Management"},"241":{i:0.00090428646897392,u:"../developing_with_spryker/migration_guides/migration_guides.html",a:"Migration Guides are simple instructions to guide you through the process of upgrading a module to a newer version.    Academy Navigation To navigate through content, click on an option from the right-hand table of contents or use the search (above).  You can also use navigation buttons on the top ...",t:"Migration Guides"},"242":{i:0.00182776644399423,u:"../developing_with_spryker/migration_guides/mg_availability.html",a:"Upgrading from Version 5.* to Version 6.* \n         In Availability module version 6 we have added support for multi-store. Administrtion Interface has undergone some changes to allow selecting stores and update database tables to store relations to store. To upgrade, first you need to run database ...",t:"Migration Guide - Availability"},"243":{i:0.00356999316991845,u:"../developing_with_spryker/migration_guides/mg_calculation.html",a:"Upgrading from Version 3.* to Version 4.* To upgrade from 3* to 4*, composer update your calculator to version 4. Updating Calculator Stacks In the new version there are two new calculator stacks, getQuoteCalculatorPluginStack and getOrderCalculatorPluginStack. They are both defined in ...",t:"Migration Guide - Calculation"},"244":{i:0.00459966004653221,u:"../developing_with_spryker/migration_guides/mg_cart.html",a:"Upgrading from Version 4.* to Version 5.* With the implementation of the quote storage strategies, the new version of the Cart module allows to use different behaviors for different strategies. Since QuoteClient::getStorageStrategy method is used now, the Quote module\u0027s version must be 2.0.0 or ...",t:"Migration Guide - Cart"},"245":{i:0.000502733727205929,u:"../developing_with_spryker/migration_guides/mg_catalog.html",a:"Upgrading from Version 3.* to Version 4.*\n Due to introducing the Suggestion Search feature, the Catalog bundle now requires Search \u003e=5.2.\n\n To upgrade from 3.* to 4.*:\n\n Before upgrading to the new version, make sure that you do not use any deprecated code from version 3.*. Check the description of ...",t:"Migration Guide - Catalog"},"246":{i:0.00142284862749941,u:"../developing_with_spryker/migration_guides/mg_category.html",a:"Upgrading from Version 3.* to Version 4.* Install new module Resolve deprecations Database migration Data migration 1. Install new module Install new module by adding the following into your composer.json \"spryker/category\": \"^4.0.0\" and running composer update. 2. Resolve deprecations \n    Before ...",t:"Migration Guide - Category"},"247":{i:0.000534377631329596,u:"../developing_with_spryker/migration_guides/mg_checkout.html",a:"Upgrading from Version 3.* to Version 4.* \n            If you extended \\Spryker\\Zed\\Checkout\\Dependency\\Plugin\\CheckoutPreConditionInterface: find those\n            plugins and make sure they return boolean. Important: you can return true even if a plugin adds errors\n            to the checkout ...",t:"Migration Guide - Checkout"},"248":{i:0.00222741576800321,u:"../developing_with_spryker/migration_guides/mg_cms.html",a:"Upgrading from Version 4.* to Version 5.* CMS version 5.0 is responsible only for CMS pages and page versioning. CMS Block functionality became more flexible and moved to  CmsBlock module . If you used CMS Blocks before, you need to migrate your data to the new structure.\n    If you did not use CMS ...",t:"Migration Guide - CMS"},"249":{i:0.00674880183466408,u:"../developing_with_spryker/migration_guides/mg_cms_block.html",a:"Migration Guide - CMS Block Upgrading from Version 1.* to Version 2.* This version allows to save CMS Block-Store relation. Update spryker/cms-block module to at least Version 2.0.0. \n                Update your spryker/cms-block-collector module to at least Version 2.0.0.\n                You can ...",t:"Migration Guide - CMS Collector"},"250":{i:0.00657680476162205,u:"../developing_with_spryker/migration_guides/mg_cms_block_gui.html",a:"Upgrading from Version 1.* to Version 2.* This version adds support to manage CMS Block-store relation through the dedicated CMS Block Administration Intrerface. Installl/update spryker/cms-block to at least Version 2.0.0. You can find additional guide to migration  here . Upgrade ...",t:"Migration Guide - CMS Block GUI"},"251":{i:0.0051990673583328,u:"../developing_with_spryker/migration_guides/mg_cms_block_collector.html",a:"Migration Guide - CMS Block Collector Upgrading from Version 1.* to Version 2.* This version provides support for multi-store CMS Block handling. Update spryker/cms-block-collector module to at least Version 2.0.0. Update spryker/collector module to at least Version 6.0.0. You can find additional ...",t:"Migration Guide - CMS Collector"},"252":{i:0.00325911676681282,u:"../developing_with_spryker/migration_guides/mg_cms_block_category_connector.html",a:"Upgrading from Version 1.* to Version 2.* Due to introducing the CMS Block positioning and CMS Block templates for Category, the CMS Block Category Connector module now requires Category \u003e=4.0. The migration will contain the following steps: New module installation Deprecations migration Database ...",t:"Migration Guide - CMS Block Category Connector"},"253":{i:0.00252164267433139,u:"../developing_with_spryker/migration_guides/mg_cms_block_category_connector_console.html",a:"Click here to expand CMS Block Category Connector Migration script \n\u003c?php\n\n/**\n * Copyright © 2016-present Spryker Systems GmbH. All rights reserved.\n * Use of this software requires acceptance of the Evaluation License Agreement. See LICENSE file.\n */\n\nnamespace ...",t:"Migration Guide - CMS Block Category Connector Migration Console"},"254":{i:0.00194640472379265,u:"../developing_with_spryker/migration_guides/mg_cms_collector.html",a:"Upgrading from Version 1.* to Version 2.* Upgrade spryker/cms module to at least 6.2 version. Check out the  CMS migration guide  for additional help. Upgrade spryker/cms-content-widget module to at least 1.1 version if you use CmsPageCollectorParameterMapExpanderPlugin plugin. CMS page data ...",t:"Migration Guide - CMS Collector"},"255":{i:0.000528793412954831,u:"../developing_with_spryker/migration_guides/mg_console.html",a:"Upgrading from Version 3.* to Version 4.* \n            Console version 4 has been prepared for a standalone usage. Now you are able to use Console module\n            even without a DB configuration.\n         \n            Find or create ConsoleDependencyProvider in a project. Make sure it extends ...",t:"Migration Guide - Console"},"256":{i:0.0036624325607877,u:"../developing_with_spryker/migration_guides/mg_collector.html",a:"Upgrading from Version 5.* to Version 6.* The general concept of collectors, and collector queries are enhanced to support multi-store. The following classes were altered to support the multi-store concept: AbstractCollector AbstractDatabaseCollector AbstractPdoCollector AbstractPropelCollector ...",t:"Migration Guide - Collector"},"257":{i:0.00537193781977406,u:"../developing_with_spryker/migration_guides/mg_currency.html",a:"Upgrading from Version 2.* to Version 3.* \n            With the Currency module version 3 we have added  sp_currency database table to persist currencies in ZED.\n            Run the following SQL request:\n\n             \n                CREATE SEQUENCE \"spy_currency_pk_seq\";\n\n                CREATE ...",t:"Migration Guide - Currency"},"258":{i:0.00117269887784238,u:"../developing_with_spryker/migration_guides/mg_customer.html",a:"  Upgrading from version 6.* to version 7.0 Case insensitivity for queries containing filterByEmail conditions will be out of the box for the Customer module.\n 1. Regenerate Propel Models \n                    To apply the fix, you need to regenerate Propel models. During this migration table schemas ...",t:"Migration Guide - Customer"},"259":{i:0.00272538277910505,u:"../developing_with_spryker/migration_guides/mg_discount.html",a:"Upgrading from Version 5.* to Version 6.* Update/install spryker/discount to at least 6.0.0 version. Run vendor/bin/console transfer:generate to generate the new transfer objects. Install the new database tables by running vendor/bin/console propel:diff. Propel should generate a migration file with ...",t:"Migration Guide - Discount"},"260":{i:0.000602714062038207,u:"../developing_with_spryker/migration_guides/mg_discount_calculator_connector.html",a:"Upgrading from version 4.* to version 5.* This module no longer has any calculator plugins, except the DiscountCalculatorPlugin. All other plugins were moved to the separate repository in spryker/calculation-migration. To learn how to migrate to the new structure see,  Upgrading from Version 3.* to ...",t:"Migration Guide - DiscountCalculatorConnector"},"261":{i:0.00058811839725968,u:"../developing_with_spryker/migration_guides/mg_discount_sales_aggregator_connector.html",a:"Upgrading from version 2.* to version 3.*\n The tax plugins are using the version 3.* of the Tax module. You need to upgrade the  Tax  module.   See also: Learn how to migrate Discount Learn how to migrate DiscountCalculatorConnector Get a general idea about Discount Learn how to apply a discount ...",t:"Migration Guide - DiscountSalesAggregatorConnector"},"262":{i:0.000502733727205929,u:"../developing_with_spryker/migration_guides/mg_environment_config.html",a:"The environment configuration was restructured to solve a couple of inconsistencies and dependencies within the configuration itself. To untangle some of the configuration options it was necessary to introduce a few new configuration constants. Although the Spryker core should be fully backward ...",t:"Migration Guide - Environment Configuration"},"263":{i:0.00588685735192675,u:"../developing_with_spryker/migration_guides/mg_multi_currency.html",a:"Migration Guide - Multi-Currency Migrating System to Multi-Currency \n          This article provides a whole overview of what needs to be done to have the multi-currency feature running in your Spryker shop. The multi-currency feature affects many Spryker modules so we split it into smaller parts.\n  ...",t:"Migration Guide - Multi Currency"},"264":{i:0.00490779760525213,u:"../developing_with_spryker/migration_guides/mg_navigation.html",a:"Upgrading from Version 1.* to Version 2.* Version 2 adds validity date fields to navigation nodes to support NavigationGui module to control the temporal visibility of nodes. Update the Navigation module to at least  version 2.0.0 in your composer.json. Install the new database fields by running ...",t:"Migration Guide - Navigation Module"},"265":{i:0.00474429580200783,u:"../developing_with_spryker/migration_guides/mg_navigation_gui.html",a:"Upgrading from Version 1.* to Version 2.* In version 2, validity dates allow to preset date boundaries for each navigation node to control their own and their descendants visibility. Upgrade Navigation module to at least 2.0.0 version. Click  here  to learn how to migrate the Navigation module. ...",t:"Migration Guide - NavigationGui Module"},"266":{i:0.00286351754875378,u:"../developing_with_spryker/migration_guides/mg_oms.html",a:"Upgrading from Version 7.* to Version 8.* \n            With the new OMS version, detail lock logging has been introduced and execution bucket size decreased.\n In order to successfully migrate to the new OMS version, perform the following steps:  Migrate the DB:\n                 vendor/bin/console ...",t:"Migration Guide - OMS"},"267":{i:0.00112156377408658,u:"../developing_with_spryker/migration_guides/mg_payment.html",a:"Upgrading from Version 3.* to Version 4.*\n In the  Payment  module version 4 we have added new payment tables to store order payment related information. To enable the new version: Composer update spryker/payment to new version\n  Run vendor/bin/console transfer:generate to generate new transfer ...",t:"Migration Guide - Payment"},"268":{i:0.00536704744532873,u:"../developing_with_spryker/migration_guides/mg_price.html",a:"Upgrading from Version 4.* to Version 5.* \n            From version 5 we have changed price module responsibilities: previously it was responsible for handling product price related functionality.\n            This responsibility has now been moved to the new PriceProduct module which handles product ...",t:"Migration Guide - Price"},"269":{i:0.000841534272535795,u:"../developing_with_spryker/migration_guides/mg_price_cart_connector.html",a:"Upgrading from Version 3.* to Version 4.* \n            In version 4 we have added support for multi-currency. First of all make sure you  have migrated the Price module . \n\n            We have changed the way the default price type is assigned, it\u0027s not coming from the new price module, also the ...",t:"Migration Guide - Price Cart Connector"},"270":{i:0.0042825472624102,u:"../developing_with_spryker/migration_guides/mg_product.html",a:"Upgrading from Version 5.* to Version 6.* This version defines connection between abstract products and stores, allowing users to manage abstract product appearance per store. Update/install spryker/collector to at least 6.0.0 version. You can find additional help for feature migration  here . ...",t:"Migration Guide - Product"},"271":{i:0.0012793286684632,u:"../developing_with_spryker/migration_guides/mg_product_bundle.html",a:"Upgrading from Version 3.* to Version 4.* \n             In version 4 we have added support for multi-currency. First of all make sure you  migrated the Price module .              If you extended ProductBundleCartExpander, then you have to adapt some code because we changed how price is selected for ...",t:"Migration Guide - Product Bundle"},"272":{i:0.00104138826044074,u:"../developing_with_spryker/migration_guides/mg_product_label.html",a:"Upgrading from Version 1.* to Version 2.* The following list describes the Backward Compatibility breaking changes in this version and how to upgrade. Product Label Rendering \n            We\u0027ve changed spyProductLabels twig function to work based on a list of product label IDs.\n            It\u0027s ...",t:"Migration Guide - Product Label"},"273":{i:0.0013053883542121,u:"../developing_with_spryker/migration_guides/mg_product_label_gui.html",a:"Upgrading from Version 1.* to Version 2.* \n          In version 2 we have added multi-currency support.\n          First of all make sure you  migrated the Price module . \n          We have changed ZED tables to use PriceProductFacade instead of the database join to get price, because that requires ...",t:"Migration Guide - Product Label GUI"},});