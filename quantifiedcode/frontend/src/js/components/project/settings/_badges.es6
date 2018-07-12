import React from "react"
import Settings from "settings"
import {A} from "routing"
import Utils from "utils"

var Badges = React.createClass({

    displayName: 'Badges',

    componentDidMount : function() {
        Utils.trackEvent("Usage", "PS: Badge settings viewed")
    },

    render: function() {
        var props = this.props,
            projectPath = Settings.url+'/project/'+props.project.pk,
            badgePath = Settings.backend_url+'/v1/project/'+props.project.pk+'/badge.svg',
            htmlBadge = '<A href="'+projectPath+'"><img src="'+badgePath+'" alt="Code issues"/></A>',
            mdBadge = '[![Code Issues]('+badgePath+')]('+projectPath+')',
            rstBadge = '.. image:: '+badgePath+'\n  :target: '+projectPath+'\n  :alt: Code issues',
            ttBadge = '"!'+badgePath+'!":'+projectPath,
            rdocBadge = '{rdoc-image:'+badgePath+'}['+projectPath+']',
            previewBadge = <A href={projectPath}><img src={badgePath} alt="Badge Preview"/></A>,
            inProgress

        if (props.project.analysis_status == 'in_progress') {
            inProgress = <span className="in_progress">Preview: Analysis in progress</span>
        }
        return <div className="content-box badges">
            <div className="head">
                <h3>Badges</h3>
            </div>
            <div className="body">
                <div className="row">
                    <div className="col-xs-6">
                        <h4>Badge preview</h4>
                    </div>
                    <div className="col-xs-6">
                        <span className="pull-right"><A href="http://docs..com/configuration/config_code_quality_badge.html" target="_blank">Branch specific badge?</A></span>
                    </div>
                    <div className="col-xs-12">
                        <div className="preview">
                            {previewBadge}
                            {inProgress}
                        </div>
                        <ul>
                            <li>
                                <h4>HTML</h4>
                                <pre>
                                {htmlBadge}
                                </pre>
                            </li>
                            <li>
                                <h4>MarkDown</h4>
                                <pre>
                                {mdBadge}
                                </pre>
                            </li>
                            <li>
                                <h4>reStructuredText</h4>
                                <pre>{rstBadge}</pre>
                            </li>
                            <li>
                                <h4>Textile</h4>
                                <pre>{ttBadge}</pre>
                            </li>
                            <li>
                                <h4>RDOC</h4>
                                <pre>{rdocBadge}</pre>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    }
})

export default Badges
