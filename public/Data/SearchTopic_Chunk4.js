define({"276":{i:0.0010759947887428,u:"../developing_with_spryker/industry_partner_integration/payone/authorization_and_preauthorization_capture_flows.html",a:"Payone module makes it possible for a project to choose which Payone flow it wants to implement: authorize or preauthorize + capture. Authorization Example State Machine: Authorization state machine example xml can be found in vendor/\u003cpayone_module_folder\u003e/src/config/Zed/Oms/PayoneInvoice.xml ...",t:"Authorization and Preauthorization-Capture Flows"},"277":{i:0.000892014237949864,u:"../developing_with_spryker/industry_partner_integration/payone/integration_payment_payone_credit_card.html",a:"PCI Compliance Because of PCI compliance reasons, credit card data is communicated to the third party through AJAX calls (sensitive information stays browser side).\n PCI Compliance\n The Payment Card Industry Data Security Standard ( PCI DSS ) is a set of rules with the intention to ensure that ...",t:"Credit Card Payment - Payone"},"278":{i:0.000892014237949864,u:"../developing_with_spryker/industry_partner_integration/payone/integration_payment_payone_dir_deb.html",a:"Front-end integration\n Run the antelope build yves after you include the javascript file for credit card check inside the payment step template (e.g. src/\u003cproject_name\u003e/Yves/Checkout/Theme/\u003ccustom_theme_name\u003e/checkout/payment.twig)\n\n {% block content %}\n\u003cscript ...",t:"Direct Debit Payment- Payone"},"279":{i:0.000892014237949864,u:"../developing_with_spryker/industry_partner_integration/payone/integration_payment_payone_online_trans.html",a:"Supported online banking service providers are SofortBanking, Giropay, Electronic Payment Standard (Eps), PostFinance Card, PostFinance E-Finance, iDEAL and Przelewy24. They are enabled  through the integration with Payone, using the online transfer payment type.\n\n Each payment method is limited to ...",t:"Online Transfer Payment- Payone"},"280":{i:0.000892014237949864,u:"../developing_with_spryker/industry_partner_integration/payone/integration_payment_payone_prepayment.html",a:"Prepayment method is a safe alternative to payments involving credit cards or debit cards (such as online banking transfer). Usually bank transfer would require manual processing to mark transaction as cancelled or completed, but the process is fully automated through the integration with the Payone ...",t:"Pre-payment - Payone"},"281":{i:0.000892014237949864,u:"../developing_with_spryker/industry_partner_integration/payone/integration_payment_payone_paypal.html",a:"The payment using PayPal requires a redirect to PayPal website. When the customer is redirected to PayPal’s website, he must authorize himself and he has the option to either cancel or validate the transaction.\n \nA concern regarding payment flows that require redirection on third party website pages ...",t:"Paypal Payment - Payone"},"282":{i:0.0010759947887428,u:"../developing_with_spryker/industry_partner_integration/payone/integration_payment_payone_paypal_express_checkout.html",a:"The payment using PayPal requires redirect to PayPal website. When the customer is redirected to PayPal’s website, he must authorize himself and he has the option to either cancel or validate the transaction. A concern regarding payment flows that require redirection on third party website pages is ...",t:"PayPal Express Checkout Payment - Payone"},"283":{i:0.000892014237949864,u:"../developing_with_spryker/industry_partner_integration/payone/integration_payment_payone_invoice.html",a:"Front-end Integration\n To adjust the frontend appearance, provide the following templates in your theme directory:\n\nsrc/\u003cproject_name\u003e/Yves/Payone/Theme/\u003ccustom_theme_name\u003e/invoice.twig State Machine Integration\n Payone module provides a demo state machine for the Invoice payment method which ...",t:"Invoice Payment - Payone"},"284":{i:0.000892014237949864,u:"../developing_with_spryker/industry_partner_integration/payone/integration_payment_payone_state_machine_cmd_cond_evnt.html",a:"State Machine Commands, Conditions and Events - Payone",t:"State Machine Commands, Conditions and Events - Payone"},"285":{i:0.000892014237949864,u:"../developing_with_spryker/industry_partner_integration/payone/integration_payment_payone_facade.html",a:"Payone Facade  ",t:"Payone Facade"},"286":{i:0.00555580397018141,u:"../developing_with_spryker/industry_partner_integration/amazonpay/integration_payment_amazon_pay.html",a:"  Partner Information Amazon pay consists of client side tools (widget, javascripts etc) and Amazon API with SDKs written for different\n            programming languages (PHP, Python, Ruby, Java, C#). Client side tools are used for displaying GUI elements on some common pages of an internet shop and ...",t:"Payment Integration - Amazon Pay"},"287":{i:0.00549425676004751,u:"../developing_with_spryker/industry_partner_integration/amazonpay/integration_payment_amazon_pay_configuration.html",a:"\n            Please refer to config/Shared/config.dist.php for example of module configuration.\n         To setup the Amazon Pay initial configuration, use the credentials you received after registering as an Amazon seller: \n$config[AmazonpayConstants::CLIENT_ID] = ...",t:"Amazon Pay - Configuration"},"288":{i:0.00549425676004751,u:"../developing_with_spryker/industry_partner_integration/amazonpay/integration_payment_amazon_pay_rendering_pay.html",a:"Usually the checkout page includes information for the buyer to review, items in the cart, prices, total price information and some other order related details. From this page, the buyer can proceed to checkout by clicking a related GUI element (for example hyperlink or button). Amazon Pay provides ...",t:"Rendering a \"Pay with Amazon\" Button on the Cart Page"},"289":{i:0.00549425676004751,u:"../developing_with_spryker/industry_partner_integration/amazonpay/integration_payment_amazon_pay_order_ref_info.html",a:"After successful authorization, a buyer will be redirected to an order details page to enter all the information necessary for placing an order: address of shipment, payment method, delivery method and some calculations about taxes, possible discounts, delivery cost, etc. Amazon Pay provides ...",t:"Obtaining an Amazon Order Reference and Information about Shipping Addresses"},"290":{i:0.00549425676004751,u:"../developing_with_spryker/industry_partner_integration/amazonpay/integration_payment_amazon_pay_api.html",a:"So far we discussed the client side implementation provided by Amazon Pay. On the Spryker OS side, the module provides tools for rendering Amazon Pay widgets. Another part of the implementation is the Amazon Pay API function wrapper, implemented as a Facade. Each API call involves similar classes ...",t:"Amazon Pay API"},"291":{i:0.00549425676004751,u:"../developing_with_spryker/industry_partner_integration/amazonpay/integration_payment_amazon_pay_refund.html",a:"After successful authorization and capture processes order should be closed. This blocks any modifications to\n            an order. From this state only Refund operation is possible. Refund can be partial if more than one item is\n            set to refund or full. Amazon only requires the amount of ...",t:"Amazon Pay - Refund"},"292":{i:0.00549425676004751,u:"../developing_with_spryker/industry_partner_integration/amazonpay/integration_payment_amazon_pay_state_machine.html",a:"The state machine is different for synchronous and asynchronous flow. Although from status \"capture\n            completed\" it is the same and in the state machine, it\u0027s presented as a sub-process. State machine for the synchronous flow: State machine for the asynchronous flow:   See also: Payment ...",t:"Amazon Pay - State Machine"},"293":{i:0.00549425676004751,u:"../developing_with_spryker/industry_partner_integration/amazonpay/integration_payment_amazon_pay_simulations.html",a:"In order to reproduce some edge cases like declined payment or pending capture, Amazon provides two solutions. The first is special methods marked with red star on payment widget. It allows to reproduce different cases of \"decline\" payment workflow. But there are more edge cases like expired ...",t:"Amazon Pay Sandbox Simulations"},"294":{i:0.00100899213355879,u:"../developing_with_spryker/industry_partner_integration/billpay/integration_payment_billpay.html",a:"Payment Integration - Billpay (BETA) BETA version\n This module is still in development. For questions and inquiries please contact  academy@spryker.com Partner Information Copyright and Disclaimer See  Disclaimer .",t:"Payment Integration - Billpay (BETA)"},"295":{i:0.000861807692924438,u:"../developing_with_spryker/industry_partner_integration/integration_payment_braintree.html",a:"BETA version\n This module is still in development. For questions and inquiries please contact  academy@spryker.com Braintree provides two methods of payment:\n\n PayPal Credit Card To integrate Braintree payments, you need to create and configure a Braintree merchant account.\n\n There are two types of ...",t:"Payment Integration - Braintree (BETA)"},"296":{i:0.000861807692924438,u:"../developing_with_spryker/industry_partner_integration/integration_payment_afterpay.html",a:"Payment Integration - After Pay Partner Information Copyright and Disclaimer See  Disclaimer .",t:"Payment Integration - After Pay"},"297":{i:0.000861807692924438,u:"../developing_with_spryker/industry_partner_integration/klarna/integration_payment_klarna.html",a:"Payment Integration  - Klarna BETA version\n This module is still in development. For questions and inquiries please contact  academy@spryker.com Partner Information",t:"Payment Integration  - Klarna"},"298":{i:0.000885746303609852,u:"../developing_with_spryker/industry_partner_integration/payolution/integration_payment_payolution.html",a:"BETA version\n This module is still in development. For questions and inquiries please contact  academy@spryker.com Partner Information Payolution provides two methods of payment: Invoice Installment In order to integrate Payolution payments, a Payolution merchant account should be created and ...",t:"Payment Integration — Payolution"},"299":{i:0.000967303015734808,u:"../developing_with_spryker/industry_partner_integration/payolution/integration_payment_payolution_configuration.html",a:"\n            Add spryker-eco/payolution to your project by running composer require spryker-eco/payolution \n            Please refer to config/config.dist.php for example of module configuration.\n         To setup the initial Payolution configuration, use the credentials you received after ...",t:"Payolution — Configuration"},"300":{i:0.000967303015734808,u:"../developing_with_spryker/industry_partner_integration/payolution/integration_payment_payolution_invoice.html",a:"Workflow Scenarios Payments from Payolution to Merchant are not included in the sequence diagrams since they occur on a regular basis (e.g. every week). Standard Case Full Refund Before Payment Partial Refund Before Payment Full Refund After Payment Partial Refund After Payment Integrating ...",t:"Payolution — Invoice Payment"},"301":{i:0.000967303015734808,u:"../developing_with_spryker/industry_partner_integration/payolution/integration_payment_payolution_installment.html",a:"Installment Scenarios Standard Case Full Refund Partial Refund Integrating Payolution Installment Payment The In order to integrate installment payment, two simple steps are needed: setting Payolution installment payment configuration and calling the facade functions. Setting Payolution Installment ...",t:"Payolution — Installment Payment"},"302":{i:0.00178951437797361,u:"../developing_with_spryker/industry_partner_integration/payolution/integration_payment_payolution_requests.html",a:"In order to perform the needed requests, you can easily use the implemented state machine commands and conditions. The next section gives a summary of them. You can also use the facade methods directly which, however, are invoked by the state machine. Payolution State Machine Commands and Conditions ...",t:"Payolution — Performing Requests"},"303":{i:0.000967303015734808,u:"../developing_with_spryker/industry_partner_integration/payolution/integration_payment_payolution_workflow.html",a:"Both invoice and installment utilize the same request flow. It basically consists of the following requests: Calculation (for installment only): to calculate the installment amounts, dues, and durations. Pre-check (optional): to check the user information in order to make sure that all the needed ...",t:"Payolution — Workflow"},"304":{i:0.000861807692924438,u:"../developing_with_spryker/industry_partner_integration/integration_payment_computop.html",a:"Payment Integration - Computop Partner Information Copyright and Disclaimer See  Disclaimer .",t:"Payment Integration - Computop"},"305":{i:0.000861807692924438,u:"../developing_with_spryker/industry_partner_integration/integration_payment_heidelpay.html",a:"Payment Integration - Heidelpay Partner Information Copyright and Disclaimer See  Disclaimer .",t:"Payment Integration - Heidelpay"},"306":{i:0.000885746303609852,u:"../developing_with_spryker/industry_partner_integration/hosting_continum.html",a:"Hosting Provider - Continum Partner Information Copyright and Disclaimer See  Disclaimer .",t:"Hosting Provider - Continum"},"307":{i:0.000861807692924438,u:"../developing_with_spryker/industry_partner_integration/hosting_claranet.html",a:"Hosting Provider - Claranet Partner Information Copyright and Disclaimer See  Disclaimer .",t:"Hosting Provider - Claranet"},"308":{i:0.000861807692924438,u:"../developing_with_spryker/industry_partner_integration/hosting_root360.html",a:"Hosting Provider - Root 360 Partner Information Copyright and Disclaimer See  Disclaimer .",t:"Hosting Provider - Root 360"},"309":{i:0.001388260361186,u:"../developing_with_spryker/industry_partner_integration/integration_loggly_queue.html",a:"The Loggly module provides a plugin to read log messages from a queue and send the messages via https to  Loggly . To integrate this plugin you need to have the QueueHandler enabled in your Logger configuration as described  here . In addition you need to properly configure the queue setup for ...",t:"Queue Integration - Loggly"},"310":{i:0.00081672546016492,u:"../developing_with_spryker/development_concepts/development_concepts.html",a:"Spryker is a complex application. We have established certain concepts and implementation abstractions that help us to structure and optimise our application. Before getting your hands dirty and starting to work with Spryker, you should understand our concepts behind certain topics. For example you ...",t:"Development Concepts"},"311":{i:0.00081672546016492,u:"../developing_with_spryker/development_concepts/search_design/search_design_paterns.html",a:" Search Design Patterns for E-Commerce: Schema Structure, Data Driven Ranking \u0026 More Source:  http://project-a.github.io/on-site-search-design-patterns-for-e-commerce/ By  Dr. Martin Loetzsch  ( Project A ) and Krešimir Slugan ( Contorion ) Providing users with a proper on-site search user ...",t:"On-Site Search "},"312":{i:0.00081672546016492,u:"../developing_with_spryker/development_concepts/search_design/data_driven_ranking.html",a:"When a query returns hundreds or thousands of results, it is absolutely crucial that the products at the top of the search result page are the ones that are most relevant to the user. Getting this right will lead to a higher conversion probability and increase customer happiness. Implementing proper ...",t:"Data-Driven Ranking"},"313":{i:0.00081672546016492,u:"../developing_with_spryker/development_concepts/search_design/full_text_search.html",a:"Full-text search is a feature where a user enters arbitrary text into a search field and then gets documents that are relevant for that query. It is normally combined with faceted navigation. In the example below, a user searched for “hammer” and then further filtered for hammer weights of 2000 gram ...",t:"Full-Text Search"},"314":{i:0.00081672546016492,u:"../developing_with_spryker/development_concepts/search_design/generic_faceted_search.html",a:"Faceted search (sometimes also called faceted navigation) allows users to navigate through a web site by applying filters for categories, attributes, price ranges and so on. It’s probably the most basic feature of a search and users expect this to work. Unfortunately, we observed that this is also ...",t:"Generic Faceted Search"},"315":{i:0.00081672546016492,u:"../developing_with_spryker/development_concepts/search_design/multi_term_auto_completion.html",a:"Term completion is a feature where a user gets suggestions for search terms and matching search results as he types the query. We call a completion multi-term when it is able to combine terms from different attributes in an open-ended fashion. In the below example, a user entered “fortis” (a brand) ...",t:"Multi-Term Auto Completion"},"316":{i:0.00081672546016492,u:"../developing_with_spryker/development_concepts/search_design/naive_product_centric_approach.html",a:"A Naive Product Centric Approach Finding products on e-commerce website can be tricky, even when you know exactly what you are looking for. Throughout this document, we will assume a customer wants to buy a hammer that weighs 2kg. A product that would meet his needs might be this “Fäustel” by ...",t:"A Naive Product-Centric Approach"},"317":{i:0.00081672546016492,u:"../developing_with_spryker/development_concepts/search_design/other_best_practices.html",a:"Finally, we want to provide you with a list of some additional and potentially useful principles regarding the setup of an on-site search experience.\n \nIndex Pages, Not Products\n\n Each document we put in Elasticsearch corresponds to an URL  The mapping type in our schema is called page, not product ...",t:"Other Best Practices"},"318":{i:0.00081672546016492,u:"../developing_with_spryker/development_concepts/search_design/personalization_dymanic_pricing.html",a:"Especially in businesses with a B2B focus, customers expect to get discounts after they have been using the service/website for a longer period of time. The search infrastructure should be able to handle such use cases and customers should be able to see their own discounted prices while browsing ...",t:"Personalization: Dynamic Pricing"},"319":{i:0.00081672546016492,u:"../developing_with_spryker/development_concepts/search_design/simple_spelling_suggestions.html",a:"Spelling suggestions provide the users with alternative search terms when the search query does not return any results:\n Translation: Unfortunately there were 0 results for your exact search term “hammer holk”. Did you possibly mean hammer holz? This is one of the simplest features you can build ...",t:"Simple Spelling Suggestions"},"320":{i:0.00081672546016492,u:"../developing_with_spryker/development_concepts/search_design/usage_driven_schema_structure.html",a:"Both the schema and the query generator should not need to know that there is such a thing as as the weight of a hammer. We will argue for a document structure and schema design that is not built around the original data but around the usage of attributes in search operations.\n\n At Contorion, this ...",t:"Usage-Driven Schema \u0026 Document Structure"},"321":{i:0.00135269999763452,u:"../developing_with_spryker/development_concepts/state_machine_cookbook/state_machine_cookbook.html",a:"State machines are a model of computation used to automate processes. In Spryker you can use the OMS module to automate the management of orders or the StateMachine module to automate other processes you define in your shop. Both behave similar, but the OMS one is a customized solution to manage the ...",t:"State Machine Cookbook - Part I - State Machine Fundamentals"},"322":{i:0.00301919479403219,u:"../developing_with_spryker/development_concepts/state_machine_cookbook/state_machine_cookbook_2.html",a:"\nThis chapter will help you model a state machine using Spryker to manage your sale orders.\n First of all, it’s important to know which tasks must be executed after an order is submitted and in which order. Keep in mind that you can define more than one state machine in your system to cover the use ...",t:"State Machine Cookbook - Part 2 -Building a State Machine"},"323":{i:0.000840664070850333,u:"../developing_with_spryker/guidelines/developer_guidelines.html",a:"The developer Guidelines section is a collection of best practices and guidelines for developers.    Academy Navigation To navigate through content, click on an option from the right-hand table of contents or use the search (above).  You can also use navigation buttons on the top right corner of ...",t:"Developer Guidelines"},"324":{i:0.00081672546016492,u:"../developing_with_spryker/guidelines/code_architecture_guide.html",a:"We use our  Architecture Sniffer Tool  to assert a certain quality of Spryker architecture for both core and project.\n Running the Tool The sniffer can find a lot of violations and will report them: $ vendor/bin/console code:sniff:architecture\n\n// Sniff a specific subfolder of your project - with ...",t:"Code Architecture Guide"},"325":{i:0.00081672546016492,u:"../developing_with_spryker/guidelines/code_style_guide.html",a:"We follow the  PSR-2 standards . To achieve a styled codebase, we integrated the well known  PHP-CS Fixer  and  PHPCodeSniffer .\n Code Sniffer and Fixer \nWe use a very powerful tool to help keeping the code clean and preventing simple mistakes. Automate Code Style Correction The sniffer can find all ...",t:"Code Style Guide"},"326":{i:0.00151094517004191,u:"../developing_with_spryker/guidelines/secure_coding_practices.html",a:"Unsafe coding practices can make the software application vulnerable to theft of sensitive data.\n\nIn this article, we’ll present a series of coding practices that we recommend using when developing an e-commerce application using Spryker Commerce OS, that will keep your software solution secured.\n\n ...",t:"Secure Coding Practices"},"327":{i:0.000840664070850333,u:"../developing_with_spryker/resources_and_developer_tools/about_resources.html",a:"This section contains general information and resources for developers. The topics covered in resources are general topics that do not pertain to a specific component or capability.   Academy Navigation To navigate through content, click on an option from the right-hand table of contents or use the ...",t:"About Resources"},"328":{i:0.00081672546016492,u:"../developing_with_spryker/resources_and_developer_tools/code_generator.html",a:"The CodeGenerator module can generate your project code.  Out of the box it provides generators for Yves, Zed, Client, Service and Shared application layers.\n\n This is a pre-release.\n Installation\n Install it as\n\n composer require --dev spryker/code-generator You need to run vendor/bin/console ...",t:"Code Generator"},"329":{i:0.00157176338023293,u:"../developing_with_spryker/resources_and_developer_tools/configuration_management.html",a:"Default and local configuration files\n Under config/Shared you’ll find several files that are used for the system’s configuration, that can be used by both Yves and Zed.\n The files are merged in a fixed order if they exist. So the entries of config_default.php are overwritten by the entries in ...",t:"Configuration Management"},"330":{i:0.00611946705839723,u:"../developing_with_spryker/resources_and_developer_tools/console_commands.html",a:"We provide an integrated mechanism to add command line calls. Technically this is based on Symfony’s Console Component.\n\t\t \n\t\t\tGet a list of all available commands\n\t\t You can see the list of all of the commands by running: vendor/bin/console. vagrant@spryker-vagrant ➜  current git:(develop) ✗ ...",t:"Console Commands"},"331":{i:0.00081672546016492,u:"../developing_with_spryker/resources_and_developer_tools/container_globals.html",a:"The ContainerGlobals is a way to inject dependencies which are available inside your  Factories . Every dependency added to the ContainerGlobals is available by using getProvidedDependency() in your factory.\n \nTo add something globally you need to create a service provider and add it to the ...",t:"Container Globals"},"332":{i:0.00081672546016492,u:"../developing_with_spryker/resources_and_developer_tools/core_extension.html",a:"We offer several ways like plugins to hook into the core’s behavior and extend this without modifications. But sometimes this is not enough, so you need to replace a method which is deep in the core.\n\n Before your proceed, double check if there is no other way to solve your requirement, maybe there ...",t:"Core Extension"},"333":{i:0.00256032625774886,u:"../developing_with_spryker/resources_and_developer_tools/cronjob_scheduling.html",a:"We use  Jenkins  for cronjob scheduling. Compared to Crontab, there are several benefits: Jobs are queued and can be manually executed Job definitions are under version control and can be changed by any developer Console output available for debugging Add a new job and run it Jobs are defined in ...",t:"Cronjob Scheduling"},"334":{i:0.00081672546016492,u:"../developing_with_spryker/resources_and_developer_tools/dependency_injector.html",a:"The  Dependency Provider  defines which “external dependencies” you need to retrieve(e.g. a facade of another module).\n \nThe DependencyInjector is the opposite of it. This class will push dependencies into another module without the need to touch the module where it injects to ( OCP ).\n\n For ...",t:"Dependency Injector"},"335":{i:0.00182403872767976,u:"../developing_with_spryker/resources_and_developer_tools/dependency_provider.html",a:"Each modules ships with a DependencyProvider class which explicitly defines services and external dependencies to other modules. For instance when the Cms module requires the Glossary module this needs to be configured here. The DependencyProvider defines dependencies for each layer. Usually you ...",t:"Dependency Provider"},"336":{i:0.00528905240236432,u:"../developing_with_spryker/resources_and_developer_tools/factory.html",a:"All modules are shipped with a dedicated factory for each layer. The responsibility of the factory is to create new instances of the classes from the same layer and module.\n\n The following example shows a typical method from a factory. The method createKeyBuilder() creates an instance which is then ...",t:"Factory"},"337":{i:0.00081672546016492,u:"../developing_with_spryker/resources_and_developer_tools/flash_messenger.html",a:"This tutorial describes how to show a message in the Zed GUI.\n In the controller you can use these shortcut methods to show a user message in the GUI. The messages will be translated later when they are rendered.\n\n \u003c?php\nclass IndexController extends AbstractController\n{\n    public function ...",t:"Flash Messenger"},"338":{i:0.00081672546016492,u:"../developing_with_spryker/resources_and_developer_tools/internal_server_error_handling.html",a:"This document describes how to configure the behavior when an internal server error occurs. Whether you need to show the details of the error or render a static page for any internal error, this is done through configuration.\n\n Configure Internal Server Error  Page\nDepending on the environment on ...",t:"Internal Server Error Handling"},"339":{i:0.00155399119580603,u:"../developing_with_spryker/resources_and_developer_tools/performance_scalability.html",a:"Spryker OS was built to enable the development of high performance e-commerce applications that are able to support an extremely high number of unique visitors. However, no application can be both, light and heavy, at the same time.\n\n Therefore, we have two applications: Yves and Zed. Both ...",t:"Performance and Scalability"},"340":{i:0.00081672546016492,u:"../developing_with_spryker/resources_and_developer_tools/plugin.html",a:"Plugins are small classes that are used to connect bundles in a flexible and configurable way. In contrast to a direct call to a facade of another module, there can be an array of provided modules.\n\n According to our conventions, plugins are the only classes that can be directly instantiated in ...",t:"Plugin"},"341":{i:0.00100022847921186,u:"../developing_with_spryker/resources_and_developer_tools/service.html",a:"Service is a Spryker application layer shared by the Client application layer and the Zed application layer. This service layer provides the ability to register a service once and have it applied to both layers. Usage is focused on level details (infrastructure layer). For example: encoding, text ...",t:"Service"},"342":{i:0.00081672546016492,u:"../developing_with_spryker/resources_and_developer_tools/session_handlers.html",a:"We provide a number of session handlers to work with different storages. By default, the demo-shop uses a locking Redis session handler for Yves and a non-locking Redis session handler for Zed in the development environment.\n\n The following session handlers are currently available:\n\n File\n ...",t:"Session Handlers"},"343":{i:0.00196879564935763,u:"../developing_with_spryker/resources_and_developer_tools/transfer_objects.html",a:"Transfer objects are simple data containers. Their purpose is to retrieve a standardized way to access data and to get more expressive method signatures. They are available everywhere in the system. How to use transfer objects Simple usage The example shows a typical use case for a transfer object. ...",t:"Transfer Objects"},});