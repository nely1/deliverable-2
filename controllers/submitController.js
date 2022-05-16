const dataInfo = require('../models/submissionModel')

const display = (req, res) => {
    const data = dataInfo.find(data => data.path_from == req.params.data_type)
    res.render('submission', {templateInfo: data, record: "active", dataType: data.data_type} )
}

module.exports = {
    display,
}