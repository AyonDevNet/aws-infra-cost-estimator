// Counter for EC2 instances
let ec2InstanceCount = 1;

// Function to add new EC2 instance
function addEC2Instance() {
    ec2InstanceCount++;
    const container = document.getElementById('ec2-instances-container');
    
    if (!container) {
        alert('Error: Container not found. Check browser console for details.');
        console.error('ec2-instances-container element not found in HTML!');
        return;
    }
    
    const instanceHTML = `
        <div class="instance-group" data-instance="${ec2InstanceCount}">
            <div class="instance-header">
                <h4>Instance #${ec2InstanceCount}</h4>
                <button type="button" class="btn-remove-instance" onclick="removeEC2Instance(${ec2InstanceCount})">Remove</button>
            </div>
            <div class="input-group">
                <label for="ec2-name-${ec2InstanceCount}">Instance Name</label>
                <input type="text" id="ec2-name-${ec2InstanceCount}" name="ec2-name-${ec2InstanceCount}" placeholder="e.g., Web Server, App Server">
                <small>Give a name to identify this instance</small>
            </div>
            <div class="input-group">
                <label for="ec2-instance-type-${ec2InstanceCount}">Instance Type</label>
                <input type="text" id="ec2-instance-type-${ec2InstanceCount}" name="ec2-instance-type-${ec2InstanceCount}" placeholder="e.g., t3.medium, m5.large">
            </div>
            <div class="input-group">
                <label for="ec2-quantity-${ec2InstanceCount}">Quantity</label>
                <input type="number" id="ec2-quantity-${ec2InstanceCount}" name="ec2-quantity-${ec2InstanceCount}" placeholder="e.g., 2" min="1" value="1">
            </div>
            <div class="input-group">
                <label for="ec2-notes-${ec2InstanceCount}">Configuration Notes</label>
                <textarea id="ec2-notes-${ec2InstanceCount}" name="ec2-notes-${ec2InstanceCount}" placeholder="e.g., Running 24/7, Linux OS, us-east-1..."></textarea>
            </div>
            <div class="input-row">
                <div class="input-group">
                    <label for="ec2-hourly-${ec2InstanceCount}">Hourly Cost (USD)</label>
                    <input type="number" class="hourly-input" id="ec2-hourly-${ec2InstanceCount}" name="ec2-hourly-${ec2InstanceCount}" placeholder="Per hour" step="0.001" min="0">
                </div>
                <div class="input-group">
                    <label for="ec2-monthly-${ec2InstanceCount}">Monthly Cost (USD)</label>
                    <input type="number" class="price-input" id="ec2-monthly-${ec2InstanceCount}" name="ec2-monthly-${ec2InstanceCount}" placeholder="Per month" step="0.01" min="0">
                </div>
            </div>
        </div>
    `;
    
    container.insertAdjacentHTML('beforeend', instanceHTML);
}

// Function to remove EC2 instance
function removeEC2Instance(instanceNumber) {
    const instanceGroup = document.querySelector(`[data-instance="${instanceNumber}"]`);
    if (instanceGroup) {
        instanceGroup.remove();
    }
}

console.log('AWS Cost Input Tool loaded successfully!');
