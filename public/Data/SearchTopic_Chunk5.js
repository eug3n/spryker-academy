define({"342":{i:0.000708147136593717,u:"../developing_with_spryker/industry_partner_integration/payolution/integration_payment_payolution_invoice.html",a:"Workflow Scenarios Payments from Payolution to Merchant are not included in the sequence diagrams since they occur on a regular basis (e.g. every week). Standard Case Full Refund Before Payment Partial Refund Before Payment Full Refund After Payment Partial Refund After Payment Integrating ...",t:"Payolution — Invoice Payment"},"343":{i:0.000708147136593717,u:"../developing_with_spryker/industry_partner_integration/payolution/integration_payment_payolution_installment.html",a:"Installment Scenarios Standard Case Full Refund Partial Refund Integrating Payolution Installment Payment The In order to integrate installment payment, two simple steps are needed: setting Payolution installment payment configuration and calling the facade functions. Setting Payolution Installment ...",t:"Payolution — Installment Payment"},"344":{i:0.00131007461837941,u:"../developing_with_spryker/industry_partner_integration/payolution/integration_payment_payolution_requests.html",a:"In order to perform the needed requests, you can easily use the implemented state machine commands and conditions. The next section gives a summary of them. You can also use the facade methods directly which, however, are invoked by the state machine. Payolution State Machine Commands and Conditions ...",t:"Payolution — Performing Requests"},"345":{i:0.000796343865060202,u:"../developing_with_spryker/industry_partner_integration/payolution/integration_payment_payolution_workflow.html",a:"Both invoice and installment utilize the same request flow. It basically consists of the following requests: Calculation (for installment only): to calculate the installment amounts, dues, and durations. Pre-check (optional): to check the user information in order to make sure that all the needed ...",t:"Payolution — Workflow"},"346":{i:0.000630508242461192,u:"../developing_with_spryker/industry_partner_integration/integration_payment_computop.html",a:"Payment Integration - Computop Partner Information Copyright and Disclaimer See  Disclaimer .",t:"Payment Integration - Computop"},"347":{i:0.00418589227966293,u:"../developing_with_spryker/industry_partner_integration/heidelpay/integration_payment_heidelpay.html",a:"Partner Information Integrating Heidelpay To integrate Hidelpay in your project, follow these steps: Install  Heidelpay Integrate  Heidelpay to your project \tConfigure selected payment methods: Paypal ( Paypal Authorize ,  Payal Debit ) Credit Card iDeal Build your own workflow (create a new OMS ...",t:"Payment Integration - Heidelpay"},"348":{i:0.00407192200615943,u:"../developing_with_spryker/industry_partner_integration/heidelpay/v1_0/integration_payment_heidelpay_installation.html",a:"To install Heidelpay, if necessary, add  the Heidelpay repo to your repositories in composer.json: \"repositories\": [\n  ...\n  {\n    \"type\": \"git\",\n    \"url\": \"https://github.com/spryker-eco/Heidelpay.git\"\n  }\n    ], and simply do \u003e composer require spryker-eco/heidelpay   See also: Payment ...",t:"Heidelpay - Installation"},"349":{i:0.00361585404533722,u:"../developing_with_spryker/industry_partner_integration/heidelpay/v1_0/integration_payment_heidelpay_integration.html",a:"Heidelpay - Integration to Your Project\n Configuration You can copy over configs to your config from the Heidelpay\u0027s moduleconfig.dist.php file.\n         \n        The most important configuration items are explained in the table below,\n        make sure to get the required configuration items from ...",t:"Heidelpay - Integration to Your Project\n"},"350":{i:0.00104212146959416,u:"../developing_with_spryker/industry_partner_integration/heidelpay/v1_0/integration_payment_heidelpay_authorize.html",a:"Setup The following configuration should be made after Heidelpay has been  installed  and  integrated . Configuration Example (for testing only): \n$config[HeidelpayConstants::CONFIG_HEIDELPAY_TRANSACTION_CHANNEL_PAYPAL] = \u002731HA07BC8142C5A171749A60D979B6E4\u0027;\n This value should be taked from HEIDELPAY ...",t:"Heidelpay - Paypal Authorize"},"351":{i:0.00456637724969009,u:"../developing_with_spryker/industry_partner_integration/heidelpay/v1_0/integration_payment_heidelpay_credit_card.html",a:"Setup The following configuration should be made after Heidelpay has been  installed  and  integrated . Configuration Example (for testing only): \n$config[HeidelpayConstants::CONFIG_HEIDELPAY_TRANSACTION_CHANNEL_IDEAL] = ...",t:"Heidelpay - Credit Card Secure"},"352":{i:0.00407192200615943,u:"../developing_with_spryker/industry_partner_integration/heidelpay/v1_0/integration_payment_heidelpay_paypal_debit.html",a:"Setup The following configuration should be made after Heidelpay has been  installed  and  integrated . Configuration Example (for testing only): \n$config[HeidelpayConstants::CONFIG_HEIDELPAY_TRANSACTION_CHANNEL_PAYPAL] = \u002731HA07BC8142C5A171749A60D979B6E4\u0027;\n This value should be taken from HEIDELPAY ...",t:"Heidelpay - Paypal Debit Workflow"},"353":{i:0.00407192200615943,u:"../developing_with_spryker/industry_partner_integration/heidelpay/v1_0/integration_payment_heidelpay_ideal.html",a:"Setup The following configuration should be made after Heidelpay has been  installed  and  integrated . Configuration Example (for testing only): \n$config[HeidelpayConstants::CONFIG_HEIDELPAY_TRANSACTION_CHANNEL_IDEAL] = \u002731HA07BC8142C5A171744B56E61281E5\u0027;\n This value should be taken from HEIDELPAY. ...",t:"Hedelpay - iDeal"},"354":{i:0.00407192200615943,u:"../developing_with_spryker/industry_partner_integration/heidelpay/v1_0/integration_payment_heidelpay_sofortuberweisung.html",a:"Setup The following configuration should be made after Heidelpay has been  installed  and  integrated . Configuration Example (for testing only): \n$config[HeidelpayConstants::CONFIG_HEIDELPAY_TRANSACTION_CHANNEL_SOFORT] = \u002731HA07BC8142C5A171749CDAA43365D2\u0027;\n \n    Checkout Payment Step Display ...",t:"Heidelay - Sofort (Online Transfer)"},"355":{i:0.00361017085277612,u:"../developing_with_spryker/industry_partner_integration/heidelpay/v1_0/integration_payment_heidelpay_error_workflow.html",a:"Heidelpay - Workflow for Errors\n     \n        From the user\u0027s perspective, there is almost no difference between successful and unsuccessful order flow. The only exception is a redirect to the URL after the placeOrderAction (/checkout/place-order) is complete.\n        Both urls can be configured as ...",t:"Heidelpay - Workflow for Errors\n    "},"356":{i:0.000651664953378192,u:"../developing_with_spryker/industry_partner_integration/hosting_continum.html",a:"Hosting Provider - Continum Partner Information Copyright and Disclaimer See  Disclaimer .",t:"Hosting Provider - Continum"},"357":{i:0.000630508242461192,u:"../developing_with_spryker/industry_partner_integration/hosting_claranet.html",a:"Hosting Provider - Claranet Partner Information Copyright and Disclaimer See  Disclaimer .",t:"Hosting Provider - Claranet"},"358":{i:0.000630508242461192,u:"../developing_with_spryker/industry_partner_integration/hosting_root360.html",a:"Hosting Provider - Root 360 Partner Information Copyright and Disclaimer See  Disclaimer .",t:"Hosting Provider - Root 360"},"359":{i:0.00113160023593773,u:"../developing_with_spryker/industry_partner_integration/integration_loggly_queue.html",a:"The Loggly module provides a plugin to read log messages from a queue and send the messages via https to  Loggly . To integrate this plugin you need to have the QueueHandler enabled in your Logger configuration as described  here . In addition you need to properly configure the queue setup for ...",t:"Queue Integration - Loggly"},"360":{i:0.000597363656639653,u:"../developing_with_spryker/development_concepts/development_concepts.html",a:"Spryker is a complex application. We have established certain concepts and implementation abstractions that help us to structure and optimise our application. Before getting your hands dirty and starting to work with Spryker, you should understand our concepts behind certain topics. For example you ...",t:"Development Concepts"},"361":{i:0.000597363656639653,u:"../developing_with_spryker/development_concepts/search_design/search_design_paterns.html",a:" Search Design Patterns for E-Commerce: Schema Structure, Data Driven Ranking \u0026 More Source:  http://project-a.github.io/on-site-search-design-patterns-for-e-commerce/ By  Dr. Martin Loetzsch  ( Project A ) and Krešimir Slugan ( Contorion ) Providing users with a proper on-site search user ...",t:"On-Site Search "},"362":{i:0.000597363656639653,u:"../developing_with_spryker/development_concepts/search_design/data_driven_ranking.html",a:"When a query returns hundreds or thousands of results, it is absolutely crucial that the products at the top of the search result page are the ones that are most relevant to the user. Getting this right will lead to a higher conversion probability and increase customer happiness. Implementing proper ...",t:"Data-Driven Ranking"},"363":{i:0.000597363656639653,u:"../developing_with_spryker/development_concepts/search_design/full_text_search.html",a:"Full-text search is a feature where a user enters arbitrary text into a search field and then gets documents that are relevant for that query. It is normally combined with faceted navigation. In the example below, a user searched for “hammer” and then further filtered for hammer weights of 2000 gram ...",t:"Full-Text Search"},"364":{i:0.000597363656639653,u:"../developing_with_spryker/development_concepts/search_design/generic_faceted_search.html",a:"Faceted search (sometimes also called faceted navigation) allows users to navigate through a web site by applying filters for categories, attributes, price ranges and so on. It’s probably the most basic feature of a search and users expect this to work. Unfortunately, we observed that this is also ...",t:"Generic Faceted Search"},"365":{i:0.000597363656639653,u:"../developing_with_spryker/development_concepts/search_design/multi_term_auto_completion.html",a:"Term completion is a feature where a user gets suggestions for search terms and matching search results as he types the query. We call a completion multi-term when it is able to combine terms from different attributes in an open-ended fashion. In the below example, a user entered “fortis” (a brand) ...",t:"Multi-Term Auto Completion"},"366":{i:0.000597363656639653,u:"../developing_with_spryker/development_concepts/search_design/naive_product_centric_approach.html",a:"A Naive Product Centric Approach Finding products on e-commerce website can be tricky, even when you know exactly what you are looking for. Throughout this document, we will assume a customer wants to buy a hammer that weighs 2kg. A product that would meet his needs might be this “Fäustel” by ...",t:"A Naive Product-Centric Approach"},"367":{i:0.000597363656639653,u:"../developing_with_spryker/development_concepts/search_design/other_best_practices.html",a:"Finally, we want to provide you with a list of some additional and potentially useful principles regarding the setup of an on-site search experience.\n \nIndex Pages, Not Products\n\n Each document we put in Elasticsearch corresponds to an URL  The mapping type in our schema is called page, not product ...",t:"Other Best Practices"},"368":{i:0.000597363656639653,u:"../developing_with_spryker/development_concepts/search_design/personalization_dymanic_pricing.html",a:"Especially in businesses with a B2B focus, customers expect to get discounts after they have been using the service/website for a longer period of time. The search infrastructure should be able to handle such use cases and customers should be able to see their own discounted prices while browsing ...",t:"Personalization: Dynamic Pricing"},"369":{i:0.000597363656639653,u:"../developing_with_spryker/development_concepts/search_design/simple_spelling_suggestions.html",a:"Spelling suggestions provide the users with alternative search terms when the search query does not return any results:\n Translation: Unfortunately there were 0 results for your exact search term “hammer holk”. Did you possibly mean hammer holz? This is one of the simplest features you can build ...",t:"Simple Spelling Suggestions"},"370":{i:0.000597363656639653,u:"../developing_with_spryker/development_concepts/search_design/usage_driven_schema_structure.html",a:"Both the schema and the query generator should not need to know that there is such a thing as as the weight of a hammer. We will argue for a document structure and schema design that is not built around the original data but around the usage of attributes in search operations.\n\n At Contorion, this ...",t:"Usage-Driven Schema \u0026 Document Structure"},"371":{i:0.00118245079607357,u:"../developing_with_spryker/development_concepts/state_machine_cookbook/state_machine_cookbook.html",a:"State machines are a model of computation used to automate processes. In Spryker you can use the OMS module to automate the management of orders or the StateMachine module to automate other processes you define in your shop. Both behave similar, but the OMS one is a customized solution to manage the ...",t:"State Machine Cookbook - Part I - State Machine Fundamentals"},"372":{i:0.00234708906807402,u:"../developing_with_spryker/development_concepts/state_machine_cookbook/state_machine_cookbook_2.html",a:"\nThis chapter will help you model a state machine using Spryker to manage your sale orders.\n First of all, it’s important to know which tasks must be executed after an order is submitted and in which order. Keep in mind that you can define more than one state machine in your system to cover the use ...",t:"State Machine Cookbook - Part 2 -Building a State Machine"},"373":{i:0.000618520367556653,u:"../developing_with_spryker/guidelines/developer_guidelines.html",a:"The developer Guidelines section is a collection of best practices and guidelines for developers.    Academy Navigation To navigate through content, click on an option from the right-hand table of contents or use the search (above).  You can also use navigation buttons on the top right corner of ...",t:"Developer Guidelines"},"374":{i:0.000597363656639653,u:"../developing_with_spryker/guidelines/code_architecture_guide.html",a:"We use our  Architecture Sniffer Tool  to assert a certain quality of Spryker architecture for both core and project.\n Running the Tool The sniffer can find a lot of violations and will report them: $ vendor/bin/console code:sniff:architecture\n\n// Sniff a specific subfolder of your project - with ...",t:"Code Architecture Guide"},"375":{i:0.000635162254553861,u:"../developing_with_spryker/guidelines/coding_best_practices.html",a:"\n            In this article we outline a few common PHP coding problems and the recommended solutions.\n         Merging Arrays \n            When merging arrays, one usually uses array_merge($defaults, $options).\n            However, when working with associative arrays (keys are all string ...",t:"Coding Best Practices"},"376":{i:0.000597363656639653,u:"../developing_with_spryker/guidelines/code_style_guide.html",a:"We follow the  PSR-2 standards . To achieve a styled codebase, we integrated the well known  PHP-CS Fixer  and  PHPCodeSniffer .\n Code Sniffer and Fixer \nWe use a very powerful tool to help keeping the code clean and preventing simple mistakes. Automate Code Style Correction The sniffer can find all ...",t:"Code Style Guide"},"377":{i:0.00110512471864766,u:"../developing_with_spryker/guidelines/secure_coding_practices.html",a:"Unsafe coding practices can make the software application vulnerable to theft of sensitive data.\n\nIn this article, we’ll present a series of coding practices that we recommend using when developing an e-commerce application using Spryker Commerce OS, that will keep your software solution secured.\n\n ...",t:"Secure Coding Practices"},"378":{i:0.000597363656639653,u:"../developing_with_spryker/guidelines/testing_concepts.html",a:"Testing your project is one of the best ways to ensure that your software functions as it is supposed to. The role of testing is to find bugs during the early stages of development to minimize risks. QA is the process of assuring quality, not just verifying you will not get an error on some page. ...",t:"Testing Concepts"},"379":{i:0.000618520367556653,u:"../developing_with_spryker/resources_and_developer_tools/about_resources.html",a:"This section contains general information and resources for developers. The topics covered in resources are general topics that do not pertain to a specific component or capability.   Academy Navigation To navigate through content, click on an option from the right-hand table of contents or use the ...",t:"About Resources"},"380":{i:0.000724303922141654,u:"../developing_with_spryker/resources_and_developer_tools/code_generator.html",a:"The CodeGenerator module can generate your project code.  Out of the box it provides generators for Yves, Zed, Client, Service and Shared application layers.\n\n This is a pre-release.\n Installation\n Install it as\n\n composer require --dev spryker/code-generator You need to run vendor/bin/console ...",t:"Code Generator"},"381":{i:0.001463100551214,u:"../developing_with_spryker/resources_and_developer_tools/configuration_management.html",a:"Default and Local Configuration Files\n Under config/Shared you’ll find several files that are used for the system’s configuration, that can be used by both Yves and Zed.\n The files are merged in a fixed order if they exist. So the entries of config_default.php are overwritten by the entries in ...",t:"Configuration Management"},"382":{i:0.00496179447946259,u:"../developing_with_spryker/resources_and_developer_tools/console_commands.html",a:"We provide an integrated mechanism to add command line calls. Technically this is based on Symfony’s Console Component.\n\t\t \n\t\t\tGet a list of all available commands\n\t\t You can see the list of all of the commands by running: vendor/bin/console. vagrant@spryker-vagrant ➜  current git:(develop) ✗ ...",t:"Console Commands"},"383":{i:0.000597363656639653,u:"../developing_with_spryker/resources_and_developer_tools/container_globals.html",a:"The ContainerGlobals is a way to inject dependencies which are available inside your  Factories . Every dependency added to the ContainerGlobals is available by using getProvidedDependency() in your factory.\n \nTo add something globally you need to create a service provider and add it to the ...",t:"Container Globals"},"384":{i:0.000597363656639653,u:"../developing_with_spryker/resources_and_developer_tools/core_extension.html",a:"We offer several ways like plugins to hook into the core’s behavior and extend this without modifications. But sometimes this is not enough, so you need to replace a method which is deep in the core.\n\n Before your proceed, double check if there is no other way to solve your requirement, maybe there ...",t:"Core Extension"},"385":{i:0.00208428116874492,u:"../developing_with_spryker/resources_and_developer_tools/cronjob_scheduling.html",a:"We use  Jenkins  for cronjob scheduling. Compared to Crontab, there are several benefits: Jobs are queued and can be manually executed Job definitions are under version control and can be changed by any developer Console output available for debugging Add a new job and run it Jobs are defined in ...",t:"Cronjob Scheduling"},"386":{i:0.000597363656639653,u:"../developing_with_spryker/resources_and_developer_tools/dependency_injector.html",a:"The  Dependency Provider  defines which “external dependencies” you need to retrieve(e.g. a facade of another module).\n \nThe DependencyInjector is the opposite of it. This class will push dependencies into another module without the need to touch the module where it injects to ( OCP ).\n\n For ...",t:"Dependency Injector"},"387":{i:0.00133749532000981,u:"../developing_with_spryker/resources_and_developer_tools/dependency_provider.html",a:"Each modules ships with a DependencyProvider class which explicitly defines services and external dependencies to other modules. For instance when the Cms module requires the Glossary module this needs to be configured here. The DependencyProvider defines dependencies for each layer. Usually you ...",t:"Dependency Provider"},"388":{i:0.00388967764162646,u:"../developing_with_spryker/resources_and_developer_tools/factory.html",a:"All modules are shipped with a dedicated factory for each layer. The responsibility of the factory is to create new instances of the classes from the same layer and module.\n\n The following example shows a typical method from a factory. The method createKeyBuilder() creates an instance which is then ...",t:"Factory"},"389":{i:0.000597363656639653,u:"../developing_with_spryker/resources_and_developer_tools/flash_messenger.html",a:"This tutorial describes how to show a message in the Zed GUI.\n In the controller you can use these shortcut methods to show a user message in the GUI. The messages will be translated later when they are rendered.\n\n \u003c?php\nclass IndexController extends AbstractController\n{\n    public function ...",t:"Flash Messenger"},"390":{i:0.000597363656639653,u:"../developing_with_spryker/resources_and_developer_tools/internal_server_error_handling.html",a:"This document describes how to configure the behavior when an internal server error occurs. Whether you need to show the details of the error or render a static page for any internal error, this is done through configuration.\n\n Configure Internal Server Error  Page\nDepending on the environment on ...",t:"Internal Server Error Handling"},"391":{i:0.00129089239865759,u:"../developing_with_spryker/resources_and_developer_tools/performance_scalability.html",a:"Spryker OS was built to enable the development of high performance e-commerce applications that are able to support an extremely high number of unique visitors. However, no application can be both, light and heavy, at the same time.\n\n Therefore, we have two applications: Yves and Zed. Both ...",t:"Performance and Scalability"},"392":{i:0.000597363656639653,u:"../developing_with_spryker/resources_and_developer_tools/plugin.html",a:"Plugins are small classes that are used to connect bundles in a flexible and configurable way. In contrast to a direct call to a facade of another module, there can be an array of provided modules.\n\n According to our conventions, plugins are the only classes that can be directly instantiated in ...",t:"Plugin"},"393":{i:0.000742854438892651,u:"../developing_with_spryker/resources_and_developer_tools/service.html",a:"Service is a Spryker application layer shared by the Client application layer and the Zed application layer. This service layer provides the ability to register a service once and have it applied to both layers. Usage is focused on level details (infrastructure layer). For example: encoding, text ...",t:"Service"},"394":{i:0.000597363656639653,u:"../developing_with_spryker/resources_and_developer_tools/session_handlers.html",a:"We provide a number of session handlers to work with different storages. By default, the demo-shop uses a locking Redis session handler for Yves and a non-locking Redis session handler for Zed in the development environment.\n\n The following session handlers are currently available:\n\n File\n ...",t:"Session Handlers"},"395":{i:0.00145466162983138,u:"../developing_with_spryker/resources_and_developer_tools/transfer_objects.html",a:"Transfer objects are simple data containers. Their purpose is to retrieve a standardized way to access data and to get more expressive method signatures. They are available everywhere in the system. How to use transfer objects Simple usage The example shows a typical use case for a transfer object. ...",t:"Transfer Objects"},"396":{i:0.000910311259921387,u:"../developing_with_spryker/user_interface_guide/user_interface_guide.html",a:"In this section, you will find an introduction about how to build the UI for your project, when working with Spryker. The documents under this section will help you get started on designing and implementing the UI for both the front-end(Yves) and back-end(Zed) application. Academy Navigation To ...",t:"User Interface Guide"},"397":{i:0.00571791573727322,u:"../developing_with_spryker/user_interface_guide/oryx/oryx.html",a:" As of April 2017, Oryx replaces  Antelope Introduction\n Oryx is the Spryker projects frontend helper. The purpose of Oryx is to simplify the asset building process, giving developers the freedom to choose and configure the preprocessors for the frontend.\n\n Oryx relies on webpack 2.\n\n Oryx for ZED ...",t:"Oryx"},"398":{i:0.00578165717229788,u:"../developing_with_spryker/user_interface_guide/oryx/oryx_for_zed.html",a:" As of April 2017, Oryx replaces  Antelope Introduction\n oryx-for-zed is an extension of Oryx that performs a full build for Spryker Zed UI applications. It also provides access to Zed settings and Zed webpack configuration, so you can extend/change the whole building process.\n\n Requirements\n nodejs ...",t:"Oryx for Zed"},"399":{i:0.000597363656639653,u:"../developing_with_spryker/user_interface_guide/frontend/frontend_overview.html",a:"To learn how to build your assets in our Demoshop, read the  Demoshop Guide .\n\n Asset Management\n A set of resources used to build the UI, that includes html, css (or less, sass, stylus, etc.) and js (or jsx, etc.) files, images, fonts and so on.\n Assets are files, a large collection of files; a ...",t:"Frontend Overview"},"400":{i:0.00248129749410694,u:"../developing_with_spryker/user_interface_guide/frontend/download_structure.html",a:"Here you will find out how to download external dependencies and where to place them, together with your own asset files.\n\n This page contains references to the following tools:   Webpack ,  Oryx  (Our frontend helper tool)and Oryx for Zed (Zed\u0027s frontend full automation tool). Make sure you are ...",t:"Download and Structure"},"401":{i:0.00102644496705799,u:"../developing_with_spryker/user_interface_guide/frontend/development.html",a:"Development refers to writing your own assets, consuming external dependencies and linking resources to make them work together.\n \nEssentially, the code you’re going to produce can be html, css and javascript (in any of their forms: jade, sass, less, coffescript, ecma 6, react js, etc.).\n\n CommonJS\n ...",t:"Development"},"402":{i:0.000698915869041254,u:"../developing_with_spryker/user_interface_guide/frontend/build_optimization.html",a:"Build and Optimization We use  Webpack  and  Oryx  for transpiling/building the assets and to optimize the resulting output. For more on Webpack build process and requirements see: Key Concepts Getting started Using a Configuration Configuration Details Learn more about Spryker Oryx frontend helper: ...",t:"Build Optimization"},"403":{i:0.000698915869041254,u:"../developing_with_spryker/user_interface_guide/frontend/demoshop_guide.html",a:"Bootstrap the project To install all frontend the external dependecies for Yves and Zed, run in the VM console: cd /path/to/project/root ./setup -i Yves To build assets for Yves, run in the console: cd /path/to/project/root\nnpm run yves # build assets in development mode\nnpm run yves:dev # build ...",t:"Demoshop Guide"},"404":{i:0.000698915869041254,u:"../developing_with_spryker/user_interface_guide/frontend/public_folder.html",a:"To publish means to place the built assets in a place where they can be accessed and loaded by the browser.\n In the whole project, the only place with such access rights is the @project/public folder.\n\n Application Folders\n @project/public/Yves @project/public/Zed These folders contain only ...",t:"Public Folder"},"405":{i:0.000724303922141654,u:"../developing_with_spryker/user_interface_guide/twig_templates/twig_overview.html",a:"Given that we are working on a web application, we need a proper way to generate HTML dynamically. The most common approach relies on templates and for this we decided to go with Twig Template Engine.\n\n \nYou can use other technology for the front-end of your application as well; this is just a ...",t:"Overview - Twig"},"406":{i:0.00121302445941956,u:"../developing_with_spryker/user_interface_guide/twig_templates/twig_best_practices.html",a:"Include vs Macros vs Embed\n With includes, you can include an entire template. The template has access to any template variables that are currently in scope.\n\n With macros, you are defining a kind of function within Twig that can render a particular component given appropriate objects.\n\n So you ...",t:"Best Practices - Twig Templates"},"407":{i:0.00912594479479857,u:"../developing_with_spryker/user_interface_guide/antelope_global_tool/overview.html",a:"Antelope Deprecation Notice: As of 04/2017 Antelope will be replaced by  Oryx . You can still use Antelope however, no new development is planned for this component. Antelope is an  npm  global command line tool based upon  webpack  module bundler, designed to  build  the assets and  publish  them.\n ...",t:"Antelope Overview"},"408":{i:0.00423869170645311,u:"../developing_with_spryker/user_interface_guide/antelope_global_tool/asset_management_overview.html",a:"Antelope Deprecation Notice: As of 04/2017 Antelope will be replaced by  Oryx . You can still use Antelope however, no new development is planned for this component. When using the term assets,\nwe refer to a set of resources used for building UI. These resources include; html, css (or less, sass, ...",t:"Asset Management - Overview"},});