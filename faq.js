function faqComponent() {
    return {
        activeTab: 'capitalGains',
        topics: {
            capitalGains: 'Capital Gains',
            itr: 'Income Tax Return ( ITR )',
            form16: 'Form 16',
            tds: 'TDS',
            salaryincome: 'Salary Income',
            ifhp: 'Income From House Property',
            scuita: 'Senior Citizens Under Income Tax Act',
            taxaudit: 'Tax Audit',
            tan: 'TAN',
            pufnr: 'Provisions Useful for Non-residents'
        },
        faqs: {
            capitalGains: [
                {
                    question: 1, answer:'hii' , open:0
                },
            ]
        }
    }
}
