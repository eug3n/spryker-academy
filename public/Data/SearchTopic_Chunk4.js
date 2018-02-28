define({"273":{i:0.00108599875520738,u:"../developing_with_spryker/migration_guides/mg_product_relation_collector.html",a:"Upgrading From Version 1.* To Version 2.* \n            From version 2 we added support for multicurrency. \n          First of all make sure you  migrated the Price module . We have changed collector dependency to use PriceProduct module instead of price, please update your code accordingly if you ...",t:"Migration Guide - Product Relation Collector"},"274":{i:0.000605203624469663,u:"../developing_with_spryker/migration_guides/mg_product_search.html",a:"Upgrading from version 3.* to version 4.* Requires version ^4.0.0 of Product and ^5.0.0 of Search bundles. ProductSearchFacade::activateProductSearch() and ProductSearchFacade::deactivateProductSearch() are not connected to searchableProduct anymore. ...",t:"Migration Guide - ProductSearch"},"275":{i:0.00108599875520738,u:"../developing_with_spryker/migration_guides/mg_product_set_gui.html",a:"Upgrading from version 1.* to version 2.* \n            From version 2 we have added support for multi-currency. First of all make sure you  migrated the Price module . We have changed collector dependency to use PriceProduct module instead of price, please update your code accordingly if you ...",t:"Migration Guide - Product Set Gui"},"276":{i:0.00403431347101371,u:"../developing_with_spryker/migration_guides/mg_product_validity.html",a:"Installing Version 1.* The Product Validity module is responsible for (de)activation of products for (or starting from) a certain period of time. Follow the instructions below to have the module up and running in your shop. Database Changes \n            We have added a new  spy_product_validity ...",t:"Migration Guide - Product Validity"},"277":{i:0.00167183346989076,u:"../developing_with_spryker/migration_guides/mg_rabbitmq.html",a:"Upgrading from Version 0.* to Version 1.* Version 1 of the RabbitMq module Configuration \n            The configuration codes have moved from RabbitMqDependencyProvider to RabbitMqConfiguration.\n         RabbitMqOption TransferObject \n            RabbitMqOption transfer has changed: `bindingQueue` ...",t:"Migration Guide - RabbitMQ"},"278":{i:0.000605203624469663,u:"../developing_with_spryker/migration_guides/mg_refund.html",a:"Upgrading from version 4.* to version 5.* Version 4 of the Refund module no longer uses SalesAggregatorFacade , it was replaced with SalesFacade. The RefundCalculator business class must now replace RefundToSalesAggregatorInterface with the RefundToSalesInterface bridge. To learn more see,  ...",t:"Migration Guide - Refund"},"279":{i:0.00303997044490639,u:"../developing_with_spryker/migration_guides/mg_sales.html",a:"Upgrading from Version 7.* to Version 8.* \n            In Sales module version 8 we have added multicurrency support, this release added two new fields to spy_sales table to persist \"currency\" and \"store\". Also Order saver now stores currency and store where order is placed.\n\n            Run the ...",t:"Migration Guide - Sales"},"280":{i:0.00175829842470867,u:"../developing_with_spryker/migration_guides/mg_sales_aggregator.html",a:"Upgrading from version 4.* to version 5.* SalesAggregator version 4 is last version to be released for this module. Apart from future bug fixes, it will no longer be developed and Core will no longer use it to get order totals anymore. There are two steps to the two migration process. The first is ...",t:"Migration Guide - SalesAggregator"},"281":{i:0.000605203624469663,u:"../developing_with_spryker/migration_guides/mg_sales_aggregator_migration_console.html",a:"\u003c?php\n/**\n * Copyright © 2017-present Spryker Systems GmbH. All rights reserved.\n * Use of this software requires acceptance of the Evaluation License Agreement. See LICENSE file.\n */\n\nnamespace Pyz\\Zed\\SalesAggregator\\Communication\\Console;\n\nuse Exception;\nuse ...",t:"Migration Guide - SalesAggregator Migration Console Command"},"282":{i:0.00222794032437477,u:"../developing_with_spryker/migration_guides/mg_shipment_and_customer_migration_console.html",a:"\u003c?php\n/**\n * Copyright © 2017-present Spryker Systems GmbH. All rights reserved.\n * Use of this software requires acceptance of the Evaluation License Agreement. See LICENSE file.\n */\n\nnamespace Pyz\\Zed\\Sales\\Communication\\Console;\n\nuse Exception;\nuse ...",t:"Migration Guide - Sales Migration Console Command"},"283":{i:0.00105621400522232,u:"../developing_with_spryker/migration_guides/mg_search.html",a:"Upgrading From Version 6.* To Version 7.* Zed changes:\n\n           With version 7 we have fixed a bug with incorrect mapping of a filter name with request parameters.\n           If you have modified/extended\n           ...",t:"Migration Guide - Search"},"284":{i:0.000605203624469663,u:"../developing_with_spryker/migration_guides/mg_setup.html",a:"Upgrading from version 3.* to version 4.*\n\n With this update the behavior of the setup:install command slightly changes. Instead of removing directories where generated files are stored, these directories will be kept and emptied.\n   \nThe setup:install command utilizes two new commands for cleaning ...",t:"Migration Guide - Setup"},"285":{i:0.00488610556367808,u:"../developing_with_spryker/migration_guides/mg_shipment.html",a:"Upgrading from Version 5.* to Version 6.* In version 6, multi-currency prices are introduced for shipment methods, allowing to set up different net and gross price per shipment method for each preconfigured currency. The spy_shipment_method.default_price database column becomes deprecated. Shipment ...",t:"Migration Guide - Shipment"},"286":{i:0.000605203624469663,u:"../developing_with_spryker/migration_guides/mg_stepengine.html",a:"Upgrading from version 2.* to version 3.*\n \nIf you\u0027re migrating the StepEngine bundle from version 2 to version 3, you need to follow the steps described below.\n\n In Version 3 the StepCollectionInterface::getPreviousStep() has a new second optional argument (AbstractTransfer $dataTransfer). If you ...",t:"Migration Guide - Step Engine"},"287":{i:0.00558324679262565,u:"../developing_with_spryker/migration_guides/mg_tax.html",a:"Upgrading from version 4.* to version 5.* In version 5, tax calculation logic changed, tax amount for options, expenses and items are now calculated in the Tax module.  The plugins: ExpenseTaxCalculatorPlugin, ItemTaxCalculatorPlugin and TaxTotalsCalculatorPlugin were removed, and replaced with: ...",t:"Migration Guide - Tax"},"288":{i:0.00342821349574544,u:"../developing_with_spryker/migration_guides/mg_touch.html",a:"Upgrading From Version 3.* To Version 4.* Update/install spryker/touch to at least 4.0.0 version. Install the new database columns by running vendor/bin/console propel:diff. Propel should generate a migration file with the changes. Run vendor/bin/console propel:migrate to apply the database changes. ...",t:"Migration Guide - Touch"},"289":{i:0.000605203624469663,u:"../developing_with_spryker/migration_guides/mg_transfer.html",a:"Upgrading from version 2.* to version 3.* When upgrading to the new major version of the Transfer module, it is necessary to make sure that everywhere a $foo-\u003efromArray($bar-\u003etoArray()) statement is used the types are matching. From now on we are no longer silently ignoring when you try to set a ...",t:"Migration Guide - Transfer"},"290":{i:0.00105621400522232,u:"../developing_with_spryker/migration_guides/mg_wishlist.html",a:"Upgrading From Version 4.* To Version 5.* \n    From version 2 have we added support for multicurrency. First of all, make sure you  migrated the Price module . We have changed ProductStoreClient to resolve product prices based on the currently selected price mode/currency.\n    We have added a new ...",t:"Migration Guide - Wishlist"},"291":{i:0.00086911495410243,u:"../developing_with_spryker/industry_partner_integration/partner_integration.html",a:"In this section you will find information about our Industry Partner Integration solutions. Please visit our Partners Registry for a complete list of our partners  https://spryker.com/find-a-partner/ Academy Navigation To navigate through content, click on an option from the right-hand table of ...",t:"Industry Partner Integration"},"292":{i:0.000638783210817819,u:"../developing_with_spryker/industry_partner_integration/factfinder/integration_search_factfinder.html",a:"Search Integration - Fact Finder (BETA) BETA version\n This module is still in development. For questions and inquiries please contact  academy@spryker.com Partner Information",t:"Search Integration - Fact Finder (BETA)"},"293":{i:0.000660217588997646,u:"../developing_with_spryker/industry_partner_integration/partner_analytics_netmind.html",a:"This integration is built and supported by our industry partner Mindlab Solutions. Partner Information Netmind Documentation Spryker customers can easily connect to Netmind and access comprehensive Netmind e-commerce reporting. On request, this can be individually adapted to customer-specific ...",t:"Netmind-Spryker Module"},"294":{i:0.00489458052205648,u:"../developing_with_spryker/industry_partner_integration/arvatorss/integration_arvato_rss.html",a:"Risk Solution Services Integration - Arvato Partner Information   See also: Risk Solution Services Integration - Arvato 2.0 Risk Check - Arvato Risk Solution Services 2.0 Store Order - Arvato Risk Solution Services 2.0   Last review date: Nov. 13th, 2017   ",t:"Risk Solution Services Integration - Arvato"},"295":{i:0.00536869268740862,u:"../developing_with_spryker/industry_partner_integration/arvatorss/v2_0/integration_arvato_rss_2.0.html",a:"The purpose of developing the risk solution services is to provide a complete and comprehensive risk management\n    for the eCommerce/mail-order industry, contributing to a high level of modularization and automation. Besides the use\n    of pre-configured service modules for risk management, risk ...",t:"Risk Solution Services Integration - Arvato 2.0"},"296":{i:0.00515450460900411,u:"../developing_with_spryker/industry_partner_integration/arvatorss/v2_0/integration_arvato_rss_risk_check_2.0.html",a:"\n    Accounted for by external credit agency data and internal existing customer- and order-details\n    the RiskCheck evaluates the probability of payment default for the customer orders.\n \n    The returned decision codes (Result – ActionCode – ResultCode) manage the definition of the eShop’s ...",t:"Risk Check - Arvato Risk Solution Services 2.0"},"297":{i:0.00487000642183633,u:"../developing_with_spryker/industry_partner_integration/arvatorss/v2_0/integration_arvato_rss_store_order_2.0.html",a:"\n    As soon as the order is activated in the eShop it has to be directly delivered by the service call StoreOrder in risk solution services.\n    Based on the transmitted data a limit check is processed again. The result and action codes returned by StoreOrder\n    should be analyzed and the order ...",t:"Store Order - Arvato Risk Solution Services 2.0"},"298":{i:0.000746008310764024,u:"../developing_with_spryker/industry_partner_integration/econda/integration_monitoring_econda.html",a:"Performance Monitoring - Econda (BETA) BETA version\n This module is still in development. For questions and inquiries please contact  academy@spryker.com Partner Information",t:"Performance Monitoring - Econda (BETA)"},"299":{i:0.000638783210817819,u:"../developing_with_spryker/industry_partner_integration/performance_monitoring_minubo.html",a:"Performance Monitoring - Minubo Partner Information Copyright and Disclaimer See  Disclaimer .",t:"Performance Monitoring - Minubo"},"300":{i:0.000638783210817819,u:"../developing_with_spryker/industry_partner_integration/preformance_monitoring_styla.html",a:"Performance Monitoring - Styla Partner Information STYLA Documentation https://www.styla.com/de/ressourcen/?iso=de\n Copyright and Disclaimer See  Disclaimer .",t:"Performance Monitoring - Styla"},"301":{i:0.000638783210817819,u:"../developing_with_spryker/industry_partner_integration/performance_monitoring_channelpilot.html",a:"Performance Monitoring - Channel Pilot Partner Information Copyright and Disclaimer See  Disclaimer .",t:"Performance Monitoring - Channel Pilot"},"302":{i:0.000638783210817819,u:"../developing_with_spryker/industry_partner_integration/performance_monitoring_datavirtuality.html",a:"Performance Monitoring - Data Virtuality Partner Information Copyright and Disclaimer See  Disclaimer .",t:"Performance Monitoring - Data Virtuality"},"303":{i:0.000638783210817819,u:"../developing_with_spryker/industry_partner_integration/performance_monitoring_nitrobox.html",a:"Performance Monitoring - Nitrobox Partner Information Copyright and Disclaimer See  Disclaimer .",t:"Performance Monitoring - Nitrobox"},"304":{i:0.000638783210817819,u:"../developing_with_spryker/industry_partner_integration/ratepay/integration_payment_ratepay.html",a:"BETA version\n This module is still in development. For questions and inquiries please contact  academy@spryker.com Partner Information RatePAY is an online service provider that allows merchants to provide their customers secure, customized payment methods.  RatePAY bears the full risk and takes ...",t:"Payment Integration - RatePAY"},"305":{i:0.000605203624469663,u:"../developing_with_spryker/industry_partner_integration/ratepay/integration_payment_ratepay_payment_workflow.html",a:"Invoice, Prepayment and Direct Debit methods have the same request flow.  The payment workflow consists of the following requests:\n PAYMENT INIT - Initialize the transaction and get a valid transaction-id.\n PAYMENT QUERY - Check the customer and order details, perform a configurable risk scoring, ...",t:"Payment Workflow - RatePAY"},"306":{i:0.000740945593899386,u:"../developing_with_spryker/industry_partner_integration/ratepay/integration_payment_ratepay_invoice.html",a:"Workflow Scenarios\n Integrating RatePAY Invoice Payment\n To integrate invoice payment, you need to: RatePAY invoice payment configuration and call the facade functions.\n Setting RatePAY Invoice Configuration\n The configuration to integrate invoice payments using RatePAY is:\n\n PROFILE_ID: merchant’s ...",t:"Invoice - RatePAY"},"307":{i:0.000740945593899386,u:"../developing_with_spryker/industry_partner_integration/ratepay/integration_payment_ratepay_prepayment.html",a:"Workflow Scenarios\n Integrating RatePAY Prepayment Payment\n To integrate prepayment payment: set RatePAY prepayment payment configuration and call the facade functions.\n\n Set RatePAY Prepayment Configuration\n The configuration to integrate prepayment payments using RatePAY is:\n\n PROFILE_ID: ...",t:"Prepayment - RatePAY"},"308":{i:0.000740945593899386,u:"../developing_with_spryker/industry_partner_integration/ratepay/integration_payment_ratepay_dir_deb.html",a:"Workflow Scenarios\n Integrating RatePAY  Direct Debit Payment\nIn order to integrate direct debit payment, two simple steps are needed: set RatePAY Direct Debit payment configuration and call the facade functions.\n \nSet RatePAY Direct Debit Configuration\n The configuration to integrate Direct Debit ...",t:"Direct Debit (ELV) - RatePAY"},"309":{i:0.000740945593899386,u:"../developing_with_spryker/industry_partner_integration/ratepay/integration_payment_ratepay_installment.html",a:"The shop must implement the Calculation Request operation to calculate an example installment plan and show it to the customer. Some input parameters for the calculation are passed from the shop (e.g. the shopping basket total), others are stored in the merchant’s RatePAY profile held by the Gateway ...",t:"Installment - RatePAY"},"310":{i:0.00249462257581234,u:"../developing_with_spryker/industry_partner_integration/ratepay/integration_payment_ratepay_state_machine.html",a:"Commands\n ConfirmDelivery\n \nSend delivery confirmation data to RatePAY\n Response:\n Success: Delivery confirmed\n Declined: Request format error or delivery confirmation error\n Plugin: ConfirmDeliveryPlugin\n ConfirmPayment \n\nSend payment confirmation data to RatePAY\n Response:\n Success: Payment ...",t:"RatePAY State Machine Commands and Conditions"},"311":{i:0.000605203624469663,u:"../developing_with_spryker/industry_partner_integration/ratepay/integration_payment_ratepay_structure_diag.html",a:"RatePAY Core Module Structure Diagram The RatePAY core module uses the following class structure and flow.\n",t:"RatePAY Core Module Structure Diagram"},"312":{i:0.000605203624469663,u:"../developing_with_spryker/industry_partner_integration/ratepay/integration_payment_ratepay_facade.html",a:"RatePAY Facade\n",t:"RatePAY Facade\n"},"313":{i:0.000605203624469663,u:"../developing_with_spryker/industry_partner_integration/ratepay/integration_payment_ratepay_disable_addr_updates.html",a:"To disable updates on addresses from the backend application, follow the steps described below:\n\n Step 1:\n\n Overwrite on project side  ‘/vendor/spryker/spryker/Bundles/Sales/src/Spryker/ Zed/Sales/Presentation/Detail/boxes/addresses.twig’\n Remove ‘Edit’ button\n Step 2:\n\n Overwrite on project side  ...",t:"How to disable address updates from the backend application - RatePAY"},"314":{i:0.00155944308707887,u:"../developing_with_spryker/industry_partner_integration/payone/v1_1/integration_payment_payone_v1_1.html",a:"Partner Information We integrate with a wide range of payment methods that can be configured according to your needs and convenience. Payment method flows are configured using state machines.\n\n Payone provides seven main methods of payment:\n\n Credit Card Direct Debit\n     Online Transfer Paypal ...",t:"Payment Integration - BS Payone - 1.1"},"315":{i:0.00130698555542877,u:"../developing_with_spryker/industry_partner_integration/payone/v1_1/integration_payment_payone_paypal_express_checkout.html",a:"The payment using PayPal requires redirect to PayPal website. When the customer is redirected to PayPal’s website, he must authorize himself and he has the option to either cancel or validate the transaction. A concern regarding payment flows that require redirection on third party website pages is ...",t:"PayPal Express Checkout Payment - Payone - 1.1"},"316":{i:0.00174195448440834,u:"../developing_with_spryker/industry_partner_integration/payone/v1_1/integration_with_project_example.html",a:"Objectives: Place order with PayPal express checkout. Be redirected to summary page of standard checkout. Have shipping a method selector on summary page.   First of all we need to provide a URL to Payone module, which will be used to redirect user when the quote is filled with data obtained from ...",t:"Integration With Project - Payone"},"317":{i:0.000841587311689457,u:"../developing_with_spryker/industry_partner_integration/payone/v1_0/integration_payment_payone_state_machine_cmd_cond_evnt.html",a:"State Machine Commands, Conditions and Events - Payone",t:"State Machine Commands, Conditions and Events - Payone"},"318":{i:0.000841587311689457,u:"../developing_with_spryker/industry_partner_integration/payone/v1_0/authorization_and_preauthorization_capture_flows.html",a:"Payone module makes it possible for a project to choose which Payone flow it wants to implement: authorize or preauthorize + capture. Authorization Example State Machine: Authorization state machine example xml can be found in vendor/\u003cpayone_module_folder\u003e/src/config/Zed/Oms/PayoneInvoice.xml ...",t:"Authorization and Preauthorization-Capture Flows"},"319":{i:0.000841587311689457,u:"../developing_with_spryker/industry_partner_integration/payone/v1_0/integration_payment_payone_facade.html",a:"Payone Facade  ",t:"Payone Facade"},"320":{i:0.000841587311689457,u:"../developing_with_spryker/industry_partner_integration/payone/v1_0/integration_payment_payone_dir_deb.html",a:"Front-end integration\n Run the antelope build yves after you include the javascript file for credit card check inside the payment step template (e.g. src/\u003cproject_name\u003e/Yves/Checkout/Theme/\u003ccustom_theme_name\u003e/checkout/payment.twig)\n\n {% block content %}\n\u003cscript ...",t:"Direct Debit Payment- Payone"},"321":{i:0.000841587311689457,u:"../developing_with_spryker/industry_partner_integration/payone/v1_0/integration_payment_payone_invoice.html",a:"Front-end Integration\n To adjust the frontend appearance, provide the following templates in your theme directory:\n\nsrc/\u003cproject_name\u003e/Yves/Payone/Theme/\u003ccustom_theme_name\u003e/invoice.twig State Machine Integration\n Payone module provides a demo state machine for the Invoice payment method which ...",t:"Invoice Payment - Payone"},"322":{i:0.000841587311689457,u:"../developing_with_spryker/industry_partner_integration/payone/v1_0/integration_payment_payone_paypal.html",a:"The payment using PayPal requires a redirect to PayPal website. When the customer is redirected to PayPal’s website, he must authorize himself and he has the option to either cancel or validate the transaction.\n \nA concern regarding payment flows that require redirection on third party website pages ...",t:"Paypal Payment - Payone"},"323":{i:0.000841587311689457,u:"../developing_with_spryker/industry_partner_integration/payone/v1_0/integration_payment_payone_credit_card.html",a:"PCI Compliance Because of PCI compliance reasons, credit card data is communicated to the third party through AJAX calls (sensitive information stays browser side).\n PCI Compliance\n The Payment Card Industry Data Security Standard ( PCI DSS ) is a set of rules with the intention to ensure that ...",t:"Credit Card Payment - Payone"},"324":{i:0.000841587311689457,u:"../developing_with_spryker/industry_partner_integration/payone/v1_0/integration_payment_payone_prepayment.html",a:"Prepayment method is a safe alternative to payments involving credit cards or debit cards (such as online banking transfer). Usually bank transfer would require manual processing to mark transaction as cancelled or completed, but the process is fully automated through the integration with the Payone ...",t:"Pre-payment - Payone"},"325":{i:0.000841587311689457,u:"../developing_with_spryker/industry_partner_integration/payone/v1_0/integration_payment_payone_online_trans.html",a:"Supported online banking service providers are SofortBanking, Giropay, Electronic Payment Standard (Eps), PostFinance Card, PostFinance E-Finance, iDEAL and Przelewy24. They are enabled  through the integration with Payone, using the online transfer payment type.\n\n Each payment method is limited to ...",t:"Online Transfer Payment- Payone"},"326":{i:0.00412307778098862,u:"../developing_with_spryker/industry_partner_integration/amazonpay/integration_payment_amazon_pay.html",a:"  Partner Information Amazon pay consists of client side tools (widget, javascripts etc) and Amazon API with SDKs written for different\n            programming languages (PHP, Python, Ruby, Java, C#). Client side tools are used for displaying GUI elements on some common pages of an internet shop and ...",t:"Payment Integration - Amazon Pay"},"327":{i:0.0040740207692017,u:"../developing_with_spryker/industry_partner_integration/amazonpay/integration_payment_amazon_pay_configuration.html",a:"\n            Please refer to config/Shared/config.dist.php for example of module configuration.\n         To setup the Amazon Pay initial configuration, use the credentials you received after registering as an Amazon seller: \n$config[AmazonPayConstants::CLIENT_ID] = ...",t:"Amazon Pay - Configuration"},"328":{i:0.0040740207692017,u:"../developing_with_spryker/industry_partner_integration/amazonpay/integration_payment_amazon_pay_rendering_pay.html",a:"Usually the checkout page includes information for the buyer to review, items in the cart, prices, total price information and some other order related details. From this page, the buyer can proceed to checkout by clicking a related GUI element (for example hyperlink or button). Amazon Pay provides ...",t:"Rendering a \"Pay with Amazon\" Button on the Cart Page"},"329":{i:0.0040740207692017,u:"../developing_with_spryker/industry_partner_integration/amazonpay/integration_payment_amazon_pay_order_ref_info.html",a:"After successful authorization, a buyer will be redirected to an order details page to enter all the information necessary for placing an order: address of shipment, payment method, delivery method and some calculations about taxes, possible discounts, delivery cost, etc. Amazon Pay provides ...",t:"Obtaining an Amazon Order Reference and Information about Shipping Addresses"},"330":{i:0.0040740207692017,u:"../developing_with_spryker/industry_partner_integration/amazonpay/integration_payment_amazon_pay_api.html",a:"So far we discussed the client side implementation provided by Amazon Pay. On the Spryker OS side, the module provides tools for rendering Amazon Pay widgets. Another part of the implementation is the Amazon Pay API function wrapper, implemented as a Facade. Each API call involves similar classes ...",t:"Amazon Pay API"},"331":{i:0.0040740207692017,u:"../developing_with_spryker/industry_partner_integration/amazonpay/integration_payment_amazon_pay_refund.html",a:"After successful authorization and capture processes order should be closed. This blocks any modifications to\n            an order. From this state only Refund operation is possible. Refund can be partial if more than one item is\n            set to refund or full. Amazon only requires the amount of ...",t:"Amazon Pay - Refund"},"332":{i:0.0040740207692017,u:"../developing_with_spryker/industry_partner_integration/amazonpay/integration_payment_amazon_pay_state_machine.html",a:"The state machine is different for synchronous and asynchronous flow. Although from status \"capture\n            completed\" it is the same and in the state machine, it\u0027s presented as a sub-process. State machine for the synchronous flow: State machine for the asynchronous flow: OMS Commands In order ...",t:"Amazon Pay - State Machine"},"333":{i:0.0040740207692017,u:"../developing_with_spryker/industry_partner_integration/amazonpay/integration_payment_amazon_pay_simulations.html",a:"In order to reproduce some edge cases like declined payment or pending capture, Amazon provides two solutions. The first is special methods marked with red star on payment widget. It allows to reproduce different cases of \"decline\" payment workflow. But there are more edge cases like expired ...",t:"Amazon Pay Sandbox Simulations"},"334":{i:0.00139909368671668,u:"../developing_with_spryker/industry_partner_integration/billpay/integration_payment_billpay.html",a:"Payment Integration - Billpay (BETA) BETA version\n This module is still in development. For questions and inquiries please contact  academy@spryker.com Partner Information Copyright and Disclaimer See  Disclaimer .",t:"Payment Integration - Billpay (BETA)"},"335":{i:0.000980483962706965,u:"../developing_with_spryker/industry_partner_integration/billpay/integration_payment_billpay_integration.html",a:"Billpay offers multiple payment methods (Invoice, Direct Debit, PayLater, Instalment). Availability of payment methods differs from country to country. Please contact Billpay directly or visit the Billpay website ( https://www.billpay.de/en/business-clients/merchant-request/ ) for details. The ...",t:"Billpay Integration"},"336":{i:0.000883008662185015,u:"../developing_with_spryker/industry_partner_integration/billpay/integration_payment_billpay_payment_methods.html",a:"Refer to Billpay payment information ( https://www.billpay.de/en/business-clients/payment-information/ ) for information about payment methods. The identity and credit check are checked within a single \"pre-authorize\" call after summary page was submitted.\n           This may lead to the “rejection” ...",t:"Billpay Invoice Payment in Preauthorize Mode"},"337":{i:0.000638783210817819,u:"../developing_with_spryker/industry_partner_integration/integration_payment_braintree.html",a:"BETA version\n This module is still in development. For questions and inquiries please contact  academy@spryker.com Braintree provides two methods of payment:\n\n PayPal Credit Card To integrate Braintree payments, you need to create and configure a Braintree merchant account.\n\n There are two types of ...",t:"Payment Integration - Braintree (BETA)"},"338":{i:0.000638783210817819,u:"../developing_with_spryker/industry_partner_integration/integration_payment_afterpay.html",a:"Payment Integration - After Pay Partner Information Copyright and Disclaimer See  Disclaimer .",t:"Payment Integration - After Pay"},"339":{i:0.000638783210817819,u:"../developing_with_spryker/industry_partner_integration/klarna/integration_payment_klarna.html",a:"Payment Integration  - Klarna BETA version\n This module is still in development. For questions and inquiries please contact  academy@spryker.com Partner Information",t:"Payment Integration  - Klarna"},"340":{i:0.000660217588997646,u:"../developing_with_spryker/industry_partner_integration/payolution/integration_payment_payolution.html",a:"BETA version\n This module is still in development. For questions and inquiries please contact  academy@spryker.com Partner Information Payolution provides two methods of payment: Invoice Installment In order to integrate Payolution payments, a Payolution merchant account should be created and ...",t:"Payment Integration — Payolution"},"341":{i:0.00080679531180458,u:"../developing_with_spryker/industry_partner_integration/payolution/integration_payment_payolution_configuration.html",a:"\n            Add spryker-eco/payolution to your project by running composer require spryker-eco/payolution \n            Please refer to config/config.dist.php for example of module configuration.\n         To setup the initial Payolution configuration, use the credentials you received after ...",t:"Payolution — Configuration"},});