module.exports = {
  Guides: [
    "guides/introcution-to-camunda-cloud",
    {
      "Getting started with Camunda Cloud": [
        "guides/getting-started/create-camunda-cloud-account",
        "guides/getting-started/create-cluster",
        "guides/getting-started/setup-client-connection-credentials",
        "guides/getting-started/connect-to-your-cluster",
        "guides/getting-started/model-your-first-process",
        "guides/getting-started/deploy-your-process-and-start-process-instance",
        "guides/getting-started/implement-service-task",
        "guides/getting-started/implement-decision-gateway",
        // "guides/getting-started/involve-humans",
        "guides/getting-started/monitor-your-process-in-operate",
      ],
    },
    "guides/setting-up-development-project",
  ],
  "Product Manuals": [
    "product-manuals/overview",
    {
      Concepts: [
        "product-manuals/concepts/what-is-camunda-cloud",
        "product-manuals/concepts/workflows",              
        "product-manuals/concepts/job-workers",        
        "product-manuals/concepts/workflow-instance-creation",
        "product-manuals/concepts/messages",
        "product-manuals/concepts/incidents",   
        "product-manuals/concepts/variables",
        "product-manuals/concepts/expressions",         
      ],
      Clients: [
        "product-manuals/clients/overview",
        {
          "Java": [
            "product-manuals/clients/java-client/index",
            "product-manuals/clients/java-client/setup",
            "product-manuals/clients/java-client/get-started",
            "product-manuals/clients/java-client/logging",
            "product-manuals/clients/java-client/testing",
            {
              "Examples": [
                "product-manuals/clients/java-client-examples/index",
                "product-manuals/clients/java-client-examples/workflow-deploy",
                "product-manuals/clients/java-client-examples/workflow-instance-create",
                "product-manuals/clients/java-client-examples/workflow-instance-create-nonblocking",
                "product-manuals/clients/java-client-examples/workflow-instance-create-with-result",
                "product-manuals/clients/java-client-examples/job-worker-open",
                "product-manuals/clients/java-client-examples/data-pojo",
                "product-manuals/clients/java-client-examples/cluster-topology-request",
              ],
            },
          ],
        },          
        "product-manuals/clients/go-client/get-started",        
        "product-manuals/clients/cli-client",
        {
          "Community Clients": [
            "product-manuals/clients/other-clients/index",
            "product-manuals/clients/other-clients/c-sharp",
            "product-manuals/clients/other-clients/javascript",
            "product-manuals/clients/other-clients/python",
            "product-manuals/clients/other-clients/ruby",
            "product-manuals/clients/other-clients/rust",
          ],
        },
        "product-manuals/clients/build-your-own-client",
      ],
      "Cloud Console": [
        "product-manuals/cloud-console/introduction",
        {
          "Manage your Organization": [
            "product-manuals/cloud-console/manage-organization/organization-settings",
            "product-manuals/cloud-console/manage-organization/manage-users",
            "product-manuals/cloud-console/manage-organization/view-organization-activity",
            "product-manuals/cloud-console/manage-organization/manage-cloud-management-api-clients",
            "product-manuals/cloud-console/manage-organization/update-billing-reservations",
            "product-manuals/cloud-console/manage-organization/switch-organization",
          ],
        },
        {
          "Manage Clusters": [
            "product-manuals/cloud-console/manage-clusters/create-cluster",
            "product-manuals/cloud-console/manage-clusters/rename-cluster",
            "product-manuals/cloud-console/manage-clusters/delete-cluster",
            "product-manuals/cloud-console/manage-clusters/manage-api-clients",
          ],
        },
        {
          "Manage your Plan": [
            "product-manuals/cloud-console/manage-plan/available-plans",
            "product-manuals/cloud-console/manage-plan/trial-plan",
            {
              "Professional Plan": [
                "product-manuals/cloud-console/manage-plan/professional-plan/overview",
                "product-manuals/cloud-console/manage-plan/professional-plan/upgrade-to-professional-plan",
                "product-manuals/cloud-console/manage-plan/professional-plan/billing-parameters",
              ],
            },
          ],
        },
        {
          Troubleshooting: [
            "product-manuals/cloud-console/troubleshooting/common-pitfalls",
            "product-manuals/cloud-console/troubleshooting/feedback-and-support",
          ],
        },
      ],
      Modeler: [
        "product-manuals/modeler/overview",
        {
          "Cloud Modeler": [
            "product-manuals/modeler/cloud-modeler/launch-cloud-modeler",
            "product-manuals/modeler/cloud-modeler/model-your-first-diagram",
            "product-manuals/modeler/cloud-modeler/import-diagram",
            "product-manuals/modeler/cloud-modeler/save-and-deploy",
            "product-manuals/modeler/cloud-modeler/start-instance",
          ],
          "Zeebe Modeler": [
            "product-manuals/modeler/zeebe-modeler/install-the-zeebe-modeler",
            "product-manuals/modeler/zeebe-modeler/model-your-first-diagram",
            "product-manuals/modeler/zeebe-modeler/connect-to-camunda-cloud",
            "product-manuals/modeler/zeebe-modeler/deploy-to-cloud",
            "product-manuals/modeler/zeebe-modeler/start-instance",
          ],
        },
      ],
      Zeebe: [
        "product-manuals/zeebe/zeebe-overview",
        {
          "Technical Concepts": [
            "product-manuals/zeebe/technical-concepts/index",
            "product-manuals/zeebe/technical-concepts/architecture",
            "product-manuals/zeebe/technical-concepts/clustering",
            "product-manuals/zeebe/technical-concepts/partitions",            
            "product-manuals/zeebe/technical-concepts/internal-processing",            
            "product-manuals/zeebe/technical-concepts/workflow-lifecycles",            
            "product-manuals/zeebe/technical-concepts/protocols",
            "product-manuals/zeebe/technical-concepts/exporters",        
          ],
        },
        {
          "Deployment Guide": [
            "product-manuals/zeebe/deployment-guide/index",  
            {              
              "Local Deployment": [
                "product-manuals/zeebe/deployment-guide/local/install",
                "product-manuals/zeebe/deployment-guide/local/quickstart",  
                {
                  "Getting Started Tutorial": [
                    "product-manuals/zeebe/deployment-guide/local/getting-started/index",
                    "product-manuals/zeebe/deployment-guide/local/getting-started/tutorial-setup",
                    "product-manuals/zeebe/deployment-guide/local/getting-started/create-a-workflow",
                    "product-manuals/zeebe/deployment-guide/local/getting-started/deploy-a-workflow",
                    "product-manuals/zeebe/deployment-guide/local/getting-started/create-workflow-instance",
                    "product-manuals/zeebe/deployment-guide/local/getting-started/next-steps-resources",
                  ],
                },   
              ]
            },            
            {
              "Kubernetes Deployment": [
                "product-manuals/zeebe/deployment-guide/kubernetes/index",
                "product-manuals/zeebe/deployment-guide/kubernetes/prerequisites",
                "product-manuals/zeebe/deployment-guide/kubernetes/installing-helm",
                "product-manuals/zeebe/deployment-guide/kubernetes/accessing-operate",
                "product-manuals/zeebe/deployment-guide/kubernetes/zeebe-operator",
              ],
            },
            {
              Configuration: [
                "product-manuals/zeebe/deployment-guide/configuration/configuration",  
                "product-manuals/zeebe/deployment-guide/configuration/broker-config-template",
                "product-manuals/zeebe/deployment-guide/configuration/gateway-config-template",
                "product-manuals/zeebe/deployment-guide/configuration/gateway-health-probes",
                "product-manuals/zeebe/deployment-guide/configuration/environment-variables",                                                
              ]
            },
            {
              "Zeebe Operations": [
                "product-manuals/zeebe/deployment-guide/operations/index",
                "product-manuals/zeebe/deployment-guide/operations/resource-planning",
                "product-manuals/zeebe/deployment-guide/operations/network-ports",
                "product-manuals/zeebe/deployment-guide/operations/setting-up-a-cluster",
                "product-manuals/zeebe/deployment-guide/operations/metrics",                             
                "product-manuals/zeebe/deployment-guide/operations/health",
                "product-manuals/zeebe/deployment-guide/operations/backpressure",
                "product-manuals/zeebe/deployment-guide/operations/disk-space",
                "product-manuals/zeebe/deployment-guide/operations/upgrade-zeebe",
              ],
            },
            {
              Security: [
                "product-manuals/zeebe/deployment-guide/security/security",
                "product-manuals/zeebe/deployment-guide/security/authentication",
                "product-manuals/zeebe/deployment-guide/security/authorization",
              ],
            },
          ]
        },
        {
          "Open Source Community": [
            "product-manuals/zeebe/open-source/community-contributions",
            "product-manuals/zeebe/open-source/get-help-get-involved",
            "product-manuals/zeebe/open-source/release-cycle",
            "product-manuals/zeebe/open-source/deprecated-features", 
          ]
        },              
        {
          Appendix: [

          ],
        },
      ],
      Operate: [
         "product-manuals/operate/index",{
            "User Guide":[
              "product-manuals/operate/userguide/basic-operate-navigation",
              "product-manuals/operate/userguide/resolve-incidents-update-variables",
              "product-manuals/operate/userguide/selections-operations",
              "product-manuals/operate/userguide/operate-feedback-and-questions"
            ],
            "Deployment Guide": [
               "product-manuals/operate/deployment/install-and-start",
               "product-manuals/operate/deployment/configuration",
               "product-manuals/operate/deployment/data-retention",
               "product-manuals/operate/deployment/schema-and-migration",
               "product-manuals/operate/deployment/importer-and-archiver",
               "product-manuals/operate/deployment/authentication"
            ],
         }
      ],
      Tasklist: [
      "product-manuals/tasklist/introduction",{
          "User Guide": [
            "product-manuals/tasklist/userguide/overview",
          ],
          "Deployment Guide": [
            "product-manuals/tasklist/deployment/install-and-start",
            "product-manuals/tasklist/deployment/configuration",
            "product-manuals/tasklist/deployment/authentication",
            "product-manuals/tasklist/deployment/api-client",
          ],
        },
      ],
    },
  ],
  Reference: [
    "reference/overview",  
    "reference/cloud-console-api-clients",
    "reference/cloud-console-api-reference",
    "reference/grpc",
    require("./docs/reference/tasklist-api/sidebar-schema"),
    {
      "BPMN Workflow": [
        "reference/bpmn-workflows/bpmn-primer",
        "reference/bpmn-workflows/bpmn-coverage",
        "reference/bpmn-workflows/data-flow",
        {
          Tasks: [
            "reference/bpmn-workflows/tasks",
            "reference/bpmn-workflows/service-tasks/service-tasks",
            "reference/bpmn-workflows/receive-tasks/receive-tasks",
          ],
        },
        {
          Gateways: [
            "reference/bpmn-workflows/gateways",
            "reference/bpmn-workflows/exclusive-gateways/exclusive-gateways",
            "reference/bpmn-workflows/parallel-gateways/parallel-gateways",
            "reference/bpmn-workflows/event-based-gateways/event-based-gateways",
          ],
        },
        {
          Events: [
            "reference/bpmn-workflows/events",
            "reference/bpmn-workflows/none-events/none-events",
            "reference/bpmn-workflows/message-events/message-events",
            "reference/bpmn-workflows/timer-events/timer-events",
            "reference/bpmn-workflows/error-events/error-events",
          ],
        },
        {
          Subprocesses: [
            "reference/bpmn-workflows/subprocesses",
            "reference/bpmn-workflows/embedded-subprocesses/embedded-subprocesses",
            "reference/bpmn-workflows/call-activities/call-activities",
            "reference/bpmn-workflows/event-subprocesses/event-subprocesses",
          ],
        },
        {
          Markers: [
            "reference/bpmn-workflows/markers",
            "reference/bpmn-workflows/multi-instance/multi-instance",
          ],
        },
      ],
    },
    require("./docs/reference/feel/sidebar-schema"),    
    "reference/glossary",
  ],
  Samples: ["samples/overview"],
};
