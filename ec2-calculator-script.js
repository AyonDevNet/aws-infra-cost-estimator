// Dropdown toggle functionality
        const dropdownBtns = document.querySelectorAll('.dropdown-btn');
        
        dropdownBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const dropdownContent = this.nextElementSibling;
                const arrow = this.querySelector('.dropdown-arrow');
                
                // Toggle the dropdown
                dropdownContent.classList.toggle('show');
                
                // Rotate arrow
                if (dropdownContent.classList.contains('show')) {
                    arrow.style.transform = 'rotate(180deg)';
                } else {
                    arrow.style.transform = 'rotate(0deg)';
                }
            });
        });




         // Add New Instance functionality
        let instanceCounter = 1;
        const addInstanceBtn = document.querySelector('.add-instance-btn');
        const instancesContainer = document.querySelector('.instances-container');

        addInstanceBtn.addEventListener('click', function() {
            instanceCounter++;
            
            // Create new instance wrapper
            const newInstance = document.createElement('div');
            newInstance.className = 'instance-wrapper';
            newInstance.innerHTML = `
                <div class="instance-header">
                    <div class="instance-title">Instance #${instanceCounter}</div>
                    <button type="button" class="remove-btn" onclick="removeInstance(this)">Remove</button>
                </div>
                
                <div class="form-row">
                    <div class="form-group full-width">
                        <label>Instance Name</label>
                        <input type="text" placeholder="e.g., Production Web Server" required>
                    </div>
                </div>

                <div class="form-row">
                    <div class="form-group">
                        <label>Region</label>
                        <select required>
                            <option value="">Select Region</option>
                            <option value="us-east-1">US East (N. Virginia)</option>
                            <option value="us-east-2">US East (Ohio)</option>
                            <option value="us-west-1">US West (N. California)</option>
                            <option value="us-west-2">US West (Oregon)</option>
                            <option value="eu-west-1">EU (Ireland)</option>
                            <option value="eu-central-1">EU (Frankfurt)</option>
                            <option value="ap-south-1">Asia Pacific (Mumbai)</option>
                            <option value="ap-southeast-1">Asia Pacific (Singapore)</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label>Operating System</label>
                        <select required>
                            <option value="">Select OS</option>
                            <optgroup label="Red Hat Enterprise Linux">
                                <option value="rhel8">Red Hat Enterprise Linux 8</option>
                                <option value="rhel9">Red Hat Enterprise Linux 9</option>
                                <option value="rhel10">Red Hat Enterprise Linux 10</option>
                            </optgroup>
                            <optgroup label="Ubuntu">
                                <option value="ubuntu18">Ubuntu 18.04 LTS</option>
                                <option value="ubuntu20">Ubuntu 20.04 LTS</option>
                                <option value="ubuntu22">Ubuntu 22.04 LTS</option>
                                <option value="ubuntu24">Ubuntu 24.04 LTS</option>
                                <option value="ubuntu25">Ubuntu 25.04</option>
                            </optgroup>
                            <optgroup label="Other">
                                <option value="windows">Windows Server</option>
                                <option value="suse">SUSE Linux</option>
                                <option value="amazonlinux">Amazon Linux 2023</option>
                            </optgroup>
                        </select>
                    </div>
                </div>

                <div class="form-row">
                    <div class="form-group">
                        <label>Instance Type</label>
                        <select required>
                            <option value="">Select Instance Type</option>
                            <optgroup label="General Purpose">
                                <option value="t3.micro">t3.micro (1 vCPU, 1 GB RAM)</option>
                                <option value="t3.small">t3.small (2 vCPU, 2 GB RAM)</option>
                                <option value="t3.medium">t3.medium (2 vCPU, 4 GB RAM)</option>
                                <option value="t3.large">t3.large (2 vCPU, 8 GB RAM)</option>
                            </optgroup>
                            <optgroup label="Compute Optimized">
                                <option value="c5.large">c5.large (2 vCPU, 4 GB RAM)</option>
                                <option value="c5.xlarge">c5.xlarge (4 vCPU, 8 GB RAM)</option>
                            </optgroup>
                            <optgroup label="Memory Optimized">
                                <option value="r5.large">r5.large (2 vCPU, 16 GB RAM)</option>
                                <option value="r5.xlarge">r5.xlarge (4 vCPU, 32 GB RAM)</option>
                            </optgroup>
                        </select>
                    </div>

                    <div class="form-group">
                        <label>Number of Cores</label>
                        <select required>
                            <option value="">Select Cores</option>
                            <option value="1">1 Core</option>
                            <option value="2">2 Cores</option>
                            <option value="4">4 Cores</option>
                            <option value="8">8 Cores</option>
                            <option value="16">16 Cores</option>
                            <option value="32">32 Cores</option>
                            <option value="64">64 Cores</option>
                        </select>
                    </div>
                </div>

                <div class="form-row">
                    <div class="form-group">
                        <label>EBS Storage (GB)</label>
                        <input type="number" value="30" min="8" max="16384" required>
                    </div>
                </div>
            `;
            
            instancesContainer.appendChild(newInstance);
        });

        // Remove instance function
        function removeInstance(btn) {
            const instance = btn.closest('.instance-wrapper');
            instance.remove();
        }