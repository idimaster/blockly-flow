import React, { Component } from 'react'
import Blockly from 'node-blockly/browser'

class FlowWorkspace extends Component {
    constructor(props) {
        super(props);

        this.state = {
            workspace: null,
            xml: this.props.initialXml,
        }
    }

    componentDidMount() {
        this.state.workspace = Blockly.inject(
            this.editorDiv, {toolbox: document.getElementById('toolbox')}
        )
    }

    componentWillUnmount() {
        if (this.state.workspace) {
            this.state.workspace.dispose();
        }
    }

    render() {
        return <div>
            <xml id="toolbox" style={{display: 'none'}}>
                <category name="Core" colout='100'>
                    <block type="controls_if"></block>
                    <block type="controls_repeat_ext"></block>
                    <block type="logic_compare"></block>
                    <block type="math_number"></block>
                    <block type="math_arithmetic"></block>
                    <block type="text"></block>
                    <block type="text_print"></block>
                </category>
                <category name="Drools" colout='100'>
                    <block type="drools_rule"></block>
                    <block type="drools_property"></block>
                    <block type="drools_object"></block>
                    <block type="drools_constraint"></block>
                    <block type="drools_string"></block>
                    <block type="drools_number"></block>
                    <block type="drools_drl"></block>
                </category>
                <category name="Flow" colout='100'>
                    <block type="flow_object"></block>
                </category>
            </xml>
            <div ref={(editorDiv) => { this.editorDiv = editorDiv; }} className='flow-editor'/>
        </div>
    }
}

export default FlowWorkspace