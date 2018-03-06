define({"205":{i:0.00134267679149302,u:"../developing_with_spryker/module_guide/url/url_handling_new_entity.html",a:"The following information describes how to handle URLs for other types of entities that Spryker core provides. Prerequisites Before you begin, make sure the target entity is already in your database (the one to you would like to assign URLs to). In the examples below we\u0027ll call this entity ...",t:"Handling New Types of Entity URLs"},"206":{i:0.00134267679149302,u:"../developing_with_spryker/module_guide/url/url_redirects.html",a:"A URL redirect is a special entity that consists of a source URL (which is provided by the spy_url database table), a target URL and an HTTP status code (stored in spy_url_redirect database table). Redirects are exported to the key-value storage with collectors and are matched with StorageRouter ...",t:"URL Redirects"},"207":{i:0.000597363656639653,u:"../developing_with_spryker/module_guide/utilities/about_utilities.html",a:"The following modules are utilities.   Academy Navigation To navigate through content, click on an option from the right-hand table of contents or use the search (above).  You can also use navigation buttons on the top right corner of page:  Navigate previous button takes you the page preceding the ...",t:"About Utilities"},"208":{i:0.00177365653492128,u:"../developing_with_spryker/module_guide/utilities/currency.html",a:"\nThe Currency module provides an easy way to retrieve information about a currency given as an ISO code.\n The methods in the CurrencyFacade will always return an instance of the CurrencyTransfer. You can get any currency by its ISO code or the current configured currency.\n\n Usage\n CurrencyFacade ...",t:"Currency"},"209":{i:0.0041895526523156,u:"../developing_with_spryker/module_guide/utilities/install_tool.html",a:"Spryker offers an install tool which can be used to install the system as described in the install recipe file(s). Installation Install the module with composer by running the following command: \n        composer require spryker/install\n         After the installation you can run the command with ...",t:"Install Tool"},"210":{i:0.00157424994107221,u:"../developing_with_spryker/module_guide/utilities/logger.html",a:"Spryker contains a  PSR-3  compatible logger which can be customized to any needs. You can use the logger everywhere in the system, as in the example below: \u003c?php\n\nuse Spryker\\Shared\\Log\\LoggerTrait;\n\nclass MyClass\n{\n\n    use LoggerTrait;\n\n    public function myFunction()\n    {\n        // This will ...",t:"Logger"},"211":{i:0.00136619366164439,u:"../developing_with_spryker/module_guide/utilities/money.html",a:"Money Handling monetary values can be a problem and is often quite hard. The Money module makes it easier to work with monetary values. Spryker handles all monetary values as integer and provides conversions from decimal values to cent values and vice versa. The key feature of this module is to ...",t:"Money"},"212":{i:0.000597363656639653,u:"../developing_with_spryker/module_guide/yves_components/about_yves_components.html",a:"The following modules are used to establish Yves functionality. Academy Navigation To navigate through content, click on an option from the right-hand table of contents or use the search (above).  You can also use navigation buttons on the top right corner of page:  Navigate previous button takes ...",t:"About Yves Components"},"213":{i:0.00562854626199038,u:"../developing_with_spryker/module_guide/yves_components/navigation/navigation.html",a:"Overview The Navigation module manages multiple navigation menus that can be displayed on the frontend (Yves). Every navigation section can contain its own nested structure of navigation nodes. Navigation nodes have types that help define what kind of link they represent. The following node types ...",t:"Navigation"},"214":{i:0.00206069443879435,u:"../developing_with_spryker/module_guide/yves_components/search/search.html",a:"One of the most important features in an e-commerce application is to give the customer the ability to find the products that he needs. Depending on how easy it is to find the products the customer is searching for and how relevant the search results are, the search feature is a crucial aspect for ...",t:"Search"},"215":{i:0.0025756944829399,u:"../developing_with_spryker/module_guide/yves_components/search/search_collector_config.html",a:"In this section you’ll learn how to easily map collected data from the database to the default Elasticsearch page mapping type. If you need information about how collectors work in general, you can read more about it on the  Collector  documentation page. First, you need to implement ...",t:"Search Collector Configuration"},"216":{i:0.000889297643302881,u:"../developing_with_spryker/module_guide/yves_components/search/search_configure_elasticsearch.html",a:"Elasticsearch is a NoSQL data store which allows us to predefine the structure of the data we’ll be storing in it. Since the data structure we use is static, we would like to define it in advance. The definitions of the indexes and mapping types are written in JSON format, just as you’ll find it in ...",t:"Configure Elasticsearch"},"217":{i:0.00215737459716689,u:"../developing_with_spryker/module_guide/yves_components/search/search_configure_features.html",a:"In this section you’ll learn how to configure faceted navigation, filters, pagination and sorting, so all the important search features that are provided by the Search module. This configuration is only relevant if you enable the three query expanders and result formatters mentioned above. ...",t:"Configure Search Features"},"218":{i:0.000889297643302881,u:"../developing_with_spryker/module_guide/yves_components/search/search_filter.html",a:"In Zed there’s a section (Search and Filters -\u003e Filter Preferences) for managing the product attributes that you’d like to filter by in the shop. There are several filter types that the framework supports at the moment: single-select: filter for one value at a time (e.g. radio group), multi-select: ...",t:"Filter Preferences - Search"},"219":{i:0.000626762566128481,u:"../developing_with_spryker/module_guide/yves_components/search/search_multi_currency.html",a:"\n            If you don\u0027t have the multi-currency feature in you current project yet and want to migrate, you have to follow certain steps to migrate your system.\n\n            First  migrate Price  and  modules related to multi-currency  before proceeding with the search for multi-currency.\n\n        ...",t:"Multi-Currency - Search"},"220":{i:0.00198397816887856,u:"../developing_with_spryker/module_guide/yves_components/search/search_preferences.html",a:"In Zed there’s a section (Search and Filters -\u003e Search Preferences) for managing searchable product attributes. To be able to search after a product in the shop that has a specific attribute (e.g. color, size, etc.), you can click on “Add attribute to search” to create new, or “Edit” if it already ...",t:"Search Preferences"},"221":{i:0.00291173585376072,u:"../developing_with_spryker/module_guide/yves_components/search/search_query.html",a:"Once we have all necessary data in Elasticsearch, it’s time to display them in Yves. In order to achieve this, we first need to query Elasticsearch, which will return raw data for us that we need to  Process Query Result  to display it in our templates. In the SearchClient you can find the search() ...",t:"Search Query"},"222":{i:0.00179303811774239,u:"../developing_with_spryker/module_guide/yves_components/search/search_4_0.html",a:"The latest version of this module can be found in  Search  section One of the most important features in an e-commerce application is to give the customer the ability to find the specific products. Depending on how easy it is to find the products the customer is searching for and how relevant the ...",t:"Search 4.0"},"223":{i:0.000703199730799435,u:"../developing_with_spryker/module_guide/zed_api/zed_api.html",a:"The Spryker OS offers a flexible REST API for Zed. It maps basic REST functionality to the persistence layer of the Spryker backend.\n\n By default, the API accepts and returns JSON as format. But it can be extended to work with any format. As for JSON, the API specification is close to JSON API ...",t:"Zed API (BETA)"},"224":{i:0.000597363656639653,u:"../developing_with_spryker/module_guide/zed_api/zed_api_resources.html",a:"Each module can have a “{module}Api” module(e.g. CustomerApi for Customer). Such an API module exposes CRUD facade methods (find, get, add, update, remove) that can be mapped to a URL via REST resource/action resolution.\n\n The main Api module contains a dispatcher that delegates to those API module ...",t:"Zed API Resources"},"225":{i:0.000597363656639653,u:"../developing_with_spryker/module_guide/zed_api/zed_api_config.html",a:"First of all we need to decide on the resources being exposed. Those will be mapped inside the ApiDependencyProvider:\n\n \u003c?php\nuse Spryker\\Zed\\CustomerApi\\Communication\\Plugin\\Api\\CustomerApiResourcePlugin;\nuse Spryker\\Zed\\ProductApi\\Communication\\Plugin\\Api\\ProductApiResourcePlugin;\n\n    /**\n     * ...",t:"Zed API Configuration"},"226":{i:0.000597363656639653,u:"../developing_with_spryker/module_guide/zed_api/zed_api_processor_stack.html",a:"Request and pre processing\n We now need to decide further on the URL format. Should this be extension driven, which is easier to browse, or HTTP header driven, for example? What kind of URL query string transformation do we need, what kind of header parsing is required?\n\n In order to keep this ...",t:"Processor Stack - Zed API"},"227":{i:0.000597363656639653,u:"../developing_with_spryker/module_guide/zed_api/zed_api_crud_function.html",a:"Filtering\n For find action we return a paginated collection that can be limited and customized based on query string input or headers. So using the provided FilterPreProcessors one can enable filtering (conditions), sorting (and multi-sorting) and pagination.\n\n Condition filtering\n For the filtering ...",t:"CRUD Functionality - Zed API"},"228":{i:0.000597363656639653,u:"../developing_with_spryker/module_guide/zed_api/zed_api_additional_function.html",a:"Meta information\n Links as part of the meta information will be part of the response on the same level as the data: {\n    \"data\": ...,\n    \"links\": [\n        \"self\" =\u003e ...                         \n        ...\n    ],\n    ...\n}\n “self” URIs are included, for example for adding an item.\n\n",t:"Additional Functionality - Zed API"},"229":{i:0.000597363656639653,u:"../developing_with_spryker/module_guide/zed_api/zed_api_project_implementation.html",a:"For the API and the API bundles to get activated we need to configure our own service provider stack in the Zed ApplicationDependencyProvider class:\n\n \u003c?php\n    /**\n     * @param \\Spryker\\Zed\\Kernel\\Container $container\n     *\n     * @return \\Silex\\ServiceProviderInterface[]\n     */\n    protected ...",t:"Project Implementation - Zed API"},"230":{i:0.000597363656639653,u:"../developing_with_spryker/module_guide/zed_api/zed_api_appendix.html",a:"API Documentation\n We will soon provide an extensive documentation on the API resource URIs available and a tool to parse those to a standard.\n\n Logging\n By default all incoming requests and outgoing responses will be logged as “info” level.\n\n Security recommendations\n Secure the API with a token ...",t:"Appendix - Zed API"},"231":{i:0.000861953842039108,u:"../developing_with_spryker/module_guide/data_feed.html",a:"BETA version\n This module is still in development. For questions and inquiries please contact  academy@spryker.com DataFeed modules help to query abstract products, categories, prices, availability data and related information for exporting or processing. The data Feed is not dependent on ...",t:"Data Feed Modules"},"232":{i:0.00398205462312337,u:"../developing_with_spryker/module_guide/flysystem.html",a:"The Flysystem moduleintegrates Spryker with the  thephpleague/flysystem  vendor package. It handles operations, flysystem adapter configuration and provides a FlysystemFilesystemBuilderPluginInterface, where the build() method is expected to return a concrete implementation of the ...",t:"Flysystem"},"233":{i:0.000612384923843558,u:"../developing_with_spryker/module_guide/user_rights_management.html",a:"User and rights management is a general term that describes the security functionality for controlling user access to perform various roles throughout the system. In the Spryker Commerce OS user and rights management is implemented in the following three bundles: ACL - ACL stands for Access Control ...",t:"User and Rights Management"},"234":{i:0.00103682878096016,u:"../developing_with_spryker/migration_guides/migration_guides.html",a:"Migration Guides are simple instructions to guide you through the process of upgrading a module to a newer version.    Academy Navigation To navigate through content, click on an option from the right-hand table of contents or use the search (above).  You can also use navigation buttons on the top ...",t:"Migration Guides"},"235":{i:0.00203867468548424,u:"../developing_with_spryker/migration_guides/mg_availability.html",a:"Upgrading From Version 5.* To Version 6.* \n         In Availability module version 6 we have added support for multi-store. Administrtion Interface has undergone some changes to allow selecting stores and update database tables to store relations to store. To upgrade, first you need to run database ...",t:"Migration Guide - Availability"},"236":{i:0.0053154891940961,u:"../developing_with_spryker/migration_guides/mg_calculation.html",a:"Upgrading from Version 3.* to Version 4.* To upgrade from 3* to 4*, composer update your calculator to version 4. Updating Calculator Stacks In the new version there are two new calculator stacks, getQuoteCalculatorPluginStack and getOrderCalculatorPluginStack. They are both defined in ...",t:"Migration Guide - Calculation"},"237":{i:0.000597363656639653,u:"../developing_with_spryker/migration_guides/mg_catalog.html",a:"Upgrading from version 3.* to version 4.*\n Due to introducing the Suggestion Search feature, the Catalog module now requires Search \u003e=5.2.\n\n To Upgrade from 3.* to 4.*:\n\n Before upgrading to the new version, make sure that you do not use any deprecated code from version 3.*. Check the description of ...",t:"Migration Guide - Catalog"},"238":{i:0.00398205462312337,u:"../developing_with_spryker/migration_guides/mg_category.html",a:"Upgrading from version 3.* to version 4.* Install new module Resolve deprecations Database migration Data migration 1. Install new module Install new module by adding the following into your composer.json \"spryker/category\": \"^4.0.0\" and running composer update. 2. Resolve deprecations \n    Before ...",t:"Migration Guide - Category"},"239":{i:0.000597363656639653,u:"../developing_with_spryker/migration_guides/mg_category_template_console.html",a:"\n\n\u003c?php\n\n/**\n * Copyright © 2016-present Spryker Systems GmbH. All rights reserved.\n * Use of this software requires acceptance of the Evaluation License Agreement. See LICENSE file.\n */\n\nnamespace Pyz\\Zed\\Category\\Communication\\Console;\n\nuse Exception;\nuse ...",t:"Migration Guide - Category Template Migration Console"},"240":{i:0.000635162254553861,u:"../developing_with_spryker/migration_guides/mg_checkout.html",a:"Upgrading From Version 3.* To Version 4.* \n            If you extended \\Spryker\\Zed\\Checkout\\Dependency\\Plugin\\CheckoutPreConditionInterface: find those\n            plugins and make sure they return bool. Important: you can return true even if a plugin adds errors\n            to the checkout ...",t:"Migration Guide - Checkout"},"241":{i:0.0034281089134611,u:"../developing_with_spryker/migration_guides/mg_cms.html",a:"Upgrading from Version 4.* to Version 5.* Cms version 5.0 is responsible only for CMS pages and page versioning. CMS Block functionality became more flexible and moved to  CmsBlock module . If you used CMS Blocks before, you need to migrate your data to the new structure.\n    If you did not use CMS ...",t:"Migration Guide - CMS"},"242":{i:0.0048110258133789,u:"../developing_with_spryker/migration_guides/mg_cms_block.html",a:"Migration Guide - CMS Block Upgrading From Version 1.* to Version 2.* This version allows to save CMS Block-Store relation. Update spryker/cms-block module to at least Version 2.0.0. \n                Update your spryker/cms-block-collector module to at least Version 2.0.0.\n                You can ...",t:"Migration Guide - CMS Collector"},"243":{i:0.00501386968662647,u:"../developing_with_spryker/migration_guides/mg_cms_block_gui.html",a:"Upgrading From Version 1.* To Version 2.* This version adds support to manage CMS Block-store relation through the dedicated CMS Block Administration Intrerface. Installl/update spryker/cms-block to at least Version 2.0.0. You can find additional guide to migration  here . Upgrade ...",t:"Migration Guide - CMS Block GUI"},"244":{i:0.00392988991125487,u:"../developing_with_spryker/migration_guides/mg_cms_block_collector.html",a:"Migration Guide - CMS Block Collector Upgrading From Version 1.* To Version 2.* This version provides support for multi-store CMS Block handling. Update spryker/cms-block-collector module to at least Version 2.0.0. Update spryker/collector module to at least Version 6.0.0. You can find additional ...",t:"Migration Guide - CMS Collector"},"245":{i:0.00116778347444468,u:"../developing_with_spryker/migration_guides/mg_cms_block_category_connector.html",a:"Upgrading from Version 1.* to Version 2.* Due to introducing the CMS Block positioning and CMS Block templates for Category, the CMS Block Category Connector module now requires Category \u003e=4.0. The migration will contain the following steps: New module installation Deprecations migration Database ...",t:"Migration Guide - CMS Block Category Connector"},"246":{i:0.00186132982238274,u:"../developing_with_spryker/migration_guides/mg_cms_block_category_connector_console.html",a:"\n\u003c?php\n\n/**\n * Copyright © 2016-present Spryker Systems GmbH. All rights reserved.\n * Use of this software requires acceptance of the Evaluation License Agreement. See LICENSE file.\n */\n\nnamespace Pyz\\Zed\\CmsBlockCategoryConnector\\Communication\\Console;\n\nuse Exception;\nuse ...",t:"Migration Guide - CMS Block Category Connector Migration Console"},"247":{i:0.00185302489866899,u:"../developing_with_spryker/migration_guides/mg_cms_collector.html",a:"Upgrading From Version 1.* to Version 2.* Upgrade spryker/cms module to at least 6.2 version. Check out the  CMS migration guide  for additional help. Upgrade spryker/cms-content-widget module to at least 1.1 version if you use CmsPageCollectorParameterMapExpanderPlugin plugin. CMS page data ...",t:"Migration Guide - CMS Collector"},"248":{i:0.000628491913745471,u:"../developing_with_spryker/migration_guides/mg_console.html",a:"Upgrading From Version 3.* To Version 4.* \n            Console version 4 has been prepared for a standalone usage. Now you are able to use Console module\n            even without a DB configuration.\n         \n            Find or create ConsoleDependencyProvider in a project. Make sure it extends ...",t:"Migration Guide - Console"},"249":{i:0.00278335820572381,u:"../developing_with_spryker/migration_guides/mg_collector.html",a:"Upgrading From Version 5.* To Version 6.* The general concept of collectors, and collector queries are enhanced to support multi-store. The following classes were altered to support the multi-store concept: AbstractCollector AbstractDatabaseCollector AbstractPdoCollector AbstractPropelCollector ...",t:"Migration Guide - Collector"},"250":{i:0.00290721558825106,u:"../developing_with_spryker/migration_guides/mg_currency.html",a:"Upgrading From Version 2.* to Version 3.* \n            With the Currency module version 3 we have added  sp_currency database table to persist currencies in ZED.\n            Run the following SQL request:\n\n             \n                CREATE SEQUENCE \"spy_currency_pk_seq\";\n\n                CREATE ...",t:"Migration Guide - Currency"},"251":{i:0.000761900860535091,u:"../developing_with_spryker/migration_guides/mg_customer.html",a:"  Upgrading from version 6.* to version 7.0 Case insensitivity for queries containing filterByEmail conditions will be out of the box for the Customer module.\n 1. Regenerate Propel Models \n                    To apply the fix, you need to regenerate Propel models. During this migration table schemas ...",t:"Migration Guide - Customer"},"252":{i:0.00285632299060294,u:"../developing_with_spryker/migration_guides/mg_discount.html",a:"Upgrading From Version 5.* To Version 6.* Update/install spryker/discount to at least 6.0.0 version. Run vendor/bin/console transfer:generate to generate the new transfer objects. Install the new database tables by running vendor/bin/console propel:diff. Propel should generate a migration file with ...",t:"Migration Guide - Discount"},"253":{i:0.000597363656639653,u:"../developing_with_spryker/migration_guides/mg_discount_calculator_connector.html",a:"Upgrading from version 4.* to version 5.* This module no longer has any calculator plugins, except the DiscountCalculatorPlugin. All other plugins were moved to separate repository in spryker/calculation-migration. To learn how to migrate to new structure see,  Upgrading from Version 3.* to Version ...",t:"Migration Guide - DiscountCalculatorConnector"},"254":{i:0.000597363656639653,u:"../developing_with_spryker/migration_guides/mg_discount_sales_aggregator_connector.html",a:"Migration Guide - DiscountSalesAggregatorConnector Upgrading from version 2.* to version 3.*\n The tax plugins are using the version 3.* of the Tax module. You need to upgrade the  Tax  module.",t:"Migration Guide - DiscountSalesAggregatorConnector"},"255":{i:0.000597363656639653,u:"../developing_with_spryker/migration_guides/mg_environment_config.html",a:"The environment configuration was restructured to solve a couple of inconsistencies and dependencies within the configuration itself. To untangle some of configuration options it was necessary to introduce a few new configuration constants. Although the Spryker core should be fully backward ...",t:"Migration Guide - Environment Configuration"},"256":{i:0.00837953607697166,u:"../developing_with_spryker/migration_guides/mg_multi_currency.html",a:"Migration Guide - Multi-Currency Migrating System To Multi-Currency \n          This article provides a whole overview of what needs to be done to have the multi-currency feature running in your Spryker shop. The multi-currency feature affects many Spryker modules so we split it into smaller parts.\n  ...",t:"Migration Guide - Multi Currency"},"257":{i:0.00642590921719309,u:"../developing_with_spryker/migration_guides/mg_navigation.html",a:"Upgrading from Version 1.* to Version 2.* Version 2 adds validity date fields to navigation nodes to support NavigationGui module to control the temporal visibility of nodes. Update the Navigation module to at least  version 2.0.0 in your composer.json. Install the new database fields by running ...",t:"Migration Guide - Navigation Module"},"258":{i:0.00817599774819083,u:"../developing_with_spryker/migration_guides/mg_navigation_gui.html",a:"Upgrading from Version 1.* to Version 2.* In version 2, validity dates allow to preset date boundaries for each navigation node to control their own and their descendants visibility. Upgrade Navigation module to at least 2.0.0 version. Click  here  to learn how to migrate the Navigation module. ...",t:"Migration Guide - NavigationGui Module"},"259":{i:0.00319820489479146,u:"../developing_with_spryker/migration_guides/mg_oms.html",a:"Upgrading From Version 7.* To Version 8.* \n             In OMS module version 8 we have added support for stock reservations per store. We have added a few more database tables as well as a new column to spy_oms_reservation table.\n\n              First run the database migrations:\n              \n     ...",t:"Migration Guide - OMS"},"260":{i:0.00133268205163271,u:"../developing_with_spryker/migration_guides/mg_payment.html",a:"Upgrading from version 3.* to version 4.*\n In the  Payment  module version 4 we added new payment tables to store order payment related information. To enable the new version: Composer update spryker/payment to new version\n  Run vendor/bin/console transfer:generate to generate new transfer objects\n ...",t:"Migration Guide - Payment"},"261":{i:0.00827148028612806,u:"../developing_with_spryker/migration_guides/mg_price.html",a:"Upgrading From Version 4.* To Version 5.* \n            From version 5 we have changed price module responsibilities: previously it was responsible for handling product price related functionality.\n            This responsibility has now been moved to the new PriceProduct module which handles product ...",t:"Migration Guide - Price"},"262":{i:0.0010719302447048,u:"../developing_with_spryker/migration_guides/mg_price_cart_connector.html",a:"Upgrading From Version 3.* To Version 4.* \n            In version 4 we have added support for multicurrency. First of all make sure you  migrated the Price module . \n\n            We have changed the way the default price type is assigned, it\u0027s not coming from the new price module, also price will be ...",t:"Migration Guide - Price Cart Connector"},"263":{i:0.00257393687711261,u:"../developing_with_spryker/migration_guides/mg_product.html",a:"Upgrading From Version 5.* To Version 6.* This version defines connection between abstract products and stores, allowing users to manage abstract product appearance per store. Update/install spryker/collector to at least 6.0.0 version. You can find additional help for feature migration  here . ...",t:"Migration Guide - Product"},"264":{i:0.00104253133521597,u:"../developing_with_spryker/migration_guides/mg_product_bundle.html",a:"Upgrading From Version 3.* To Version 4.* \n             In version 4 we have added support for multicurrency. First of all make sure you  migrated the Price module .              If you extended ProductBundleCartExpander, then you have to adapt some code because we changed how price is selected for ...",t:"Migration Guide - Product Bundle"},"265":{i:0.000597363656639653,u:"../developing_with_spryker/migration_guides/mg_product_label.html",a:"Upgrading from version 1.* to version 2.* The following list describes the Backward Compatibility breaking changes in this version and how to upgrade. Product label rendering \n            We\u0027ve changed spyProductLabels twig function to work based on a list of product label IDs.\n            It\u0027s ...",t:"Migration Guide - Product Label"},"266":{i:0.0010719302447048,u:"../developing_with_spryker/migration_guides/mg_product_label_gui.html",a:"Upgrading From Version 1.* To Version 2.* \n          In version 2 we have added multicurrency support.\n          First of all make sure you  migrated the Price module . \n          We have changed ZED tables to use PriceProductFacade instead of the database join to get price, because that requires ...",t:"Migration Guide - Product Label Gui"},"267":{i:0.00282501324457581,u:"../developing_with_spryker/migration_guides/mg_product_management.html",a:"Upgrading From Version 0.9.* To Version 0.10.* The new version provides support to manage \"abstract product-store\" relations per store. Update/install spryker/product to at least 6.0.0 version. You can find additional help for feature migration  here . Update/install spryker/productmanagement to at ...",t:"Migration Guide - ProductManagement"},"268":{i:0.00368723749061653,u:"../developing_with_spryker/migration_guides/mg_product_option.html",a:"Upgrading From Version 5.* To Version 6.* Update spryker/product-option to at least version 6.0.0. Install/Update spryker/currency to at least version 3.0.0. You can find additional information to currency module upgrade:  here . Install/Update spryker/price to at least version 5.0.0. Update ...",t:"Migration Guide - Product Option"},"269":{i:0.00256660579838285,u:"../developing_with_spryker/migration_guides/mg_product_option_cart_connector.html",a:"Upgrading From Version 4.* To Version 5.* Update spryker/product-option to at least version 6.0.0. You can find additional information to product option module upgrade:  here . Install/Update spryker/price to at least version 5.0.0.  Update spryker/product-option-cart-connector to version 5.0.0. \n   ...",t:"Migration Guide - Product Option Cart Connector"},"270":{i:0.000597363656639653,u:"../developing_with_spryker/migration_guides/mg_product_option_discount_connector.html",a:"Migration Guide - ProductOptionDiscountConnector Upgrading from version 2.* to version 3.* The tax plugins are using the version 3.* of the Tax module. Upgrade  Migration Guide - Tax .",t:"Migration Guide - ProductOptionDiscountConnector"},"271":{i:0.000597363656639653,u:"../developing_with_spryker/migration_guides/mg_product_option_exporter.html",a:"Migration Guide - ProductOptionExporter Upgrading from version 2.* to version 3.* The ProductOptionExporter module does not provide the tax functionality anymore. Upgrade  Migration Guide - Tax .",t:"Migration Guide - ProductOptionExporter"},"272":{i:0.0010719302447048,u:"../developing_with_spryker/migration_guides/mg_product_relation.html",a:"Upgrading From Version 1.* To Version 2.* \n          In version 2 we have added multicurrency support.\n          First of all make sure you  migrated the Price module . We have changed Zed table to use PriceProductFacade for retrieving product prices. We have also changed ...",t:"Migration Guide - Product Relation"},});