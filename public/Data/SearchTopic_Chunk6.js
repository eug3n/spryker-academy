define({"406":{i:0.000475479452482734,u:"../developing_with_spryker/development_concepts/search_design/personalization_dymanic_pricing.html",a:"Especially in businesses with a B2B focus, customers expect to get discounts after they have been using the service/website for a longer period of time. The search infrastructure should be able to handle such use cases and customers should be able to see their own discounted prices while browsing ...",t:"Personalization: Dynamic Pricing"},"407":{i:0.000475479452482734,u:"../developing_with_spryker/development_concepts/search_design/simple_spelling_suggestions.html",a:"Spelling suggestions provide the users with alternative search terms when the search query does not return any results:\n Translation: Unfortunately there were 0 results for your exact search term “hammer holk”. Did you possibly mean hammer holz? This is one of the simplest features you can build ...",t:"Simple Spelling Suggestions"},"408":{i:0.000475479452482734,u:"../developing_with_spryker/development_concepts/search_design/usage_driven_schema_structure.html",a:"Both the schema and the query generator should not need to know that there is such a thing as as the weight of a hammer. We will argue for a document structure and schema design that is not built around the original data but around the usage of attributes in search operations.\n\n At Contorion, this ...",t:"Usage-Driven Schema \u0026 Document Structure"},"409":{i:0.000905353431152388,u:"../developing_with_spryker/development_concepts/state_machine_cookbook/state_machine_cookbook.html",a:"State machines are a model of computation used to automate processes. In Spryker you can use the OMS module to automate the management of orders or the StateMachine module to automate other processes you define in your shop. Both behave similar, but the OMS one is a customized solution to manage the ...",t:"State Machine Cookbook - Part I - State Machine Fundamentals"},"410":{i:0.00185561173098008,u:"../developing_with_spryker/development_concepts/state_machine_cookbook/state_machine_cookbook_2.html",a:"\nThis chapter will help you model a state machine using Spryker to manage your sale orders.\n First of all, it’s important to know which tasks must be executed after an order is submitted and in which order. Keep in mind that you can define more than one state machine in your system to cover the use ...",t:"State Machine Cookbook - Part 2 -Building a State Machine"},"411":{i:0.000493051838866149,u:"../developing_with_spryker/guidelines/developer_guidelines.html",a:"The developer Guidelines section is a collection of best practices and guidelines for developers.    Academy Navigation To navigate through content, click on an option from the right-hand table of contents or use the search (above).  You can also use navigation buttons on the top right corner of ...",t:"Developer Guidelines"},"412":{i:0.000475479452482734,u:"../developing_with_spryker/guidelines/code_architecture_guide.html",a:"We use our  Architecture Sniffer Tool  to assert a certain quality of Spryker architecture for both core and project.\n Running the Tool The sniffer can find a lot of violations and will report them: $ vendor/bin/console code:sniff:architecture\n\n// Sniff a specific subfolder of your project - with ...",t:"Code Architecture Guide"},"413":{i:0.000505408380553614,u:"../developing_with_spryker/guidelines/coding_best_practices.html",a:"\n            In this article we outline a few common PHP coding problems and the recommended solutions.\n         Merging Arrays \n            When merging arrays, one usually uses array_merge($defaults, $options).\n            However, when working with associative arrays (keys are all string ...",t:"Coding Best Practices"},"414":{i:0.000475479452482734,u:"../developing_with_spryker/guidelines/code_style_guide.html",a:"We follow the  PSR-2 standards . To achieve a styled codebase, we integrated the well known  PHP-CS Fixer  and  PHPCodeSniffer .\n Code Sniffer and Fixer \nWe use a very powerful tool to help keeping the code clean and preventing simple mistakes. Automate Code Style Correction The sniffer can find all ...",t:"Code Style Guide"},"415":{i:0.000492937993857414,u:"../developing_with_spryker/guidelines/guidelines_for_new_gdpr_rules.html",a:"As of May, the 25th 2018 the new General Data Protection Regulations (GDPR) will take effect. This information describes the ways that the Spryker Commerce OS supports regulatory compliance with the GDPR. GDPR contains rules relating to the protection and control of personal data.  For more ...",t:"Guidelines for New GDPR Rules"},"416":{i:0.000879644339301267,u:"../developing_with_spryker/guidelines/secure_coding_practices.html",a:"Unsafe coding practices can make the software application vulnerable to theft of sensitive data.\n\nIn this article, we’ll present a series of coding practices that we recommend using when developing an e-commerce application using Spryker Commerce OS, that will keep your software solution secured.\n\n ...",t:"Secure Coding Practices"},"417":{i:0.00051198703562056,u:"../developing_with_spryker/guidelines/testing_concepts.html",a:"Testing your project is one of the best ways to ensure that your software functions as it is supposed to. The role of testing is to find bugs during the early stages of development to minimize risks. QA is the process of assuring quality, not just verifying you will not get an error on some page. ...",t:"Testing Concepts"},"418":{i:0.000493051838866149,u:"../developing_with_spryker/resources_and_developer_tools/about_resources.html",a:"This section contains general information and resources for developers. The topics covered in resources are general topics that do not pertain to a specific component or capability.   Academy Navigation To navigate through content, click on an option from the right-hand table of contents or use the ...",t:"About Resources"},"419":{i:0.000684737716844168,u:"../developing_with_spryker/resources_and_developer_tools/code_generator.html",a:"The CodeGenerator module can generate your project code.  Out of the box it provides generators for Yves, Zed, Client, Service and Shared application layers.\n\n This is a pre-release.\n Installation\n Install it as\n\n composer require --dev spryker/code-generator You need to run vendor/bin/console ...",t:"Code Generator"},"420":{i:0.00120831782519357,u:"../developing_with_spryker/resources_and_developer_tools/configuration_management.html",a:"Default and Local Configuration Files\n Under config/Shared you’ll find several files that are used for the system’s configuration, that can be used by both Yves and Zed.\n The files are merged in a fixed order if they exist. So the entries of config_default.php are overwritten by the entries in ...",t:"Configuration Management"},"421":{i:0.00510042032492105,u:"../developing_with_spryker/resources_and_developer_tools/console_commands.html",a:"We provide an integrated mechanism to add command line calls. Technically this is based on Symfony’s Console Component.\n\t\t \n\t\t\tGet a list of all available commands\n\t\t You can see the list of all of the commands by running: vendor/bin/console. vagrant@spryker-vagrant ➜  current git:(develop) ✗ ...",t:"Console Commands"},"422":{i:0.000475479452482734,u:"../developing_with_spryker/resources_and_developer_tools/container_globals.html",a:"The ContainerGlobals is a way to inject dependencies which are available inside your  Factories . Every dependency added to the ContainerGlobals is available by using getProvidedDependency() in your factory.\n \nTo add something globally you need to create a service provider and add it to the ...",t:"Container Globals"},"423":{i:0.000475479452482734,u:"../developing_with_spryker/resources_and_developer_tools/core_extension.html",a:"We offer several ways like plugins to hook into the core’s behavior and extend this without modifications. But sometimes this is not enough, so you need to replace a method which is deep in the core.\n\n Before your proceed, double check if there is no other way to solve your requirement, maybe there ...",t:"Core Extension"},"424":{i:0.00207632126295978,u:"../developing_with_spryker/resources_and_developer_tools/cronjob_scheduling.html",a:"We use  Jenkins  for cronjob scheduling. Compared to Crontab, there are several benefits: Jobs are queued and can be manually executed Job definitions are under version control and can be changed by any developer Console output available for debugging Add a new job and run it Jobs are defined in ...",t:"Cronjob Scheduling"},"425":{i:0.000475479452482734,u:"../developing_with_spryker/resources_and_developer_tools/dependency_injector.html",a:"The  Dependency Provider  defines which “external dependencies” you need to retrieve(e.g. a facade of another module).\n \nThe DependencyInjector is the opposite of it. This class will push dependencies into another module without the need to touch the module where it injects to ( OCP ).\n\n For ...",t:"Dependency Injector"},"426":{i:0.00107832892056014,u:"../developing_with_spryker/resources_and_developer_tools/dependency_provider.html",a:"Each modules ships with a DependencyProvider class which explicitly defines services and external dependencies to other modules. For instance when the Cms module requires the Glossary module this needs to be configured here. The DependencyProvider defines dependencies for each layer. Usually you ...",t:"Dependency Provider"},"427":{i:0.00320832696557271,u:"../developing_with_spryker/resources_and_developer_tools/factory.html",a:"All modules are shipped with a dedicated factory for each layer. The responsibility of the factory is to create new instances of the classes from the same layer and module.\n\n The following example shows a typical method from a factory. The method createKeyBuilder() creates an instance which is then ...",t:"Factory"},"428":{i:0.000475479452482734,u:"../developing_with_spryker/resources_and_developer_tools/flash_messenger.html",a:"This tutorial describes how to show a message in the Zed GUI.\n In the controller you can use these shortcut methods to show a user message in the GUI. The messages will be translated later when they are rendered.\n\n \u003c?php\nclass IndexController extends AbstractController\n{\n    public function ...",t:"Flash Messenger"},"429":{i:0.000475479452482734,u:"../developing_with_spryker/resources_and_developer_tools/internal_server_error_handling.html",a:"This document describes how to configure the behavior when an internal server error occurs. Whether you need to show the details of the error or render a static page for any internal error, this is done through configuration.\n\n Configure Internal Server Error  Page\nDepending on the environment on ...",t:"Internal Server Error Handling"},"430":{i:0.00106015746941784,u:"../developing_with_spryker/resources_and_developer_tools/performance_scalability.html",a:"Spryker Commerce OS was built to enable the development of high performance e-commerce applications that are able to support an extremely high number of unique visitors. However, no application can be both, light and heavy, at the same time.\n\n Therefore, we have two applications: Yves and Zed. Both ...",t:"Performance and Scalability"},"431":{i:0.00084308838632607,u:"../developing_with_spryker/resources_and_developer_tools/plugin.html",a:"Plugins are small classes that are used to connect bundles in a flexible and configurable way. In contrast to a direct call to a facade of another module, there can be an array of provided modules.\n\n According to our conventions, plugins are the only classes that can be directly instantiated in ...",t:"Plugin"},"432":{i:0.000639586266183819,u:"../developing_with_spryker/resources_and_developer_tools/service.html",a:"Service is a Spryker application layer shared by the Client application layer and the Zed application layer. This service layer provides the ability to register a service once and have it applied to both layers. Usage is focused on level details (infrastructure layer). For example: encoding, text ...",t:"Service"},"433":{i:0.000475479452482734,u:"../developing_with_spryker/resources_and_developer_tools/session_handlers.html",a:"We provide a number of session handlers to work with different storages. By default, the demo-shop uses a locking Redis session handler for Yves and a non-locking Redis session handler for Zed in the development environment.\n\n The following session handlers are currently available:\n\n File\n ...",t:"Session Handlers"},"434":{i:0.00125221501951552,u:"../developing_with_spryker/resources_and_developer_tools/transfer_objects.html",a:"Transfer objects are simple data containers. Their purpose is to retrieve a standardized way to access data and to get more expressive method signatures. They are available everywhere in the system. How to use transfer objects Simple usage The example shows a typical use case for a transfer object. ...",t:"Transfer Objects"},"435":{i:0.000634417327780151,u:"../developing_with_spryker/user_interface_guide/user_interface_guide.html",a:"In this section, you will find an introduction about how to build the UI for your project, when working with Spryker. The documents under this section will help you get started on designing and implementing the UI for both the front-end(Yves) and back-end(Zed) application. Academy Navigation To ...",t:"User Interface Guide"},"436":{i:0.0048038989100382,u:"../developing_with_spryker/user_interface_guide/oryx/oryx.html",a:" As of April 2017, Oryx replaces  Antelope Introduction\n Oryx is the Spryker projects frontend helper. The purpose of Oryx is to simplify the asset building process, giving developers the freedom to choose and configure the preprocessors for the frontend.\n\n Oryx relies on webpack 2.\n\n Oryx for ZED ...",t:"Oryx"},"437":{i:0.00478829525143646,u:"../developing_with_spryker/user_interface_guide/oryx/oryx_for_zed.html",a:" As of April 2017, Oryx replaces  Antelope Introduction\n oryx-for-zed is an extension of Oryx that performs a full build for Spryker Zed UI applications. It also provides access to Zed settings and Zed webpack configuration, so you can extend/change the whole building process.\n\n Requirements\n nodejs ...",t:"Oryx for Zed"},"438":{i:0.000475479452482734,u:"../developing_with_spryker/user_interface_guide/frontend/frontend_overview.html",a:"To learn how to build your assets in our Demoshop, read the  Demoshop Guide .\n\n Asset Management\n A set of resources used to build the UI, that includes html, css (or less, sass, stylus, etc.) and js (or jsx, etc.) files, images, fonts and so on.\n Assets are files, a large collection of files; a ...",t:"Frontend Overview"},"439":{i:0.00207339370490979,u:"../developing_with_spryker/user_interface_guide/frontend/download_structure.html",a:"Here you will find out how to download external dependencies and where to place them, together with your own asset files.\n\n This page contains references to the following tools:   Webpack ,  Oryx  (Our frontend helper tool)and Oryx for Zed (Zed\u0027s frontend full automation tool). Make sure you are ...",t:"Download and Structure"},"440":{i:0.000852224300325078,u:"../developing_with_spryker/user_interface_guide/frontend/development.html",a:"Development refers to writing your own assets, consuming external dependencies and linking resources to make them work together.\n \nEssentially, the code you’re going to produce can be html, css and javascript (in any of their forms: jade, sass, less, coffescript, ecma 6, react js, etc.).\n\n CommonJS\n ...",t:"Development"},"441":{i:0.000556312429846441,u:"../developing_with_spryker/user_interface_guide/frontend/build_optimization.html",a:"Build and Optimization We use  Webpack  and  Oryx  for transpiling/building the assets and to optimize the resulting output. For more on Webpack build process and requirements see: Key Concepts Getting started Using a Configuration Configuration Details Learn more about Spryker Oryx frontend helper: ...",t:"Build Optimization"},"442":{i:0.000556312429846441,u:"../developing_with_spryker/user_interface_guide/frontend/demoshop_guide.html",a:"Bootstrap the project To install all frontend the external dependecies for Yves and Zed, run in the VM console: cd /path/to/project/root ./setup -i Yves To build assets for Yves, run in the console: cd /path/to/project/root\nnpm run yves # build assets in development mode\nnpm run yves:dev # build ...",t:"Demoshop Guide"},"443":{i:0.000556312429846441,u:"../developing_with_spryker/user_interface_guide/frontend/public_folder.html",a:"To publish means to place the built assets in a place where they can be accessed and loaded by the browser.\n In the whole project, the only place with such access rights is the @project/public folder.\n\n Application Folders\n @project/public/Yves @project/public/Zed These folders contain only ...",t:"Public Folder"},"444":{i:0.000913817292648679,u:"../developing_with_spryker/user_interface_guide/twig_templates/twig_overview.html",a:"Given that we are working on a web application, we need a proper way to generate HTML dynamically. The most common approach relies on templates and for this we decided to go with Twig Template Engine.\n\n \nYou can use other technology for the front-end of your application as well; this is just a ...",t:"Overview - Twig"},"445":{i:0.00135898843686938,u:"../developing_with_spryker/user_interface_guide/twig_templates/twig_best_practices.html",a:"Include vs Macros vs Embed\n With includes, you can include an entire template. The template has access to any template variables that are currently in scope.\n\n With macros, you are defining a kind of function within Twig that can render a particular component given appropriate objects.\n\n So you ...",t:"Best Practices - Twig Templates"},"446":{i:0.00790618506263216,u:"../developing_with_spryker/user_interface_guide/antelope_global_tool/overview.html",a:"Antelope Deprecation Notice: As of 04/2017 Antelope will be replaced by  Oryx . You can still use Antelope however, no new development is planned for this component. Antelope is an  npm  global command line tool based upon  webpack  module bundler, designed to  build  the assets and  publish  them.\n ...",t:"Antelope Overview"},"447":{i:0.00382980651547857,u:"../developing_with_spryker/user_interface_guide/antelope_global_tool/asset_management_overview.html",a:"Antelope Deprecation Notice: As of 04/2017 Antelope will be replaced by  Oryx . You can still use Antelope however, no new development is planned for this component. When using the term assets,\nwe refer to a set of resources used for building UI. These resources include; html, css (or less, sass, ...",t:"Asset Management - Overview"},"448":{i:0.00360072693967406,u:"../developing_with_spryker/user_interface_guide/antelope_global_tool/build_optimization_antelope.html",a:"Antelope Deprecation Notice: As of 04/2017 Antelope will be replaced by  Oryx . You can still use Antelope however, no new development is planned for this component. We use Antelope for transpiling/building the assets and to optimize the resulting output.\n \nRead more about  antelope configuration ...",t:"Build and Optimization for Antelope"},"449":{i:0.00360072693967406,u:"../developing_with_spryker/user_interface_guide/antelope_global_tool/cli.html",a:"Antelope Deprecation Notice: As of 04/2017 Antelope will be replaced by Oryx. You can still use Antelope however, no new development is planned for this component. Antelope is a command line interface tool available and ready for use from your terminal/console .\n\n Before you proceed with setup, read ...",t:"CLI"},"450":{i:0.00360072693967406,u:"../developing_with_spryker/user_interface_guide/antelope_global_tool/configuration.html",a:"Antelope Deprecation Notice: As of 04/2017 Antelope will be replaced by Oryx. You can still use Antelope however, no new development is planned for this component. A configuration file is a set of properties and methods that define how to process assets.\n\n Read more about  asset build and ...",t:"Configuration"},"451":{i:0.00360072693967406,u:"../developing_with_spryker/user_interface_guide/antelope_global_tool/development_antelope.html",a:"Antelope Deprecation Notice: As of 04/2017 Antelope will be replaced by  Oryx . You can still use Antelope however, no new development is planned for this component. Development refers to writing your own assets, consuming external dependencies and linking resources to make them work together.\n ...",t:"Development with Antelope"},"452":{i:0.00360072693967406,u:"../developing_with_spryker/user_interface_guide/antelope_global_tool/download_structure_antelope.html",a:"Download and Structure (Antelope) Antelope Deprecation Notice: As of 04/2017 Antelope will be replaced by  Oryx . You can still use Antelope however, no new development is planned for this component. Here you will find out how to download external dependencies and where to place them, together with ...",t:"Download and Structure - Antelope"},"453":{i:0.00360072693967406,u:"../developing_with_spryker/user_interface_guide/antelope_global_tool/publishing.html",a:"Antelope Deprecation Notice: As of 04/2017 Antelope will be replaced by  Oryx . You can still use Antelope however, no new development is planned for this component. To publish assets means to place them (or the build output files) in a place where they can be accessed and loaded by the browser.\n ...",t:"Publishing"},"454":{i:0.000493051838866149,u:"../developing_with_spryker/yves/yves.html",a:"Front-End Yves In this section you will find the following content: Client Controllers and Actions Frontend Translations Using Redis as a KV Storage Implementing URL Routing in Yves",t:"Front-End Yves"},"455":{i:0.000938961224493429,u:"../developing_with_spryker/yves/client.html",a:"Yves is divided into two:\n\n The part with controllers, forms, templates etc\n Client part which provides access to the search and storage engine and the Zed application.\n The purpose of the client is to encapsulate the logic which runs the shop independent from the overlying application. So in case ...",t:"Client"},"456":{i:0.000559299804489126,u:"../developing_with_spryker/yves/controllers_actions.html",a:"Controllers are placed inside the Controllers folder in Yves; they provide an entry point to the system for requests submitted by the front-end users.\n The methods inside of a controller are called actions. Usually an action reads the incoming request-data, maybe validates it with a form, delegates ...",t:"Controllers and Actions"},"457":{i:0.000559299804489126,u:"../developing_with_spryker/yves/frontend_translations.html",a:"Textual translations are handled by the Glossary-module. You can use the GlossaryFacade in Zed to add entries to Glossary (or you can use the Zed UI).\n\n \u003c?php\nclass GlossaryFacade extends AbstractFacade\n{\n    public function createTranslation($keyName, LocaleTransfer $locale, $value, $isActive = ...",t:"Frontend Translations"},"458":{i:0.000723406618190211,u:"../developing_with_spryker/yves/redis_as_kv.html",a:"This article describes how Redis is used within Spryker; the current functionality can be extended according to your needs.\n About Redis is a key-value data store and for the values it supports a large collection of data structures, such as strings, hashes, lists or sets.\n\n The following table shows ...",t:"Using Redis as a KV Storage"},"459":{i:0.00166174275034319,u:"../developing_with_spryker/yves/yves_url_routing.html",a:"Implementing URL Routing in Yves The words contained in an URL play a major factor for search engine to determine if the page is relevant for a specific search query. The URL routing is a mechanism used to map URLs to the code that gets executed when a specific request is being submitted. URL ...",t:"URL Routing"},"460":{i:0.000702310103227583,u:"../developing_with_spryker/zed/zed.html",a:"In this section you will find the following content: Business Layer: Business Layer Business Models Custom Exceptions   Communication Layer: Controllers and Actions Persistence Layer Database Schema Definition Entity Persistence Layer Entity Manager Repository Query Container Query Objects",t:"Back-End Zed"},"461":{i:0.00194838115038744,u:"../developing_with_spryker/zed/business_layer/business_layer.html",a:"Zed’s business layer is responsible for the entire business logic.  Most classes exist in this layer and this is the primary area for development.  The business layer is used by the communication layer and by other bundles. Here you know how to save data objects, but you do not care about data ...",t:"Business Layer"},"462":{i:0.000529749855168409,u:"../developing_with_spryker/zed/business_layer/business_models.html",a:"Business models are classes where you program the business logic of your system. With business logic we mean all kinds of algorithms (e.g. cart calculation), storage procedures (e.g. checkout save workflow) and interactions with external providers (e.g. payment). Business models are not visible from ...",t:"Business Models"},"463":{i:0.000529749855168409,u:"../developing_with_spryker/zed/business_layer/custom_exceptions.html",a:"When you need to throw an exception, you should define your own type of exception. Later it is much easier to handle exceptions when the type represents a specific type of error. In Spryker exceptions are errors which are handled in a central error handler that will stop the execution. Do not use ...",t:"Custom Exceptions"},"464":{i:0.000639586266183819,u:"../developing_with_spryker/zed/business_layer/facade/facade.html",a:"The facade acts as an internal API. The main responsibility of the facade is to hide the internal implementation. The simply only delegates the calls to internal business models. Similar to a remote web service, the client should not care about how a specific task is done. This is also important for ...",t:"Facade"},"465":{i:0.000656699980040829,u:"../developing_with_spryker/zed/business_layer/facade/zed_facade_how_to_use.html",a:"1. How to use the facade from a controller or a plugin? In Zed’s communication layer the facade of the same module is available with the getFacade() method from all controllers and plugins. A typical usage from a controller looks like this. The controller retrieves data from a submitted form and ...",t:"How to Use a Facade"},"466":{i:0.000656699980040829,u:"../developing_with_spryker/zed/business_layer/facade/zed_facade_how_to_implement.html",a:"AbstractFacade Every facade extends Spryker\\Zed\\Kernel\\Business\\AbstractFacade which provides an important method: Methods Inside a facade, the methods tell a story about the module. They expose  the module\u0027s functions and delegate calls to internal models. A typical method looks like this: ...",t:"How to Implement a Facade"},"467":{i:0.000656699980040829,u:"../developing_with_spryker/zed/business_layer/facade/zed_facade_design_by_contract.html",a:"Every method in a facade contains an implicit promise. So a client expects that the behavior does not change in a minor update. Basically there are two types of possible changes. First there can be changes in the method’s signature for instance, when the name of the method or the order of the ...",t:"Design by Contract (DBC) - Facade"},"468":{i:0.000693856668869494,u:"../developing_with_spryker/zed/controllers_actions.html",a:"Zed’s communication layer is the entry point to the system. Here are executed all of the external requests from users, the Yves-application and all command-line calls. The purpose of this layer is to retrieve the data, delegate to the business layer and to handover it to the presentation layer.\n The ...",t:"Controllers and Actions"},"469":{i:0.000529749855168409,u:"../developing_with_spryker/zed/persistence_layer.html",a:"Zed’s persistence layer is the owner of the schema, entities and queries. This layer knows the database structure and holds the connection to it.\n Integrated Technologies\n Propel\tFast and simple ORM Framework\nMySQL or PostgreSQL\tBoth databases are supported\n Persistence Layer Elements:\n The ...",t:"Persistence Layer"},"470":{i:0.00383881802328133,u:"../developing_with_spryker/zed/persistence_layer/database_overview.html",a:"ORM Directory The ORM directory contains two folders: Propel and Zed. The src/Orm/Propel is for: Configuration in Propel format (generated propel.json - don’t touch). Copy of merged schema files (don’t touch). Migration files (can be on gitignore or can be committed, the decision is made on the ...",t:"Database Overview"},"471":{i:0.00588646492818788,u:"../developing_with_spryker/zed/persistence_layer/database_schema_definition.html",a:"With Propel, a database schema is defined in an XML-file. Each module carries it’s own part of the big schema that is collected and merged. Propel’s documentation on defining the database schema:  Database schema Example Schema XML File This file can be copied into your module into ...",t:"Database Schema Definition"},"472":{i:0.00422242047781954,u:"../developing_with_spryker/zed/persistence_layer/entity.html",a:"In Spryker an entity represents one entry from a table in the database. Entities are an implementation of the  Active record design pattern , so their usage is very simple.\nFor a full documentation see  Propel’s Active Record Reference .  Spryker’s entities are called Active Record classes or just ...",t:"Entity"},"473":{i:0.00424373871420029,u:"../developing_with_spryker/zed/persistence_layer/entity-manager.html",a:"\n    Since Kernel version 3.2, it is possible to create an entity manager class in your persistence layer.\nIt will be responsible for saving, updating and deleting data. Using the class, you can separate data from persistence details (Propel). \nIt is important to not overuse the entity manager or ...",t:"Entity Manager"},});