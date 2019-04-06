import Blockly from 'node-blockly/browser'


Blockly.defineBlocksWithJsonArray([
    {
        "type": "flow_object",
        "message0": "There is a %1 as %2",
        "args0": [
            {
                "type": "field_input",
                "name": "OBJECT",
                "text": "object type"
            },
            {
                "type": "field_input",
                "name": "VAR_NAME",
                "text": "variable name"
            }
        ],
        "message1": "with %1",
        "args1": [
            {
                "type": "input_statement",
                "name": "CONSTRAINT",
            }
        ],
        "colour": 220,
        "previousStatement": null,
        "nextStatement": null,
        "tooltip": "Drools expression definition",
        "helpUrl": "http://www.drools.org/learn/documentation.html"
    }

    ]);